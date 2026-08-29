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
 * @summary part12AttributeId
 * @description
 *
 * OID arc for X.745 test-management attributes `{joint-iso-ccitt ms(9)
 * function(2) part12(12) attribute(7)}`. Leaves (A.3): 1 actualStartTime, 2
 * actualStopTime, 3 associatedObjects, 4 endTime, 5 initializingTime, 6 mORTs,
 * 7 supportedTOClasses, 8 supportedUncontrolledTests, 9 testActionPerformerId,
 * 10 testInvocationId, 11 testObjectId, 12 testOutcome, 13 testSessionId, 14
 * testStep, 15 testStepQualifier, 16 timeoutPeriod. ITU-T Rec. X.745 (11/93)
 * §A.3, A.7.
 * [§A.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part12AttributeId OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part12(12) attribute(7)}
 * ```
 *
 * @constant
 */
export const part12AttributeId: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part12 */ 12, /* attribute */ 7],
    joint_iso_ccitt
);

/* eslint-enable */
