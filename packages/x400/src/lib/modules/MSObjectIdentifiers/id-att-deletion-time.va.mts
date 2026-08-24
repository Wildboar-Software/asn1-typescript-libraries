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
 * @summary id_att_deletion_time
 * @description
 *
 * OBJECT IDENTIFIER `id_att_deletion_time`. This general-attribute may be present in
 * entries of the Message-log entry-class, and indicates the time at which the
 * corresponding entry in the Stored-message entry-class was deleted. In the case of a
 * Submission-log entry for which no Submission entry is created, the deletion-time
 * attribute is generated when the Submission-log entry is created and is assigned the
 * same value as the entry's creation-time. See ITU-T X.413 (1999), §11.2.24.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-deletion-time ID ::= {id-att  52}
 * ```
 *
 * @constant
 */
export const id_att_deletion_time: ID = _OID.fromParts([52], id_att);

/* eslint-enable */
