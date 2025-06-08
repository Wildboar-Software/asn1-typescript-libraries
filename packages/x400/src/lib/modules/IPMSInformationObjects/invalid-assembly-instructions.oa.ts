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
    BodyPartReferences,
    _decode_BodyPartReferences,
    _encode_BodyPartReferences,
} from '../IPMSInformationObjects/BodyPartReferences.ta';
export {
    BodyPartReferences,
    _decode_BodyPartReferences,
    _encode_BodyPartReferences,
} from '../IPMSInformationObjects/BodyPartReferences.ta';
import { id_mst_invalid_assembly_instructions } from '../IPMSObjectIdentifiers/id-mst-invalid-assembly-instructions.va';
export { id_mst_invalid_assembly_instructions } from '../IPMSObjectIdentifiers/id-mst-invalid-assembly-instructions.va';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca';
export { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION invalid_assembly_instructions */
/**
 * @summary invalid_assembly_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalid-assembly-instructions MS-EXTENSION ::= {
 *   BodyPartReferences
 *   IDENTIFIED BY  id-mst-invalid-assembly-instructions
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<BodyPartReferences>}
 * @implements {MS_EXTENSION<BodyPartReferences>}
 */
export const invalid_assembly_instructions: MS_EXTENSION<BodyPartReferences> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_BodyPartReferences,
    },
    encoderFor: {
        '&Type': _encode_BodyPartReferences,
    },
    '&id': id_mst_invalid_assembly_instructions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION invalid_assembly_instructions */

/* eslint-enable */
