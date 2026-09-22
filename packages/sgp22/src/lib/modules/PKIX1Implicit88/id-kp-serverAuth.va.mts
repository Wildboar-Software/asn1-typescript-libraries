/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_kp } from "../PKIX1Explicit88/id-kp.va.mjs";
// export { id_kp } from "../PKIX1Explicit88/id-kp.va.mjs";


/**
 * @summary id_kp_serverAuth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-kp-serverAuth             OBJECT IDENTIFIER ::= { id-kp 1 }
 * ```
 * 
 * @constant
 */
export
const id_kp_serverAuth: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_kp);

/* eslint-enable */
