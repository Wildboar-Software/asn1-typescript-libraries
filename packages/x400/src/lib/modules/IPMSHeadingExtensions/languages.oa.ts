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
    Language,
    _decode_Language,
    _encode_Language,
} from '../IPMSHeadingExtensions/Language.ta';
export {
    Language,
    _decode_Language,
    _encode_Language,
} from '../IPMSHeadingExtensions/Language.ta';
import { id_hex_languages } from '../IPMSObjectIdentifiers/id-hex-languages.va';
export { id_hex_languages } from '../IPMSObjectIdentifiers/id-hex-languages.va';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION languages */
/**
 * @summary languages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * languages IPMS-EXTENSION ::= {
 *   VALUE          SET OF Language,
 *   IDENTIFIED BY  id-hex-languages
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<Language[]>}
 * @implements {IPMS_EXTENSION<Language[]>}
 */
export const languages: IPMS_EXTENSION<Language[]> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': $._decodeSetOf<Language>(() => _decode_Language),
    },
    encoderFor: {
        '&Type': $._encodeSetOf<Language>(() => _encode_Language, $.BER),
    },
    '&id': id_hex_languages /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION languages */

/* eslint-enable */
