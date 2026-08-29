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
 * @summary rTM_Attribute
 * @description
 *
 * Arc for RTM attributes: `maximumResponseTimeError` (1),
 * `requestIdentifier` (2), `responseConfirmationObjectId` (3),
 * `responseConfirmationObjectInd` (4),
 * `responseConfirmationObjectIndList` (5), `responseDelayTime`
 * (6), `responseLength` (7), `responseMonitorId` (8),
 * `responseRequesterId` (9), `responseRequesterInd` (10),
 * `responseRequesterIndList` (11), `responseRequestLength` (12),
 * `responseSync` (13), `responseTime` (14), `responseTimeout` (15),
 * `responseTimeSummarizationMode` (17), `routeId` (18). ITU-T Rec.
 * X.748 (03/99)
 * [A.4](https://www.itu.int/rec/T-REC-X.748-199903-I), A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rTM-Attribute OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part22(22) attribute(7)}
 * ```
 *
 * @constant
 */
export const rTM_Attribute: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part22 */ 22, /* attribute */ 7],
    joint_iso_itu_t
);

/* eslint-enable */
