/* eslint-disable */
import {
    INTEGER,
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
 * @summary ResultInterval
 * @description
 *
 * Intermediate result-reporting interval in seconds after
 * the test starts. Zero means no intermediate results. ITU-T Rec.
 * X.737 (11/95) [§8.1.18](https://www.itu.int/rec/T-REC-X.737-199511-I), A.3
 * `resultIntervalPkg`,
 * A.6.18.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultInterval  ::=  INTEGER
 * ```
 */
export type ResultInterval = INTEGER;


export const _decode_ResultInterval = $._decodeInteger;


export const _encode_ResultInterval = $._encodeInteger;


/* eslint-enable */
