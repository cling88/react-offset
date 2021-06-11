import React, { useState, useEffect, useRef } from 'react'

function ElementScroll() {

    const boxRef = useRef(null);
    const [ScrollY, setScrollY] = useState(0)
    const [ScrollActive, setScrollActive] = useState(false);

    function logit() {
        setScrollY(boxRef.current.scrollTop)
        if(boxRef.current.scrollTop > 30) {  
            setScrollActive(true);
        } else {
            setScrollActive(false);
        }
    }

    useEffect(() => {
        function watchScroll() {  boxRef.current.addEventListener("scroll", logit); }
        watchScroll();
        return () => { boxRef.current.removeEventListener("scroll", logit); }; 
    })

    return (
        <>
<div className="box"  >
    <div className={ScrollActive ? "smallBox fixed" : "smallBox"}>
        {
        ScrollActive ? 
            'I am fixed! ✨' : 
            'I will be fixed! 😁'
        }
    </div>
    <div className="boxInner" ref={boxRef}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
    </div>
</div>

            {/* <div className="box"  ref={boxRef}>
                <div className={ScrollActive ? "smallBox fixed" : "smallBox"}
                    style={{top: ScrollActive ? ScrollY + 'px': 'auto'}} >
                    {
                    ScrollActive ? 
                        'I am fixed! ✨' : 
                        'I will be fixed! 😁'
                    }
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit ducimus perferendis, fuga nobis nihil eius similique. Laboriosam fuga doloribus quibusdam cumque beatae! Quae omnis, explicabo possimus molestias nam tempore!
        </div> */}
        
        </>
    )
}

export default ElementScroll
