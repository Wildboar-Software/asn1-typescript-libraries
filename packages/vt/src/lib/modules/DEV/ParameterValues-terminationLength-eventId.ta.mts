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
 * @summary ParameterValues_terminationLength_eventId
 * @description
 *
 * Agreed event-id for update-count termination. `integer` is a
 * non-zero positive integer; `nul` is `"null"`. ISO/IEC 9040:1997
 * §23.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-terminationLength-eventId ::= CHOICE {
 *     integer [1] IMPLICIT INTEGER,
 *     nul     [2] IMPLICIT NULL
 * }
 * ```
 */
export
type ParameterValues_terminationLength_eventId =
    { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { nul: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ParameterValues_terminationLength_eventId: $.ASN1Decoder<ParameterValues_terminationLength_eventId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_terminationLength_eventId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_terminationLength_eventId (el: _Element): ParameterValues_terminationLength_eventId {
    if (!_cached_decoder_for_ParameterValues_terminationLength_eventId) { _cached_decoder_for_ParameterValues_terminationLength_eventId = $._decode_inextensible_choice<ParameterValues_terminationLength_eventId>({
    "CONTEXT 1": [ "integer", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "nul", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ParameterValues_terminationLength_eventId(el);
}

let _cached_encoder_for_ParameterValues_terminationLength_eventId: $.ASN1Encoder<ParameterValues_terminationLength_eventId> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_terminationLength_eventId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_terminationLength_eventId, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_terminationLength_eventId (value: ParameterValues_terminationLength_eventId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_terminationLength_eventId) { _cached_encoder_for_ParameterValues_terminationLength_eventId = $._encode_choice<ParameterValues_terminationLength_eventId>({
    "integer": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "nul": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ParameterValues_terminationLength_eventId(value, elGetter);
}


/* eslint-enable */
