/* eslint-disable */
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa.mjs";
import { pk_dsa } from "../PKIXAlgs-2009/pk-dsa.oa.mjs";
import { pk_ec } from "../PKIXAlgs-2009/pk-ec.oa.mjs";
import { pk_ecDH } from "../PKIXAlgs-2009/pk-ecDH.oa.mjs";
import { pk_ecMQV } from "../PKIXAlgs-2009/pk-ecMQV.oa.mjs";
import { pk_kea } from "../PKIXAlgs-2009/pk-kea.oa.mjs";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa.mjs";
export { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
export { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa.mjs";
export { pk_dsa } from "../PKIXAlgs-2009/pk-dsa.oa.mjs";
export { pk_ec } from "../PKIXAlgs-2009/pk-ec.oa.mjs";
export { pk_ecDH } from "../PKIXAlgs-2009/pk-ecDH.oa.mjs";
export { pk_ecMQV } from "../PKIXAlgs-2009/pk-ecMQV.oa.mjs";
export { pk_kea } from "../PKIXAlgs-2009/pk-kea.oa.mjs";
export { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa.mjs";

/* START_OF_SYMBOL_DEFINITION PublicKeys */
/**
 * @summary PublicKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeys PUBLIC-KEY ::= {
 * pk-rsa    |
 * pk-dsa    |
 * pk-dh        |
 * pk-kea,
 * ...,
 * pk-ec        |
 * pk-ecDH    |
 * pk-ecMQV
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY[]}
 *
 */
export const PublicKeys: PUBLIC_KEY[] = [
    pk_rsa,
    pk_dsa,
    pk_dh,
    pk_kea,
    /* OBJECT_SET_EXTENSION_MARKER */ pk_ec,
    pk_ecDH,
    pk_ecMQV,
];
/* END_OF_SYMBOL_DEFINITION PublicKeys */

/* eslint-enable */
