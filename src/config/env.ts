import { envTypes } from "@src/shared/interfaces/env.types"

const envLocal: envTypes = {
    //authServicePort: "http://192.168.1.35:4000",
    //userServicePort: "http://192.168.1.35:4100"
    authServicePort: "http://10.0.0.22:4000",
    userServicePort: "http://10.0.0.22:4100"
}

const envDev: envTypes = {
    authServicePort: "https://ritme-server-ub3mx35oqq-uc.a.run.app/"
}

const env = envLocal

export default env