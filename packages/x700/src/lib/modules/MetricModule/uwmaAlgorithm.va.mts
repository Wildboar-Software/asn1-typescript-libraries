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
 * @summary uwmaAlgorithm
 * @description
 *
 * Algorithm identifier for Uniformly Weighted Moving Average
 * smoothing (Annex C.2). Mean is the average of N =
 * floor(MTP/GP) derived-gauge samples in a sliding window of
 * length MTP. ITU-T Rec. X.739 (11/93)
 * [§8.1.4.2](https://www.itu.int/rec/T-REC-X.739-199311-I),
 * C.2, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uwmaAlgorithm AlgorithmIdentifier ::= {moaAlgorithmIdentifiers  1}
 * ```
 *
 * @constant
 */
export const uwmaAlgorithm: AlgorithmIdentifier = _OID.fromParts(
    [1],
    moaAlgorithmIdentifiers
);

/* eslint-enable */
