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
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";


/**
 * @summary opcode_requestReportGPRSEvent
 * @description
 *
 * Local opcode 81. Gprs Event Handling package. `requestReportGPRSEvent` on
 * gsmSCF→gprsSSF.
 * Timer `Trrqe` (short: 1 s–20 s; operator-defined within range).
 * (3GPP TS 29.078 V19.0.0 clauses 5.3 and 8.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * opcode-requestReportGPRSEvent        Code ::= local: 81
 * ```
 * 
 * @constant
 */
export
const opcode_requestReportGPRSEvent: Code = { local: 81 };

/* eslint-enable */
