package assign1;

import java.util.Scanner;
public class ArmstrongOrNot {
    static class armstrongCheck {
        public void armstrong(){
       int a=0,b=0,c;
       System.out.println("enter num");
		 Scanner sc = new Scanner (System.in);
		 int num = Integer.parseInt(sc.next());
       c=num;
       while(num!=0){
           a=num%10;
           b=b+a*a*a;
           a=0;
           num=num/10;
       }
       if(c==b)
       System.out.println("yes");
       else
       System.out.println("no");
        }
    }
   public static void main(String[] args) {
       
       ArmstrongOrNot.armstrongCheck a=new ArmstrongOrNot.armstrongCheck();
       a.armstrong();
   }
}
