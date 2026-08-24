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
import { id_at } from '../MHSObjectIdentifiers/id-at.va.mjs';
/**
 * @summary id_at_mhs_supported_content_types
 * @description
 *
 * OBJECT IDENTIFIER `id_at_mhs_supported_content_types`. Defined in ITU-T X.402 (1999)
 * (Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-mhs-supported-content-types ID ::= {id-at  9}
 * ```
 *
 * @constant
 */
export const id_at_mhs_supported_content_types: ID = _OID.fromParts([9], id_at);

/* eslint-enable */
