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
import { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
// export { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";


/**
 * @summary normalSeverity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * normalSeverity Severity ::= 64
 * ```
 * 
 * @constant
 */
export
const normalSeverity: Severity = 64;

/* eslint-enable */
