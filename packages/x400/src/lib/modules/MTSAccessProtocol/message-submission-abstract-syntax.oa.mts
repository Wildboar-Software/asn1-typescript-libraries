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
} from 'asn1-ts';
import {
    MessageSubmissionPDUs,
    _decode_MessageSubmissionPDUs,
    _encode_MessageSubmissionPDUs,
} from '../MTSAccessProtocol/MessageSubmissionPDUs.ta.mjs';
import { id_as_msse } from '../MHSProtocolObjectIdentifiers/id-as-msse.va.mjs';
/* START_OF_SYMBOL_DEFINITION message_submission_abstract_syntax */
/**
 * @summary message_submission_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-submission-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   MessageSubmissionPDUs
 *   IDENTIFIED BY  id-as-msse
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MessageSubmissionPDUs>}
 * @implements {ABSTRACT_SYNTAX<MessageSubmissionPDUs>}
 */
export const message_submission_abstract_syntax: ABSTRACT_SYNTAX<MessageSubmissionPDUs> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MessageSubmissionPDUs,
    },
    encoderFor: {
        '&Type': _encode_MessageSubmissionPDUs,
    },
    '&id': id_as_msse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION message_submission_abstract_syntax */

/* eslint-enable */
