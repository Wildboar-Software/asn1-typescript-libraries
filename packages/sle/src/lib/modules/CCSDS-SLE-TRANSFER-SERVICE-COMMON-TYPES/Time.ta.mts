/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimeCCSDS, _decode_TimeCCSDS, _encode_TimeCCSDS } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/TimeCCSDS.ta.mjs";
import { TimeCCSDSpico, _decode_TimeCCSDSpico, _encode_TimeCCSDSpico } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/TimeCCSDSpico.ta.mjs";


/**
 * @summary Time
 * @description
 * 
 * UTC time in the CCSDS day-segmented time code, epoch 1958-01-01, with a
 * 16-bit day segment. `ccsdsFormat` has microsecond resolution.
 * `ccsdsPicoFormat` has picosecond resolution. The provider chooses the
 * resolution, and the user is expected to accept either. Earth receive time is
 * accurate to within one millisecond or better.
 * 
 * CCSDS 911.1-B-5, section 3.1.7 and annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Time                     ::=    CHOICE
 * { ccsdsFormat        [0]   TimeCCSDS
 * , ccsdsPicoFormat    [1]   TimeCCSDSpico
 * }
 * ```
 */
export
type Time =
    { ccsdsFormat: TimeCCSDS } /* CHOICE_ALT_ROOT */
    | { ccsdsPicoFormat: TimeCCSDSpico } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Time: $.ASN1Decoder<Time> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Time (el: _Element): Time {
    if (!_cached_decoder_for_Time) { _cached_decoder_for_Time = $._decode_inextensible_choice<Time>({
    "CONTEXT 0": [ "ccsdsFormat", $._decode_implicit<TimeCCSDS>(() => _decode_TimeCCSDS) ],
    "CONTEXT 1": [ "ccsdsPicoFormat", $._decode_implicit<TimeCCSDSpico>(() => _decode_TimeCCSDSpico) ]
}); }
    return _cached_decoder_for_Time(el);
}

let _cached_encoder_for_Time: $.ASN1Encoder<Time> | null = null;

/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export
function _encode_Time (value: Time, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Time) { _cached_encoder_for_Time = $._encode_choice<Time>({
    "ccsdsFormat": $._encode_implicit(_TagClass.context, 0, () => _encode_TimeCCSDS, $.BER),
    "ccsdsPicoFormat": $._encode_implicit(_TagClass.context, 1, () => _encode_TimeCCSDSpico, $.BER),
}, $.BER); }
    return _cached_encoder_for_Time(value, elGetter);
}


/* eslint-enable */
