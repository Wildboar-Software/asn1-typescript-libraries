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
/* START_OF_SYMBOL_DEFINITION breachOfConfidentiality */
/**
 * @summary breachOfConfidentiality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * breachOfConfidentiality SecurityAlarmCause ::= {securityAlarmCause  2}
 * ```
 * 
 * @constant
 */
export
const breachOfConfidentiality: SecurityAlarmCause = new _OID([
    2,
], securityAlarmCause);
/* END_OF_SYMBOL_DEFINITION breachOfConfidentiality */

/* eslint-enable */
