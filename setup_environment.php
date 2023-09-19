#!/usr/bin/php
<?php

## Read-in .env.php
$target_environment = 'dev';
if (!empty($argv[1])) {
	$target_environment = trim($argv[1]);
}
echo '[Info] Loading '.$target_environment.''.PHP_EOL;



$gitBranch = shell_exec('git branch | grep \*');
$branchName = trim(str_replace('*', '', $gitBranch));

## General commands
######################################
switch ($target_environment) {
	case 'production':
		$cmds = [
			## Get latest code
			#'git fetch origin master',
			#'git pull origin master',


			## Tenant specific changes
			#'./pre_build_script.sh',

			## Build frontend
			'npm install',
			'npm run build',

			## Integrate into backend
			#'./integrate_into_backend.sh '.TARGET_PATH
      #'sudo scp -r ./build/* ../../../var/www/therevolutiontoken.com/html/',
		];
		break;

	default:
		die('Unrecognized target environment '. $target_environment.', exiting..'.PHP_EOL);
		break;
}

## Loop and run the commands
foreach ($cmds as $cmd) {
	runcmd($cmd, true);
}
echo PHP_EOL.'[Info] Done'.PHP_EOL;



function runcmd($cmd, $exit_on_fail = true) {
	echo PHP_EOL.'[Info] executing "'.$cmd.'"'.PHP_EOL;

	## Run the command
	passthru($cmd, $return_var);
	if (!empty($exit_on_fail) && !empty($return_var)) {
		echo '[Warning | FAIL] executing "'.$cmd.'"'.PHP_EOL;
		print_r($cmd);
		print_r($return_var);
		die();
	}
	else {
		echo '[Info | OK] executing "'.$cmd.'"'.PHP_EOL;
	}

	return [
		'cmd' => $cmd,
		'return_var' => $return_var
	];
}
