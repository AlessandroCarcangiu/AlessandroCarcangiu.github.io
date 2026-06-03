(function () {
            function ensureToast() {
                let t = document.getElementById('bibtex-toast');
                if (!t) {
                    t = document.createElement('div');
                    t.id = 'bibtex-toast';
                    t.setAttribute('role', 'status');
                    t.setAttribute('aria-live', 'polite');
                    document.body.appendChild(t);
                }
                return t;
            }
            function showToast(msg='BibTeX copied to clipboard') {
                const t = ensureToast();
                t.textContent = msg;
                t.classList.add('show');
                clearTimeout(showToast._timer);
                showToast._timer = setTimeout(() => t.classList.remove('show'), 1400);
            }

            function fallbackCopy(text) {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.style.position = 'fixed';
                ta.style.top = '-9999px';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }

            async function copyText(text) {
                if (!text) return;
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                } else {
                    fallbackCopy(text);
                }
            }

            document.querySelectorAll('details.bib > summary').forEach(s => {
                s.setAttribute('role','button');
                if (!s.hasAttribute('tabindex')) s.setAttribute('tabindex','0');
                if (!s.getAttribute('aria-label')) s.setAttribute('aria-label','Copy BibTeX');
            });

            document.addEventListener('click', async function (ev) {
                const sum = ev.target.closest('details.bib > summary');
                if (!sum) return;

                ev.preventDefault();
                ev.stopPropagation();

                const details = sum.parentElement;
                if (details.open) details.open = false;

                const pre = details.querySelector('pre.bibtex');
                if (!pre) return;

                const text = pre.textContent.trim();
                try {
                    await copyText(text);
                    showToast('BibTeX copied to clipboard');
                } catch {
                    showToast('Failed to copy BibTeX');
                }
            }, { capture: true });

            document.addEventListener('keydown', function (ev) {
                const sum = ev.target.closest('details.bib > summary');
                if (!sum) return;
                if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    sum.click();
                }
            }, { capture: true });

            document.addEventListener('toggle', function (ev) {
                const det = ev.target;
                if (det.matches && det.matches('details.bib') && det.open) det.open = false;
            }, true);
        })();
