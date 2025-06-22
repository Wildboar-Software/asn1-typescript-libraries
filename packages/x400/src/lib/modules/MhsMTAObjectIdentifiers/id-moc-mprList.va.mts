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
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_moc } from '../MhsMTAObjectIdentifiers/id-moc.va.mjs';
/**
 * @summary id_moc_mprList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-mprList ID ::= {id-moc  5}
 * ```
 *
 * @constant
 */
export const id_moc_mprList: ID = _OID.fromParts([5], id_moc);

/* eslint-enable */
