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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/Attribute.ta.mjs";


/**
 * @summary CryptoInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CryptoInfos  ::=  SEQUENCE SIZE (1..MAX) OF Attribute
 *     (WITH COMPONENTS {
 *         ...,
 *         valuesWithContext   ABSENT
 *     })
 * ```
 */
export
type CryptoInfos = Attribute[]; // SequenceOfType


let _cached_decoder_for_CryptoInfos: $.ASN1Decoder<CryptoInfos> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CryptoInfos
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CryptoInfos} The decoded data structure.
 */
export
function _decode_CryptoInfos (el: _Element) {
    if (!_cached_decoder_for_CryptoInfos) { _cached_decoder_for_CryptoInfos = $._decodeSequenceOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_CryptoInfos(el);
}


let _cached_encoder_for_CryptoInfos: $.ASN1Encoder<CryptoInfos> | null = null;


/**
 * @summary Encodes a(n) CryptoInfos into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptoInfos, encoded as an ASN.1 Element.
 */
export
function _encode_CryptoInfos (value: CryptoInfos, elGetter: $.ASN1Encoder<CryptoInfos>) {
    if (!_cached_encoder_for_CryptoInfos) { _cached_encoder_for_CryptoInfos = $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_CryptoInfos(value, elGetter);
}


/* eslint-enable */
