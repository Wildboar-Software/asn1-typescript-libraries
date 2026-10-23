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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../X9-84-CMS/AlgorithmIdentifier.ta.mjs";



/**
 * @summary ContentEncryptAlgorithmIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentEncryptAlgorithmIdentifier  ::= 
 *       AlgorithmIdentifier {{ContentEncryptionAlgorithms}}
 * ```
 */
export
type ContentEncryptAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_ContentEncryptAlgorithmIdentifier: $.ASN1Decoder<ContentEncryptAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentEncryptAlgorithmIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContentEncryptAlgorithmIdentifier (el: _Element): ContentEncryptAlgorithmIdentifier {
    if (!_cached_decoder_for_ContentEncryptAlgorithmIdentifier) { _cached_decoder_for_ContentEncryptAlgorithmIdentifier = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_ContentEncryptAlgorithmIdentifier(el);
}

let _cached_encoder_for_ContentEncryptAlgorithmIdentifier: $.ASN1Encoder<ContentEncryptAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) ContentEncryptAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentEncryptAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ContentEncryptAlgorithmIdentifier (value: ContentEncryptAlgorithmIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContentEncryptAlgorithmIdentifier) { _cached_encoder_for_ContentEncryptAlgorithmIdentifier = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_ContentEncryptAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
