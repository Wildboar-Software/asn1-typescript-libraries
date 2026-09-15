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
 * @summary opcode_sendChargingInformationGPRS
 * @description
 *
 * Local opcode 83. Gprs Charge Advice package. `sendChargingInformationGPRS` on
 * gsmSCF→gprsSSF.
 * Timer `Tscig` (short: 1 s–20 s; operator-defined within range).
 * (3GPP TS 29.078 V19.0.0 clauses 5.3 and 8.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * opcode-sendChargingInformationGPRS        Code ::= local: 83
 * ```
 * 
 * @constant
 */
export
const opcode_sendChargingInformationGPRS: Code = { local: 83 };

/* eslint-enable */
