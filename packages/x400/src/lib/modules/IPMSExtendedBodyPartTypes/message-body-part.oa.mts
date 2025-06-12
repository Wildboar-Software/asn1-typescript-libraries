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
import { message_body_part_parameters } from '../IPMSExtendedBodyPartTypes/message-body-part-parameters.oa.mjs';
export { message_body_part_parameters } from '../IPMSExtendedBodyPartTypes/message-body-part-parameters.oa.mjs';
import { message_body_part_data } from '../IPMSExtendedBodyPartTypes/message-body-part-data.oa.mjs';
export { message_body_part_data } from '../IPMSExtendedBodyPartTypes/message-body-part-data.oa.mjs';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
export { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';

/* START_OF_SYMBOL_DEFINITION message_body_part */
/**
 * @summary message_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   PARAMETERS  {MessageParameters
 *                IDENTIFIED BY  id-ep-message},
 *   DATA        {MessageData
 *                IDENTIFIED BY  id-et-message}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const message_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&parameters': message_body_part_parameters /* OBJECT_FIELD_SETTING */,
    '&data': message_body_part_data /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION message_body_part */

/* eslint-enable */
