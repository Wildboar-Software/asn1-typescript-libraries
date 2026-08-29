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
 * @summary rejectionRate
 * @description
 *
 * `specificProblems` identifier for the rejection-rate
 * workload model: rate of requests (or requested resources)
 * rejected for lack of available capacity. ITU-T Rec. X.739
 * (11/93)
 * [§3.7.12](https://www.itu.int/rec/T-REC-X.739-199311-I),
 * §7.4, §8.1.9.7.2, A.5. Cor.1 writes the value as
 * `oi:{moaSpecificProblems 3}`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectionRate SpecificIdentifier ::= oi:{moaSpecificProblems 3}
 * ```
 *
 * @constant
 */
export const rejectionRate: SpecificIdentifier = {
    oi: _OID.fromParts([3], moaSpecificProblems),
};

/* eslint-enable */
