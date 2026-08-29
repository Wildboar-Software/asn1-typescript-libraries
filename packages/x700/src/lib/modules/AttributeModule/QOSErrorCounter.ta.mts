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
 * @summary QOSErrorCounter
 * @description
 *
 * GDMO example (X.722 Annex A, not a production SM function).
 * Syntax of the example `qOS-Error-Counter` attribute: a
 * wraparound counter incremented by one for every QOS error.
 * Range is given by any package that references the
 * definition (`QOSCounterRange` in the example package).
 * Matches for equality and ordering. ITU-T Rec. X.722 (01/92)
 * [A.5](https://www.itu.int/rec/T-REC-X.722-199201-I), A.9,
 * A.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QOSErrorCounter  ::=  INTEGER
 * ```
 */
export type QOSErrorCounter = INTEGER;


export const _decode_QOSErrorCounter = $._decodeInteger;


export const _encode_QOSErrorCounter = $._encodeInteger;


/* eslint-enable */
