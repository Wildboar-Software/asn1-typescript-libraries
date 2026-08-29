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
 * @summary id_methods_psychology
 * @description
 *
 * Psychology methods `{id-methods psychology(5)}`. One of the five
 * X.1080.x fields. Measurement/method OIDs used as
 * `DataMessage.method`. X.1080.1 Annex A.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-methods-psychology     OBJECT IDENTIFIER ::= {id-methods psychology(5)}
 * ```
 *
 * @constant
 */
export const id_methods_psychology: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* psychology */ 5],
    id_methods
);

/* eslint-enable */
