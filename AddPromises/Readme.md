***Add Two Promises***
<https://leetcode.com/problems/add-two-promises/description/>
### Test cases used:
<pre>
  <code>
    promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50))
    promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
    
    {Output: -2, Expected: -2}
  </code>
</pre>
  
  <pre>
    <code>
      promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
      promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
      
      {Output:7, Expected:7}

    </code>
  </pre>
