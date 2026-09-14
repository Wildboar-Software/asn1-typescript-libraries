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
 * @summary id_errcode_abandon_failed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-errcode-abandon-failed               Code ::= local:11
 * ```
 * 
 * @constant
 */
export
const id_errcode_abandon_failed: Code = { local: 11 };

/* eslint-enable */
