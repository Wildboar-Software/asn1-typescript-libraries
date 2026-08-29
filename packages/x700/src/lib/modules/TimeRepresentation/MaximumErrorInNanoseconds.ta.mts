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
 * @summary MaximumErrorInNanoseconds
 * @description
 *
 * Bound on the absolute error of an associated time, in
 * nanoseconds. Range 0..281 474 976 710 655 (~3 days at the
 * finite end). Named value `noEstimate` (281474976710655)
 * means no error estimate is available. X.743 (1998)/Cor.1
 * (03/2001) widened the subtype so that `noEstimate` is in
 * range. ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I);
 * Cor.1 [§4](https://www.itu.int/rec/T-REC-X.743-200103-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumErrorInNanoseconds  ::=  INTEGER {noEstimate(281474976710655)
 * }(0..281474976710655)
 * ```
 */
export type MaximumErrorInNanoseconds = INTEGER;

/**
 * @summary MaximumErrorInNanoseconds_noEstimate
 * @description
 *
 * No estimate of the error is available. X.743 (1998)/Cor.1
 * (03/2001) places this named value inside the subtype.
 * ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I);
 * Cor.1 [§4](https://www.itu.int/rec/T-REC-X.743-200103-I).
 * @constant
 * @type {number}
 */
export const MaximumErrorInNanoseconds_noEstimate: MaximumErrorInNanoseconds = 281474976710655; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MaximumErrorInNanoseconds_noEstimate
 * @description
 *
 * No estimate of the error is available. X.743 (1998)/Cor.1
 * (03/2001) places this named value inside the subtype.
 * ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I);
 * Cor.1 [§4](https://www.itu.int/rec/T-REC-X.743-200103-I).
 * @constant
 * @type {number}
 */
export const noEstimate: MaximumErrorInNanoseconds = MaximumErrorInNanoseconds_noEstimate; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_MaximumErrorInNanoseconds = $._decodeInteger;


export const _encode_MaximumErrorInNanoseconds = $._encodeInteger;


/* eslint-enable */
