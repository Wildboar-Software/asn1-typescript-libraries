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
 * @summary ParameterValues_terminationTimeout_eventId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-terminationTimeout-eventId ::= CHOICE {
 *     integer INTEGER,
 *     nul NULL
 * }
 * ```
 */
export
type ParameterValues_terminationTimeout_eventId =
    { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { nul: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ParameterValues_terminationTimeout_eventId: $.ASN1Decoder<ParameterValues_terminationTimeout_eventId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_terminationTimeout_eventId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_terminationTimeout_eventId (el: _Element): ParameterValues_terminationTimeout_eventId {
    if (!_cached_decoder_for_ParameterValues_terminationTimeout_eventId) { _cached_decoder_for_ParameterValues_terminationTimeout_eventId = $._decode_inextensible_choice<ParameterValues_terminationTimeout_eventId>({
    "UNIVERSAL 2": [ "integer", $._decodeInteger ],
    "UNIVERSAL 5": [ "nul", $._decodeNull ]
}); }
    return _cached_decoder_for_ParameterValues_terminationTimeout_eventId(el);
}

let _cached_encoder_for_ParameterValues_terminationTimeout_eventId: $.ASN1Encoder<ParameterValues_terminationTimeout_eventId> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_terminationTimeout_eventId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_terminationTimeout_eventId, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_terminationTimeout_eventId (value: ParameterValues_terminationTimeout_eventId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_terminationTimeout_eventId) { _cached_encoder_for_ParameterValues_terminationTimeout_eventId = $._encode_choice<ParameterValues_terminationTimeout_eventId>({
    "integer": $._encodeInteger,
    "nul": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ParameterValues_terminationTimeout_eventId(value, elGetter);
}


/* eslint-enable */
