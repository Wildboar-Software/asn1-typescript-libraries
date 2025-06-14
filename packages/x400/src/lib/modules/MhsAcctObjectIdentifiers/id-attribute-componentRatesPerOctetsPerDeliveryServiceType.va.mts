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
/* START_OF_SYMBOL_DEFINITION id_attribute_componentRatesPerOctetsPerDeliveryServiceType */
/**
 * @summary id_attribute_componentRatesPerOctetsPerDeliveryServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-componentRatesPerOctetsPerDeliveryServiceType ID ::= {id-attribute  11}
 * ```
 *
 * @constant
 */
export const id_attribute_componentRatesPerOctetsPerDeliveryServiceType: ID = new _OID(
    [11],
    id_attribute
);
/* END_OF_SYMBOL_DEFINITION id_attribute_componentRatesPerOctetsPerDeliveryServiceType */

/* eslint-enable */
