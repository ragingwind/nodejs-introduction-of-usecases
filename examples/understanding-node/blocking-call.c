// run with below command on terminal
// gcc -o call.out blocking-call.c

#include "stdio.h"
#include <unistd.h>

void fp() {
  printf("3\n");
}

void fp_call(void (*fp)(void)) {
  fp();
}

int main() {
  printf("1\n");  
  printf("2\n");
  usleep(1000 * 2000);
  fp_call(&fp);
  return 0;
}