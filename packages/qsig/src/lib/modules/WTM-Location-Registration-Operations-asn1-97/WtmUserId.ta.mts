/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../WTM-Location-Registration-Operations-asn1-97/AlternativeId.ta.mjs";

/**
 * @summary WtmUserId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtmUserId  ::=  CHOICE {
 *     pisnNumber PartyNumber,
 *     -- The PISN number of the WTM user,
 *     -- always a Complete Number.
 *     alternativeId AlternativeId
 * }
 * ```
 */
export
type WtmUserId =
    { pisnNumber: PartyNumber } /* CHOICE_ALT_ROOT */
    | { alternativeId: AlternativeId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_WtmUserId: $.ASN1Decoder<WtmUserId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtmUserId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtmUserId (el: _Element): WtmUserId {
    if (!_cached_decoder_for_WtmUserId) { _cached_decoder_for_WtmUserId = $._decode_inextensible_choice<WtmUserId>({
    "CONTEXT 0": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 1": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 3": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 4": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 5": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 8": [ "pisnNumber", _decode_PartyNumber ],
    "UNIVERSAL 4": [ "alternativeId", _decode_AlternativeId ]
}); }
    return _cached_decoder_for_WtmUserId(el);
}

let _cached_encoder_for_WtmUserId: $.ASN1Encoder<WtmUserId> | null = null;

/**
 * @summary Encodes a(n) WtmUserId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtmUserId, encoded as an ASN.1 Element.
 */
export
function _encode_WtmUserId (value: WtmUserId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtmUserId) { _cached_encoder_for_WtmUserId = $._encode_choice<WtmUserId>({
    "pisnNumber": _encode_PartyNumber,
    "alternativeId": _encode_AlternativeId,
}, $.BER); }
    return _cached_encoder_for_WtmUserId(value, elGetter);
}

/* eslint-enable */
