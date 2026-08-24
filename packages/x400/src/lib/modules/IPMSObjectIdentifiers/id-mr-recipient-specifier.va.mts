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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_mr } from '../IPMSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_recipient_specifier
 * @description
 *
 * OBJECT IDENTIFIER `id_mr_recipient_specifier`. A recipient specifier is an information
 * item that identifies an (intended) recipient of an IPM and that may make certain
 * requests of him. RecipientSpecifier ::= SET { recipient [0] ORDescriptor,
 * notification-requests [1] NotificationRequests DEFAULT {}, reply-requested [2] BOOLEAN
 * DEFAULT FALSE, recipient-extensions [3] RecipientExtensionsField OPTIONAL} A recipient
 * specifier has the following components: a)… See ITU-T X.420 (1999), §7.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-recipient-specifier ID ::= {id-mr  4}
 * ```
 *
 * @constant
 */
export const id_mr_recipient_specifier: ID = _OID.fromParts([4], id_mr);

/* eslint-enable */
