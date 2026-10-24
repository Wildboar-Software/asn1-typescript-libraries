/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type UTF8String,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RawMLPResponse
 * @description
 * 
 * The RawMLPResponse type is derived from the data present in the slia MLP
 * message described in OMA-TS-MLP-V3_5-20181211-C [20] clause 5.2.3.2.2 or the
 * slirep MLP message described in OMA-TS-MLP-V3_5-20181211-C [20] clause
 * 5.2.3.2.3 along with the OMA MLP result id defined in
 * OMA-TS-MLP-V3_5-20181211-C [20] clause 5.4
 *
 * 3GPP TS 33.128, clause 7.3.3.2.38.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * This field contains a copy of unparsed XML code of the MLP response
     * message. The slia response message of this field are described in
     * OMA-TS-MLP-V3_5-20181211-C [20] clause 5.2.3.2.2 and the slirep response
     * message of this field is described in OMA-TS-MLP-V3_5-20181211-C [20]
     * clause 5.2.3.2.3.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.38.
     */
    { mLPPositionData: UTF8String } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * This field contains the OMA MLP result id defined in
     * OMA-TS-MLP-V3_5-20181211-C [20] clause 5.4.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.38.
     */
    | { mLPErrorCode: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_RawMLPResponse: $.ASN1Decoder<RawMLPResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RawMLPResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RawMLPResponse (el: _Element): RawMLPResponse {
    if (!_cached_decoder_for_RawMLPResponse) { _cached_decoder_for_RawMLPResponse = $._decode_extensible_choice<RawMLPResponse>({
    "CONTEXT 1": [ "mLPPositionData", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 2": [ "mLPErrorCode", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    const _value = _cached_decoder_for_RawMLPResponse(el);
    if ("mLPErrorCode" in _value && _value.mLPErrorCode !== undefined) {
        const _alt = _value.mLPErrorCode;
        const _n = typeof _alt === "bigint" ? _alt : BigInt(_alt);
        if (_n < 1n || _n > 699n) {
            throw new ASN1OverflowError("RawMLPResponse.mLPErrorCode violates INTEGER range");
        }
    }
    return _value;
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
