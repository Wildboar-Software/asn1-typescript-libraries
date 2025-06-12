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
    AutoSubmitted,
    _enum_for_AutoSubmitted,
    AutoSubmitted_not_auto_submitted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    not_auto_submitted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AutoSubmitted_auto_generated /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auto_generated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AutoSubmitted_auto_replied /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auto_replied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AutoSubmitted,
    _encode_AutoSubmitted,
} from '../IPMSHeadingExtensions/AutoSubmitted.ta.mjs';
export {
    AutoSubmitted,
    _enum_for_AutoSubmitted,
    AutoSubmitted_not_auto_submitted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    not_auto_submitted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AutoSubmitted_auto_generated /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auto_generated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AutoSubmitted_auto_replied /* IMPORTED_LONG_ENUMERATION_ITEM */,
    auto_replied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AutoSubmitted,
    _encode_AutoSubmitted,
} from '../IPMSHeadingExtensions/AutoSubmitted.ta.mjs';
import { id_hex_auto_submitted } from '../IPMSObjectIdentifiers/id-hex-auto-submitted.va.mjs';
export { id_hex_auto_submitted } from '../IPMSObjectIdentifiers/id-hex-auto-submitted.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION auto_submitted */
/**
 * @summary auto_submitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-submitted IPMS-EXTENSION ::= {
 *   VALUE          AutoSubmitted,
 *   IDENTIFIED BY  id-hex-auto-submitted
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<AutoSubmitted>}
 * @implements {IPMS_EXTENSION<AutoSubmitted>}
 */
export const auto_submitted: IPMS_EXTENSION<AutoSubmitted> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_AutoSubmitted,
    },
    encoderFor: {
        '&Type': _encode_AutoSubmitted,
    },
    '&id': id_hex_auto_submitted /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION auto_submitted */

/* eslint-enable */
