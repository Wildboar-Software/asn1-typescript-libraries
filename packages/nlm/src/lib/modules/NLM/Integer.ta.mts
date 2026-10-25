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
 * @summary Integer
 * @description
 *
 * GDMO attribute syntax for X.25 timers (seconds) and retransmission counts
 * (T20/T21/…, R20/R22/…), and for `holdingTimerMultiplier`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integer  ::=  INTEGER
 * ```
 */
export type Integer = INTEGER;




export const _decode_Integer: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Integer: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
