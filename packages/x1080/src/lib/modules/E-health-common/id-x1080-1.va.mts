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


/**
 * @summary id_x1080_1
 * @description
 *
 * This module assigns
 * `{joint-iso-itu-t(2) telebiometrics(42) telehealth(0) part1(1)}`.
 * Clause 7.2 and the identification module use
 * `{id-thprot part1(1)}` / `{id-telehealth part1(1)}`. ITU-T Rec.
 * X.1080.1 (05/2018)
 * [§7.2](https://www.itu.int/rec/T-REC-X.1080.1-201805-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-x1080-1 OBJECT IDENTIFIER ::= { joint-iso-itu-t(2) telebiometrics(42) telehealth(0) part1(1) }
 * ```
 *
 * @constant
 */
export const id_x1080_1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* telebiometrics */ 42,
    /* telehealth */ 0,
    /* part1 */ 1,
]);

/* eslint-enable */
