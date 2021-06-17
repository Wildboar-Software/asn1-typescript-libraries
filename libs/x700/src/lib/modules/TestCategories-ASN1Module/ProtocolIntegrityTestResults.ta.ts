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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults */
/**
 * @summary ProtocolIntegrityTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolIntegrityTestResults  ::=  INTEGER {
 *   wrongPDUResponse(0), pDUResponseNotReceived(1)}
 * ```
 */
export type ProtocolIntegrityTestResults = INTEGER;
/* END_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults_wrongPDUResponse */
/**
 * @summary ProtocolIntegrityTestResults_wrongPDUResponse
 * @constant
 * @type {number}
 */
export const ProtocolIntegrityTestResults_wrongPDUResponse: ProtocolIntegrityTestResults = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults_wrongPDUResponse */

/* START_OF_SYMBOL_DEFINITION wrongPDUResponse */
/**
 * @summary ProtocolIntegrityTestResults_wrongPDUResponse
 * @constant
 * @type {number}
 */
export const wrongPDUResponse: ProtocolIntegrityTestResults = ProtocolIntegrityTestResults_wrongPDUResponse; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION wrongPDUResponse */

/* START_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults_pDUResponseNotReceived */
/**
 * @summary ProtocolIntegrityTestResults_pDUResponseNotReceived
 * @constant
 * @type {number}
 */
export const ProtocolIntegrityTestResults_pDUResponseNotReceived: ProtocolIntegrityTestResults = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtocolIntegrityTestResults_pDUResponseNotReceived */

/* START_OF_SYMBOL_DEFINITION pDUResponseNotReceived */
/**
 * @summary ProtocolIntegrityTestResults_pDUResponseNotReceived
 * @constant
 * @type {number}
 */
export const pDUResponseNotReceived: ProtocolIntegrityTestResults = ProtocolIntegrityTestResults_pDUResponseNotReceived; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pDUResponseNotReceived */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolIntegrityTestResults */
let _cached_decoder_for_ProtocolIntegrityTestResults: $.ASN1Decoder<ProtocolIntegrityTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_ProtocolIntegrityTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolIntegrityTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolIntegrityTestResults} The decoded data structure.
 */
export function _decode_ProtocolIntegrityTestResults(el: _Element) {
    if (!_cached_decoder_for_ProtocolIntegrityTestResults) {
        _cached_decoder_for_ProtocolIntegrityTestResults = $._decodeInteger;
    }
    return _cached_decoder_for_ProtocolIntegrityTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtocolIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolIntegrityTestResults */
let _cached_encoder_for_ProtocolIntegrityTestResults: $.ASN1Encoder<ProtocolIntegrityTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolIntegrityTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_ProtocolIntegrityTestResults */
/**
 * @summary Encodes a(n) ProtocolIntegrityTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolIntegrityTestResults, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolIntegrityTestResults(
    value: ProtocolIntegrityTestResults,
    elGetter: $.ASN1Encoder<ProtocolIntegrityTestResults>
) {
    if (!_cached_encoder_for_ProtocolIntegrityTestResults) {
        _cached_encoder_for_ProtocolIntegrityTestResults = $._encodeInteger;
    }
    return _cached_encoder_for_ProtocolIntegrityTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtocolIntegrityTestResults */

/* eslint-enable */
