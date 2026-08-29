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
 * @summary schedNotif
 * @description
 *
 * OID arc for X.746 scheduling notifications:
 * `{joint-iso-itu-t ms(9) function(2) part15(15)
 * notification(10)}`. Registered: `operationResultNotification`
 * `{schedNotif 1}` — information syntax `OperationResult`;
 * reports success or failure of scheduled get/set/action
 * operations on SMOs. ITU-T Rec. X.746 (02/00)
 * [A.5.1](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * 8.3.11, A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schedNotif OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part15(15) notification(10)}
 * ```
 *
 * @constant
 */
export const schedNotif: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part15 */ 15, /* notification */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
