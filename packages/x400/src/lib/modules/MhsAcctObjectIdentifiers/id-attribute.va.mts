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
import { id_accounting } from '../MhsAcctObjectIdentifiers/id-accounting.va.mjs';
/**
 * @summary id_attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute ID ::= {id-accounting  2}
 * ```
 *
 * @constant
 */
export const id_attribute: ID = _OID.fromParts([2], id_accounting);

/* eslint-enable */
