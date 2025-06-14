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
import { id_mr } from '../MSObjectIdentifiers/id-mr.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_mr_msstring_list_match */
/**
 * @summary id_mr_msstring_list_match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-msstring-list-match ID ::= {id-mr  9}
 * ```
 *
 * @constant
 */
export const id_mr_msstring_list_match: ID = new _OID([9], id_mr);
/* END_OF_SYMBOL_DEFINITION id_mr_msstring_list_match */

/* eslint-enable */
