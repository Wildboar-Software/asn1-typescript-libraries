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
 * @summary windowStatusTransmissionTimerDefault
 * @description
 *
 * Default T24 (window status transmission) in seconds. On
 * `receivingWindowRotationRecoveryProcedures-P` (8208/X.25 §11.2.2).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * windowStatusTransmissionTimerDefault INTEGER ::= 60
 * ```
 *
 * @constant
 */
export const windowStatusTransmissionTimerDefault: INTEGER = 60;

/* eslint-enable */
