/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_kp } from "../EKCredentialProfileV2/tcg-kp.va.mjs";
// export { tcg_kp } from "../EKCredentialProfileV2/tcg-kp.va.mjs";


/**
 * @summary tcg_kp_EKCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-EKCertificate            OBJECT IDENTIFIER ::= {tcg-kp 1}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_EKCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_kp);

/* eslint-enable */
