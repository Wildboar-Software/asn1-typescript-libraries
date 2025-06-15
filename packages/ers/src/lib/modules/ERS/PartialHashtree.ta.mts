/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";




/**
 * @summary PartialHashtree
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialHashtree  ::=  SEQUENCE OF OCTET STRING
 * ```
 */
export
type PartialHashtree = OCTET_STRING[]; // SequenceOfType


let _cached_decoder_for_PartialHashtree: $.ASN1Decoder<PartialHashtree> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PartialHashtree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PartialHashtree} The decoded data structure.
 */
export
function _decode_PartialHashtree (el: _Element) {
    if (!_cached_decoder_for_PartialHashtree) { _cached_decoder_for_PartialHashtree = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString); }
    return _cached_decoder_for_PartialHashtree(el);
}


let _cached_encoder_for_PartialHashtree: $.ASN1Encoder<PartialHashtree> | null = null;


/**
 * @summary Encodes a(n) PartialHashtree into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialHashtree, encoded as an ASN.1 Element.
 */
export
function _encode_PartialHashtree (value: PartialHashtree, elGetter: $.ASN1Encoder<PartialHashtree>) {
    if (!_cached_encoder_for_PartialHashtree) { _cached_encoder_for_PartialHashtree = $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_PartialHashtree(value, elGetter);
}


/* eslint-enable */
