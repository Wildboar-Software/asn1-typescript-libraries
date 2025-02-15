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
    EDISubmissionOptions,
    _decode_EDISubmissionOptions,
    _encode_EDISubmissionOptions,
} from '../EDIMSInformationObjects/EDISubmissionOptions.ta';
export {
    EDISubmissionOptions,
    _decode_EDISubmissionOptions,
    _encode_EDISubmissionOptions,
} from '../EDIMSInformationObjects/EDISubmissionOptions.ta';
import { id_ext_submission_options } from '../EDIMSObjectIdentifiers/id-ext-submission-options.va';
export { id_ext_submission_options } from '../EDIMSObjectIdentifiers/id-ext-submission-options.va';
import { EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca';
export { EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION edi_submission_options */
/**
 * @summary edi_submission_options
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-submission-options EDIM-EXTENSION ::= {
 *   VALUE          EDISubmissionOptions,
 *   IDENTIFIED BY  id-ext-submission-options
 * }
 * ```
 *
 * @constant
 * @type {EDIM_EXTENSION<EDISubmissionOptions>}
 * @implements {EDIM_EXTENSION<EDISubmissionOptions>}
 */
export const edi_submission_options: EDIM_EXTENSION<EDISubmissionOptions> = {
    class: 'EDIM-EXTENSION',
    decoderFor: {
        '&Type': _decode_EDISubmissionOptions,
    },
    encoderFor: {
        '&Type': _encode_EDISubmissionOptions,
    },
    '&id': id_ext_submission_options /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&criticality': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_submission_options */

/* eslint-enable */
