import { animated, easings, Spring, useSpring } from "react-spring";
import style from '../ProductCardPlug/ProductCardPlug.module.sass'


const ProductCardPlug = () => {
    const { background } = useSpring({
        from: {
            background: 'linear-gradient(146deg, #e1e1e3 10%, #f0f0f2 90%, #e1e1e3 100%)'
        },
        to: {
            background: 'linear-gradient(146deg, #f0f1f4 10%, #d9d9d9 55%, #f0f1f4 100%)'
        },
        config: {
            duration: 900,
            easing: easings.easeInOutQuart,
        },
        loop: { reverse: true },
    })
    return (
        <div className={style.main_wrapper}>
            <animated.div style={{ background, width: 249, height: 249, borderRadius: 18, }}/>
            <animated.div  className={style.plug_content} style={{ background, width: 200, height: 22, borderRadius: 18, }}/>
            <animated.div className={style.plug_content} style={{ background, width: 180, height: 22, borderRadius: 8, }}/>
            <animated.div className={style.plug_content} style={{ background, width: 80, height: 22, borderRadius: 18, }}/>
        </div>
    )
}

export default ProductCardPlug;
