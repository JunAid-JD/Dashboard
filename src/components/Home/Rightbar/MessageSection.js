import React from "react";
import { Stack, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
// import user from '../../../Images/user.webp'
import henry from '../../../Images/henry.png'
import bill from '../../../Images/bill.png'

const MessageSection = () => {
    return (
        <Stack direction="column" mt={1}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="body2" color="#D5073C" fontWeight={600} fontSize={12}>
                    Messages
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
                    backgroundColor: "rgba(213,7,60,0.1)",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={henry}
                    alt=""
                    style={{
                        objectFit: "fill",
                        borderRadius: "50px",
                        width: "30px",
                        height: "30px",
                        margin: "0px 5px",
                    }}
                />
                <Box>
                    <Typography variant="body2" color="#D5073C" fontWeight={700}>
                        Henry
                    </Typography>
                    <Typography variant="body2" color="#D5073C" fontSize={11}>
                        Lorem ipsum dolor sit amet, consetetur...
                    </Typography>
                </Box>
            </Box>


            <Box
                mt={1}
                p={0.5}
                sx={{
                    width: "99%",
                    backgroundColor: "rgba(213,7,60,0.1)",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={bill}
                    alt=""
                    style={{
                        objectFit: "fill",
                        borderRadius: "50px",
                        width: "30px",
                        height: "30px",
                        margin: "0px 5px",
                    }}
                />
                <Box>
                    <Typography variant="body2" color="#D5073C" fontWeight={700}>
                        Bill
                    </Typography>
                    <Typography variant="body2" color="#D5073C" fontSize={11}>
                        Lorem ipsum dolor sit amet, consetetur...
                    </Typography>
                </Box>
            </Box>


        </Stack>
    );
};

export default MessageSection;
