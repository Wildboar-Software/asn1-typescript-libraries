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
/* START_OF_SYMBOL_DEFINITION SymmetricEncryption */
/**
 * @summary SymmetricEncryption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SymmetricEncryption  ::=  AlgorithmIdentifier {{SYMENCSet}}
 * ```
 */
export
type SymmetricEncryption = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION SymmetricEncryption */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SymmetricEncryption */
let _cached_decoder_for_SymmetricEncryption: $.ASN1Decoder<SymmetricEncryption> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SymmetricEncryption */

/* START_OF_SYMBOL_DEFINITION _decode_SymmetricEncryption */
/**
 * @summary Decodes an ASN.1 element into a(n) SymmetricEncryption
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SymmetricEncryption} The decoded data structure.
 */
export
function _decode_SymmetricEncryption (el: _Element) {
    if (!_cached_decoder_for_SymmetricEncryption) { _cached_decoder_for_SymmetricEncryption = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_SymmetricEncryption(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SymmetricEncryption */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SymmetricEncryption */
let _cached_encoder_for_SymmetricEncryption: $.ASN1Encoder<SymmetricEncryption> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SymmetricEncryption */

/* START_OF_SYMBOL_DEFINITION _encode_SymmetricEncryption */
/**
 * @summary Encodes a(n) SymmetricEncryption into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SymmetricEncryption, encoded as an ASN.1 Element.
 */
export
function _encode_SymmetricEncryption (value: SymmetricEncryption, elGetter: $.ASN1Encoder<SymmetricEncryption>) {
    if (!_cached_encoder_for_SymmetricEncryption) { _cached_encoder_for_SymmetricEncryption = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_SymmetricEncryption(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SymmetricEncryption */

/* eslint-enable */
