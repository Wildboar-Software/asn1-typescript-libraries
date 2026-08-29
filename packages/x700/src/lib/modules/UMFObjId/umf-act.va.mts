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
 * @summary umf_act
 * @description
 *
 * Arc for usage metering action OIDs (Table 13). `{umf-act 1}`
 * `resumeMetering`, `{umf-act 2}` `startMetering`, `{umf-act 3}`
 * `suspendMetering`. Confirmed CMIS M-ACTION; information
 * syntax `ActionArgument`, reply `ActionResponse`. ITU-T Rec.
 * X.742 (04/95)
 * [11.1.3](https://www.itu.int/rec/T-REC-X.742-199504-I), A.5,
 * A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * umf-act OBJECT IDENTIFIER ::= {joint-iso-itu-t ms(9) function(2) part10(10) action(9)}
 * ```
 *
 * @constant
 */
export const umf_act: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* ms */ 9, /* function */ 2, /* part10 */ 10, /* action */ 9],
    joint_iso_itu_t
);

/* eslint-enable */
