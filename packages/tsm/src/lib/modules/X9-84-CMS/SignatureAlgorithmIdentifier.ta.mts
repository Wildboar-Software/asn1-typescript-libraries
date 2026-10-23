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
 * @summary SignatureAlgorithmIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignatureAlgorithmIdentifier  ::= 
 *       AlgorithmIdentifier {{SignatureAlgorithms}}
 * ```
 */
export
type SignatureAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_SignatureAlgorithmIdentifier: $.ASN1Decoder<SignatureAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignatureAlgorithmIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignatureAlgorithmIdentifier (el: _Element): SignatureAlgorithmIdentifier {
    if (!_cached_decoder_for_SignatureAlgorithmIdentifier) { _cached_decoder_for_SignatureAlgorithmIdentifier = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_SignatureAlgorithmIdentifier(el);
}

let _cached_encoder_for_SignatureAlgorithmIdentifier: $.ASN1Encoder<SignatureAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) SignatureAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SignatureAlgorithmIdentifier (value: SignatureAlgorithmIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignatureAlgorithmIdentifier) { _cached_encoder_for_SignatureAlgorithmIdentifier = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_SignatureAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
