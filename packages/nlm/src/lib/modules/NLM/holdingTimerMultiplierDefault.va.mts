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


/**
 * @summary holdingTimerMultiplierDefault
 * @description
 *
 * Default holding-timer multiplier (3). Multiplied by a configuration timer to
 * obtain the holding timer in ISO 9542 hellos; a local delta may be added;
 * overflow truncates to 65535. PERMITTED 2..63; REQUIRED 3.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * holdingTimerMultiplierDefault INTEGER ::= 3
 * ```
 *
 * @constant
 */
export const holdingTimerMultiplierDefault: INTEGER = 3;

/* eslint-enable */
