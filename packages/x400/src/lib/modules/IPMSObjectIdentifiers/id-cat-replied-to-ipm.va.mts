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
 * @summary id_cat_replied_to_ipm
 * @description
 *
 * The Replied-to IPM heading field (C) identifies the IPM to which the present IPM is a
 * reply. It comprises an IPM identifier. See ITU-T X.420 (1999), §7.2.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-replied-to-ipm ID ::= {id-cat  11}
 * ```
 *
 * @constant
 */
export const id_cat_replied_to_ipm: ID = _OID.fromParts([11], id_cat);

/* eslint-enable */
