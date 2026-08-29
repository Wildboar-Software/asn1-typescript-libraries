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
 * @summary RangeZeroToMax
 * @description
 *
 * INTEGER range `(0..MAX)` used as GDMO cardinality on the
 * optional route role and on permitted relationship cardinalities
 * of requester and confirmation. ITU-T Rec. X.748 (03/99)
 * [A.1](https://www.itu.int/rec/T-REC-X.748-199903-I), A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeZeroToMax  ::=  INTEGER(0..MAX)
 * ```
 */
export type RangeZeroToMax = INTEGER;


export const _decode_RangeZeroToMax = $._decodeInteger;


export const _encode_RangeZeroToMax = $._encodeInteger;


/* eslint-enable */
