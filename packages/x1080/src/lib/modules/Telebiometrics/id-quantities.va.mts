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
