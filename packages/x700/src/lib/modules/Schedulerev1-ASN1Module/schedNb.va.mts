/* eslint-disable */
import {
    joint_iso_itu_t,
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
 * @summary schedNb
 * @description
 *
 * OID arc for X.746 scheduling name bindings:
 * `{joint-iso-itu-t ms(9) function(2) part15(15)
 * nameBinding(6)}`. Registered (A.2): `scheduler-system` (1)
 * names a `scheduler` (and subclasses) under `system` with
 * `schedulerID`; `scheduler-managedElement` (2) names the same
 * under M.3100 `managedElement`;
 * `typeOfDayController-managedElement` (3) and
 * `typeOfDayController-system` (4) name a
 * `typeOfDayController` with `typeOfDayControllerId`. Further
 * name bindings may be defined. ITU-T Rec. X.746 (02/00)
 * [A.2](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schedNb OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part15(15) nameBinding(6)}
 * ```
 *
 * @constant
 */
export const schedNb: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part15 */ 15, /* nameBinding */ 6],
    joint_iso_itu_t
);

/* eslint-enable */
