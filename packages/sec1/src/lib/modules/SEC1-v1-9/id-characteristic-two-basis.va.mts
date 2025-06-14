/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import { characteristic_two_field } from "../SEC1-v1-9/characteristic-two-field.va.mjs";
/* START_OF_SYMBOL_DEFINITION id_characteristic_two_basis */
/**
 * @summary id_characteristic_two_basis
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-characteristic-two-basis OBJECT IDENTIFIER ::= {
 *     characteristic-two-field basisType(3)
 * }
 * ```
 * 
 * @constant
 */
export
const id_characteristic_two_basis: OBJECT_IDENTIFIER = new _OID([
    /* basisType */ 3,
], characteristic_two_field);
/* END_OF_SYMBOL_DEFINITION id_characteristic_two_basis */

/* eslint-enable */
