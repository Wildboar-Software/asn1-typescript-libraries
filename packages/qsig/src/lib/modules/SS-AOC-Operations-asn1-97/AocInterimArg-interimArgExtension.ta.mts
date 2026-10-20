/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary AocInterimArg_interimArgExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocInterimArg-interimArgExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{AOCExtSet}},
 *     multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 * }
 * ```
 */
export
type AocInterimArg_interimArgExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AocInterimArg_interimArgExtension: $.ASN1Decoder<AocInterimArg_interimArgExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocInterimArg_interimArgExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocInterimArg_interimArgExtension (el: _Element): AocInterimArg_interimArgExtension {
    if (!_cached_decoder_for_AocInterimArg_interimArgExtension) { _cached_decoder_for_AocInterimArg_interimArgExtension = $._decode_inextensible_choice<AocInterimArg_interimArgExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_AocInterimArg_interimArgExtension(el);
}

let _cached_encoder_for_AocInterimArg_interimArgExtension: $.ASN1Encoder<AocInterimArg_interimArgExtension> | null = null;

/**
 * @summary Encodes a(n) AocInterimArg_interimArgExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocInterimArg_interimArgExtension, encoded as an ASN.1 Element.
 */
export
function _encode_AocInterimArg_interimArgExtension (value: AocInterimArg_interimArgExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocInterimArg_interimArgExtension) { _cached_encoder_for_AocInterimArg_interimArgExtension = $._encode_choice<AocInterimArg_interimArgExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_AocInterimArg_interimArgExtension(value, elGetter);
}

/* eslint-enable */
