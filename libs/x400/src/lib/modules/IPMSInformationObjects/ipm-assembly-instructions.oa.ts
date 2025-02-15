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
    IPMAssemblyInstructions,
    _decode_IPMAssemblyInstructions,
    _encode_IPMAssemblyInstructions,
} from '../IPMSInformationObjects/IPMAssemblyInstructions.ta';
export {
    IPMAssemblyInstructions,
    _decode_IPMAssemblyInstructions,
    _encode_IPMAssemblyInstructions,
} from '../IPMSInformationObjects/IPMAssemblyInstructions.ta';
import { id_mst_assembly_instructions } from '../IPMSObjectIdentifiers/id-mst-assembly-instructions.va';
export { id_mst_assembly_instructions } from '../IPMSObjectIdentifiers/id-mst-assembly-instructions.va';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca';
export { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION ipm_assembly_instructions */
/**
 * @summary ipm_assembly_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-assembly-instructions MS-EXTENSION ::= {
 *   IPMAssemblyInstructions
 *   IDENTIFIED BY  id-mst-assembly-instructions
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<IPMAssemblyInstructions>}
 * @implements {MS_EXTENSION<IPMAssemblyInstructions>}
 */
export const ipm_assembly_instructions: MS_EXTENSION<IPMAssemblyInstructions> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_IPMAssemblyInstructions,
    },
    encoderFor: {
        '&Type': _encode_IPMAssemblyInstructions,
    },
    '&id': id_mst_assembly_instructions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ipm_assembly_instructions */

/* eslint-enable */
