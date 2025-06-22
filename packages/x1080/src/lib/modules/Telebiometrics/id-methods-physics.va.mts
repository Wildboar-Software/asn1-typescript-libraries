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
import { id_methods } from '../Telebiometrics/id-methods.va.mjs';

/**
 * @summary id_methods_physics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-methods-physics        OBJECT IDENTIFIER ::= {id-methods physics(1)}
 * ```
 *
 * @constant
 */
export const id_methods_physics: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* physics */ 1],
    id_methods
);

/* eslint-enable */
