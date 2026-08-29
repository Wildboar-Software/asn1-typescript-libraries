/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { SecurityAlarmCause, _decode_SecurityAlarmCause, _encode_SecurityAlarmCause } from "../Attribute-ASN1Module/SecurityAlarmCause.ta.mjs";
import { securityAlarmCause } from "../Attribute-ASN1Module/securityAlarmCause.va.mjs";
/**
 * @summary authenticationFailure
 * @description
 * 
 * Registered `SecurityAlarmCause` `{securityAlarmCause 1}`. Typical with the
 * X.736 securityServiceOrMechanismViolation notification. ITU-T Rec. X.721
 * (02/92) §14.2; ITU-T Rec. X.736 | ISO/IEC 10164-7 §8.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authenticationFailure SecurityAlarmCause ::= {securityAlarmCause  1}
 * ```
 * 
 * @constant
 */
export
const authenticationFailure: SecurityAlarmCause = _OID.fromParts([
    1,
], securityAlarmCause);

/* eslint-enable */
