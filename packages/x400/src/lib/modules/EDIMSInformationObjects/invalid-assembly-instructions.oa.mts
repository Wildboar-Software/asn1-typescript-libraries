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
    BodyPartSpecifiers,
    _decode_BodyPartSpecifiers,
    _encode_BodyPartSpecifiers,
} from '../EDIMSInformationObjects/BodyPartSpecifiers.ta.mjs';
export {
    BodyPartSpecifiers,
    _decode_BodyPartSpecifiers,
    _encode_BodyPartSpecifiers,
} from '../EDIMSInformationObjects/BodyPartSpecifiers.ta.mjs';
import { id_ext_invalid_assembly_instructions } from '../EDIMSObjectIdentifiers/id-ext-invalid-assembly-instructions.va.mjs';
export { id_ext_invalid_assembly_instructions } from '../EDIMSObjectIdentifiers/id-ext-invalid-assembly-instructions.va.mjs';
import { EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca.mjs';
export { EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION invalid_assembly_instructions */
/**
 * @summary invalid_assembly_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalid-assembly-instructions EDIM-EXTENSION ::= {
 *   VALUE          BodyPartSpecifiers,
 *   IDENTIFIED BY  id-ext-invalid-assembly-instructions
 * }
 * ```
 *
 * @constant
 * @type {EDIM_EXTENSION<BodyPartSpecifiers>}
 * @implements {EDIM_EXTENSION<BodyPartSpecifiers>}
 */
export const invalid_assembly_instructions: EDIM_EXTENSION<BodyPartSpecifiers> = {
    class: 'EDIM-EXTENSION',
    decoderFor: {
        '&Type': _decode_BodyPartSpecifiers,
    },
    encoderFor: {
        '&Type': _encode_BodyPartSpecifiers,
    },
    '&id': id_ext_invalid_assembly_instructions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&criticality': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION invalid_assembly_instructions */

/* eslint-enable */
