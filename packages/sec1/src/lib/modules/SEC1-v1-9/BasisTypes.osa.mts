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
} from "asn1-ts";
import { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca.mjs";
import { BasisTypes_Union0_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union0-Intersection0-Element.oa.mjs";
import { BasisTypes_Union1_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union1-Intersection0-Element.oa.mjs";
import { BasisTypes_Union2_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union2-Intersection0-Element.oa.mjs";
/* START_OF_SYMBOL_DEFINITION BasisTypes */
/**
 * @summary BasisTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasisTypes CHARACTERISTIC-TWO ::= {
 *     { NULL IDENTIFIED BY gnBasis } |
 *     { Trinomial IDENTIFIED BY tpBasis } |
 *     { Pentanomial IDENTIFIED BY ppBasis },
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {CHARACTERISTIC_TWO[]}
 *
 */
export
const BasisTypes: (CHARACTERISTIC_TWO<any>)[] = [ BasisTypes_Union0_Intersection0_Element, BasisTypes_Union1_Intersection0_Element, BasisTypes_Union2_Intersection0_Element, ];
/* END_OF_SYMBOL_DEFINITION BasisTypes */

/* eslint-enable */
