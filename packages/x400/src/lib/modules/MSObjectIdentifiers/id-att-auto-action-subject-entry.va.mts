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
 * @summary id_att_auto_action_subject_entry
 * @description
 *
 * OBJECT IDENTIFIER `id_att_auto_action_subject_entry`. This general-attribute indicates
 * the sequence-number of the Stored-message entry which was the subject of the auto-
 * action processing recorded by the present entry. The attribute may be present only in
 * entries of the Auto-action-log entry- class. See ITU-T X.413 (1999), §11.2.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-auto-action-subject-entry ID ::= {id-att  48}
 * ```
 *
 * @constant
 */
export const id_att_auto_action_subject_entry: ID = _OID.fromParts([48], id_att);

/* eslint-enable */
