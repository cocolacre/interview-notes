import sys

manager = open("file.txt","a+")
enter = type(manager).__enter__
exit  = type(manager).__exit__
value = enter(manager)
print("value: ", value)

hit_except = False
try:
    TARGET = value
    TARGET.write("test")
except:
    hit_except = True
    if not exit(manager,*sys.exc_info()):
        raise "RAISING EXCEPTION"
finally:
    if not hit_except:
        exit(manager, None, None, None)
