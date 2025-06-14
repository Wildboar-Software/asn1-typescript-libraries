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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_pt } from '../EDIMSObjectIdentifiers/id-pt.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_pt_reception */
/**
 * @summary id_pt_reception
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pt-reception ID ::= {id-pt  1}
 * ```
 *
 * @constant
 */
export const id_pt_reception: ID = new _OID([1], id_pt);
/* END_OF_SYMBOL_DEFINITION id_pt_reception */

/* eslint-enable */
