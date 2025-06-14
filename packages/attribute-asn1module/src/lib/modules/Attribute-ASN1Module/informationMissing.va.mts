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
} from "asn1-ts";
import { SecurityAlarmCause, _decode_SecurityAlarmCause, _encode_SecurityAlarmCause } from "../Attribute-ASN1Module/SecurityAlarmCause.ta.mjs";
import { securityAlarmCause } from "../Attribute-ASN1Module/securityAlarmCause.va.mjs";
/**
 * @summary informationMissing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * informationMissing SecurityAlarmCause ::= {securityAlarmCause  7}
 * ```
 * 
 * @constant
 */
export
const informationMissing: SecurityAlarmCause = new _OID([
    7,
], securityAlarmCause);

/* eslint-enable */
