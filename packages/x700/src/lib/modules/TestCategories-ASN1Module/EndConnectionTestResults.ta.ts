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
    ConnectionTestResults,
    _decode_ConnectionTestResults,
    _encode_ConnectionTestResults,
} from '../TestCategories-ASN1Module/ConnectionTestResults.ta.js';
export {
    ConnectionTestResults,
    _decode_ConnectionTestResults,
    _encode_ConnectionTestResults,
} from '../TestCategories-ASN1Module/ConnectionTestResults.ta.js';

/* START_OF_SYMBOL_DEFINITION EndConnectionTestResults */
/**
 * @summary EndConnectionTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndConnectionTestResults  ::=  ConnectionTestResults
 * ```
 */
export type EndConnectionTestResults = ConnectionTestResults; // DefinedType
/* END_OF_SYMBOL_DEFINITION EndConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndConnectionTestResults */
let _cached_decoder_for_EndConnectionTestResults: $.ASN1Decoder<EndConnectionTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_EndConnectionTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) EndConnectionTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EndConnectionTestResults} The decoded data structure.
 */
export function _decode_EndConnectionTestResults(el: _Element) {
    if (!_cached_decoder_for_EndConnectionTestResults) {
        _cached_decoder_for_EndConnectionTestResults = _decode_ConnectionTestResults;
    }
    return _cached_decoder_for_EndConnectionTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EndConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndConnectionTestResults */
let _cached_encoder_for_EndConnectionTestResults: $.ASN1Encoder<EndConnectionTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_EndConnectionTestResults */
/**
 * @summary Encodes a(n) EndConnectionTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndConnectionTestResults, encoded as an ASN.1 Element.
 */
export function _encode_EndConnectionTestResults(
    value: EndConnectionTestResults,
    elGetter: $.ASN1Encoder<EndConnectionTestResults>
) {
    if (!_cached_encoder_for_EndConnectionTestResults) {
        _cached_encoder_for_EndConnectionTestResults = _encode_ConnectionTestResults;
    }
    return _cached_encoder_for_EndConnectionTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EndConnectionTestResults */

/* eslint-enable */
