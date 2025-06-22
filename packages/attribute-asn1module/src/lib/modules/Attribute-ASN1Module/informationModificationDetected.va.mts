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
 * @summary informationModificationDetected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * informationModificationDetected SecurityAlarmCause ::= {securityAlarmCause  8}
 * ```
 * 
 * @constant
 */
export
const informationModificationDetected: SecurityAlarmCause = _OID.fromParts([
    8,
], securityAlarmCause);

/* eslint-enable */
