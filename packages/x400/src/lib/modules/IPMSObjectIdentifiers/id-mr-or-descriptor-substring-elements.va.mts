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
import { id_mr } from '../IPMSObjectIdentifiers/id-mr.va.mjs';
/**
 * @summary id_mr_or_descriptor_substring_elements
 * @description
 *
 * OBJECT IDENTIFIER `id_mr_or_descriptor_substring_elements`. Defined in ITU-T X.420
 * (1999) (Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-or-descriptor-substring-elements ID ::= {id-mr  3}
 * ```
 *
 * @constant
 */
export const id_mr_or_descriptor_substring_elements: ID = _OID.fromParts([3], id_mr);

/* eslint-enable */
