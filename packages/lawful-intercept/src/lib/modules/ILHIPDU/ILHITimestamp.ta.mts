/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as Common_Parameters from "../Common-Parameters/index.mjs";
// export { QualifiedDateTime, _decode_QualifiedDateTime, _encode_QualifiedDateTime } from "../Common-Parameters/QualifiedDateTime.ta.mjs";
// export { QualifiedMicrosecondDateTime, _decode_QualifiedMicrosecondDateTime, _encode_QualifiedMicrosecondDateTime } from "../Common-Parameters/QualifiedMicrosecondDateTime.ta.mjs";


/**
 * @summary ILHITimestamp
 * @description
 *
 * Normalized timestamp from the mapping function. The root alternatives are
 * the two ETSI TS 103 280 forms clause 7.3.2 requires:
 * `qualifiedDateTime` and `qualifiedMicrosecondDateTime`. V1.1.1 does not
 * say which of those two forms to select.
 *
 * `unqualifiedDateTime` is an extension addition. Annex B of V1.1.1 does not
 * define it. The comment in this module's ASN.1 says the alternative is used
 * when the timestamp cannot be mapped, for example because the timezone is
 * missing. The alternative is `NULL`, so it records that fact and carries no
 * time value.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.2, annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ILHITimestamp  ::=  CHOICE
 * {
 *     qualifiedDateTime                [1] Common-Parameters.QualifiedDateTime,
 *     qualifiedMicrosecondDateTime    [2] Common-Parameters.QualifiedMicrosecondDateTime,    
 *     ...,
 *     unqualifiedDateTime                [3] NULL
 *     -- The unqualifiedDateTime choice is used if the timestamp is not mappable with 
 *     -- the Mapping function because e.g. the timezone information is missing 
 * }
 * ```
 */
export
type ILHITimestamp =
    { qualifiedDateTime: Common_Parameters.QualifiedDateTime } /* CHOICE_ALT_ROOT */
    | { qualifiedMicrosecondDateTime: Common_Parameters.QualifiedMicrosecondDateTime } /* CHOICE_ALT_ROOT */
    | { unqualifiedDateTime: NULL } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ILHITimestamp: $.ASN1Decoder<ILHITimestamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ILHITimestamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ILHITimestamp (el: _Element): ILHITimestamp {
    if (!_cached_decoder_for_ILHITimestamp) { _cached_decoder_for_ILHITimestamp = $._decode_extensible_choice<ILHITimestamp>({
    "CONTEXT 1": [ "qualifiedDateTime", $._decode_implicit<Common_Parameters.QualifiedDateTime>(() => Common_Parameters._decode_QualifiedDateTime) ],
    "CONTEXT 2": [ "qualifiedMicrosecondDateTime", $._decode_implicit<Common_Parameters.QualifiedMicrosecondDateTime>(() => Common_Parameters._decode_QualifiedMicrosecondDateTime) ],
    "CONTEXT 3": [ "unqualifiedDateTime", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ILHITimestamp(el);
}

let _cached_encoder_for_ILHITimestamp: $.ASN1Encoder<ILHITimestamp> | null = null;

/**
 * @summary Encodes a(n) ILHITimestamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ILHITimestamp, encoded as an ASN.1 Element.
 */
export
function _encode_ILHITimestamp (value: ILHITimestamp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ILHITimestamp) { _cached_encoder_for_ILHITimestamp = $._encode_choice<ILHITimestamp>({
    "qualifiedDateTime": $._encode_implicit(_TagClass.context, 1, () => Common_Parameters._encode_QualifiedDateTime, $.BER),
    "qualifiedMicrosecondDateTime": $._encode_implicit(_TagClass.context, 2, () => Common_Parameters._encode_QualifiedMicrosecondDateTime, $.BER),
    "unqualifiedDateTime": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ILHITimestamp(value, elGetter);
}


/* eslint-enable */
