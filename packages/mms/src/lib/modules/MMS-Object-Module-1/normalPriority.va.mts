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
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";


/**
 * @summary normalPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * normalPriority Priority ::= 64
 * ```
 * 
 * @constant
 */
export
const normalPriority: Priority = 64;

/* eslint-enable */
