import { x121_dcc_country_code_to_iso_3166 } from "@wildboar/or-address";

/**
 * X.121 data country code (numeric string) to ISO 3166-1 alpha-2.
 * The matching rules look a code up with `Map.get`. Unknown codes are
 * absent, and the caller keeps the original numeric string.
 */
export const x121dcc2iso2c: { get(code: string): string | undefined } = {
    get(code: string): string | undefined {
        const dcc = Number.parseInt(code, 10);
        if (!Number.isInteger(dcc)) {
            return undefined;
        }
        return x121_dcc_country_code_to_iso_3166(dcc);
    },
};
