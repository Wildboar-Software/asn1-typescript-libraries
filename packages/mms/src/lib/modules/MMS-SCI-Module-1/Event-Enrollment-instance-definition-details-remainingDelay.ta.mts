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
 * @summary Event_Enrollment_instance_definition_details_remainingDelay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Enrollment-instance-definition-details-remainingDelay ::= CHOICE {
 *     time [7] IMPLICIT INTEGER,
 *     forever [8] IMPLICIT NULL
 * }
 * ```
 */
export
type Event_Enrollment_instance_definition_details_remainingDelay =
    { time: INTEGER } /* CHOICE_ALT_ROOT */
    | { forever: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Event_Enrollment_instance_definition_details_remainingDelay: $.ASN1Decoder<Event_Enrollment_instance_definition_details_remainingDelay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Enrollment_instance_definition_details_remainingDelay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Enrollment_instance_definition_details_remainingDelay (el: _Element): Event_Enrollment_instance_definition_details_remainingDelay {
    if (!_cached_decoder_for_Event_Enrollment_instance_definition_details_remainingDelay) { _cached_decoder_for_Event_Enrollment_instance_definition_details_remainingDelay = $._decode_inextensible_choice<Event_Enrollment_instance_definition_details_remainingDelay>({
    "CONTEXT 7": [ "time", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 8": [ "forever", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Event_Enrollment_instance_definition_details_remainingDelay(el);
}

let _cached_encoder_for_Event_Enrollment_instance_definition_details_remainingDelay: $.ASN1Encoder<Event_Enrollment_instance_definition_details_remainingDelay> | null = null;

/**
 * @summary Encodes a(n) Event_Enrollment_instance_definition_details_remainingDelay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Enrollment_instance_definition_details_remainingDelay, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Enrollment_instance_definition_details_remainingDelay (value: Event_Enrollment_instance_definition_details_remainingDelay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Enrollment_instance_definition_details_remainingDelay) { _cached_encoder_for_Event_Enrollment_instance_definition_details_remainingDelay = $._encode_choice<Event_Enrollment_instance_definition_details_remainingDelay>({
    "time": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "forever": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Event_Enrollment_instance_definition_details_remainingDelay(value, elGetter);
}


/* eslint-enable */
