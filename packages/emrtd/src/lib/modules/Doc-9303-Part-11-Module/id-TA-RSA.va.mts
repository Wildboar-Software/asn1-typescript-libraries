/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_TA } from "../Doc-9303-Part-11-Module/id-TA.va.mjs";
// export { id_TA } from "../Doc-9303-Part-11-Module/id-TA.va.mjs";


/**
 * @summary id_TA_RSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-TA-RSA               OBJECT IDENTIFIER ::= {id-TA 1}
 * ```
 * 
 * @constant
 */
export
const id_TA_RSA: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_TA);

/* eslint-enable */
