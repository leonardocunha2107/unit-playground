npm run serve &
python3 -m http.server 8000
# cwd=$(pwd)
# cd $cwd/unit
# rm -rf lib
# npm run dev-serve &
# build_pid=$! # Save the process ID of the ng build command
# ctrl_c_handler() {
#   echo "Ctrl+C detected. Cleaning up..."
#   # Add your cleanup code here
#   # For example, you can kill the ng build process
#   kill $build_pid
#   exit 1
# }
# trap ctrl_c_handler INT

# sleep 5
# until [ -d $cwd/unit/lib ]; do
#   sleep 1
# done

# cd $cwd && npm run start 