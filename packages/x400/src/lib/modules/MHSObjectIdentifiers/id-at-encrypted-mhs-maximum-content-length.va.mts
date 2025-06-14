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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_at } from '../MHSObjectIdentifiers/id-at.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_at_encrypted_mhs_maximum_content_length */
/**
 * @summary id_at_encrypted_mhs_maximum_content_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-encrypted-mhs-maximum-content-length ID ::= {id-at 0 2}
 * ```
 *
 * @constant
 */
export const id_at_encrypted_mhs_maximum_content_length: ID = new _OID(
    [0, 2],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_encrypted_mhs_maximum_content_length */

/* eslint-enable */
