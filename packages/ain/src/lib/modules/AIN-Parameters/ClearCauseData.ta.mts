/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClearCauseData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearCauseData  ::=  [74] IMPLICIT OCTET STRING(SIZE(1..20))
 * ```
 */
export
type ClearCauseData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ClearCauseData: $.ASN1Decoder<ClearCauseData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearCauseData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearCauseData (el: _Element): ClearCauseData {
    if (!_cached_decoder_for_ClearCauseData) { _cached_decoder_for_ClearCauseData = $._decode_implicit<ClearCauseData>(() => $._decodeOctetString); }
    return _cached_decoder_for_ClearCauseData(el);
}

let _cached_encoder_for_ClearCauseData: $.ASN1Encoder<ClearCauseData> | null = null;

/**
 * @summary Encodes a(n) ClearCauseData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearCauseData, encoded as an ASN.1 Element.
 */
export
function _encode_ClearCauseData (value: ClearCauseData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearCauseData) { _cached_encoder_for_ClearCauseData = $._encode_implicit(_TagClass.context, 74, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ClearCauseData(value, elGetter);
}


/* eslint-enable */
