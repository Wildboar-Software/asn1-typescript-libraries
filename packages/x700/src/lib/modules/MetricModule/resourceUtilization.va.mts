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
    SpecificIdentifier,
    _decode_SpecificIdentifier,
    _encode_SpecificIdentifier,
} from '@wildboar/attribute-asn1module';
import { moaSpecificProblems } from '../MetricModule/moaSpecificProblems.va.mjs';
/**
 * @summary resourceUtilization
 * @description
 *
 * `specificProblems` identifier for the resource-utilization
 * workload model: amount of capacity in use (instantaneous or
 * estimated mean over an interval). ITU-T Rec. X.739 (11/93)
 * [§3.7.14](https://www.itu.int/rec/T-REC-X.739-199311-I),
 * §7.4, §8.1.9.7.2, A.5. Cor.1 writes the value as
 * `oi:{moaSpecificProblems 2}`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * resourceUtilization SpecificIdentifier ::= oi:{moaSpecificProblems 2}
 * ```
 *
 * @constant
 */
export const resourceUtilization: SpecificIdentifier = {
    oi: _OID.fromParts([2], moaSpecificProblems),
};

/* eslint-enable */
