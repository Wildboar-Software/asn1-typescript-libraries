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
import { id_cat } from '../EDIMSObjectIdentifiers/id-cat.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_cat_delivered_edin_summary */
/**
 * @summary id_cat_delivered_edin_summary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-delivered-edin-summary ID ::= {id-cat  1}
 * ```
 *
 * @constant
 */
export const id_cat_delivered_edin_summary: ID = new _OID([1], id_cat);
/* END_OF_SYMBOL_DEFINITION id_cat_delivered_edin_summary */

/* eslint-enable */
