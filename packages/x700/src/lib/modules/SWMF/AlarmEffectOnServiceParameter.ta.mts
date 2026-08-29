/* eslint-disable */
import {
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AlarmEffectOnServiceParameter
 * @description
 *
 * CMIS event-info parameter in the `ManagementExtension` of Alarm
 * Reporting `AdditionalInformation`. `TRUE` means the condition
 * that caused the alarm affects service. Registered as
 * `{… parameter(5) alarmEffectOnServiceParameter(1)}`. Used with
 * processingErrorAlarm on softwareUnit. Cor.2 updates the
 * surrounding `ManagementExtension` production to X.681
 * information-object form; this BOOLEAN syntax is unchanged.
 * ITU-T Rec. X.744 (10/96)
 * [§8.5.1](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.7.1; Cor.2 (02/2000)
 * [item 3](https://www.itu.int/rec/T-REC-X.744-200002-I_Cor2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmEffectOnServiceParameter  ::=  BOOLEAN
 * ```
 */
export type AlarmEffectOnServiceParameter = BOOLEAN; // BooleanType


export const _decode_AlarmEffectOnServiceParameter = $._decodeBoolean;


export const _encode_AlarmEffectOnServiceParameter = $._encodeBoolean;


/* eslint-enable */
