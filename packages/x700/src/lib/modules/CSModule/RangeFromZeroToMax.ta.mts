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
 * @summary RangeFromZeroToMax
 * @description
 *
 * GRM cardinality constraint: zero or more participants. Used
 * for `launchPadRole` and script-reference roles in Annex B.
 * ITU-T Rec. X.753 (10/97)
 * [A.8](https://www.itu.int/rec/T-REC-X.753-199710-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeFromZeroToMax  ::=  INTEGER(0..MAX)
 * ```
 */
export type RangeFromZeroToMax = INTEGER;


export const _decode_RangeFromZeroToMax = $._decodeInteger;


export const _encode_RangeFromZeroToMax = $._encodeInteger;


/* eslint-enable */
