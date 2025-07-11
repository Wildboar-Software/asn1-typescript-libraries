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
import { id_tmm } from '../Telebiometrics/id-tmm.va.mjs';

/**
 * @summary id_measures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-measures               OBJECT IDENTIFIER ::= {id-tmm metric(1)}
 * ```
 *
 * @constant
 */
export const id_measures: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* metric */ 1],
    id_tmm
);

/* eslint-enable */
