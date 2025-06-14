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
import { ID, _decode_ID, _encode_ID } from '../MhsMTAObjectIdentifiers/ID.ta.mjs';
import { id_attribute } from '../MhsMTAObjectIdentifiers/id-attribute.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_attribute_messageEncAlg */
/**
 * @summary id_attribute_messageEncAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-attribute-messageEncAlg ID ::= {id-attribute  72}
 * ```
 *
 * @constant
 */
export const id_attribute_messageEncAlg: ID = new _OID([72], id_attribute);
/* END_OF_SYMBOL_DEFINITION id_attribute_messageEncAlg */

/* eslint-enable */
