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
import { id_cat } from '../IPMSObjectIdentifiers/id-cat.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_cat_forwarded_ipms */
/**
 * @summary id_cat_forwarded_ipms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-forwarded-ipms ID ::= {id-cat  4}
 * ```
 *
 * @constant
 */
export const id_cat_forwarded_ipms: ID = new _OID([4], id_cat);
/* END_OF_SYMBOL_DEFINITION id_cat_forwarded_ipms */

/* eslint-enable */
