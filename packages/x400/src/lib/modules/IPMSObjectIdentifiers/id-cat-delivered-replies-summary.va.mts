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
import { id_cat } from '../IPMSObjectIdentifiers/id-cat.va.mjs';
/**
 * @summary id_cat_delivered_replies_summary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-delivered-replies-summary ID ::= {id-cat  3}
 * ```
 *
 * @constant
 */
export const id_cat_delivered_replies_summary: ID = _OID.fromParts([3], id_cat);

/* eslint-enable */
