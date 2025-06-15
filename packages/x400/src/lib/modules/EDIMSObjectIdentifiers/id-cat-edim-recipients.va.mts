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
/**
 * @summary id_cat_edim_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-edim-recipients ID ::= {id-cat  2}
 * ```
 *
 * @constant
 */
export const id_cat_edim_recipients: ID = new _OID([2], id_cat);

/* eslint-enable */
