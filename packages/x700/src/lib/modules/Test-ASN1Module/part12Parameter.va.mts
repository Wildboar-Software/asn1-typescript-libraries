/* eslint-disable */
import {
    joint_iso_ccitt,
    OBJECT_IDENTIFIER,
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
 * @summary part12Parameter
 * @description
 *
 * OID arc for X.745 specific-error parameters `{joint-iso-ccitt ms(9)
 * function(2) part12(12) parameter(5)}`. Leaves (A.6): 1
 * associatedObjectNotAvailable, 2 independentTestInvocationError, 3
 * invalidTestOperation, 4 mistypedTestCategoryInformation, 5 mORTNotAvailable,
 * 6 noSuchAssociatedObject, 7 noSuchMORT, 8 noSuchTestInvocationId, 9
 * noSuchTestSessionId, 10 relatedTOError, 11 testSuspendResumeError, 12
 * testTerminateError. Carried as CMIS specific errors on M-ACTION. ITU-T Rec.
 * X.745 (11/93) §8.4.4, A.6, A.7.
 * [§8.4.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part12Parameter OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part12(12) parameter(5)}
 * ```
 *
 * @constant
 */
export const part12Parameter: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part12 */ 12, /* parameter */ 5],
    joint_iso_ccitt
);

/* eslint-enable */
