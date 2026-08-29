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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * Identifies the algorithm used to derive the estimate of the
 * mean on an algorithm-indicating mean monitor. The agent
 * supplies the value at object creation; it is GET only and
 * must not be specified on a create request. X.739 registers
 * `ewmaAlgorithm` (0) and `uwmaAlgorithm` (1); other OIDs may
 * be registered outside this Rec. ITU-T Rec. X.739 (11/93)
 * [§8.1.4.2](https://www.itu.int/rec/T-REC-X.739-199311-I), A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AlgorithmIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_AlgorithmIdentifier = $._decodeObjectIdentifier;


export const _encode_AlgorithmIdentifier = $._encodeObjectIdentifier;


/* eslint-enable */
