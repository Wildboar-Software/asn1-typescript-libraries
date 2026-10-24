/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_Boolean
 * @description
 *
 * `{tcg-tr-ID 1}`, the `traitId` of `booleanTrait`. Section 4.2.1 names this
 * identifier `tcg-tr-ID-boolean`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-Boolean                               OBJECT IDENTIFIER ::= {tcg-tr-ID 1}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_Boolean: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_tr_ID);

/* eslint-enable */
