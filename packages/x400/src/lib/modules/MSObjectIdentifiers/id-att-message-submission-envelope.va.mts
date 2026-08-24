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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_message_submission_envelope
 * @description
 *
 * OBJECT IDENTIFIER `id_att_message_submission_envelope`. This general-attribute
 * contains the envelope component of the argument of the Message-submission
 * abstract-operation. See Figure 2 (Part 3) of WITH ATTRIBUTE-SYNTAX
 * MessageSubmissionEnvelope, NUMERATION single-valued, ID
 * id-att-message-submission-envelope } 11.2.43 Message-submission-time This
 * general-attribute indicates the time at which the MTS a ccepted responsibility for the
 * message or probe. See ITU-T X.413 (1999), §11.2.42.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-message-submission-envelope ID ::= {id-att  59}
 * ```
 *
 * @constant
 */
export const id_att_message_submission_envelope: ID = _OID.fromParts([59], id_att);

/* eslint-enable */
