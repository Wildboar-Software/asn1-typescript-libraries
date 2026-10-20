/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary AocFinalArg_finalArgExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocFinalArg-finalArgExtension ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AocFinalArg_finalArgExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AocFinalArg_finalArgExtension: $.ASN1Decoder<AocFinalArg_finalArgExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocFinalArg_finalArgExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocFinalArg_finalArgExtension (el: _Element): AocFinalArg_finalArgExtension {
    if (!_cached_decoder_for_AocFinalArg_finalArgExtension) { _cached_decoder_for_AocFinalArg_finalArgExtension = $._decode_inextensible_choice<AocFinalArg_finalArgExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_AocFinalArg_finalArgExtension(el);
}

let _cached_encoder_for_AocFinalArg_finalArgExtension: $.ASN1Encoder<AocFinalArg_finalArgExtension> | null = null;

/**
 * @summary Encodes a(n) AocFinalArg_finalArgExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocFinalArg_finalArgExtension, encoded as an ASN.1 Element.
 */
export
function _encode_AocFinalArg_finalArgExtension (value: AocFinalArg_finalArgExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocFinalArg_finalArgExtension) { _cached_encoder_for_AocFinalArg_finalArgExtension = $._encode_choice<AocFinalArg_finalArgExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_AocFinalArg_finalArgExtension(value, elGetter);
}


/* eslint-enable */
