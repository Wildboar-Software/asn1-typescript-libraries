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
    IncompleteCopy,
    _decode_IncompleteCopy,
    _encode_IncompleteCopy,
} from '../IPMSHeadingExtensions/IncompleteCopy.ta.mjs';
export {
    IncompleteCopy,
    _decode_IncompleteCopy,
    _encode_IncompleteCopy,
} from '../IPMSHeadingExtensions/IncompleteCopy.ta.mjs';
import { id_hex_incomplete_copy } from '../IPMSObjectIdentifiers/id-hex-incomplete-copy.va.mjs';
export { id_hex_incomplete_copy } from '../IPMSObjectIdentifiers/id-hex-incomplete-copy.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION incomplete_copy */
/**
 * @summary incomplete_copy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * incomplete-copy IPMS-EXTENSION ::= {
 *   VALUE          IncompleteCopy,
 *   IDENTIFIED BY  id-hex-incomplete-copy
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<IncompleteCopy>}
 * @implements {IPMS_EXTENSION<IncompleteCopy>}
 */
export const incomplete_copy: IPMS_EXTENSION<IncompleteCopy> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_IncompleteCopy,
    },
    encoderFor: {
        '&Type': _encode_IncompleteCopy,
    },
    '&id': id_hex_incomplete_copy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION incomplete_copy */

/* eslint-enable */
