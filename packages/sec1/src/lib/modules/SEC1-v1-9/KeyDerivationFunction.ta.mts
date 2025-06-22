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
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";
/**
 * @summary KeyDerivationFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyDerivationFunction  ::=  AlgorithmIdentifier {{KDFSet}}
 * ```
 */
export
type KeyDerivationFunction = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_KeyDerivationFunction: $.ASN1Decoder<KeyDerivationFunction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyDerivationFunction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyDerivationFunction} The decoded data structure.
 */
export
function _decode_KeyDerivationFunction (el: _Element) {
    if (!_cached_decoder_for_KeyDerivationFunction) { _cached_decoder_for_KeyDerivationFunction = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_KeyDerivationFunction(el);
}

let _cached_encoder_for_KeyDerivationFunction: $.ASN1Encoder<KeyDerivationFunction> | null = null;

/**
 * @summary Encodes a(n) KeyDerivationFunction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyDerivationFunction, encoded as an ASN.1 Element.
 */
export
function _encode_KeyDerivationFunction (value: KeyDerivationFunction, elGetter: $.ASN1Encoder<KeyDerivationFunction>) {
    if (!_cached_encoder_for_KeyDerivationFunction) { _cached_encoder_for_KeyDerivationFunction = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_KeyDerivationFunction(value, elGetter);
}


/* eslint-enable */
