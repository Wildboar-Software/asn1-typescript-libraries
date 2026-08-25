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
 * @summary id_att_storage_time
 * @description
 *
 * This general-attribute indicates the date and time at which the MS-user estimates that
 * storage for the entry will no longer be required. An entry becomes subject to deletion
 * by the Auto-delete auto-action when its storage-time is reached (see 13.4). See ITU-T
 * X.413 (1999), §11.2.79.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-storage-time ID ::= {id-att  74}
 * ```
 *
 * @constant
 */
export const id_att_storage_time: ID = _OID.fromParts([74], id_att);

/* eslint-enable */
