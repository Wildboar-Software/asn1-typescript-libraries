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
 * @summary id_att_per_recipient_message_submission_fields
 * @description
 *
 * This general-attribute, which is multi-valued, contains the per-recipient-fields
 * component of the Message-submission- envelope. See ITU-T X.413 (1999), §11.2.58.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-per-recipient-message-submission-fields ID ::= {id-att  66}
 * ```
 *
 * @constant
 */
export const id_att_per_recipient_message_submission_fields: ID = _OID.fromParts(
    [66],
    id_att
);

/* eslint-enable */
