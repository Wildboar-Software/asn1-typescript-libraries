/* eslint-disable */
import {
    INTEGER,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParameterValues_structure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-structure ::= CHOICE {
 *     nonParametric NULL,
 *     numberElements INTEGER
 * }
 * ```
 */
export
type ParameterValues_structure =
    { nonParametric: NULL } /* CHOICE_ALT_ROOT */
    | { numberElements: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ParameterValues_structure: $.ASN1Decoder<ParameterValues_structure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_structure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_structure (el: _Element): ParameterValues_structure {
    if (!_cached_decoder_for_ParameterValues_structure) { _cached_decoder_for_ParameterValues_structure = $._decode_inextensible_choice<ParameterValues_structure>({
    "UNIVERSAL 5": [ "nonParametric", $._decodeNull ],
    "UNIVERSAL 2": [ "numberElements", $._decodeInteger ]
}); }
    return _cached_decoder_for_ParameterValues_structure(el);
}

let _cached_encoder_for_ParameterValues_structure: $.ASN1Encoder<ParameterValues_structure> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_structure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_structure, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_structure (value: ParameterValues_structure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_structure) { _cached_encoder_for_ParameterValues_structure = $._encode_choice<ParameterValues_structure>({
    "nonParametric": $._encodeNull,
    "numberElements": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_ParameterValues_structure(value, elGetter);
}


/* eslint-enable */
