/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_kp } from "../PKIX1Explicit88/id-kp.va.mjs";
// export { id_kp } from "../PKIX1Explicit88/id-kp.va.mjs";


/**
 * @summary id_kp_emailProtection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-kp-emailProtection        OBJECT IDENTIFIER ::= { id-kp 4 }
 * ```
 * 
 * @constant
 */
export
const id_kp_emailProtection: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_kp);

/* eslint-enable */
