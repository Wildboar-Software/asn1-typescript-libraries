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
import { type TMF_OBJECT } from '../Test-ASN1Module/TMF-OBJECT.oca.mjs';
/**
 * @summary AssociatedObjectSet
 * @description
 *
 * Extensible information-object set of TMF-OBJECT (empty `{...}` in X.745).
 * Each associated-object info id in AssociatedObjects shall be drawn from this
 * set; referencing test categories populate it.
 * X.745 Cor.3 (02/00) A.7.1.
 * https://www.itu.int/rec/T-REC-X.745-200002-I_Cor3
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociatedObjectSet TMF-OBJECT ::= {...}
 * ```
 *
 * @constant
 * @type {TMF_OBJECT[]}
 *
 */
export const AssociatedObjectSet: TMF_OBJECT[] = [];

/* eslint-enable */
