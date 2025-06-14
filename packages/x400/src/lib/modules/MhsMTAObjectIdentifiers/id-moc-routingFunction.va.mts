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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_moc } from '../MhsMTAObjectIdentifiers/id-moc.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_moc_routingFunction */
/**
 * @summary id_moc_routingFunction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-routingFunction ID ::= {id-moc  12}
 * ```
 *
 * @constant
 */
export const id_moc_routingFunction: ID = new _OID([12], id_moc);
/* END_OF_SYMBOL_DEFINITION id_moc_routingFunction */

/* eslint-enable */
