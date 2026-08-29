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
 * @summary LoopbackTxDelayInfo
 * @description
 *
 * EVENT-INFO parameter `loopbackTxDelayParam` (A.5.13 after
 * Cor.1). Syntax is NULL. Returned on test-result notifications
 * when measured loopback transmission delay is less than
 * `loopbackTimeout`. Delay itself is a physical measurement
 * (§3.9.6). ITU-T Rec. X.737 (11/95)
 * [§7.4.2.2](https://www.itu.int/rec/T-REC-X.737-199511-I);
 * Cor.1 (06/98) [https://www.itu.int/rec/T-REC-X.737-199806-I], A.3
 * `loopbackTimeoutPkg`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackTxDelayInfo  ::=  NULL
 * ```
 */
export type LoopbackTxDelayInfo = NULL; // NullType


export const _decode_LoopbackTxDelayInfo = $._decodeNull;


export const _encode_LoopbackTxDelayInfo = $._encodeNull;


/* eslint-enable */
