import { x121_dcc_country_code_to_iso_3166 } from "@wildboar/or-address";

export
const x121dcc2iso2c = {
    get (code: string): string | undefined {
        return x121_dcc_country_code_to_iso_3166(Number.parseInt(code, 10));
    },
};
