/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary PumoArg_extension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumoArg-extension ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PumoArg_extension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PumoArg_extension: $.ASN1Decoder<PumoArg_extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumoArg_extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumoArg_extension (el: _Element): PumoArg_extension {
    if (!_cached_decoder_for_PumoArg_extension) { _cached_decoder_for_PumoArg_extension = $._decode_inextensible_choice<PumoArg_extension>({
    "CONTEXT 3": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 4": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_PumoArg_extension(el);
}

let _cached_encoder_for_PumoArg_extension: $.ASN1Encoder<PumoArg_extension> | null = null;

/**
 * @summary Encodes a(n) PumoArg_extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumoArg_extension, encoded as an ASN.1 Element.
 */
export
function _encode_PumoArg_extension (value: PumoArg_extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumoArg_extension) { _cached_encoder_for_PumoArg_extension = $._encode_choice<PumoArg_extension>({
    "single": $._encode_implicit(_TagClass.context, 3, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_PumoArg_extension(value, elGetter);
}


/* eslint-enable */
