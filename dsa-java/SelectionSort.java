//O(^2) T O(1) S - Not Stable
public class SelectionSort {
    public static void main(String[] args){
        int[] arr = {4,-1,0,5,5};

        SelectionSort.selectionSort(arr);
    }

    static void selectionSort(int[] arr){
        int temp;
        int minValue;
        int minIndex;
        for(int i = 0; i < arr.length - 1; i++){
            minValue = arr[i];
            minIndex = i;
            for(int j = i + 1; j < arr.length; j++){
                if(arr[j] < minValue){
                    minValue = arr[j];
                    minIndex = j;  
                }
                temp = arr[i];
                arr[i] = minValue;
                arr[minIndex] = temp;
            }
        }

        for(int i: arr){
            System.out.print(i + " ");
        }
    }
}
