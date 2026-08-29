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
 * @summary UnitsTotal
 * @description
 *
 * Count of units (threshold totals, `DataUnits.dataNumber`,
 * `ConnectivityThreshold-time`). ITU-T Rec. X.737 (11/95)
 * [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitsTotal  ::=  INTEGER
 * ```
 */
export type UnitsTotal = INTEGER;


export const _decode_UnitsTotal = $._decodeInteger;


export const _encode_UnitsTotal = $._encodeInteger;


/* eslint-enable */
