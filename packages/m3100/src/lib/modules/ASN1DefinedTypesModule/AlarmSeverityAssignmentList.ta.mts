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
    AlarmSeverityAssignment,
    _decode_AlarmSeverityAssignment,
    _encode_AlarmSeverityAssignment,
} from '../ASN1DefinedTypesModule/AlarmSeverityAssignment.ta.mjs';
export {
    AlarmSeverityAssignment,
    _decode_AlarmSeverityAssignment,
    _encode_AlarmSeverityAssignment,
} from '../ASN1DefinedTypesModule/AlarmSeverityAssignment.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AlarmSeverityAssignmentList */
/**
 * @summary AlarmSeverityAssignmentList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityAssignmentList  ::=  SET OF AlarmSeverityAssignment
 * ```
 */
export type AlarmSeverityAssignmentList = AlarmSeverityAssignment[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AlarmSeverityAssignmentList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmSeverityAssignmentList */
let _cached_decoder_for_AlarmSeverityAssignmentList: $.ASN1Decoder<AlarmSeverityAssignmentList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmSeverityAssignmentList */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmSeverityAssignmentList */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSeverityAssignmentList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmSeverityAssignmentList} The decoded data structure.
 */
export function _decode_AlarmSeverityAssignmentList(el: _Element) {
    if (!_cached_decoder_for_AlarmSeverityAssignmentList) {
        _cached_decoder_for_AlarmSeverityAssignmentList = $._decodeSetOf<AlarmSeverityAssignment>(
            () => _decode_AlarmSeverityAssignment
        );
    }
    return _cached_decoder_for_AlarmSeverityAssignmentList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmSeverityAssignmentList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmSeverityAssignmentList */
let _cached_encoder_for_AlarmSeverityAssignmentList: $.ASN1Encoder<AlarmSeverityAssignmentList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmSeverityAssignmentList */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmSeverityAssignmentList */
/**
 * @summary Encodes a(n) AlarmSeverityAssignmentList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSeverityAssignmentList, encoded as an ASN.1 Element.
 */
export function _encode_AlarmSeverityAssignmentList(
    value: AlarmSeverityAssignmentList,
    elGetter: $.ASN1Encoder<AlarmSeverityAssignmentList>
) {
    if (!_cached_encoder_for_AlarmSeverityAssignmentList) {
        _cached_encoder_for_AlarmSeverityAssignmentList = $._encodeSetOf<AlarmSeverityAssignment>(
            () => _encode_AlarmSeverityAssignment,
            $.BER
        );
    }
    return _cached_encoder_for_AlarmSeverityAssignmentList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmSeverityAssignmentList */

/* eslint-enable */
