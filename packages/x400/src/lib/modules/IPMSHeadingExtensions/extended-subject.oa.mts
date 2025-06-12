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
    ExtendedSubject,
    _decode_ExtendedSubject,
    _encode_ExtendedSubject,
} from '../IPMSHeadingExtensions/ExtendedSubject.ta.mjs';
export {
    ExtendedSubject,
    _decode_ExtendedSubject,
    _encode_ExtendedSubject,
} from '../IPMSHeadingExtensions/ExtendedSubject.ta.mjs';
import { id_hex_extended_subject } from '../IPMSObjectIdentifiers/id-hex-extended-subject.va.mjs';
export { id_hex_extended_subject } from '../IPMSObjectIdentifiers/id-hex-extended-subject.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION extended_subject */
/**
 * @summary extended_subject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extended-subject IPMS-EXTENSION ::= {
 *   VALUE          ExtendedSubject,
 *   IDENTIFIED BY  id-hex-extended-subject
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<ExtendedSubject>}
 * @implements {IPMS_EXTENSION<ExtendedSubject>}
 */
export const extended_subject: IPMS_EXTENSION<ExtendedSubject> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_ExtendedSubject,
    },
    encoderFor: {
        '&Type': _encode_ExtendedSubject,
    },
    '&id': id_hex_extended_subject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION extended_subject */

/* eslint-enable */
