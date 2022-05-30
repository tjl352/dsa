#include <iostream>

int main() {
    printf("this line runs in constant time O(1) \n");
    
    for(int i = 0; i < 1; i++){
        printf("this line runs in constant time O(1) \n");
    }
    
    int x = 5;
    while(x == 5){
        printf("this line runs in constant time O(1) \n");
        --x;
    }

    int y = 5;
    do{
        printf("this line runs in constant time O(1) \n");
        --y;
    }
    while(y == 5);
    return 0;
}