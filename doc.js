document.addEventListener('click', function(e){
    const btn = e.target.closest('.copy-bib');
    if(!btn) return;
    e.preventDefault();
    const pre = document.querySelector(btn.dataset.target);
    if(!pre) return;
    const text = pre.innerText;
    if(navigator.clipboard && window.isSecureContext){
    navigator.clipboard.writeText(text).then(()=>btn.textContent='Copied!');
    } else {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); btn.textContent='Copied!'; } finally { ta.remove(); }
    }
    setTimeout(()=>btn.textContent='Copy BibTeX', 1500);
});