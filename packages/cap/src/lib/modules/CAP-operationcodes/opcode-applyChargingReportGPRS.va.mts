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
 * @summary opcode_applyChargingReportGPRS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * opcode-applyChargingReportGPRS        Code ::= local: 72
 * ```
 * 
 * @constant
 */
export
const opcode_applyChargingReportGPRS: Code = { local: 72 };

/* eslint-enable */
