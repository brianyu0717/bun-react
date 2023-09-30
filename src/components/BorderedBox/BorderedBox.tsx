import { Box, BoxProps } from "@mui/material";


export default function(props: BoxProps) {
    return (
        <Box sx={{ border: 5, borderStyle: "dashed" }}>
            {props.children}
        </Box>
    )
}