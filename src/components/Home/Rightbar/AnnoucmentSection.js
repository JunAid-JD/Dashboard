import React from "react";
import { Stack, Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const AnnoucmentSection = () => {
    return (
        <Stack direction="column" mt={1}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body2" color="initial" fontWeight={600} fontSize={12}>
                    Annoucements
                </Typography>
                <Typography variant="body2" color="initial" fontSize={10}>
                    View all
                </Typography>
            </Box>


            <Box
                mt={1}
                p={0.5}
                sx={{
                    width: "99%",
                    backgroundColor: "rgba(112,112,112,0.1)",
                    borderRadius: "5px",
                }}
            >
                <Typography variant="body2" color="initail" fontSize={11}>
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                    invidunt ut labore et dolore
                </Typography>
            </Box>

            <Box
                mt={1}
                p={0.5}
                sx={{
                    width: "99%",
                    backgroundColor: "rgba(112,112,112,0.1)",
                    borderRadius: "5px",
                }}
            >
                <Typography variant="body2" color="initail" fontSize={11}>
                    Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed..
                </Typography>
            </Box>



        </Stack>
    );
};

export default AnnoucmentSection;
