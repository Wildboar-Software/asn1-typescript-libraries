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
 * @summary crsMNameBinding
 * @description
 *
 * Registration arc for X.727 name bindings:
 * `{joint-iso-ccitt ms(9) smi(3) part9(9) nameBinding(6)}`.
 * Annex A does not assign a name-binding under this arc.
 * ITU-T Rec. X.727 (03/99)
 * [Annex A](https://www.itu.int/rec/T-REC-X.727-199903-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crsMNameBinding OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) smi(3) part9(9) nameBinding(6)}
 * ```
 *
 * @constant
 */
export const crsMNameBinding: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part9 */ 9, /* nameBinding */ 6],
    joint_iso_ccitt
);

/* eslint-enable */
