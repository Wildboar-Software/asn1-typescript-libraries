/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_ISO9000Level
 * @description
 *
 * `{tcg-tr-ID 7}`, the `traitId` of `iso9000Trait`. Section 5 assigns this arc
 * as `tcg-tr-ID-ISO9000Level`. Section 4.2.7's information object names the
 * same arc `tcg-tr-ID-ISO9000`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-ISO9000Level                          OBJECT IDENTIFIER ::= {tcg-tr-ID 7}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_ISO9000Level: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], tcg_tr_ID);

/* eslint-enable */
