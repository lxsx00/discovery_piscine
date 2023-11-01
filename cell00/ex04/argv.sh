 #! /bin/bash
 if [ -z "$1" ]
 then
     echo "No arguments supplied";
 fi
 if [ -n "$1" ]
 then
    echo $1
fi
if [ -n "$2" ]
then
    echo $2
fi
if [ -n "$3" ]
then
 echo $3
fi

# -z Checks if the given string operand size is zero; if it is zero length, then it returns true
# -n Checks if the given string operand size is non-zero; if it is nonzero length, then it returns true

#The if...fi statement is the fundamental control statement that allows Shell to make decisions and execute statements conditionally

