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
    ManualHandlingInstructions,
    _decode_ManualHandlingInstructions,
    _encode_ManualHandlingInstructions,
} from '../IPMSHeadingExtensions/ManualHandlingInstructions.ta.js';
export {
    ManualHandlingInstructions,
    _decode_ManualHandlingInstructions,
    _encode_ManualHandlingInstructions,
} from '../IPMSHeadingExtensions/ManualHandlingInstructions.ta.js';
import { id_hex_manual_handling_instructions } from '../IPMSObjectIdentifiers/id-hex-manual-handling-instructions.va.js';
export { id_hex_manual_handling_instructions } from '../IPMSObjectIdentifiers/id-hex-manual-handling-instructions.va.js';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.js';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.js';

/* START_OF_SYMBOL_DEFINITION manual_handling_instructions */
/**
 * @summary manual_handling_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * manual-handling-instructions IPMS-EXTENSION ::= {
 *   VALUE          ManualHandlingInstructions,
 *   IDENTIFIED BY  id-hex-manual-handling-instructions
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<ManualHandlingInstructions>}
 * @implements {IPMS_EXTENSION<ManualHandlingInstructions>}
 */
export const manual_handling_instructions: IPMS_EXTENSION<ManualHandlingInstructions> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_ManualHandlingInstructions,
    },
    encoderFor: {
        '&Type': _encode_ManualHandlingInstructions,
    },
    '&id': id_hex_manual_handling_instructions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION manual_handling_instructions */

/* eslint-enable */
