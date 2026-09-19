/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_TA } from "../Doc-9303-Part-11-Module/id-TA.va.mjs";
// export { id_TA } from "../Doc-9303-Part-11-Module/id-TA.va.mjs";


/**
 * @summary id_TA_ECDSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-TA-ECDSA             OBJECT IDENTIFIER ::= {id-TA 2}
 * ```
 * 
 * @constant
 */
export
const id_TA_ECDSA: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_TA);

/* eslint-enable */
