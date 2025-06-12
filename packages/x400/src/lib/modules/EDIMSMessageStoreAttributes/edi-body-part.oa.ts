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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import {
    EDIBodyPart,
    _decode_EDIBodyPart,
    _encode_EDIBodyPart,
} from '../EDIMSInformationObjects/EDIBodyPart.ta.js';
export {
    EDIBodyPart,
    _decode_EDIBodyPart,
    _encode_EDIBodyPart,
} from '../EDIMSInformationObjects/EDIBodyPart.ta.js';
import { id_bat_edi_body_part } from '../EDIMSObjectIdentifiers/id-bat-edi-body-part.va.js';
export { id_bat_edi_body_part } from '../EDIMSObjectIdentifiers/id-bat-edi-body-part.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION edi_body_part */
/**
 * @summary edi_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-body-part X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  EDIBodyPart,
 *   NUMERATION             single-valued,
 *   ID                     id-bat-edi-body-part
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIBodyPart>}
 * @implements {X413ATTRIBUTE<EDIBodyPart>}
 */
export const edi_body_part: X413ATTRIBUTE<EDIBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIBodyPart,
    },
    encoderFor: {
        '&Type': _encode_EDIBodyPart,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_edi_body_part /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_body_part */

/* eslint-enable */
