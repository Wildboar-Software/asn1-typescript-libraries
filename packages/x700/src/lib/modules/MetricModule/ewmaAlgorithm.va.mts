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
} from 'asn1-ts';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '../MetricModule/AlgorithmIdentifier.ta.mjs';
import { moaAlgorithmIdentifiers } from '../MetricModule/moaAlgorithmIdentifiers.va.mjs';
/* START_OF_SYMBOL_DEFINITION ewmaAlgorithm */
/**
 * @summary ewmaAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ewmaAlgorithm AlgorithmIdentifier ::= {moaAlgorithmIdentifiers  0}
 * ```
 *
 * @constant
 */
export const ewmaAlgorithm: AlgorithmIdentifier = new _OID(
    [0],
    moaAlgorithmIdentifiers
);
/* END_OF_SYMBOL_DEFINITION ewmaAlgorithm */

/* eslint-enable */
