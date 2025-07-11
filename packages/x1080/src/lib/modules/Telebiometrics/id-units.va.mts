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
 * @summary id_units
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-units                  OBJECT IDENTIFIER ::= {id-measures units(2)}
 * ```
 *
 * @constant
 */
export const id_units: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* units */ 2],
    id_measures
);

/* eslint-enable */
