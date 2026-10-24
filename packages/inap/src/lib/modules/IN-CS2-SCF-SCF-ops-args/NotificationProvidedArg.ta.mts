/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { NotificationProvidedArg_Type, _decode_NotificationProvidedArg_Type, _encode_NotificationProvidedArg_Type } from "../IN-CS2-SCF-SCF-ops-args/NotificationProvidedArg-Type.ta.mjs";
// export { NotificationProvidedArg_Type, _decode_NotificationProvidedArg_Type, _encode_NotificationProvidedArg_Type } from "../IN-CS2-SCF-SCF-ops-args/NotificationProvidedArg-Type.ta.mjs";


/**
 * @summary NotificationProvidedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationProvidedArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {notification             [0]  Notification,
 *                notificationInformation
 *                  [1]  NotificationInformation OPTIONAL,
 *                securityParameters       [2]  SecurityParameters OPTIONAL,
 *                extensions
 *                  [3]  SEQUENCE OF
 *                         ExtensionField OPTIONAL,
 *                partyID                  [4]  PartyID OPTIONAL,
 *                ...}}
 * ```
 */
export
type NotificationProvidedArg = OPTIONALLY_PROTECTED<NotificationProvidedArg_Type>; // DefinedType

let _cached_decoder_for_NotificationProvidedArg: $.ASN1Decoder<NotificationProvidedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationProvidedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationProvidedArg (el: _Element): NotificationProvidedArg {
    if (!_cached_decoder_for_NotificationProvidedArg) { _cached_decoder_for_NotificationProvidedArg = _get_decoder_for_OPTIONALLY_PROTECTED<NotificationProvidedArg_Type>(_decode_NotificationProvidedArg_Type); }
    return _cached_decoder_for_NotificationProvidedArg(el);
}

let _cached_encoder_for_NotificationProvidedArg: $.ASN1Encoder<NotificationProvidedArg> | null = null;

/**
 * @summary Encodes a(n) NotificationProvidedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationProvidedArg, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationProvidedArg (value: NotificationProvidedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationProvidedArg) { _cached_encoder_for_NotificationProvidedArg = _get_encoder_for_OPTIONALLY_PROTECTED<NotificationProvidedArg_Type>(_encode_NotificationProvidedArg_Type); }
    return _cached_encoder_for_NotificationProvidedArg(value, elGetter);
}


/* eslint-enable */
