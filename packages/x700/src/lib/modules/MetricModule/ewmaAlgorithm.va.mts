/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '../MetricModule/AlgorithmIdentifier.ta.mjs';
import { moaAlgorithmIdentifiers } from '../MetricModule/moaAlgorithmIdentifiers.va.mjs';
/**
 * @summary ewmaAlgorithm
 * @description
 *
 * Algorithm identifier for Exponentially Weighted Moving
 * Average smoothing of derived-gauge values (Annex B.2).
 * Recurrence: `Yi = f·Xi + (1-f)·Yi-1` with
 * `f = 2·GP/(GP+MTP)`. When GP = MTP, f = 1 (no smoothing).
 * ITU-T Rec. X.739 (11/93)
 * [§8.1.4.2](https://www.itu.int/rec/T-REC-X.739-199311-I),
 * B.2, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ewmaAlgorithm AlgorithmIdentifier ::= {moaAlgorithmIdentifiers  0}
 * ```
 *
 * @constant
 */
export const ewmaAlgorithm: AlgorithmIdentifier = _OID.fromParts(
    [0],
    moaAlgorithmIdentifiers
);

/* eslint-enable */
