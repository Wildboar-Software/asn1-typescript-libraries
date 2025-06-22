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
import { id_quantities } from '../Telebiometrics/id-quantities.va.mjs';

/**
 * @summary id_quantities_physics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-quantities-physics     OBJECT IDENTIFIER ::= {id-quantities physics(1)}
 * ```
 *
 * @constant
 */
export const id_quantities_physics: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* physics */ 1],
    id_quantities
);

/* eslint-enable */
