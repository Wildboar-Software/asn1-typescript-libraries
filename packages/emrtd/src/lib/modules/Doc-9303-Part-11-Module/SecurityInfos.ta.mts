/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SecurityInfo, _decode_SecurityInfo, _encode_SecurityInfo } from "../Doc-9303-Part-11-Module/SecurityInfo.ta.mjs";
// export { SecurityInfo, _decode_SecurityInfo, _encode_SecurityInfo } from "../Doc-9303-Part-11-Module/SecurityInfo.ta.mjs";


/**
 * @summary SecurityInfos
 * @description
 *
 * Set of `SecurityInfo` values by which the chip announces supported
 * security protocols. An inspection system may discard an entry it does not
 * recognize. Files may also carry entries outside this specification.
 *
 * Presence, when that protocol is announced:
 *
 * - PACE: at least one `PACEInfo` that uses standardized domain parameters,
 *   plus one `PACEDomainParameterInfo` for each explicit parameter set.
 * - Active Authentication with ECDSA: `ActiveAuthenticationInfo`.
 * - Chip Authentication: at least one `ChipAuthenticationInfo` and the
 *   matching `ChipAuthenticationPublicKeyInfo` with explicit domain
 *   parameters.
 * - Terminal Authentication: at least one `TerminalAuthenticationInfo`.
 * - Any LDS2 application: `EFDIRInfo`, because EF.DIR is unsigned and can
 *   hide applications.
 *
 * Where they are stored (section 9.2.11):
 *
 * - EF.CardAccess in the Master File is required when PACE is supported. It
 *   holds the PACE entries. It is not signed.
 * - EF.CardSecurity in the Master File is required for PACE with Chip
 *   Authentication Mapping, for Terminal Authentication in the Master File,
 *   or for Chip Authentication in the Master File. It repeats EF.CardAccess
 *   and adds the Chip Authentication, Terminal Authentication, and, when
 *   another application is present, `EFDIRInfo` entries. Passive
 *   Authentication covers this file.
 * - EF.DG14 is required for PACE with Generic or Integrated Mapping, and for
 *   Terminal or Chip Authentication in the eMRTD application. The full set
 *   of `SecurityInfos`, including those from EF.CardAccess, is also stored
 *   here. Passive Authentication covers this file.
 *
 * Doc 9303-11, sections 9.2 and 9.2.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityInfos  ::=  SET OF SecurityInfo
 * ```
 */
export
type SecurityInfos = SecurityInfo[]; // SetOfType

let _cached_decoder_for_SecurityInfos: $.ASN1Decoder<SecurityInfos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityInfos
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityInfos (el: _Element): SecurityInfos {
    if (!_cached_decoder_for_SecurityInfos) { _cached_decoder_for_SecurityInfos = $._decodeSetOf<SecurityInfo>(() => _decode_SecurityInfo); }
    return _cached_decoder_for_SecurityInfos(el);
}

let _cached_encoder_for_SecurityInfos: $.ASN1Encoder<SecurityInfos> | null = null;

/**
 * @summary Encodes a(n) SecurityInfos into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityInfos, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityInfos (value: SecurityInfos, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityInfos) { _cached_encoder_for_SecurityInfos = $._encodeSetOf<SecurityInfo>(() => _encode_SecurityInfo, $.BER); }
    return _cached_encoder_for_SecurityInfos(value, elGetter);
}


/* eslint-enable */
