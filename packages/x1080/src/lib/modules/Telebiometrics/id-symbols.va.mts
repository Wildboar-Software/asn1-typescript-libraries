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
 * @summary id_symbols
 * @description
 *
 * TMM measure symbols `{id-measures symbols(3)}`. Distinct from
 * X.1082 Amd.1 symbol arcs under `{2 42 2 1}` (tango-in … thresholds
 * at `/Telebiometrics/Human_Physiology/Symbols`). Do not mix the
 * two. X.1080.1 Annex A; X.1082 Amd.1 §12.5.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I!Amd1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-symbols                OBJECT IDENTIFIER ::= {id-measures symbols(3)}
 * ```
 *
 * @constant
 */
export const id_symbols: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* symbols */ 3],
    id_measures
);

/* eslint-enable */
