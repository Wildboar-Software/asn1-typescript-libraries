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
    TeletexPersonalName,
    _decode_TeletexPersonalName,
    _encode_TeletexPersonalName,
} from '../MTSAbstractService/TeletexPersonalName.ta';
export {
    TeletexPersonalName,
    _decode_TeletexPersonalName,
    _encode_TeletexPersonalName,
} from '../MTSAbstractService/TeletexPersonalName.ta';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca';
export { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca';

/* START_OF_SYMBOL_DEFINITION teletex_personal_name */
/**
 * @summary teletex_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-personal-name EXTENSION-ATTRIBUTE ::= {
 *   TeletexPersonalName
 *   IDENTIFIED BY  4
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TeletexPersonalName>}
 * @implements {EXTENSION_ATTRIBUTE<TeletexPersonalName>}
 */
export const teletex_personal_name: EXTENSION_ATTRIBUTE<TeletexPersonalName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TeletexPersonalName,
    },
    encoderFor: {
        '&Type': _encode_TeletexPersonalName,
    },
    '&id': 4 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION teletex_personal_name */

/* eslint-enable */
