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
import { id_characteristic_two_basis } from "../SEC1-v1-9/id-characteristic-two-basis.va.mjs";
/* START_OF_SYMBOL_DEFINITION gnBasis */
/**
 * @summary gnBasis
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gnBasis OBJECT IDENTIFIER ::= { id-characteristic-two-basis 1 }
 * ```
 * 
 * @constant
 */
export
const gnBasis: OBJECT_IDENTIFIER = new _OID([
    1,
], id_characteristic_two_basis);
/* END_OF_SYMBOL_DEFINITION gnBasis */

/* eslint-enable */
