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
 * @summary Seconds
 * @description
 *
 * Whole seconds since the start of the current epoch
 * (0..4 294 967 295). Together with `Nanoseconds`, this is a
 * count of seconds that does not step when a leap second
 * occurs; leap seconds are recorded separately for conversion
 * to civil time. ITU-T Rec. X.743 (06/98)
 * [§8.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Seconds  ::=  INTEGER(0..4294967295)
 * ```
 */
export type Seconds = INTEGER;


export const _decode_Seconds = $._decodeInteger;


export const _encode_Seconds = $._encodeInteger;


/* eslint-enable */
