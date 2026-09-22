/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../PKIX1Explicit88/CertificateList.ta.mjs";
// export { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../PKIX1Explicit88/CertificateList.ta.mjs";


/**
 * @summary SegmentedCrlList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SegmentedCrlList  ::=  SEQUENCE OF CertificateList
 * ```
 */
export
type SegmentedCrlList = CertificateList[]; // SequenceOfType

let _cached_decoder_for_SegmentedCrlList: $.ASN1Decoder<SegmentedCrlList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SegmentedCrlList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SegmentedCrlList (el: _Element): SegmentedCrlList {
    if (!_cached_decoder_for_SegmentedCrlList) { _cached_decoder_for_SegmentedCrlList = $._decodeSequenceOf<CertificateList>(() => _decode_CertificateList); }
    return _cached_decoder_for_SegmentedCrlList(el);
}

let _cached_encoder_for_SegmentedCrlList: $.ASN1Encoder<SegmentedCrlList> | null = null;

/**
 * @summary Encodes a(n) SegmentedCrlList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SegmentedCrlList, encoded as an ASN.1 Element.
 */
export
function _encode_SegmentedCrlList (value: SegmentedCrlList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SegmentedCrlList) { _cached_encoder_for_SegmentedCrlList = $._encodeSequenceOf<CertificateList>(() => _encode_CertificateList, $.BER); }
    return _cached_encoder_for_SegmentedCrlList(value, elGetter);
}


/* eslint-enable */
