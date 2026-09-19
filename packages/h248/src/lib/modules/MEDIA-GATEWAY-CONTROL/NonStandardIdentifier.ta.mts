/* eslint-disable */
import {
    IA5String,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { H221NonStandard, _decode_H221NonStandard, _encode_H221NonStandard } from "../MEDIA-GATEWAY-CONTROL/H221NonStandard.ta.mjs";
// export { H221NonStandard, _decode_H221NonStandard, _encode_H221NonStandard } from "../MEDIA-GATEWAY-CONTROL/H221NonStandard.ta.mjs";


/**
 * @summary NonStandardIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonStandardIdentifier  ::=  CHOICE
 *     {
 *         object                        [0] OBJECT IDENTIFIER,
 *         h221NonStandard                [1] H221NonStandard,
 *         experimental                [2] IA5String(SIZE(8)),
 *         -- first two characters should be "X-" or "X+"
 *         ...
 *     }
 * ```
 */
export
type NonStandardIdentifier =
    { object: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { h221NonStandard: H221NonStandard } /* CHOICE_ALT_ROOT */
    | { experimental: IA5String } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_NonStandardIdentifier: $.ASN1Decoder<NonStandardIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonStandardIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NonStandardIdentifier (el: _Element): NonStandardIdentifier {
    if (!_cached_decoder_for_NonStandardIdentifier) { _cached_decoder_for_NonStandardIdentifier = $._decode_extensible_choice<NonStandardIdentifier>({
    "CONTEXT 0": [ "object", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "h221NonStandard", $._decode_implicit<H221NonStandard>(() => _decode_H221NonStandard) ],
    "CONTEXT 2": [ "experimental", $._decode_implicit<IA5String>(() => $._decodeIA5String) ]
}); }
    return _cached_decoder_for_NonStandardIdentifier(el);
}

let _cached_encoder_for_NonStandardIdentifier: $.ASN1Encoder<NonStandardIdentifier> | null = null;

/**
 * @summary Encodes a(n) NonStandardIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonStandardIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_NonStandardIdentifier (value: NonStandardIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NonStandardIdentifier) { _cached_encoder_for_NonStandardIdentifier = $._encode_choice<NonStandardIdentifier>({
    "object": $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER),
    "h221NonStandard": $._encode_implicit(_TagClass.context, 1, () => _encode_H221NonStandard, $.BER),
    "experimental": $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER),
}, $.BER); }
    return _cached_encoder_for_NonStandardIdentifier(value, elGetter);
}


/* eslint-enable */
