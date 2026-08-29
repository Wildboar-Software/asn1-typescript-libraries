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
    ActualStartTime,
    _decode_ActualStartTime,
    _encode_ActualStartTime,
} from '../Test-ASN1Module/ActualStartTime.ta.mjs';
/**
 * @summary defaultActualStartTime
 * @description
 *
 * DEFAULT VALUE of the actualStartTime attribute in the actual test time
 * package: unknown until the test performer knows the actual or expected start.
 * The test conductor cannot SET this attribute. ITU-T Rec. X.745 (11/93)
 * §8.2.1, A.2, A.7.1.
 * [§8.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultActualStartTime ActualStartTime ::= unknown:NULL
 * ```
 *
 * @constant
 */
export const defaultActualStartTime: ActualStartTime = { unknown: null };

/* eslint-enable */
