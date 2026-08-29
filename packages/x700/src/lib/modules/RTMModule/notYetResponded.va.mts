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
 * @summary notYetResponded
 * @description
 *
 * Initial `responseTime` before any response has been measured
 * (`seconds:-1`). ITU-T Rec. X.748 (03/99)
 * [A.7](https://www.itu.int/rec/T-REC-X.748-199903-I), A.2
 * (`responseMonitor`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notYetResponded ResponseTime ::= seconds:-1
 * ```
 *
 * @constant
 */
export const notYetResponded: ResponseTime = { seconds: -1 };

/* eslint-enable */
