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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_moc } from '../MhsAcctObjectIdentifiers/id-moc.va.mjs';
/**
 * @summary id_moc_customerEFD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-customerEFD ID ::= {id-moc  6}
 * ```
 *
 * @constant
 */
export const id_moc_customerEFD: ID = _OID.fromParts([6], id_moc);

/* eslint-enable */
