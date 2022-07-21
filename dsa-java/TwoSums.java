//12m 10s to complete - 7/3/22 12:12AM
//O(n^2) T O(1)
public class TwoSums {
  public int[] twoSum(int[] nums, int target) {
    int[] arr = new int[2];  
    int complementValue;
    for(int i = 0; i < nums.length - 1; i++){
      complementValue = target - nums[i];
      for(int j = i + 1; j < nums.length; j++){
        if(nums[j] == complementValue){
          arr[0] = j;
          arr[1] = i;
        }
      }
    }
    return arr;
  }
}
