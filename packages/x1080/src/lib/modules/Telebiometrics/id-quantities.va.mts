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
} from '@wildboar/asn1';
import { id_measures } from '../Telebiometrics/id-measures.va.mjs';

/**
 * @summary id_quantities
 * @description
 *
 * Quantities under the TMM metric layer
 * `{id-measures quantities(1)}`. Split by the five X.1080.x fields
 * (physics … psychology). Tables of named quantities are in X.1082
 * clauses 6–11, not compiled here. X.1080.1 Annex A.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-quantities             OBJECT IDENTIFIER ::= {id-measures quantities(1)}
 * ```
 *
 * @constant
 */
export const id_quantities: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* quantities */ 1],
    id_measures
);

/* eslint-enable */
