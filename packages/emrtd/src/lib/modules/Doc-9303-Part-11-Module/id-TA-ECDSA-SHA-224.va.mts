/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_TA_ECDSA } from "../Doc-9303-Part-11-Module/id-TA-ECDSA.va.mjs";
// export { id_TA_ECDSA } from "../Doc-9303-Part-11-Module/id-TA-ECDSA.va.mjs";


/**
 * @summary id_TA_ECDSA_SHA_224
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-TA-ECDSA-SHA-224     OBJECT IDENTIFIER ::= {id-TA-ECDSA 2}
 * ```
 * 
 * @constant
 */
export
const id_TA_ECDSA_SHA_224: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_TA_ECDSA);

/* eslint-enable */
