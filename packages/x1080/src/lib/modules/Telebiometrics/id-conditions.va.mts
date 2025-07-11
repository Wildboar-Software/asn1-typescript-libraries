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
 * @summary id_conditions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-conditions             OBJECT IDENTIFIER ::= {id-measures conditions(4)}
 * ```
 *
 * @constant
 */
export const id_conditions: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* conditions */ 4],
    id_measures
);

/* eslint-enable */
