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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_moc } from '../MhsAcctObjectIdentifiers/id-moc.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_moc_customerAcctRecord */
/**
 * @summary id_moc_customerAcctRecord
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-customerAcctRecord ID ::= {id-moc  5}
 * ```
 *
 * @constant
 */
export const id_moc_customerAcctRecord: ID = new _OID([5], id_moc);
/* END_OF_SYMBOL_DEFINITION id_moc_customerAcctRecord */

/* eslint-enable */
