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
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.mjs';
export {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Trace */
/**
 * @summary Trace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Trace  ::=  TraceInformation
 * ```
 */
export type Trace = TraceInformation; // DefinedType
/* END_OF_SYMBOL_DEFINITION Trace */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Trace */
let _cached_decoder_for_Trace: $.ASN1Decoder<Trace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Trace */

/* START_OF_SYMBOL_DEFINITION _decode_Trace */
/**
 * @summary Decodes an ASN.1 element into a(n) Trace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Trace} The decoded data structure.
 */
export function _decode_Trace(el: _Element) {
    if (!_cached_decoder_for_Trace) {
        _cached_decoder_for_Trace = _decode_TraceInformation;
    }
    return _cached_decoder_for_Trace(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Trace */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Trace */
let _cached_encoder_for_Trace: $.ASN1Encoder<Trace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Trace */

/* START_OF_SYMBOL_DEFINITION _encode_Trace */
/**
 * @summary Encodes a(n) Trace into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Trace, encoded as an ASN.1 Element.
 */
export function _encode_Trace(value: Trace, elGetter: $.ASN1Encoder<Trace>) {
    if (!_cached_encoder_for_Trace) {
        _cached_encoder_for_Trace = _encode_TraceInformation;
    }
    return _cached_encoder_for_Trace(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Trace */

/* eslint-enable */
