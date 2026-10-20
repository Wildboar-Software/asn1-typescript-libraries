/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary AocCompleteArg_completeArgExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocCompleteArg-completeArgExtension ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AocCompleteArg_completeArgExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AocCompleteArg_completeArgExtension: $.ASN1Decoder<AocCompleteArg_completeArgExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocCompleteArg_completeArgExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocCompleteArg_completeArgExtension (el: _Element): AocCompleteArg_completeArgExtension {
    if (!_cached_decoder_for_AocCompleteArg_completeArgExtension) { _cached_decoder_for_AocCompleteArg_completeArgExtension = $._decode_inextensible_choice<AocCompleteArg_completeArgExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_AocCompleteArg_completeArgExtension(el);
}

let _cached_encoder_for_AocCompleteArg_completeArgExtension: $.ASN1Encoder<AocCompleteArg_completeArgExtension> | null = null;

/**
 * @summary Encodes a(n) AocCompleteArg_completeArgExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocCompleteArg_completeArgExtension, encoded as an ASN.1 Element.
 */
export
function _encode_AocCompleteArg_completeArgExtension (value: AocCompleteArg_completeArgExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocCompleteArg_completeArgExtension) { _cached_encoder_for_AocCompleteArg_completeArgExtension = $._encode_choice<AocCompleteArg_completeArgExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_AocCompleteArg_completeArgExtension(value, elGetter);
}


/* eslint-enable */
