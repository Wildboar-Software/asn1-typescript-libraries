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
    OperationType,
    _decode_OperationType,
    _encode_OperationType,
} from '../AccessControl-ASN1Module/OperationType.ta.js';

/* START_OF_SYMBOL_DEFINITION OperationsList */
/**
 * @summary OperationsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationsList  ::=  SET OF OperationType
 * ```
 */
export type OperationsList = OperationType[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION OperationsList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationsList */
let _cached_decoder_for_OperationsList: $.ASN1Decoder<OperationsList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationsList */

/* START_OF_SYMBOL_DEFINITION _decode_OperationsList */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationsList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationsList} The decoded data structure.
 */
export function _decode_OperationsList(el: _Element) {
    if (!_cached_decoder_for_OperationsList) {
        _cached_decoder_for_OperationsList = $._decodeSetOf<OperationType>(
            () => _decode_OperationType
        );
    }
    return _cached_decoder_for_OperationsList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationsList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationsList */
let _cached_encoder_for_OperationsList: $.ASN1Encoder<OperationsList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationsList */

/* START_OF_SYMBOL_DEFINITION _encode_OperationsList */
/**
 * @summary Encodes a(n) OperationsList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationsList, encoded as an ASN.1 Element.
 */
export function _encode_OperationsList(
    value: OperationsList,
    elGetter: $.ASN1Encoder<OperationsList>
) {
    if (!_cached_encoder_for_OperationsList) {
        _cached_encoder_for_OperationsList = $._encodeSetOf<OperationType>(
            () => _encode_OperationType,
            $.BER
        );
    }
    return _cached_encoder_for_OperationsList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationsList */

/* eslint-enable */
