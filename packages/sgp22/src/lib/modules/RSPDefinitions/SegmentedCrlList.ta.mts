/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SegmentedCrlList
 * @description
 * 
 * Sequence of PKIX certificate lists. This module uses it for segmented CRLs.
 * SGP.22 v3.1 §4.6.1 requires a complete base CRL, forbids delta CRLs, and does
 * not define this type. v3 CRL stapling carries CRLs in the
 * mutual-authentication exchange instead.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SegmentedCrlList  ::=  SEQUENCE OF CertificateList
 * ```
 */
export
type SegmentedCrlList = _Element[]; // SequenceOfType

let _cached_decoder_for_SegmentedCrlList: $.ASN1Decoder<SegmentedCrlList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SegmentedCrlList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SegmentedCrlList (el: _Element): SegmentedCrlList {
    if (!_cached_decoder_for_SegmentedCrlList) { _cached_decoder_for_SegmentedCrlList = $._decodeSequenceOf<_Element>(() => $._decodeAny); }
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
    if (!_cached_encoder_for_SegmentedCrlList) { _cached_encoder_for_SegmentedCrlList = $._encodeSequenceOf<_Element>(() => $._encodeAny, $.BER); }
    return _cached_encoder_for_SegmentedCrlList(value, elGetter);
}


/* eslint-enable */
