/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary AocRateArg_rateArgExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocRateArg-rateArgExtension ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AocRateArg_rateArgExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AocRateArg_rateArgExtension: $.ASN1Decoder<AocRateArg_rateArgExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocRateArg_rateArgExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocRateArg_rateArgExtension (el: _Element): AocRateArg_rateArgExtension {
    if (!_cached_decoder_for_AocRateArg_rateArgExtension) { _cached_decoder_for_AocRateArg_rateArgExtension = $._decode_inextensible_choice<AocRateArg_rateArgExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_AocRateArg_rateArgExtension(el);
}

let _cached_encoder_for_AocRateArg_rateArgExtension: $.ASN1Encoder<AocRateArg_rateArgExtension> | null = null;

/**
 * @summary Encodes a(n) AocRateArg_rateArgExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocRateArg_rateArgExtension, encoded as an ASN.1 Element.
 */
export
function _encode_AocRateArg_rateArgExtension (value: AocRateArg_rateArgExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocRateArg_rateArgExtension) { _cached_encoder_for_AocRateArg_rateArgExtension = $._encode_choice<AocRateArg_rateArgExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_AocRateArg_rateArgExtension(value, elGetter);
}


/* eslint-enable */
