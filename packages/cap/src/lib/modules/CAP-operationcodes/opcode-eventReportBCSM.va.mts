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
 * @summary opcode_eventReportBCSM
 * @description
 *
 * Local opcode 24. BCSM Event handling package. `eventReportBCSM` on
 * gsmSSF→gsmSCF.
 * Timer `Terb` (short: 1 s–10 s; operator-defined within range).
 * (3GPP TS 29.078 V19.0.0 clauses 5.3 and 6.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * opcode-eventReportBCSM            Code ::= local: 24
 * ```
 * 
 * @constant
 */
export
const opcode_eventReportBCSM: Code = { local: 24 };

/* eslint-enable */
