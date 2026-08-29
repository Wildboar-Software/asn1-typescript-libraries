/* eslint-disable */
import {
    NULL,
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
 * @summary TestInfrastructureTestResults
 * @description
 *
 * Additional result syntax for the test-infrastructure
 * ('null') test: no resource exercises are performed; this type
 * is NULL. X.745 `testOutcome` still reports Pass / Fail /
 * Timed-out / Premature termination / Inconclusive. Named type
 * added by Cor.1. ITU-T Rec. X.737 (11/95)
 * [§7.8.1](https://www.itu.int/rec/T-REC-X.737-199511-I),
 * §7.8.8; Cor.1 (06/98) [https://www.itu.int/rec/T-REC-X.737-199806-I].
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestInfrastructureTestResults  ::=  NULL
 * ```
 */
export type TestInfrastructureTestResults = NULL; // NullType


export const _decode_TestInfrastructureTestResults = $._decodeNull;


export const _encode_TestInfrastructureTestResults = $._encodeNull;


/* eslint-enable */
