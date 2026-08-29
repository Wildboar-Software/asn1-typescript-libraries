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
 * @summary RangeFromOneToOne
 * @description
 *
 * GRM cardinality constraint: exactly one participant in the
 * role or relationship. Used for `commandSequencerRole` (and
 * related one-to-one constraints) in Annex B. ITU-T Rec. X.753
 * (10/97)
 * [A.8](https://www.itu.int/rec/T-REC-X.753-199710-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeFromOneToOne  ::=  INTEGER(1..1)
 * ```
 */
export type RangeFromOneToOne = INTEGER;


export const _decode_RangeFromOneToOne = $._decodeInteger;


export const _encode_RangeFromOneToOne = $._encodeInteger;


/* eslint-enable */
