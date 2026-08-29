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
 * @summary umf_not
 * @description
 *
 * Arc for usage metering notification OIDs (Table 14).
 * `{umf-not 1}` `usageReport` (`UsageDataInfo`), `{umf-not 2}`
 * `meteringResumed`, `{umf-not 3}` `meteringStarted`,
 * `{umf-not 4}` `meteringSuspended` (latter three:
 * `ControlInfo`). ITU-T Rec. X.742 (04/95)
 * [11.1.4](https://www.itu.int/rec/T-REC-X.742-199504-I), A.4,
 * A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * umf-not OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part10(10) notification(10)}
 * ```
 *
 * @constant
 */
export const umf_not: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part10 */ 10, /* notification */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
