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
 * @summary id_quantities_psychology
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-quantities-psychology  OBJECT IDENTIFIER ::= {id-quantities psychology(5)}
 * ```
 *
 * @constant
 */
export const id_quantities_psychology: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* psychology */ 5],
    id_quantities
);

/* eslint-enable */
