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
import { id_mod } from '../IPMSObjectIdentifiers/id-mod.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mod_file_transfer_body_part_type */
/**
 * @summary id_mod_file_transfer_body_part_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mod-file-transfer-body-part-type ID ::= {id-mod  9}
 * ```
 *
 * @constant
 */
export const id_mod_file_transfer_body_part_type: ID = new _OID([9], id_mod);
/* END_OF_SYMBOL_DEFINITION id_mod_file_transfer_body_part_type */

/* eslint-enable */
