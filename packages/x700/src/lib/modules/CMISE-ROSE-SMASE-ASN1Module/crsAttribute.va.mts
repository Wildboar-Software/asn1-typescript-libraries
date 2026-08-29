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
 * @summary crsAttribute
 * @description
 *
 * Registration arc for X.727 attributes:
 * `{joint-iso-ccitt ms(9) smi(3) part9(9) attribute(7)}`.
 * Assigned values (Annex A): 1 `cmipPduReceivingSupport`,
 * 2 `cmipPduSendingSupport`,
 * 3 `cmiseFunctionalUnitsSelected`,
 * 4 `cmiseFunctionalUnitsSupported`,
 * 5 `invokeIdsOutstanding`, 6 `invokeIdsPerforming`,
 * 7 `protocolVersionSupported`,
 * 8 `smaseFunctionalUnitsSelected`,
 * 9 `smaseFunctionalUnitsSupported`,
 * 10 `smUserInfoReceived`, 11 `smUserInfoSent`. ITU-T Rec.
 * X.727 (03/99)
 * [§7](https://www.itu.int/rec/T-REC-X.727-199903-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crsAttribute OBJECT IDENTIFIER ::= {joint-iso-ccitt ms(9) smi(3) part9(9) attribute(7)}
 * ```
 *
 * @constant
 */
export const crsAttribute: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* smi */ 3, /* part9 */ 9, /* attribute */ 7],
    joint_iso_ccitt
);

/* eslint-enable */
