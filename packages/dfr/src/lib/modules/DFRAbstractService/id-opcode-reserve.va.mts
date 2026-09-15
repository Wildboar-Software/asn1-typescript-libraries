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
 * @summary id_opcode_reserve
 * @description
 *
 * Local ROSE operation code 9 for `reserve`. ISO/IEC 10166-1:1991 §8.2.9.
 * ISO/IEC 10166-2:1991 §6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-opcode-reserve   Code ::= local:9
 * ```
 * 
 * @constant
 */
export
const id_opcode_reserve: Code = { local: 9 };

/* eslint-enable */
