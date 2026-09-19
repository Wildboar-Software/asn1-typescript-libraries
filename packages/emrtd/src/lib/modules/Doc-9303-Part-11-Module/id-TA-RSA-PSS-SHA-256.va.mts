/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_TA_RSA } from "../Doc-9303-Part-11-Module/id-TA-RSA.va.mjs";
// export { id_TA_RSA } from "../Doc-9303-Part-11-Module/id-TA-RSA.va.mjs";


/**
 * @summary id_TA_RSA_PSS_SHA_256
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-TA-RSA-PSS-SHA-256   OBJECT IDENTIFIER ::= {id-TA-RSA 4}
 * ```
 * 
 * @constant
 */
export
const id_TA_RSA_PSS_SHA_256: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_TA_RSA);

/* eslint-enable */
