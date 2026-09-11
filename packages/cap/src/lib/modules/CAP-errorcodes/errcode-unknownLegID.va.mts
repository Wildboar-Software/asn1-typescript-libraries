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
 * @summary errcode_unknownLegID
 * @description
 *
 * Local error code 17 for `unknownLegID`.
 * (3GPP TS 29.078 V19.0.0 clause 5.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * errcode-unknownLegID                Code ::= local: 17
 * ```
 * 
 * @constant
 */
export
const errcode_unknownLegID: Code = { local: 17 };

/* eslint-enable */
