/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RawMLPResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RawMLPResponse  ::=  CHOICE
 * {
 *     -- The following parameter contains a copy of unparsed XML code of the
 *     -- MLP response message, i.e. the entire XML document containing
 *     -- a <slia> (described in OMA-TS-MLP-V3_5-20181211-C [20], clause 5.2.3.2.2) or
 *     -- a <slirep> (described in OMA-TS-MLP-V3_5-20181211-C [20], clause 5.2.3.2.3) MLP message.
 *     mLPPositionData             [1] UTF8String,
 *     -- OMA MLP result id, defined in OMA-TS-MLP-V3_5-20181211-C [20], Clause 5.4
 *     mLPErrorCode                [2] INTEGER (1..699)
 * }
 * ```
 */
export
type RawMLPResponse =
    { mLPPositionData: UTF8String } /* CHOICE_ALT_ROOT */
    | { mLPErrorCode: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RawMLPResponse: $.ASN1Decoder<RawMLPResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RawMLPResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RawMLPResponse (el: _Element): RawMLPResponse {
    if (!_cached_decoder_for_RawMLPResponse) { _cached_decoder_for_RawMLPResponse = $._decode_inextensible_choice<RawMLPResponse>({
    "CONTEXT 1": [ "mLPPositionData", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 2": [ "mLPErrorCode", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_RawMLPResponse(el);
}

let _cached_encoder_for_RawMLPResponse: $.ASN1Encoder<RawMLPResponse> | null = null;

/**
 * @summary Encodes a(n) RawMLPResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RawMLPResponse, encoded as an ASN.1 Element.
 */
export
function _encode_RawMLPResponse (value: RawMLPResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RawMLPResponse) { _cached_encoder_for_RawMLPResponse = $._encode_choice<RawMLPResponse>({
    "mLPPositionData": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER),
    "mLPErrorCode": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_RawMLPResponse(value, elGetter);
}


/* eslint-enable */
