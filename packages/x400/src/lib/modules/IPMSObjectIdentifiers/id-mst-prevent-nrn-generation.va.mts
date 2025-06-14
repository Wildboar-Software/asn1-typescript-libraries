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
/* START_OF_SYMBOL_DEFINITION id_mst_prevent_nrn_generation */
/**
 * @summary id_mst_prevent_nrn_generation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mst-prevent-nrn-generation ID ::= {id-mst  4}
 * ```
 *
 * @constant
 */
export const id_mst_prevent_nrn_generation: ID = new _OID([4], id_mst);
/* END_OF_SYMBOL_DEFINITION id_mst_prevent_nrn_generation */

/* eslint-enable */
