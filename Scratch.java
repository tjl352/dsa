import java.util.Deque;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Stack;

class Scratch {   
  public static void main(String[] args){
    LinkedList<String> ll = new LinkedList<>();
    ll.add("added to linkedlist");
    System.out.println(ll);

    Stack<String> st = new Stack<>();
    st.push("added to stack");
    System.out.println(st);

    Queue<String> q = new PriorityQueue<>();
    q.add("added to queue");
    System.out.println(q);
    
  }  
}
