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
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_contactInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-contactInstance ID ::= {id-attribute  17}
 * ```
 *
 * @constant
 */
export const id_attribute_contactInstance: ID = _OID.fromParts([17], id_attribute);

/* eslint-enable */
