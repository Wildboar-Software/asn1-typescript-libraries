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
 * @summary denialOfService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * denialOfService SecurityAlarmCause ::= {securityAlarmCause  5}
 * ```
 * 
 * @constant
 */
export
const denialOfService: SecurityAlarmCause = _OID.fromParts([
    5,
], securityAlarmCause);

/* eslint-enable */
