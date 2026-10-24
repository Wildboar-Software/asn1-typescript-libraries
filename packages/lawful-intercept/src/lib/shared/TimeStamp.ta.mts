/* eslint-disable */
import {
    UTCTime,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocalTimeStamp, _decode_LocalTimeStamp, _encode_LocalTimeStamp } from "./LocalTimeStamp.ta.mjs";
// export { LocalTimeStamp, _decode_LocalTimeStamp, _encode_LocalTimeStamp } from "./LocalTimeStamp.ta.mjs";


/**
 * @summary TimeStamp
 * @description
 * 
 * Date and time of the event that triggered the IRI record. Minimum resolution
 * is one second. Resolution is the smallest incremental change that can be
 * measured for time, expressed with a definite number of decimal digits or
 * bits. `localTime` is local time with a winter or summer indication and, in
 * this module, without a UTC offset. `utcTime` is UTC. The parameter shall be
 * able to show which of those forms is used. The NWO, access provider, or
 * service provider normally defines which form is sent. GSM and GPRS tables map
 * the event date and event time to this parameter.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause A.8.4, clause
 * B.5.3, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
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
