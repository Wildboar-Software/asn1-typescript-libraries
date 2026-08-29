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
 * @summary id_methods
 * @description
 *
 * Measurement methods `{id-measures methods(5)}`. Split by the five
 * X.1080.x fields (physics … psychology). `DataMessage.method` is an
 * OID under these arcs. X.1080.1 Annex A.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-methods                OBJECT IDENTIFIER ::= {id-measures methods(5)}
 * ```
 *
 * @constant
 */
export const id_methods: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* methods */ 5],
    id_measures
);

/* eslint-enable */
