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
 * @summary CumLeapSeconds
 * @description
 *
 * Cumulative leap seconds since 1 January 1972 (0..255).
 * Syntax of `leapSecondCount` in optional `leapSecondPkg`
 * (`GET-REPLACE`, `SET-BY-CREATE`). Distinct from
 * TimeRepresentation `CumLeapSeconds` (0..65536). ITU-T Rec. X.743 (06/98)
 * [§8.3.13](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CumLeapSeconds  ::=  INTEGER(0..255)
 * ```
 */
export type CumLeapSeconds = INTEGER;


export const _decode_CumLeapSeconds = $._decodeInteger;


export const _encode_CumLeapSeconds = $._encodeInteger;


/* eslint-enable */
