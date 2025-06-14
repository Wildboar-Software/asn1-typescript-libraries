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
/* START_OF_SYMBOL_DEFINITION id_cat_obsoleted_edims */
/**
 * @summary id_cat_obsoleted_edims
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-obsoleted-edims ID ::= {id-cat  5}
 * ```
 *
 * @constant
 */
export const id_cat_obsoleted_edims: ID = new _OID([5], id_cat);
/* END_OF_SYMBOL_DEFINITION id_cat_obsoleted_edims */

/* eslint-enable */
