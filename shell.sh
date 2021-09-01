echo "in prog"
DAY_OF_MONTH="$(date "+%d")"
NINE="9"
echo "Date success"
echo $DAY_OF_MONTH
if [2 -gt 3]
     then
     echo "2 is greater"
     else
     echo "2 is not greater"
fi
echo "res above"
sleep 5
if [ "$DAY_OF_MONTH" -lt "$NINE" ] then
	echo "Hello World"
fi
echo "baby check"
sleep 10
pause


<<com
in prog
Date success
08
bash: [2: command not found
2 is not greater
res above

com
