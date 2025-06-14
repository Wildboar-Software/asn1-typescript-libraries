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
import { id_mst } from '../IPMSObjectIdentifiers/id-mst.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mst_invalid_assembly_instructions */
/**
 * @summary id_mst_invalid_assembly_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mst-invalid-assembly-instructions ID ::= {id-mst  0}
 * ```
 *
 * @constant
 */
export const id_mst_invalid_assembly_instructions: ID = new _OID([0], id_mst);
/* END_OF_SYMBOL_DEFINITION id_mst_invalid_assembly_instructions */

/* eslint-enable */
