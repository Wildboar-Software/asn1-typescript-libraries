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
 * @summary unauthorizedAccessAttempt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unauthorizedAccessAttempt SecurityAlarmCause ::= {securityAlarmCause  16}
 * ```
 * 
 * @constant
 */
export
const unauthorizedAccessAttempt: SecurityAlarmCause = _OID.fromParts([
    16,
], securityAlarmCause);

/* eslint-enable */
