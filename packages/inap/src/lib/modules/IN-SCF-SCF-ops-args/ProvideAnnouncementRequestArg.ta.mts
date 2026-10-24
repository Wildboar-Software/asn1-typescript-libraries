/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ProvideAnnouncementRequestArg_Type, _decode_ProvideAnnouncementRequestArg_Type, _encode_ProvideAnnouncementRequestArg_Type } from "../IN-SCF-SCF-ops-args/ProvideAnnouncementRequestArg-Type.ta.mjs";
// export { ProvideAnnouncementRequestArg_Type, _decode_ProvideAnnouncementRequestArg_Type, _encode_ProvideAnnouncementRequestArg_Type } from "../IN-SCF-SCF-ops-args/ProvideAnnouncementRequestArg-Type.ta.mjs";


/**
 * @summary ProvideAnnouncementRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideAnnouncementRequestArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {infoToSend                   [0]  InformationToSend,
 *                preferredLanguage            [1]  Language OPTIONAL,
 *                securityParameters           [2]  SecurityParameters OPTIONAL,
 *                srfAddress                   [3]  CalledPartyNumber OPTIONAL,
 *                userToConnect                [4]  UserToConnect OPTIONAL,
 *                requestAnnouncementComplete  [5]  BOOLEAN DEFAULT TRUE,
 *                extensions                   [6]  Extensions OPTIONAL,
 *                ...}}
 * ```
 */
export
type ProvideAnnouncementRequestArg = OPTIONALLY_PROTECTED<ProvideAnnouncementRequestArg_Type>; // DefinedType

let _cached_decoder_for_ProvideAnnouncementRequestArg: $.ASN1Decoder<ProvideAnnouncementRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideAnnouncementRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideAnnouncementRequestArg (el: _Element): ProvideAnnouncementRequestArg {
    if (!_cached_decoder_for_ProvideAnnouncementRequestArg) { _cached_decoder_for_ProvideAnnouncementRequestArg = _get_decoder_for_OPTIONALLY_PROTECTED<ProvideAnnouncementRequestArg_Type>(_decode_ProvideAnnouncementRequestArg_Type); }
    return _cached_decoder_for_ProvideAnnouncementRequestArg(el);
}

let _cached_encoder_for_ProvideAnnouncementRequestArg: $.ASN1Encoder<ProvideAnnouncementRequestArg> | null = null;

/**
 * @summary Encodes a(n) ProvideAnnouncementRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideAnnouncementRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideAnnouncementRequestArg (value: ProvideAnnouncementRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideAnnouncementRequestArg) { _cached_encoder_for_ProvideAnnouncementRequestArg = _get_encoder_for_OPTIONALLY_PROTECTED<ProvideAnnouncementRequestArg_Type>(_encode_ProvideAnnouncementRequestArg_Type); }
    return _cached_encoder_for_ProvideAnnouncementRequestArg(value, elGetter);
}


/* eslint-enable */
