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
import { id_edwards_curve_algs } from "../Safecurves-pkix-18/id-edwards-curve-algs.va.mjs";
/* START_OF_SYMBOL_DEFINITION id_X448 */
/**
 * @summary id_X448
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-X448          OBJECT IDENTIFIER ::= { id-edwards-curve-algs 111 }
 * ```
 * 
 * @constant
 */
export
const id_X448: OBJECT_IDENTIFIER = new _OID([
    111,
], id_edwards_curve_algs);
/* END_OF_SYMBOL_DEFINITION id_X448 */

/* eslint-enable */
