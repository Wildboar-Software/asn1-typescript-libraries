/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkix } from "../PKIX1Explicit88/id-pkix.va.mjs";
// export { id_pkix } from "../PKIX1Explicit88/id-pkix.va.mjs";


/**
 * @summary id_kp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-kp OBJECT IDENTIFIER ::= { id-pkix 3 }
 * ```
 * 
 * @constant
 */
export
const id_kp: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_pkix);

/* eslint-enable */
