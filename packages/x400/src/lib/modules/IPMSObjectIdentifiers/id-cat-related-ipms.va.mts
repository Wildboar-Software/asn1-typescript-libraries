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
 * @summary id_cat_related_ipms
 * @description
 *
 * OBJECT IDENTIFIER `id_cat_related_ipms`. The Related IPMs heading field (D no
 * subfields (i.e., elements)) identifies zero or more IPMs that the authorizing users of
 * the present IPM consider related to it. It comprises a Sequence of sub-fields, each an
 * IPM identifier, one for each IPM. See ITU-T X.420 (1999), §7.2.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-related-ipms ID ::= {id-cat  9}
 * ```
 *
 * @constant
 */
export const id_cat_related_ipms: ID = _OID.fromParts([9], id_cat);

/* eslint-enable */
