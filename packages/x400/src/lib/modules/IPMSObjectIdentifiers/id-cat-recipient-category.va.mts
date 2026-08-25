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
import { id_cat } from '../IPMSObjectIdentifiers/id-cat.va.mjs';
/**
 * @summary id_cat_recipient_category
 * @description
 *
 * The Recipient Category attribute indicates the category of recipient (primary, copy,
 * blind copy, or circulation list), if known, in which this IPMS-MS-user was placed by the
 * originator of a delivered IPM. If this recipient is represented in more than one
 * category, the attribute assumes the lowest applicable value. See ITU-T X.420 (1999),
 * §19.6.5.3.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-recipient-category ID ::= {id-cat  18}
 * ```
 *
 * @constant
 */
export const id_cat_recipient_category: ID = _OID.fromParts([18], id_cat);

/* eslint-enable */
