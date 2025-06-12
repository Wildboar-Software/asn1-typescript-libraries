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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    MappingPair,
    _decode_MappingPair,
    _encode_MappingPair,
} from '../GrmAttributeDefinitionModule/MappingPair.ta.js';
export {
    MappingPair,
    _decode_MappingPair,
    _encode_MappingPair,
} from '../GrmAttributeDefinitionModule/MappingPair.ta.js';

/* START_OF_SYMBOL_DEFINITION OperationsMapping */
/**
 * @summary OperationsMapping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationsMapping  ::=  SET OF MappingPair
 * ```
 */
export type OperationsMapping = MappingPair[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION OperationsMapping */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationsMapping */
let _cached_decoder_for_OperationsMapping: $.ASN1Decoder<OperationsMapping> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationsMapping */

/* START_OF_SYMBOL_DEFINITION _decode_OperationsMapping */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationsMapping
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationsMapping} The decoded data structure.
 */
export function _decode_OperationsMapping(el: _Element) {
    if (!_cached_decoder_for_OperationsMapping) {
        _cached_decoder_for_OperationsMapping = $._decodeSetOf<MappingPair>(
            () => _decode_MappingPair
        );
    }
    return _cached_decoder_for_OperationsMapping(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationsMapping */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationsMapping */
let _cached_encoder_for_OperationsMapping: $.ASN1Encoder<OperationsMapping> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationsMapping */

/* START_OF_SYMBOL_DEFINITION _encode_OperationsMapping */
/**
 * @summary Encodes a(n) OperationsMapping into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationsMapping, encoded as an ASN.1 Element.
 */
export function _encode_OperationsMapping(
    value: OperationsMapping,
    elGetter: $.ASN1Encoder<OperationsMapping>
) {
    if (!_cached_encoder_for_OperationsMapping) {
        _cached_encoder_for_OperationsMapping = $._encodeSetOf<MappingPair>(
            () => _encode_MappingPair,
            $.BER
        );
    }
    return _cached_encoder_for_OperationsMapping(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationsMapping */

/* eslint-enable */
