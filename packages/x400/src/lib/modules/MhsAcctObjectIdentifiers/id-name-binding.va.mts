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
import { id_accounting } from '../MhsAcctObjectIdentifiers/id-accounting.va.mjs';
/**
 * @summary id_name_binding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-name-binding ID ::= {id-accounting  7}
 * ```
 *
 * @constant
 */
export const id_name_binding: ID = _OID.fromParts([7], id_accounting);

/* eslint-enable */
