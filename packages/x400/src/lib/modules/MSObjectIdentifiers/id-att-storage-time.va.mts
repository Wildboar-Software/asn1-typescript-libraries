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
/* START_OF_SYMBOL_DEFINITION id_att_storage_time */
/**
 * @summary id_att_storage_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-storage-time ID ::= {id-att  74}
 * ```
 *
 * @constant
 */
export const id_att_storage_time: ID = new _OID([74], id_att);
/* END_OF_SYMBOL_DEFINITION id_att_storage_time */

/* eslint-enable */
