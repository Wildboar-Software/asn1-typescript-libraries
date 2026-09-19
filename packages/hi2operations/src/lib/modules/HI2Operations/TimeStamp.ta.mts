/* eslint-disable */
import {
    UTCTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocalTimeStamp, _decode_LocalTimeStamp, _encode_LocalTimeStamp } from "../HI2Operations/LocalTimeStamp.ta.mjs";
// export { LocalTimeStamp, _decode_LocalTimeStamp, _encode_LocalTimeStamp } from "../HI2Operations/LocalTimeStamp.ta.mjs";


/**
 * @summary TimeStamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStamp  ::=  CHOICE
 * {
 * -- The minimum resolution required is one second.
 * -- "Resolution" is the smallest incremental change that can be measured for time and
 * -- is expressed with a definite number of decimal digits or bits.
 *     localTime            [0] LocalTimeStamp,
 *     utcTime                [1] UTCTime
 * }
 * ```
 */
export
type TimeStamp =
    { localTime: LocalTimeStamp } /* CHOICE_ALT_ROOT */
    | { utcTime: UTCTime } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TimeStamp: $.ASN1Decoder<TimeStamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeStamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeStamp (el: _Element): TimeStamp {
    if (!_cached_decoder_for_TimeStamp) { _cached_decoder_for_TimeStamp = $._decode_inextensible_choice<TimeStamp>({
    "CONTEXT 0": [ "localTime", $._decode_implicit<LocalTimeStamp>(() => _decode_LocalTimeStamp) ],
    "CONTEXT 1": [ "utcTime", $._decode_implicit<UTCTime>(() => $._decodeUTCTime) ]
}); }
    return _cached_decoder_for_TimeStamp(el);
}

let _cached_encoder_for_TimeStamp: $.ASN1Encoder<TimeStamp> | null = null;

/**
 * @summary Encodes a(n) TimeStamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStamp, encoded as an ASN.1 Element.
 */
export
function _encode_TimeStamp (value: TimeStamp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeStamp) { _cached_encoder_for_TimeStamp = $._encode_choice<TimeStamp>({
    "localTime": $._encode_implicit(_TagClass.context, 0, () => _encode_LocalTimeStamp, $.BER),
    "utcTime": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER),
}, $.BER); }
    return _cached_encoder_for_TimeStamp(value, elGetter);
}


/* eslint-enable */
