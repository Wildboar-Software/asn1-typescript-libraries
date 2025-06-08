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
import { id_rex_circulation_list_indicator } from '../IPMSObjectIdentifiers/id-rex-circulation-list-indicator.va';
export { id_rex_circulation_list_indicator } from '../IPMSObjectIdentifiers/id-rex-circulation-list-indicator.va';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION circulation_list_indicator */
/**
 * @summary circulation_list_indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * circulation-list-indicator IPMS-EXTENSION ::= {
 *   VALUE          NULL,
 *   IDENTIFIED BY  id-rex-circulation-list-indicator
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<NULL>}
 * @implements {IPMS_EXTENSION<NULL>}
 */
export const circulation_list_indicator: IPMS_EXTENSION<NULL> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&id': id_rex_circulation_list_indicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION circulation_list_indicator */

/* eslint-enable */
