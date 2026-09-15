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
 * @summary errcode_unavailableResource
 * @description
 *
 * Local error code 13 for `unavailableResource`.
 * (3GPP TS 29.078 V19.0.0 clause 5.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * errcode-unavailableResource            Code ::= local: 13
 * ```
 * 
 * @constant
 */
export
const errcode_unavailableResource: Code = { local: 13 };

/* eslint-enable */
