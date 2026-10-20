/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/AlternativeId.ta.mjs";
// export { AlternativeId, _decode_AlternativeId, _encode_AlternativeId } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/AlternativeId.ta.mjs";
import { WtmIdentity_both, _decode_WtmIdentity_both, _encode_WtmIdentity_both } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmIdentity-both.ta.mjs";
// export { WtmIdentity_both, _decode_WtmIdentity_both, _encode_WtmIdentity_both } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmIdentity-both.ta.mjs";


/**
 * @summary WtmIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtmIdentity  ::=  CHOICE {
 *     pisnNumber PartyNumber,
 *     alternativeId [10] IMPLICIT AlternativeId,
 *     both [11] IMPLICIT SEQUENCE {
 *         pisnNumber PartyNumber,
 *         alternativeId AlternativeId
 *     }
 * }
 * ```
 */
export
type WtmIdentity =
    { pisnNumber: PartyNumber } /* CHOICE_ALT_ROOT */
    | { alternativeId: AlternativeId } /* CHOICE_ALT_ROOT */
    | { both: WtmIdentity_both } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_WtmIdentity: $.ASN1Decoder<WtmIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtmIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtmIdentity (el: _Element): WtmIdentity {
    if (!_cached_decoder_for_WtmIdentity) { _cached_decoder_for_WtmIdentity = $._decode_inextensible_choice<WtmIdentity>({
    "CONTEXT 0": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 1": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 3": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 4": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 5": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 8": [ "pisnNumber", _decode_PartyNumber ],
    "CONTEXT 10": [ "alternativeId", $._decode_implicit<AlternativeId>(() => _decode_AlternativeId) ],
    "CONTEXT 11": [ "both", $._decode_implicit<WtmIdentity_both>(() => _decode_WtmIdentity_both) ]
}); }
    return _cached_decoder_for_WtmIdentity(el);
}

let _cached_encoder_for_WtmIdentity: $.ASN1Encoder<WtmIdentity> | null = null;

/**
 * @summary Encodes a(n) WtmIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtmIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_WtmIdentity (value: WtmIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtmIdentity) { _cached_encoder_for_WtmIdentity = $._encode_choice<WtmIdentity>({
    "pisnNumber": _encode_PartyNumber,
    "alternativeId": $._encode_implicit(_TagClass.context, 10, () => _encode_AlternativeId, $.BER),
    "both": $._encode_implicit(_TagClass.context, 11, () => _encode_WtmIdentity_both, $.BER),
}, $.BER); }
    return _cached_encoder_for_WtmIdentity(value, elGetter);
}


/* eslint-enable */
