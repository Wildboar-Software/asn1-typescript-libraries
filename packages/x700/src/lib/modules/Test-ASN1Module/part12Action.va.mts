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
 * @summary part12Action
 * @description
 *
 * OID arc for ISO/IEC 10164-12 | X.745 test-management actions
 * `{joint-iso-ccitt ms(9) function(2) part12(12) action(9)}`. Leaves: 1
 * testRequestControlledAction (A.4, confirmed M-ACTION; info
 * TestRequestControlledInfo; reply TestRequestControlledResponse per Cor.1
 * A.4), 2 testSuspendResumeAction, 3 testTerminateAction, 4
 * testRequestUncontrolledAction. ITU-T Rec. X.745 (11/93) §A.4, A.7.
 * [§A.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 * Reply-syntax name: X.745 Cor.1 (08/97) A.4.
 * https://www.itu.int/rec/T-REC-X.745-199708-I_Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * part12Action OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) function(2) part12(12) action(9)}
 * ```
 *
 * @constant
 */
export const part12Action: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part12 */ 12, /* action */ 9],
    joint_iso_ccitt
);

/* eslint-enable */
