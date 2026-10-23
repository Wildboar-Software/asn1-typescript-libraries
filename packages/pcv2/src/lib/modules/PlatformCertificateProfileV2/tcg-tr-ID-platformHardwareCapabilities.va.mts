/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_platformHardwareCapabilities
 * @description
 *
 * `{tcg-tr-ID 14}`, the `traitId` of `platformHardwareCapabilitiesTrait`
 * (§4.2.14).
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-platformHardwareCapabilities          OBJECT IDENTIFIER ::= {tcg-tr-ID 14}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_platformHardwareCapabilities: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], tcg_tr_ID);

/* eslint-enable */
