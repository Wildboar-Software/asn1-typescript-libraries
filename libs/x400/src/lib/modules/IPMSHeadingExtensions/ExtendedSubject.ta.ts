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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
import { ub_extended_subject_length } from '../IPMSUpperBounds/ub-extended-subject-length.va';
export { ub_extended_subject_length } from '../IPMSUpperBounds/ub-extended-subject-length.va';

/* START_OF_SYMBOL_DEFINITION ExtendedSubject */
/**
 * @summary ExtendedSubject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedSubject  ::=  UniversalOrBMPString{ub-extended-subject-length}
 * ```
 */
export type ExtendedSubject = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION ExtendedSubject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedSubject */
let _cached_decoder_for_ExtendedSubject: $.ASN1Decoder<ExtendedSubject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedSubject */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedSubject */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedSubject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedSubject} The decoded data structure.
 */
export function _decode_ExtendedSubject(el: _Element) {
    if (!_cached_decoder_for_ExtendedSubject) {
        _cached_decoder_for_ExtendedSubject = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_ExtendedSubject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedSubject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedSubject */
let _cached_encoder_for_ExtendedSubject: $.ASN1Encoder<ExtendedSubject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedSubject */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedSubject */
/**
 * @summary Encodes a(n) ExtendedSubject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedSubject, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedSubject(
    value: ExtendedSubject,
    elGetter: $.ASN1Encoder<ExtendedSubject>
) {
    if (!_cached_encoder_for_ExtendedSubject) {
        _cached_encoder_for_ExtendedSubject = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_ExtendedSubject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedSubject */

/* eslint-enable */
