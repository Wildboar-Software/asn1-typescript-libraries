/* eslint-disable */
import { type SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
import { sa_dsaWithSHA1 } from "../PKIXAlgs-2009/sa-dsaWithSHA1.oa.mjs";
import { sa_dsaWithSHA224 } from "../PKIXAlgs-2009/sa-dsaWithSHA224.oa.mjs";
import { sa_dsaWithSHA256 } from "../PKIXAlgs-2009/sa-dsaWithSHA256.oa.mjs";
import { sa_ecdsaWithSHA1 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA1.oa.mjs";
import { sa_ecdsaWithSHA224 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA224.oa.mjs";
import { sa_ecdsaWithSHA256 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA256.oa.mjs";
import { sa_ecdsaWithSHA384 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA384.oa.mjs";
import { sa_ecdsaWithSHA512 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA512.oa.mjs";
import { sa_rsaWithMD2 } from "../PKIXAlgs-2009/sa-rsaWithMD2.oa.mjs";
import { sa_rsaWithMD5 } from "../PKIXAlgs-2009/sa-rsaWithMD5.oa.mjs";
import { sa_rsaWithSHA1 } from "../PKIXAlgs-2009/sa-rsaWithSHA1.oa.mjs";

/**
 * @summary SMimeCaps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMimeCaps SMIME-CAPS ::= {
 * sa-rsaWithMD2.&smimeCaps        |
 * sa-rsaWithMD5.&smimeCaps        |
 * sa-rsaWithSHA1.&smimeCaps        |
 * sa-dsaWithSHA1.&smimeCaps        |
 * sa-dsaWithSHA224.&smimeCaps    |
 * sa-dsaWithSHA256.&smimeCaps    |
 * sa-ecdsaWithSHA1.&smimeCaps    |
 * sa-ecdsaWithSHA224.&smimeCaps    |
 * sa-ecdsaWithSHA256.&smimeCaps    |
 * sa-ecdsaWithSHA384.&smimeCaps    |
 * sa-ecdsaWithSHA512.&smimeCaps,
 * ... }
 * ```
 *
 * @constant
 * @type {SMIME_CAPS[]}
 *
 */
export const SMimeCaps: SMIME_CAPS[] = [
    sa_rsaWithMD2["&smimeCaps"],
    sa_rsaWithMD5["&smimeCaps"],
    sa_rsaWithSHA1["&smimeCaps"],
    sa_dsaWithSHA1["&smimeCaps"],
    sa_dsaWithSHA224["&smimeCaps"],
    sa_dsaWithSHA256["&smimeCaps"],
    sa_ecdsaWithSHA1["&smimeCaps"],
    sa_ecdsaWithSHA224["&smimeCaps"],
    sa_ecdsaWithSHA256["&smimeCaps"],
    sa_ecdsaWithSHA384["&smimeCaps"],
    sa_ecdsaWithSHA512["&smimeCaps"],
];

/* eslint-enable */
