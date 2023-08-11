import java.util.ArrayList;
import java.util.Arrays;



class leetcode{

    public static void main(String[] args) {
    
        System.out.println(countOdds(8, 10));;
   
    }
    
    public static int countOdds(int low, int high){
        
        int counter = 0;
        for(int i = low; i <= high; i++){
            if(i%2 == 1) counter++;
        }
        return counter;
    }

}
