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
/* START_OF_SYMBOL_DEFINITION id_at_encrypted_mhs_supported_automatic_actions */
/**
 * @summary id_at_encrypted_mhs_supported_automatic_actions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-encrypted-mhs-supported-automatic-actions ID ::= {id-at 8 2}
 * ```
 *
 * @constant
 */
export const id_at_encrypted_mhs_supported_automatic_actions: ID = new _OID(
    [8, 2],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_encrypted_mhs_supported_automatic_actions */

/* eslint-enable */
