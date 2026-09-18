/* eslint-disable */
import {
    PrintableString,
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
 * @summary FontAssignment_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FontAssignment-value ::= CHOICE {
 *     vtadhoc [1] IMPLICIT PrintableString,
 *     isonnnn [2] ANY
 * }
 * ```
 */
export
type FontAssignment_value =
    { vtadhoc: PrintableString } /* CHOICE_ALT_ROOT */
    | { isonnnn: _Element } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FontAssignment_value: $.ASN1Decoder<FontAssignment_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FontAssignment_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FontAssignment_value (el: _Element): FontAssignment_value {
    if (!_cached_decoder_for_FontAssignment_value) { _cached_decoder_for_FontAssignment_value = $._decode_inextensible_choice<FontAssignment_value>({
    "CONTEXT 1": [ "vtadhoc", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ],
    "CONTEXT 2": [ "isonnnn", $._decode_explicit<_Element>(() => $._decodeAny) ]
}); }
    return _cached_decoder_for_FontAssignment_value(el);
}

let _cached_encoder_for_FontAssignment_value: $.ASN1Encoder<FontAssignment_value> | null = null;

/**
 * @summary Encodes a(n) FontAssignment_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FontAssignment_value, encoded as an ASN.1 Element.
 */
export
function _encode_FontAssignment_value (value: FontAssignment_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FontAssignment_value) { _cached_encoder_for_FontAssignment_value = $._encode_choice<FontAssignment_value>({
    "vtadhoc": $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER),
    "isonnnn": $._encode_explicit(_TagClass.context, 2, () => $._encodeAny, $.BER),
}, $.BER); }
    return _cached_encoder_for_FontAssignment_value(value, elGetter);
}


/* eslint-enable */
