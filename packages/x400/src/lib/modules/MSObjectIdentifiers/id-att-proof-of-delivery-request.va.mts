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
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_att_proof_of_delivery_request */
/**
 * @summary id_att_proof_of_delivery_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-proof-of-delivery-request ID ::= {id-att  32}
 * ```
 *
 * @constant
 */
export const id_att_proof_of_delivery_request: ID = new _OID([32], id_att);
/* END_OF_SYMBOL_DEFINITION id_att_proof_of_delivery_request */

/* eslint-enable */
