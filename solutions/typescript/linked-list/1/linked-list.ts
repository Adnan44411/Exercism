export class LinkedList<TElement> {
  data:TElement|null;
  next:LinkedList<TElement>|null;
  prev:LinkedList<TElement>|null ;
  head: LinkedList<TElement> | null = null;    
  tail: LinkedList<TElement> | null = null;

  constructor (data:TElement){
    this.data=data;
    this.next=null;
    this.prev=null;
  }
  public push(element: TElement) {
    const newNode =new LinkedList<TElement>(element);

    if(this.head===null){
      this.head=newNode;
      this.tail=newNode;
      return;
    }
    newNode.prev=this.tail;
    this.tail!.next=newNode;
    this.tail=newNode;
  }
  

  public pop(): TElement |undefined {
   if(this.tail===null){
     return undefined;
   }
    const poppedNode =this.tail;

    if(this.head===this.tail){
      this.head=null;
      this.tail=null;
    }
    else{
      this.tail=poppedNode.prev;
      this.tail!.next=null;
    }
    return poppedNode.data ?? undefined;
  }

  public shift(): TElement | undefined {
    if(this.head===null){
      return undefined;
    }
      const shiftedNode = this.head;
    if(this.head===this.tail){
      this.head=null;
      this.tail=null;
    }
    else{
      this.head=shiftedNode.next;
      this.head!.prev=null;
    }
      return shiftedNode.data ?? undefined;
  }

  public unshift(element: TElement):void{
     const newNode =new LinkedList<TElement>(element);
    if(this.head===null){
      this.head=newNode;
      this.tail=newNode;
    }
    else{
      newNode.next =this.head;
      this.head.prev=newNode;
      this.head=newNode;
    }

  }

 public delete(element: TElement): boolean {
  let current = this.head;

  while (current !== null) {
    if (current.data === element) {
      if (current === this.head) {
        this.head = current.next;
      }

      if (current === this.tail) {
        this.tail = current.prev;
      }

      if (current.prev !== null) {
        current.prev.next = current.next;
      }

      if (current.next !== null) {
        current.next.prev = current.prev;
      }

      current.next = null;
      current.prev = null;

      return true;
    }

    current = current.next;
  }

  return false;
}


  public count(): number {
    let current=this.head;
    let total=0;

    while(current!==null){
      total++;
      current=current.next;
    }
    return total;
  }
}
