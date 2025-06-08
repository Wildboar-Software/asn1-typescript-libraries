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
import { g4_class1_body_part_data } from '../IPMSExtendedBodyPartTypes/g4-class1-body-part-data.oa';
export { g4_class1_body_part_data } from '../IPMSExtendedBodyPartTypes/g4-class1-body-part-data.oa';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca';
export { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca';

/* START_OF_SYMBOL_DEFINITION g4_class1_body_part */
/**
 * @summary g4_class1_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g4-class1-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   DATA  {G4Class1BodyPart
 *          IDENTIFIED BY  id-et-g4-class1}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const g4_class1_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&data': g4_class1_body_part_data /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION g4_class1_body_part */

/* eslint-enable */
