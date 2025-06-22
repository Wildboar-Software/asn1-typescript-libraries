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
import { id_attribute } from '../MhsAcctObjectIdentifiers/id-attribute.va.mjs';
/**
 * @summary id_attribute_deliveryComponentRateToPrmd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-deliveryComponentRateToPrmd ID ::= {id-attribute  34}
 * ```
 *
 * @constant
 */
export const id_attribute_deliveryComponentRateToPrmd: ID = _OID.fromParts(
    [34],
    id_attribute
);

/* eslint-enable */
