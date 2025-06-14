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
/* START_OF_SYMBOL_DEFINITION id_moc_secMessage */
/**
 * @summary id_moc_secMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-secMessage ID ::= {id-moc  17}
 * ```
 *
 * @constant
 */
export const id_moc_secMessage: ID = new _OID([17], id_moc);
/* END_OF_SYMBOL_DEFINITION id_moc_secMessage */

/* eslint-enable */
