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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";
/* START_OF_SYMBOL_DEFINITION KeyWrapFunction */
/**
 * @summary KeyWrapFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyWrapFunction  ::=  AlgorithmIdentifier {{KeyWrapSet}}
 * ```
 */
export
type KeyWrapFunction = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION KeyWrapFunction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyWrapFunction */
let _cached_decoder_for_KeyWrapFunction: $.ASN1Decoder<KeyWrapFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyWrapFunction */

/* START_OF_SYMBOL_DEFINITION _decode_KeyWrapFunction */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyWrapFunction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyWrapFunction} The decoded data structure.
 */
export
function _decode_KeyWrapFunction (el: _Element) {
    if (!_cached_decoder_for_KeyWrapFunction) { _cached_decoder_for_KeyWrapFunction = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_KeyWrapFunction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyWrapFunction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyWrapFunction */
let _cached_encoder_for_KeyWrapFunction: $.ASN1Encoder<KeyWrapFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyWrapFunction */

/* START_OF_SYMBOL_DEFINITION _encode_KeyWrapFunction */
/**
 * @summary Encodes a(n) KeyWrapFunction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyWrapFunction, encoded as an ASN.1 Element.
 */
export
function _encode_KeyWrapFunction (value: KeyWrapFunction, elGetter: $.ASN1Encoder<KeyWrapFunction>) {
    if (!_cached_encoder_for_KeyWrapFunction) { _cached_encoder_for_KeyWrapFunction = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_KeyWrapFunction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyWrapFunction */

/* eslint-enable */
