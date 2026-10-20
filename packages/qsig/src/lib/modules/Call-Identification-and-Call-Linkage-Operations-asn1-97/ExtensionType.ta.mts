/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary ExtensionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionType  ::=  CHOICE {
 *     extension [3] Extension {{ExampleExtSet}},
 *     sequenceOfExt [4] IMPLICIT SEQUENCE OF Extension {{ExampleExtSet}}
 * }
 * ```
 */
export
type ExtensionType =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExt: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtensionType: $.ASN1Decoder<ExtensionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionType (el: _Element): ExtensionType {
    if (!_cached_decoder_for_ExtensionType) { _cached_decoder_for_ExtensionType = $._decode_inextensible_choice<ExtensionType>({
    "CONTEXT 3": [ "extension", $._decode_explicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 4": [ "sequenceOfExt", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_ExtensionType(el);
}

let _cached_encoder_for_ExtensionType: $.ASN1Encoder<ExtensionType> | null = null;

/**
 * @summary Encodes a(n) ExtensionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionType, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionType (value: ExtensionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionType) { _cached_encoder_for_ExtensionType = $._encode_choice<ExtensionType>({
    "extension": $._encode_explicit(_TagClass.context, 3, () => _encode_Extension, $.BER),
    "sequenceOfExt": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ExtensionType(value, elGetter);
}


/* eslint-enable */
