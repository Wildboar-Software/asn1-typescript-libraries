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
 * @summary id_att_recipient_reassignment_prohibited
 * @description
 *
 * OBJECT IDENTIFIER `id_att_recipient_reassignment_prohibited`. This general-attribute
 * contains the recipient-reassignment-prohibited argument of the Message-submission and
 * Probe- submission abstract-operations. It indicates whether a message or probe
 * submitted by the MS-user may be redirected to a recipient-assigned-alternate-recipient
 * registered by the intended-recipient. See ITU-T X.413 (1999), §11.2.68.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-recipient-reassignment-prohibited ID ::= {id-att  72}
 * ```
 *
 * @constant
 */
export const id_att_recipient_reassignment_prohibited: ID = _OID.fromParts(
    [72],
    id_att
);

/* eslint-enable */
