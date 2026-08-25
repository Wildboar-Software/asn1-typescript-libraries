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
 * @summary id_att_marked_for_deletion
 * @description
 *
 * This general-attribute indicates (by its presence or absence) whether the MS-user has
 * marked the entry for subsequent deletion. Support for this attribute implies that the
 * MS-user shall be able to create it or amend it by means of the Modify abstract-operation
 * and the Auto-modify auto-action. See ITU-T X.413 (1999), §11.2.34.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-marked-for-deletion ID ::= {id-att  56}
 * ```
 *
 * @constant
 */
export const id_att_marked_for_deletion: ID = _OID.fromParts([56], id_att);

/* eslint-enable */
