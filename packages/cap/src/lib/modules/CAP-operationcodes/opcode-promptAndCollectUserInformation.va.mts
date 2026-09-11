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
 * @summary opcode_promptAndCollectUserInformation
 * @description
 *
 * Local opcode 48. Specialized resource control package.
 * `promptAndCollectUserInformation` on gsmSCF→gsmSRF.
 * Timer `Tpc` (long: 1 s–30 min; operator-defined within range).
 * (3GPP TS 29.078 V19.0.0 clauses 5.3 and 6.2, Table 6-2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * opcode-promptAndCollectUserInformation    Code ::= local: 48
 * ```
 * 
 * @constant
 */
export
const opcode_promptAndCollectUserInformation: Code = { local: 48 };

/* eslint-enable */
