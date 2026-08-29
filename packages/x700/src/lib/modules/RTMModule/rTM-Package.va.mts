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
 * @summary rTM_Package
 * @description
 *
 * Arc for RTM packages: `responseConfirmationObjListPkg` (1),
 * `responseConfirmationNotifPkg` (2), `responseRequesterListPkg`
 * (3), `responseTimeoutPkg` (4), `reqResLengthPkg` (5). ITU-T
 * Rec. X.748 (03/99)
 * [A.3](https://www.itu.int/rec/T-REC-X.748-199903-I), A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rTM-Package OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part22(22) package(4)}
 * ```
 *
 * @constant
 */
export const rTM_Package: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part22 */ 22, /* package */ 4],
    joint_iso_itu_t
);

/* eslint-enable */
