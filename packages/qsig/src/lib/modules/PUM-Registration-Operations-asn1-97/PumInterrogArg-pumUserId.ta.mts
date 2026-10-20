/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../PUM-Registration-Operations-asn1-97/AlternativeId.ta.mjs";
// export { AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../PUM-Registration-Operations-asn1-97/AlternativeId.ta.mjs";


/**
 * @summary PumInterrogArg_pumUserId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumInterrogArg-pumUserId ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PumInterrogArg_pumUserId =
    { pumNumber: PartyNumber } /* CHOICE_ALT_ROOT */
    | { alternativeId: AlternativeId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PumInterrogArg_pumUserId: $.ASN1Decoder<PumInterrogArg_pumUserId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumInterrogArg_pumUserId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumInterrogArg_pumUserId (el: _Element): PumInterrogArg_pumUserId {
    if (!_cached_decoder_for_PumInterrogArg_pumUserId) { _cached_decoder_for_PumInterrogArg_pumUserId = $._decode_inextensible_choice<PumInterrogArg_pumUserId>({
    "CONTEXT 0": [ "pumNumber", _decode_PartyNumber ],
    "CONTEXT 1": [ "pumNumber", _decode_PartyNumber ],
    "CONTEXT 3": [ "pumNumber", _decode_PartyNumber ],
    "CONTEXT 4": [ "pumNumber", _decode_PartyNumber ],
    "CONTEXT 5": [ "pumNumber", _decode_PartyNumber ],
    "CONTEXT 8": [ "pumNumber", _decode_PartyNumber ],
    "UNIVERSAL 4": [ "alternativeId", _decode_AlternativeId ]
}); }
    return _cached_decoder_for_PumInterrogArg_pumUserId(el);
}

let _cached_encoder_for_PumInterrogArg_pumUserId: $.ASN1Encoder<PumInterrogArg_pumUserId> | null = null;

/**
 * @summary Encodes a(n) PumInterrogArg_pumUserId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumInterrogArg_pumUserId, encoded as an ASN.1 Element.
 */
export
function _encode_PumInterrogArg_pumUserId (value: PumInterrogArg_pumUserId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumInterrogArg_pumUserId) { _cached_encoder_for_PumInterrogArg_pumUserId = $._encode_choice<PumInterrogArg_pumUserId>({
    "pumNumber": _encode_PartyNumber,
    "alternativeId": _encode_AlternativeId,
}, $.BER); }
    return _cached_encoder_for_PumInterrogArg_pumUserId(value, elGetter);
}


/* eslint-enable */
