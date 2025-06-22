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
 * @summary id_moc_acctRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc-acctRequest ID ::= {id-moc  0}
 * ```
 *
 * @constant
 */
export const id_moc_acctRequest: ID = _OID.fromParts([0], id_moc);

/* eslint-enable */
