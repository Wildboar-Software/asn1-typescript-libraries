/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";


/* START_OF_SYMBOL_DEFINITION KeyDerivationFunction */
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
/* END_OF_SYMBOL_DEFINITION KeyDerivationFunction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyDerivationFunction */
let _cached_decoder_for_KeyDerivationFunction: $.ASN1Decoder<KeyDerivationFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyDerivationFunction */

/* START_OF_SYMBOL_DEFINITION _decode_KeyDerivationFunction */
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
/* END_OF_SYMBOL_DEFINITION _decode_KeyDerivationFunction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyDerivationFunction */
let _cached_encoder_for_KeyDerivationFunction: $.ASN1Encoder<KeyDerivationFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyDerivationFunction */

/* START_OF_SYMBOL_DEFINITION _encode_KeyDerivationFunction */
/**
 * @summary Encodes a(n) KeyDerivationFunction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyDerivationFunction, encoded as an ASN.1 Element.
 */
export
function _encode_KeyDerivationFunction (value: KeyDerivationFunction, elGetter: $.ASN1Encoder<KeyDerivationFunction>) {
    if (!_cached_encoder_for_KeyDerivationFunction) { _cached_encoder_for_KeyDerivationFunction = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_KeyDerivationFunction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyDerivationFunction */

/* eslint-enable */
