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
/* START_OF_SYMBOL_DEFINITION id_attribute_operationTime */
/**
 * @summary id_attribute_operationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-operationTime ID ::= {id-attribute  78}
 * ```
 *
 * @constant
 */
export const id_attribute_operationTime: ID = new _OID([78], id_attribute);
/* END_OF_SYMBOL_DEFINITION id_attribute_operationTime */

/* eslint-enable */
