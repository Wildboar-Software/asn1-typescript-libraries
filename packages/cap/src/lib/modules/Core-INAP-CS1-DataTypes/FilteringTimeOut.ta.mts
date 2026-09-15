/* eslint-disable */
import {
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
import { Duration, _decode_Duration, _encode_Duration } from "../Core-INAP-CS1-DataTypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../Core-INAP-CS1-DataTypes/Duration.ta.mjs";
import { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../Core-INAP-CS1-DataTypes/DateAndTime.ta.mjs";
// export { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../Core-INAP-CS1-DataTypes/DateAndTime.ta.mjs";


/**
 * @summary FilteringTimeOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilteringTimeOut       ::=  CHOICE {
 *      duration     [0] Duration,
 *      stopTime     [1] DateAndTime
 *      }
 * ```
 */
export
type FilteringTimeOut =
    { duration: Duration } /* CHOICE_ALT_ROOT */
    | { stopTime: DateAndTime } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FilteringTimeOut: $.ASN1Decoder<FilteringTimeOut> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilteringTimeOut
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilteringTimeOut (el: _Element): FilteringTimeOut {
    if (!_cached_decoder_for_FilteringTimeOut) { _cached_decoder_for_FilteringTimeOut = $._decode_inextensible_choice<FilteringTimeOut>({
    "CONTEXT 0": [ "duration", $._decode_implicit<Duration>(() => _decode_Duration) ],
    "CONTEXT 1": [ "stopTime", $._decode_implicit<DateAndTime>(() => _decode_DateAndTime) ]
}); }
    return _cached_decoder_for_FilteringTimeOut(el);
}

let _cached_encoder_for_FilteringTimeOut: $.ASN1Encoder<FilteringTimeOut> | null = null;

/**
 * @summary Encodes a(n) FilteringTimeOut into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilteringTimeOut, encoded as an ASN.1 Element.
 */
export
function _encode_FilteringTimeOut (value: FilteringTimeOut, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilteringTimeOut) { _cached_encoder_for_FilteringTimeOut = $._encode_choice<FilteringTimeOut>({
    "duration": $._encode_implicit(_TagClass.context, 0, () => _encode_Duration, $.BER),
    "stopTime": $._encode_implicit(_TagClass.context, 1, () => _encode_DateAndTime, $.BER),
}, $.BER); }
    return _cached_encoder_for_FilteringTimeOut(value, elGetter);
}


/* eslint-enable */
