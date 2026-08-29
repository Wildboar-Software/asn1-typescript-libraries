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
 * @summary LoopbackType
 * @description
 *
 * OID naming the loopback kind: e.g. physical loopback,
 * echo, analogue or digital, non-transparent / transparent /
 * payload physical loopback, echo data back. The rec does not
 * register specific values. ITU-T Rec. X.737 (11/95)
 * [§8.1.12](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.4.1, A.6.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type LoopbackType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_LoopbackType = $._decodeObjectIdentifier;


export const _encode_LoopbackType = $._encodeObjectIdentifier;


/* eslint-enable */
