
    export function snippet(){
      return <div dangerouslySetInnerHTML={{ __html: "<pre class=\"shiki laserwave\" style=\"background-color:#27212e;color:#ffffff\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#40B4C4\">import</span><span style=\"color:#7B6995\"> {</span><span style=\"color:#FFF\"> useOpenConnectModal</span><span style=\"color:#7B6995\"> }</span><span style=\"color:#40B4C4\"> from</span><span style=\"color:#7B6995\"> \"</span><span style=\"color:#B4DCE7\">@0xsequence/kit</span><span style=\"color:#7B6995\">\"</span><span style=\"color:#7B6995\">;</span></span>\n<span class=\"line\"><span style=\"color:#40B4C4\">import</span><span style=\"color:#7B6995\"> {</span><span style=\"color:#FFF\"> useAccount</span><span style=\"color:#7B6995\">,</span><span style=\"color:#FFF\"> useDisconnect</span><span style=\"color:#7B6995\"> }</span><span style=\"color:#40B4C4\"> from</span><span style=\"color:#7B6995\"> \"</span><span style=\"color:#B4DCE7\">wagmi</span><span style=\"color:#7B6995\">\"</span><span style=\"color:#7B6995\">;</span></span>\n<span class=\"line\"><span style=\"color:#40B4C4\">export</span><span style=\"color:#A96BC0\"> const</span><span style=\"color:#EB64B9\"> WalletInventoryWidget</span><span style=\"color:#74DFC4\"> =</span><span style=\"color:#7B6995\"> ()</span><span style=\"color:#74DFC4\"> =></span><span style=\"color:#7B6995\"> {</span></span>\n<span class=\"line\"><span style=\"color:#A96BC0\">  const</span><span style=\"color:#7B6995\"> {</span><span style=\"color:#FFE261\"> disconnect</span><span style=\"color:#7B6995\"> }</span><span style=\"color:#74DFC4\"> =</span><span style=\"color:#EB64B9\"> useDisconnect</span><span style=\"color:#7B6995\">();</span></span>\n<span class=\"line\"><span style=\"color:#A96BC0\">  const</span><span style=\"color:#7B6995\"> {</span><span style=\"color:#FFE261\"> address</span><span style=\"color:#7B6995\"> }</span><span style=\"color:#74DFC4\"> =</span><span style=\"color:#EB64B9\"> useAccount</span><span style=\"color:#7B6995\">();</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#A96BC0\">  const</span><span style=\"color:#7B6995\"> {</span><span style=\"color:#FFE261\"> setOpenConnectModal</span><span style=\"color:#7B6995\"> }</span><span style=\"color:#74DFC4\"> =</span><span style=\"color:#EB64B9\"> useOpenConnectModal</span><span style=\"color:#7B6995\">();</span></span>\n<span class=\"line\"><span style=\"color:#40B4C4\">  return</span><span style=\"color:#FFF\"> address</span><span style=\"color:#74DFC4\"> ?</span><span style=\"color:#7B6995\"> (</span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">    &#x3C;></span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">      &#x3C;</span><span style=\"color:#74DFC4\">p</span><span style=\"color:#7B6995\">></span><span style=\"color:#FFFFFF\">Connected as </span><span style=\"color:#7B6995\">{</span><span style=\"color:#FFF\">address</span><span style=\"color:#7B6995\">}&#x3C;/</span><span style=\"color:#74DFC4\">p</span><span style=\"color:#7B6995\">></span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">      &#x3C;</span><span style=\"color:#74DFC4\">button</span><span style=\"color:#EB64B9\"> onClick</span><span style=\"color:#74DFC4\">=</span><span style=\"color:#7B6995\">{()</span><span style=\"color:#74DFC4\"> =></span><span style=\"color:#EB64B9\"> disconnect</span><span style=\"color:#7B6995\">()}></span><span style=\"color:#FFFFFF\">Disconnect!</span><span style=\"color:#7B6995\">&#x3C;/</span><span style=\"color:#74DFC4\">button</span><span style=\"color:#7B6995\">></span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">    &#x3C;/></span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">  )</span><span style=\"color:#74DFC4\"> :</span><span style=\"color:#7B6995\"> (</span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">    &#x3C;></span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">      &#x3C;</span><span style=\"color:#74DFC4\">p</span><span style=\"color:#7B6995\">></span><span style=\"color:#FFFFFF\">Not connected</span><span style=\"color:#7B6995\">&#x3C;/</span><span style=\"color:#74DFC4\">p</span><span style=\"color:#7B6995\">></span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">      &#x3C;</span><span style=\"color:#74DFC4\">button</span><span style=\"color:#EB64B9\"> onClick</span><span style=\"color:#74DFC4\">=</span><span style=\"color:#7B6995\">{()</span><span style=\"color:#74DFC4\"> =></span><span style=\"color:#EB64B9\"> setOpenConnectModal</span><span style=\"color:#7B6995\">(</span><span style=\"color:#FFE261\">true</span><span style=\"color:#7B6995\">)}></span><span style=\"color:#FFFFFF\">Connect</span><span style=\"color:#7B6995\">&#x3C;/</span><span style=\"color:#74DFC4\">button</span><span style=\"color:#7B6995\">></span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">    &#x3C;/></span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">  );</span></span>\n<span class=\"line\"><span style=\"color:#7B6995\">};</span></span>\n<span class=\"line\"></span></code></pre>" }}></div>
    }
  