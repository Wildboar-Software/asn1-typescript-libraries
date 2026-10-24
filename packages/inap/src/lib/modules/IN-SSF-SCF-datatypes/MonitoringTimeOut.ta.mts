/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Duration, _decode_Duration, _encode_Duration } from "../IN-SSF-SCF-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-SSF-SCF-datatypes/Duration.ta.mjs";
import { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-SSF-SCF-datatypes/DateAndTime.ta.mjs";
// export { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-SSF-SCF-datatypes/DateAndTime.ta.mjs";


/**
 * @summary MonitoringTimeOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringTimeOut  ::=  CHOICE {
 *   duration  [0]  Duration,
 *   stopTime  [1]  DateAndTime
 * }
 * ```
 */
export
type MonitoringTimeOut =
    { duration: Duration } /* CHOICE_ALT_ROOT */
    | { stopTime: DateAndTime } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MonitoringTimeOut: $.ASN1Decoder<MonitoringTimeOut> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitoringTimeOut
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitoringTimeOut (el: _Element): MonitoringTimeOut {
    if (!_cached_decoder_for_MonitoringTimeOut) { _cached_decoder_for_MonitoringTimeOut = $._decode_inextensible_choice<MonitoringTimeOut>({
    "CONTEXT 0": [ "duration", $._decode_implicit<Duration>(() => _decode_Duration) ],
    "CONTEXT 1": [ "stopTime", $._decode_implicit<DateAndTime>(() => _decode_DateAndTime) ]
}); }
    return _cached_decoder_for_MonitoringTimeOut(el);
}

let _cached_encoder_for_MonitoringTimeOut: $.ASN1Encoder<MonitoringTimeOut> | null = null;

/**
 * @summary Encodes a(n) MonitoringTimeOut into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitoringTimeOut, encoded as an ASN.1 Element.
 */
export
function _encode_MonitoringTimeOut (value: MonitoringTimeOut, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitoringTimeOut) { _cached_encoder_for_MonitoringTimeOut = $._encode_choice<MonitoringTimeOut>({
    "duration": $._encode_implicit(_TagClass.context, 0, () => _encode_Duration, $.BER),
    "stopTime": $._encode_implicit(_TagClass.context, 1, () => _encode_DateAndTime, $.BER),
}, $.BER); }
    return _cached_encoder_for_MonitoringTimeOut(value, elGetter);
}


/* eslint-enable */
