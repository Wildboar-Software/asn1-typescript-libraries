/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_kp } from "../PlatformCertificateProfileV2/tcg-kp.va.mjs";
// export { tcg_kp } from "../PlatformCertificateProfileV2/tcg-kp.va.mjs";


/**
 * @summary tcg_kp_DeltaPlatformKeyCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-DeltaPlatformKeyCertificate              OBJECT IDENTIFIER ::= {tcg-kp 6}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_DeltaPlatformKeyCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], tcg_kp);

/* eslint-enable */
