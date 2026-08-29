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
 * @summary part12Package
 * @description
 *
 * OID arc for X.745 GDMO packages `{joint-iso-ccitt ms(9) function(2)
 * part12(12) package(4)}`. Leaves 1–19 (A.2): actualTestTime,
 * associatedObjects, controlledTestRequest, initializingTime, mORTs,
 * requestedWindow, supportedTOClasses, supportedUncontrolledTests,
 * testActionPerformer, testInvocationId, testObject, testOutcome, testResult,
 * testSession, testSteps, testSuspendResume, testTerminate, tOControlStatus,
 * uncontrolledTestRequest. ITU-T Rec. X.745 (11/93) §A.2, A.7.
 * [§A.2](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part12Package OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part12(12) package(4)}
 * ```
 *
 * @constant
 */
export const part12Package: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part12 */ 12, /* package */ 4],
    joint_iso_ccitt
);

/* eslint-enable */
