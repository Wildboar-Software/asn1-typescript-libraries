/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_kp } from "../PKIX1Explicit88/id-kp.va.mjs";
// export { id_kp } from "../PKIX1Explicit88/id-kp.va.mjs";


/**
 * @summary id_kp_timeStamping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-kp-timeStamping           OBJECT IDENTIFIER ::= { id-kp 8 }
 * ```
 * 
 * @constant
 */
export
const id_kp_timeStamping: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], id_kp);

/* eslint-enable */
