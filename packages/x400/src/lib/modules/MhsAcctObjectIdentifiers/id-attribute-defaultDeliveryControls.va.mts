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
/* START_OF_SYMBOL_DEFINITION id_attribute_defaultDeliveryControls */
/**
 * @summary id_attribute_defaultDeliveryControls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-defaultDeliveryControls ID ::= {id-attribute  28}
 * ```
 *
 * @constant
 */
export const id_attribute_defaultDeliveryControls: ID = new _OID(
    [28],
    id_attribute
);
/* END_OF_SYMBOL_DEFINITION id_attribute_defaultDeliveryControls */

/* eslint-enable */
