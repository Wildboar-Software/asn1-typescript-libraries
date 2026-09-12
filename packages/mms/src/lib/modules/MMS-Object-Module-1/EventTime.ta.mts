/* eslint-disable */
import {
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
import { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
// export { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary EventTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTime  ::=  CHOICE {
 *   timeOfDay                               [0] IMPLICIT TimeOfDay,
 *   timeSequenceIdentifier                  [1] IMPLICIT Unsigned32,
 *   undefined                               [2] IMPLICIT NULL
 * }
 * ```
 */
export
type EventTime =
    { timeOfDay: TimeOfDay } /* CHOICE_ALT_ROOT */
    | { timeSequenceIdentifier: Unsigned32 } /* CHOICE_ALT_ROOT */
    | { undefined: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EventTime: $.ASN1Decoder<EventTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventTime (el: _Element): EventTime {
    if (!_cached_decoder_for_EventTime) { _cached_decoder_for_EventTime = $._decode_inextensible_choice<EventTime>({
    "CONTEXT 0": [ "timeOfDay", $._decode_implicit<TimeOfDay>(() => _decode_TimeOfDay) ],
    "CONTEXT 1": [ "timeSequenceIdentifier", $._decode_implicit<Unsigned32>(() => _decode_Unsigned32) ],
    "CONTEXT 2": [ "undefined", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_EventTime(el);
}

let _cached_encoder_for_EventTime: $.ASN1Encoder<EventTime> | null = null;

/**
 * @summary Encodes a(n) EventTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventTime, encoded as an ASN.1 Element.
 */
export
function _encode_EventTime (value: EventTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventTime) { _cached_encoder_for_EventTime = $._encode_choice<EventTime>({
    "timeOfDay": $._encode_implicit(_TagClass.context, 0, () => _encode_TimeOfDay, $.BER),
    "timeSequenceIdentifier": $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER),
    "undefined": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_EventTime(value, elGetter);
}


/* eslint-enable */
