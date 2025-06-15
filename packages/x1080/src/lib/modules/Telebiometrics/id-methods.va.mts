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
} from 'asn1-ts';
import { id_measures } from '../Telebiometrics/id-measures.va.mjs';

/**
 * @summary id_methods
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-methods                OBJECT IDENTIFIER ::= {id-measures methods(5)}
 * ```
 *
 * @constant
 */
export const id_methods: OBJECT_IDENTIFIER = new _OID(
    [/* methods */ 5],
    id_measures
);

/* eslint-enable */
