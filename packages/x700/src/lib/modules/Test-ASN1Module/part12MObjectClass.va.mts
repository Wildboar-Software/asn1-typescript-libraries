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
 * @summary part12MObjectClass
 * @description
 *
 * OID arc for X.745 managed object classes `{joint-iso-ccitt ms(9) function(2)
 * part12(12) mObjectClass(3)}`. Leaves: 1 schedulingConflictRecord (event-log
 * record of a scheduling conflict report, A.1.1 / 8.5.1), 2 testActionPerformer
 * (optional TARR support object, A.1.2 / 8.5.2; no name binding is defined —
 * that is implementation-specific, Cor.1 A.1.3), 3 testObject (TO, A.1.3 /
 * 8.5.3), 4 testResultsRecord (event-log record of a test-result report, A.1.4
 * / 8.5.4). ITU-T Rec. X.745 (11/93) §A.1, A.7.
 * [§A.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 * Name binding: X.745 Cor.1 (08/97) A.1.3.
 * https://www.itu.int/rec/T-REC-X.745-199708-I_Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part12MObjectClass OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part12(12) mObjectClass(3)}
 * ```
 *
 * @constant
 */
export const part12MObjectClass: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part12 */ 12, /* mObjectClass */ 3],
    joint_iso_ccitt
);

/* eslint-enable */
