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
import { id_quantities } from '../Telebiometrics/id-quantities.va.mjs';

/**
 * @summary id_quantities_culturology
 * @description
 *
 * Culturology quantities `{id-quantities culturology(4)}`. One of
 * the five X.1080.x fields. Named-quantity tables are in X.1082
 * clauses 6–11, not compiled here. X.1080.1 Annex A.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-quantities-culturology OBJECT IDENTIFIER ::= {id-quantities culturology(4)}
 * ```
 *
 * @constant
 */
export const id_quantities_culturology: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* culturology */ 4],
    id_quantities
);

/* eslint-enable */
