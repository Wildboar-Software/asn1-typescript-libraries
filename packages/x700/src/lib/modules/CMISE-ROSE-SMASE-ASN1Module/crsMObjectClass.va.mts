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
 * @summary crsMObjectClass
 * @description
 *
 * Registration arc for X.727 managed object classes:
 * `{joint-iso-ccitt ms(9) smi(3) part9(9)
 * managedObjectClass(3)}`. Assigned values (Annex A):
 * 1 `cmise` (CMISE ASE capabilities, including ROSE),
 * 2 `smaseInvocation` (SMASE invocation's view of the
 * association), 3 `cmiseInvocation` (CMISE invocation's view
 * of the association). The `smase` class is registered as
 * `{crsMObjectClass x}` in the published text. ITU-T Rec.
 * X.727 (03/99)
 * [§6](https://www.itu.int/rec/T-REC-X.727-199903-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crsMObjectClass OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) smi(3) part9(9) managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const crsMObjectClass: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part9 */ 9, /* managedObjectClass */ 3],
    joint_iso_ccitt
);

/* eslint-enable */
