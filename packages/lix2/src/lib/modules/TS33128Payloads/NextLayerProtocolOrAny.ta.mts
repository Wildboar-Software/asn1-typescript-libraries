/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NextLayerProtocol, _decode_NextLayerProtocol, _encode_NextLayerProtocol } from "../TS33128Payloads/NextLayerProtocol.ta.mjs";
// export { NextLayerProtocol, _decode_NextLayerProtocol, _encode_NextLayerProtocol } from "../TS33128Payloads/NextLayerProtocol.ta.mjs";
import { AnyNextLayerProtocol, _decode_AnyNextLayerProtocol, _encode_AnyNextLayerProtocol } from "../TS33128Payloads/AnyNextLayerProtocol.ta.mjs";
// export { AnyNextLayerProtocol, _enum_for_AnyNextLayerProtocol, AnyNextLayerProtocol_ip /* IMPORTED_LONG_ENUMERATION_ITEM */, ip /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AnyNextLayerProtocol, _encode_AnyNextLayerProtocol } from "../TS33128Payloads/AnyNextLayerProtocol.ta.mjs";


/**
 * @summary NextLayerProtocolOrAny
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NextLayerProtocolOrAny  ::=  CHOICE
 * {
 *     nextLayerProtocol    [1] NextLayerProtocol,
 *     anyNextLayerProtocol [2] AnyNextLayerProtocol
 * }
 * ```
 */
export
type NextLayerProtocolOrAny =
    { nextLayerProtocol: NextLayerProtocol } /* CHOICE_ALT_ROOT */
    | { anyNextLayerProtocol: AnyNextLayerProtocol } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NextLayerProtocolOrAny: $.ASN1Decoder<NextLayerProtocolOrAny> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NextLayerProtocolOrAny
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NextLayerProtocolOrAny (el: _Element): NextLayerProtocolOrAny {
    if (!_cached_decoder_for_NextLayerProtocolOrAny) { _cached_decoder_for_NextLayerProtocolOrAny = $._decode_inextensible_choice<NextLayerProtocolOrAny>({
    "CONTEXT 1": [ "nextLayerProtocol", $._decode_implicit<NextLayerProtocol>(() => _decode_NextLayerProtocol) ],
    "CONTEXT 2": [ "anyNextLayerProtocol", $._decode_implicit<AnyNextLayerProtocol>(() => _decode_AnyNextLayerProtocol) ]
}); }
    return _cached_decoder_for_NextLayerProtocolOrAny(el);
}

let _cached_encoder_for_NextLayerProtocolOrAny: $.ASN1Encoder<NextLayerProtocolOrAny> | null = null;

/**
 * @summary Encodes a(n) NextLayerProtocolOrAny into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NextLayerProtocolOrAny, encoded as an ASN.1 Element.
 */
export
function _encode_NextLayerProtocolOrAny (value: NextLayerProtocolOrAny, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NextLayerProtocolOrAny) { _cached_encoder_for_NextLayerProtocolOrAny = $._encode_choice<NextLayerProtocolOrAny>({
    "nextLayerProtocol": $._encode_implicit(_TagClass.context, 1, () => _encode_NextLayerProtocol, $.BER),
    "anyNextLayerProtocol": $._encode_implicit(_TagClass.context, 2, () => _encode_AnyNextLayerProtocol, $.BER),
}, $.BER); }
    return _cached_encoder_for_NextLayerProtocolOrAny(value, elGetter);
}


/* eslint-enable */
