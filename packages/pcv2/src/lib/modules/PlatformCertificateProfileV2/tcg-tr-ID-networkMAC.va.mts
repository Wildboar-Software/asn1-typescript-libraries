/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_networkMAC
 * @description
 *
 * `{tcg-tr-ID 8}`, the `traitId` of `networkMACTrait` (§4.2.8).
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-networkMAC                            OBJECT IDENTIFIER ::= {tcg-tr-ID 8}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_networkMAC: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], tcg_tr_ID);

/* eslint-enable */
