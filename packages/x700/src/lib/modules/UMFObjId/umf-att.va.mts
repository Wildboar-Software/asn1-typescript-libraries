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
 * @summary umf_att
 * @description
 *
 * Arc for usage metering attribute OIDs (Table 12 / A.3):
 * `{umf-att 1}` `accountableObjectReference`, `{umf-att 2}`
 * `accountableObjectsReferenceList`, `{umf-att 3}`
 * `actionResponse`, `{umf-att 4}` `auditInfo`, `{umf-att 5}`
 * `controlObjectId`, `{umf-att 6}` `dataObjectId`,
 * `{umf-att 7}` `dataObjectsReferenceList`, `{umf-att 8}`
 * `dataErrors`, `{umf-att 9}` `notificationCause`,
 * `{umf-att 10}` `providerId`, `{umf-att 11}`
 * `reportingTriggers`, `{umf-att 12}` `usageInfo`. ITU-T Rec.
 * X.742 (04/95)
 * [11.1.2](https://www.itu.int/rec/T-REC-X.742-199504-I), A.3,
 * A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * umf-att OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part10(10) attribute(7)}
 * ```
 *
 * @constant
 */
export const umf_att: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part10 */ 10, /* attribute */ 7],
    joint_iso_itu_t
);

/* eslint-enable */
