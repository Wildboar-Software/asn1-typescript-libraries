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
/* START_OF_SYMBOL_DEFINITION id_moc_adjMTA */
/**
 * @summary id_moc_adjMTA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-adjMTA ID ::= {id-moc  0}
 * ```
 *
 * @constant
 */
export const id_moc_adjMTA: ID = new _OID([0], id_moc);
/* END_OF_SYMBOL_DEFINITION id_moc_adjMTA */

/* eslint-enable */
