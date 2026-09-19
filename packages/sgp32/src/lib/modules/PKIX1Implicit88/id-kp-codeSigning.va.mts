/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_kp } from "../PKIX1Explicit88/id-kp.va.mjs";
// export { id_kp } from "../PKIX1Explicit88/id-kp.va.mjs";


/**
 * @summary id_kp_codeSigning
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-kp-codeSigning            OBJECT IDENTIFIER ::= { id-kp 3 }
 * ```
 * 
 * @constant
 */
export
const id_kp_codeSigning: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_kp);

/* eslint-enable */
