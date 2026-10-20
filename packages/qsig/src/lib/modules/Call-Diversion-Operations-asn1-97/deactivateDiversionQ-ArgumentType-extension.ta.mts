/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary deactivateDiversionQ_ArgumentType_extension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deactivateDiversionQ-ArgumentType-extension ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type deactivateDiversionQ_ArgumentType_extension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_deactivateDiversionQ_ArgumentType_extension: $.ASN1Decoder<deactivateDiversionQ_ArgumentType_extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) deactivateDiversionQ_ArgumentType_extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_deactivateDiversionQ_ArgumentType_extension (el: _Element): deactivateDiversionQ_ArgumentType_extension {
    if (!_cached_decoder_for_deactivateDiversionQ_ArgumentType_extension) { _cached_decoder_for_deactivateDiversionQ_ArgumentType_extension = $._decode_inextensible_choice<deactivateDiversionQ_ArgumentType_extension>({
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_deactivateDiversionQ_ArgumentType_extension(el);
}

let _cached_encoder_for_deactivateDiversionQ_ArgumentType_extension: $.ASN1Encoder<deactivateDiversionQ_ArgumentType_extension> | null = null;

/**
 * @summary Encodes a(n) deactivateDiversionQ_ArgumentType_extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The deactivateDiversionQ_ArgumentType_extension, encoded as an ASN.1 Element.
 */
export
function _encode_deactivateDiversionQ_ArgumentType_extension (value: deactivateDiversionQ_ArgumentType_extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_deactivateDiversionQ_ArgumentType_extension) { _cached_encoder_for_deactivateDiversionQ_ArgumentType_extension = $._encode_choice<deactivateDiversionQ_ArgumentType_extension>({
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_deactivateDiversionQ_ArgumentType_extension(value, elGetter);
}


/* eslint-enable */
