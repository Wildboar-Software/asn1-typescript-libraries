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
 * @summary errcode_systemFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * errcode-systemFailure                Code ::= local: 11
 * ```
 * 
 * @constant
 */
export
const errcode_systemFailure: Code = { local: 11 };

/* eslint-enable */
