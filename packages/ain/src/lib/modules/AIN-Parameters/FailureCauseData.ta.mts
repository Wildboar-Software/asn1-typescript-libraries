/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FailureCauseData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCauseData  ::=  [112] IMPLICIT OCTET STRING(SIZE(1..5))
 * ```
 */
export
type FailureCauseData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_FailureCauseData: $.ASN1Decoder<FailureCauseData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FailureCauseData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FailureCauseData (el: _Element): FailureCauseData {
    if (!_cached_decoder_for_FailureCauseData) { _cached_decoder_for_FailureCauseData = $._decode_implicit<FailureCauseData>(() => $._decodeOctetString); }
    return _cached_decoder_for_FailureCauseData(el);
}

let _cached_encoder_for_FailureCauseData: $.ASN1Encoder<FailureCauseData> | null = null;

/**
 * @summary Encodes a(n) FailureCauseData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailureCauseData, encoded as an ASN.1 Element.
 */
export
function _encode_FailureCauseData (value: FailureCauseData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FailureCauseData) { _cached_encoder_for_FailureCauseData = $._encode_implicit(_TagClass.context, 112, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_FailureCauseData(value, elGetter);
}


/* eslint-enable */
