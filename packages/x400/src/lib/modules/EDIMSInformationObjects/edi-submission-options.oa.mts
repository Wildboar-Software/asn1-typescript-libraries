/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    EDISubmissionOptions,
    _decode_EDISubmissionOptions,
    _encode_EDISubmissionOptions,
} from '../EDIMSInformationObjects/EDISubmissionOptions.ta.mjs';
import { id_ext_submission_options } from '../EDIMSObjectIdentifiers/id-ext-submission-options.va.mjs';
import { EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca.mjs';
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

/* eslint-enable */
