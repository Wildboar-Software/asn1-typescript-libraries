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
 * @summary opcode_applyCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * opcode-applyCharging            Code ::= local: 35
 * ```
 * 
 * @constant
 */
export
const opcode_applyCharging: Code = { local: 35 };

/* eslint-enable */
