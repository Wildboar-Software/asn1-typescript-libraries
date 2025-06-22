/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TrustAnchorChoice, _decode_TrustAnchorChoice, _encode_TrustAnchorChoice } from "../TrustAnchorInfoModule/TrustAnchorChoice.ta.mjs";
/**
 * @summary TrustAnchorList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrustAnchorList  ::=  SEQUENCE SIZE (1..MAX) OF TrustAnchorChoice
 * ```
 */
export
type TrustAnchorList = TrustAnchorChoice[]; // SequenceOfType

let _cached_decoder_for_TrustAnchorList: $.ASN1Decoder<TrustAnchorList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchorList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchorList} The decoded data structure.
 */
export
function _decode_TrustAnchorList (el: _Element) {
    if (!_cached_decoder_for_TrustAnchorList) { _cached_decoder_for_TrustAnchorList = $._decodeSequenceOf<TrustAnchorChoice>(() => _decode_TrustAnchorChoice); }
    return _cached_decoder_for_TrustAnchorList(el);
}

let _cached_encoder_for_TrustAnchorList: $.ASN1Encoder<TrustAnchorList> | null = null;

/**
 * @summary Encodes a(n) TrustAnchorList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchorList, encoded as an ASN.1 Element.
 */
export
function _encode_TrustAnchorList (value: TrustAnchorList, elGetter: $.ASN1Encoder<TrustAnchorList>) {
    if (!_cached_encoder_for_TrustAnchorList) { _cached_encoder_for_TrustAnchorList = $._encodeSequenceOf<TrustAnchorChoice>(() => _encode_TrustAnchorChoice, $.DER); }
    return _cached_encoder_for_TrustAnchorList(value, elGetter);
}


/* eslint-enable */
