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
/* START_OF_SYMBOL_DEFINITION outOfHoursActivity */
/**
 * @summary outOfHoursActivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * outOfHoursActivity SecurityAlarmCause ::= {securityAlarmCause  13}
 * ```
 * 
 * @constant
 */
export
const outOfHoursActivity: SecurityAlarmCause = new _OID([
    13,
], securityAlarmCause);
/* END_OF_SYMBOL_DEFINITION outOfHoursActivity */

/* eslint-enable */
