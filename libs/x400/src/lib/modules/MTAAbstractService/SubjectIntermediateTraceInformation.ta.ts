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
import {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta';
export {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta';

/* START_OF_SYMBOL_DEFINITION SubjectIntermediateTraceInformation */
/**
 * @summary SubjectIntermediateTraceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectIntermediateTraceInformation  ::=  TraceInformation
 * ```
 */
export type SubjectIntermediateTraceInformation = TraceInformation; // DefinedType
/* END_OF_SYMBOL_DEFINITION SubjectIntermediateTraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectIntermediateTraceInformation */
let _cached_decoder_for_SubjectIntermediateTraceInformation: $.ASN1Decoder<SubjectIntermediateTraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectIntermediateTraceInformation */

/* START_OF_SYMBOL_DEFINITION _decode_SubjectIntermediateTraceInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectIntermediateTraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectIntermediateTraceInformation} The decoded data structure.
 */
export function _decode_SubjectIntermediateTraceInformation(el: _Element) {
    if (!_cached_decoder_for_SubjectIntermediateTraceInformation) {
        _cached_decoder_for_SubjectIntermediateTraceInformation = _decode_TraceInformation;
    }
    return _cached_decoder_for_SubjectIntermediateTraceInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubjectIntermediateTraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectIntermediateTraceInformation */
let _cached_encoder_for_SubjectIntermediateTraceInformation: $.ASN1Encoder<SubjectIntermediateTraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectIntermediateTraceInformation */

/* START_OF_SYMBOL_DEFINITION _encode_SubjectIntermediateTraceInformation */
/**
 * @summary Encodes a(n) SubjectIntermediateTraceInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectIntermediateTraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_SubjectIntermediateTraceInformation(
    value: SubjectIntermediateTraceInformation,
    elGetter: $.ASN1Encoder<SubjectIntermediateTraceInformation>
) {
    if (!_cached_encoder_for_SubjectIntermediateTraceInformation) {
        _cached_encoder_for_SubjectIntermediateTraceInformation = _encode_TraceInformation;
    }
    return _cached_encoder_for_SubjectIntermediateTraceInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SubjectIntermediateTraceInformation */

/* eslint-enable */
