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
import { id_thprot } from '../Telebiometrics/id-thprot.va.mjs';

/**
 * @summary id_x1080_1
 * @description
 *
 * Top arc of this Recommendation `{id-thprot part1(1)}` as in §7.2
 * (`{ id-telehealth part1(1) }`). Annex B also writes
 * `{joint-iso-itu-t(2) telebiometrics(42) telehealth(0) part1(1)}`.
 * ITU-T X.1080.1 (05/2018) §7.2.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-x1080-1 OBJECT IDENTIFIER ::= { id-thprot part1(1) }
 * ```
 *
 * @constant
 */
export const id_x1080_1: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* part1 */ 1],
    id_thprot
);

/* eslint-enable */
