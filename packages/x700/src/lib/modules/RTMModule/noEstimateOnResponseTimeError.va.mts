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
    ResponseTime,
    _decode_ResponseTime,
    _encode_ResponseTime,
} from '../RTMModule/ResponseTime.ta.mjs';
/**
 * @summary noEstimateOnResponseTimeError
 * @description
 *
 * Default `maximumResponseTimeError`: precision of the measured
 * response time is unknown (`seconds:-1`). ITU-T Rec. X.748
 * (03/99)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.748-199903-I), §8.2.4,
 * A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noEstimateOnResponseTimeError ResponseTime ::= seconds:-1
 * ```
 *
 * @constant
 */
export const noEstimateOnResponseTimeError: ResponseTime = { seconds: -1 };

/* eslint-enable */
