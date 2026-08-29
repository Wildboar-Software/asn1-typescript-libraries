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
import { id_telebio } from '../Telebiometrics/id-telebio.va.mjs';

/**
 * @summary id_thprot
 * @description
 *
 * This module's telehealth-protocol arc `{id-telebio thprot(0)}` as
 * allocated in X.1080.1 Annex A. Distinct from the `thprot(10)` arc
 * used as the E-health-identification *module OID* prefix and named
 * in X.1080.1 §7.1 prose, and from Pbact-access `id-thprot`. Do not
 * conflate the two. ITU-T X.1080.1 (05/2018) Annex A.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-thprot                 OBJECT IDENTIFIER ::= { id-telebio thprot(0) }
 * ```
 *
 * @constant
 */
export const id_thprot: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* thprot */ 0],
    id_telebio
);

/* eslint-enable */
