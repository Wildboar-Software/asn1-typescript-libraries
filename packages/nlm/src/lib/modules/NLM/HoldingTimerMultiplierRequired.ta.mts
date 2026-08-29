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
 * @summary HoldingTimerMultiplierRequired
 * @description
 *
 * REQUIRED VALUES of `holdingTimerMultiplier` (exactly 3). Default is also 3.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldingTimerMultiplierRequired  ::=  INTEGER(3)
 * ```
 */
export type HoldingTimerMultiplierRequired = INTEGER;




export const _decode_HoldingTimerMultiplierRequired = $._decodeInteger;




export const _encode_HoldingTimerMultiplierRequired = $._encodeInteger;


/* eslint-enable */
