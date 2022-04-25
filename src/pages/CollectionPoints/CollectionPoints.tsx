import Map from '../../components/Map/Map';
import styles from '../CollectionPoints/CollectionPoints.module.sass';
import cardInfo from '../../assets/images/mapCard.svg'
import MapCard from '../../components/Cards/MapCard/MapCard';
import MapCardPlug from '../../components/Plugs/MapCardPlug/MapCardPlug';
import { useEffect, useState } from 'react';
import filter_logo from '../../assets/images/filter_logo.svg'
import CustomSheet from "../../components/CustomSheet/CustomSheet";
import BigMapCard from '../../components/Cards/BigMapCard/BigMapCard';


const CollectionPoints = () => {
    const [open, setOpen] = useState(false)
    const [isShow, setShow] = useState(false);
    const [openCards, setOpenCards] = useState(false)
    const [menuActive, setMenuActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(() => true)
        }, 2000);
    }, [])
    return (
        <div>
            <div className={styles.main_content}>
                <input placeholder='Поиск' className={styles.input} />
                <div className={styles.select_wrapper}>
                    <select className={styles.select_shop}>
                        <option value="" disabled selected>Выбрано 3 магазина</option>
                        <option>Выбрать все</option>
                        <option>H&M</option>
                        <option>P&B</option>
                        <option>Adidas</option>
                        <option>Nike</option>
                        <option>Reebok</option>
                    </select>
                    <select className={styles.select_material}>
                        <option value="" disabled selected>Материалы</option>
                        <option>Пункт 1</option>
                    </select>
                    <button className={styles.button_open_filters} onClick={() => setOpen(!open)}><img src={filter_logo}/></button>
                    <CustomSheet open={open} setOpen={setOpen}/>
                </div>
                <button className={styles.button_open_cards} onClick={()=>setMenuActive(!menuActive)}>Показать 12 пунктов сбора</button>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                        {/* <BigMapCard />  */}
                            {
                                isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                                                  description='Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...'/> :
                                    <MapCardPlug/>
                            }

                        </div>
                        <div className={styles.card}>
                            {
                                isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                                                  description='Стекло, бумага, металл, старая одежда, батареи'/> :
                                    <MapCardPlug/>
                            }

                        </div>
                        <div className={styles.card}>
                            {
                                isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                                                  description='Пластик, стекло, бумага, металл'/> : <MapCardPlug/>
                            }

                        </div>
                        <div className={styles.card}>
                            {
                                isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                                                  description='Стекло, бумага, металл, старая одежда, батареи'/> :
                                    <MapCardPlug/>
                            }
                        </div>
                        <div>
                            
                        </div>
                    </div>
                {menuActive ?
                    <div className={styles.cards_phone}>
                        <div className={styles.card_ph}>
                {
                    isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                    description='Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...'/> :
                    <MapCardPlug/>
                }

                    </div>
                    <div className={styles.card_ph}>
                {
                    isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                    description='Стекло, бумага, металл, старая одежда, батареи'/> :
                    <MapCardPlug/>
                }

                    </div>
                    <div className={styles.card_ph}>
                {
                    isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                    description='Пластик, стекло, бумага, металл'/> : <MapCardPlug/>
                }

                    </div>
                    <div className={styles.card_ph}>
                {
                    isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                    description='Стекло, бумага, металл, старая одежда, батареи'/> :
                    <MapCardPlug/>
                }
                    </div>
                </div> : <div></div>}
            </div>
            <Map></Map>
        </div>
    );
};

export default CollectionPoints;
