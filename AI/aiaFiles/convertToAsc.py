import sys
import base64
if len(sys.argv) < 2:
   print ('use: convertToAsc.py Alexa_Hello_World')
   sys.exit(2)
s = sys.argv[1]
#s = 'LogoWParamsTemplate'
#file = open(s + ".zip", "rb")  
file = open(s + ".aia", "rb")  
data = file.read()  
file.close()  
byte_arr = base64.b64encode(data)
outfile = open(s + '.asc', 'wb')
outfile.write(byte_arr)
outfile.close()
