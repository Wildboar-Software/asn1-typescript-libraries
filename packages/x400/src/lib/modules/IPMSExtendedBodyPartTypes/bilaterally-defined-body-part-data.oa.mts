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
    BilaterallyDefinedBodyPart,
    _decode_BilaterallyDefinedBodyPart,
    _encode_BilaterallyDefinedBodyPart,
} from '../IPMSInformationObjects/BilaterallyDefinedBodyPart.ta.mjs';
export {
    BilaterallyDefinedBodyPart,
    _decode_BilaterallyDefinedBodyPart,
    _encode_BilaterallyDefinedBodyPart,
} from '../IPMSInformationObjects/BilaterallyDefinedBodyPart.ta.mjs';
import { id_et_bilaterally_defined } from '../IPMSObjectIdentifiers/id-et-bilaterally-defined.va.mjs';
export { id_et_bilaterally_defined } from '../IPMSObjectIdentifiers/id-et-bilaterally-defined.va.mjs';

/* START_OF_SYMBOL_DEFINITION bilaterally_defined_body_part_data */
/**
 * @summary bilaterally_defined_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bilaterally-defined-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<BilaterallyDefinedBodyPart>}
 * @implements {TYPE_IDENTIFIER<BilaterallyDefinedBodyPart>}
 */
export const bilaterally_defined_body_part_data: TYPE_IDENTIFIER<BilaterallyDefinedBodyPart> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_BilaterallyDefinedBodyPart,
    },
    encoderFor: {
        '&Type': _encode_BilaterallyDefinedBodyPart,
    },
    '&id': id_et_bilaterally_defined /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION bilaterally_defined_body_part_data */

/* eslint-enable */
