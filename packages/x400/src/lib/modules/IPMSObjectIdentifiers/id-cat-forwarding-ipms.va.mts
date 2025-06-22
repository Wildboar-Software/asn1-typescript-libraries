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
 * @summary id_cat_forwarding_ipms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-forwarding-ipms ID ::= {id-cat  5}
 * ```
 *
 * @constant
 */
export const id_cat_forwarding_ipms: ID = _OID.fromParts([5], id_cat);

/* eslint-enable */
