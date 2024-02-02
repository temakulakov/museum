import styles from "@/styles/menu.module.scss";
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
function menu() {

    const arr = ["Купить билет", "Стать другом", "Интернет-магазин"];
    const [ lang, setLang ] = React.useState<string>('ru');

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
    };

    return (
        <>
            {arr.map((el, index) => <div key={index} className={styles.root}>{el}</div>)}
            <RemoveRedEyeOutlinedIcon style={{margin: "0", width: "50px", height: "30px", fill: "#EEF2F4", stroke: "1px"}}/>

            <div className={styles.root}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"
                                style={{color: "rgba(157, 33, 53, 0)", boxShadow: "none"}}>{"ru"}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lang}
                        label="Age"
                        onChange={handleChange}
                        className={styles.lang}
                    >
                        <MenuItem value={10}>{"ru"}</MenuItem>
                        <MenuItem value={20}>{"eng"}</MenuItem>
                    </Select>
                </FormControl>
            </div>

        </>
    );
}

export default menu;
