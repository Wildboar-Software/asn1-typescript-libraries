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
 * @summary windowRotationTimerDefault
 * @description
 *
 * Default T25 (window rotation) in seconds. On
 * `transmittingWindowRotationRecoveryProcedures-P` (8208/X.25 §11.2.1).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * windowRotationTimerDefault INTEGER ::= 200
 * ```
 *
 * @constant
 */
export const windowRotationTimerDefault: INTEGER = 200;

/* eslint-enable */
