/* eslint-disable */
import {
    type GeneralizedTime,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { MicroSecondTimeStamp, _decode_MicroSecondTimeStamp, _encode_MicroSecondTimeStamp } from "../LI-PS-PDU/MicroSecondTimeStamp.ta.mjs";


/**
 * @summary OriginalTimestamp
 * @description
 *
 * Timestamp as received, kept beside the normalized value. `timeStamp` is a
 * `GeneralizedTime`. `microSecondTimeStamp` is the microsecond timestamp
 * imported from `LI-PS-PDU`. V1.1.1 does not say which alternative to choose.
 *
 * `otherTimeStamp` is an extension addition. Annex B of V1.1.1 does not
 * define it. The comment in this module's ASN.1 says it contains a value
 * when the received timestamp cannot be placed in `timeStamp` or
 * `microSecondTimeStamp`.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.2, annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginalTimestamp  ::=  CHOICE
 * {
 *     timeStamp                [1] GeneralizedTime,
 *     microSecondTimeStamp    [2] LI-PS-PDU.MicroSecondTimeStamp,
 *     ...,
 *     otherTimeStamp            [3] UTF8String
 *     -- The otherTimeStamp choice contains a value if for any reason the received timestamp         
 *     -- is not mappable into the fields timeStamp or the microSecondTimeStamp 
 * }
 * ```
 */
export
type OriginalTimestamp =
    { timeStamp: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { microSecondTimeStamp: LI_PS_PDU.MicroSecondTimeStamp } /* CHOICE_ALT_ROOT */
    | { otherTimeStamp: UTF8String } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_OriginalTimestamp: $.ASN1Decoder<OriginalTimestamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalTimestamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginalTimestamp (el: _Element): OriginalTimestamp {
    if (!_cached_decoder_for_OriginalTimestamp) { _cached_decoder_for_OriginalTimestamp = $._decode_extensible_choice<OriginalTimestamp>({
    "CONTEXT 1": [ "timeStamp", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 2": [ "microSecondTimeStamp", $._decode_implicit<LI_PS_PDU.MicroSecondTimeStamp>(() => LI_PS_PDU._decode_MicroSecondTimeStamp) ],
    "CONTEXT 3": [ "otherTimeStamp", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_OriginalTimestamp(el);
}

let _cached_encoder_for_OriginalTimestamp: $.ASN1Encoder<OriginalTimestamp> | null = null;

/**
 * @summary Encodes a(n) OriginalTimestamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalTimestamp, encoded as an ASN.1 Element.
 */
export
function _encode_OriginalTimestamp (value: OriginalTimestamp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginalTimestamp) { _cached_encoder_for_OriginalTimestamp = $._encode_choice<OriginalTimestamp>({
    "timeStamp": $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER),
    "microSecondTimeStamp": $._encode_implicit(_TagClass.context, 2, () => LI_PS_PDU._encode_MicroSecondTimeStamp, $.BER),
    "otherTimeStamp": $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_OriginalTimestamp(value, elGetter);
}


/* eslint-enable */
