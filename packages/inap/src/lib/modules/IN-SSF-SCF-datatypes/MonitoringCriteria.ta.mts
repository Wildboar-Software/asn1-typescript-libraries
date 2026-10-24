/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";
import { type Interval, _decode_Interval, _encode_Interval } from "../IN-SSF-SCF-datatypes/Interval.ta.mjs";
// export { Interval, _decode_Interval, _encode_Interval } from "../IN-SSF-SCF-datatypes/Interval.ta.mjs";


/**
 * @summary MonitoringCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringCriteria  ::=  CHOICE {
 *   threshold  [0]  Integer4,
 *   interval   [1]  Interval
 * }
 * ```
 */
export
type MonitoringCriteria =
    { threshold: Integer4 } /* CHOICE_ALT_ROOT */
    | { interval: Interval } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MonitoringCriteria: $.ASN1Decoder<MonitoringCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitoringCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitoringCriteria (el: _Element): MonitoringCriteria {
    if (!_cached_decoder_for_MonitoringCriteria) { _cached_decoder_for_MonitoringCriteria = $._decode_inextensible_choice<MonitoringCriteria>({
    "CONTEXT 0": [ "threshold", $._decode_implicit<Integer4>(() => _decode_Integer4) ],
    "CONTEXT 1": [ "interval", $._decode_implicit<Interval>(() => _decode_Interval) ]
}); }
    return _cached_decoder_for_MonitoringCriteria(el);
}

let _cached_encoder_for_MonitoringCriteria: $.ASN1Encoder<MonitoringCriteria> | null = null;

/**
 * @summary Encodes a(n) MonitoringCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitoringCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_MonitoringCriteria (value: MonitoringCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitoringCriteria) { _cached_encoder_for_MonitoringCriteria = $._encode_choice<MonitoringCriteria>({
    "threshold": $._encode_implicit(_TagClass.context, 0, () => _encode_Integer4, $.BER),
    "interval": $._encode_implicit(_TagClass.context, 1, () => _encode_Interval, $.BER),
}, $.BER); }
    return _cached_encoder_for_MonitoringCriteria(value, elGetter);
}


/* eslint-enable */
