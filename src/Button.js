import React, { useState } from 'react'
import "./Button.css"

export default function Button(props) {
    // 随机数定义
    const [num, setNum] = useState('GO!');
    const [color, setColor] = useState('gray');
    const [colorIndex, setColorIndex] = useState(0)
    const [colorList, setColorList] = useState(['blue', 'green', 'red', 'orange'])
    const [randomNumber, setRandomNumber] = useState(12)

    function handleButtonClick() {
        setNum((Math.floor(Math.random() * randomNumber) + 1).toString())
        console.log(typeof num);
        setColor(colorList[colorIndex % colorList.length])
        setColorIndex((colorIndex + 1) % colorList.length)
        console.log(colorIndex);

    }

    function handleOut(color) {
        setColorList(
            deleteColorFromList(color, colorList)
        )
    }

    function deleteColorFromList(color, colorList) {
        let list = [...colorList]
        list.map((val, i) => {
            if (val === color) {
                list.splice(i, 1);
            }
        })
        return list;
    }

    function handleMod(mod) {
        if (mod === 1) {
            setRandomNumber(12)
        } else if (mod === 2) {
            setRandomNumber(6)
        } else if (mod === 3) {
            setColorList(['blue', 'green', 'red', 'orange'])
            setNum('GO!')
            setColor('gray')
        }
    }

    return (
        <div className="button-container">
            <button className="button-random" onClick={() => handleButtonClick()} style={{ backgroundColor: color }}>{num}</button>
            <div className="button-select">
                <div className="buttons">
                    {
                        colorList.map((item, index) => {
                            console.log('11');
                            return (
                                <button
                                    onClick={() => handleOut(item)}
                                    className="button-out"
                                    key={index}
                                    style={{ backgroundColor: item }}
                                >OUT
                                </button>
                            )
                        })
                    }
                </div>
                <button className="button-restart" onClick={() => handleMod(3)}>重新开始</button>
            </div>

            <div className="top-bar">
                <div className="buttons">
                    <button className="button-mod" onClick={() => handleMod(1)}>大富翁模式</button>
                    <button className="button-mod" onClick={() => handleMod(2)}> 飞行棋模式</button>
                </div>
            </div>
        </div >
    )

}