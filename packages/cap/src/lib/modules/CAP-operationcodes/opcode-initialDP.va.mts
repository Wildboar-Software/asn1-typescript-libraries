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
 * @summary opcode_initialDP
 * @description
 *
 * Local opcode 0. gsmSCF activation package. `initialDP` on gsmSSF→gsmSCF.
 * Timer `Tidp` (short: 1 s–10 s; operator-defined within range).
 * (3GPP TS 29.078 V19.0.0 clauses 5.3 and 6.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * opcode-initialDP                Code ::= local: 0
 * ```
 * 
 * @constant
 */
export
const opcode_initialDP: Code = { local: 0 };

/* eslint-enable */
