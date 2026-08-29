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
 * @summary rejectResponseTimerDefault
 * @description
 *
 * Default T27 (reject response) in seconds. On
 * `packetRetransmissionProcedures-P`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectResponseTimerDefault INTEGER ::= 60
 * ```
 *
 * @constant
 */
export const rejectResponseTimerDefault: INTEGER = 60;

/* eslint-enable */
