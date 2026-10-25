/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary HoldingTimerMultiplierPermitted
 * @description
 *
 * PERMITTED VALUES of `holdingTimerMultiplier` (2..63).
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldingTimerMultiplierPermitted  ::=  INTEGER(2..63)
 * ```
 */
export type HoldingTimerMultiplierPermitted = INTEGER;




export const _decode_HoldingTimerMultiplierPermitted: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_HoldingTimerMultiplierPermitted: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
