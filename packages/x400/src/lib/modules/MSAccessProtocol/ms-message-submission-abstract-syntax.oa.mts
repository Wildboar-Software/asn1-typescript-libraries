/* eslint-disable */
import {
    ABSTRACT_SYNTAX,
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
    MSMessageSubmissionPDUs,
    _decode_MSMessageSubmissionPDUs,
    _encode_MSMessageSubmissionPDUs,
} from '../MSAccessProtocol/MSMessageSubmissionPDUs.ta.mjs';
import { id_as_ms_msse } from '../MHSProtocolObjectIdentifiers/id-as-ms-msse.va.mjs';
/**
 * @summary ms_message_submission_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-message-submission-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   MSMessageSubmissionPDUs
 *   IDENTIFIED BY  id-as-ms-msse
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MSMessageSubmissionPDUs>}
 * @implements {ABSTRACT_SYNTAX<MSMessageSubmissionPDUs>}
 */
export const ms_message_submission_abstract_syntax: ABSTRACT_SYNTAX<MSMessageSubmissionPDUs> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MSMessageSubmissionPDUs,
    },
    encoderFor: {
        '&Type': _encode_MSMessageSubmissionPDUs,
    },
    '&id': id_as_ms_msse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
