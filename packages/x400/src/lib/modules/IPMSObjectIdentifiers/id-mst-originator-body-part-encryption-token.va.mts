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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_mst } from '../IPMSObjectIdentifiers/id-mst.va.mjs';
/**
 * @summary id_mst_originator_body_part_encryption_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mst-originator-body-part-encryption-token ID ::= {id-mst  5}
 * ```
 *
 * @constant
 */
export const id_mst_originator_body_part_encryption_token: ID = new _OID(
    [5],
    id_mst
);

/* eslint-enable */
