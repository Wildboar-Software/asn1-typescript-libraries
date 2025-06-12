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
    TerminalType,
    TerminalType_telex /* IMPORTED_LONG_NAMED_INTEGER */,
    telex /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_g4_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    g4_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_ia5_terminal /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_terminal /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TerminalType,
    _encode_TerminalType,
} from '../MTSAbstractService/TerminalType.ta.js';
export {
    TerminalType,
    TerminalType_telex /* IMPORTED_LONG_NAMED_INTEGER */,
    telex /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_g4_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    g4_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_ia5_terminal /* IMPORTED_LONG_NAMED_INTEGER */,
    ia5_terminal /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TerminalType,
    _encode_TerminalType,
} from '../MTSAbstractService/TerminalType.ta.js';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.js';
export { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.js';

/* START_OF_SYMBOL_DEFINITION terminal_type */
/**
 * @summary terminal_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * terminal-type EXTENSION-ATTRIBUTE ::= {TerminalType
 *                                        IDENTIFIED BY  23
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TerminalType>}
 * @implements {EXTENSION_ATTRIBUTE<TerminalType>}
 */
export const terminal_type: EXTENSION_ATTRIBUTE<TerminalType> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TerminalType,
    },
    encoderFor: {
        '&Type': _encode_TerminalType,
    },
    '&id': 23 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION terminal_type */

/* eslint-enable */
