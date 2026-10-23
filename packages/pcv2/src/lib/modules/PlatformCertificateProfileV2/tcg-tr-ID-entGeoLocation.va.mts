/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_entGeoLocation
 * @description
 *
 * `{tcg-tr-ID 22}`, the `traitId` of `entityGeoLocationTrait` (§4.2.22).
 *
 * TCG Platform Certificate Profile, Version 2.1, §5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-entGeoLocation                        OBJECT IDENTIFIER ::= {tcg-tr-ID 22}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_entGeoLocation: OBJECT_IDENTIFIER = _OID.fromParts([
    22,
], tcg_tr_ID);

/* eslint-enable */
