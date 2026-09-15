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
 * @summary opcode_establishTemporaryConnection
 * @description
 *
 * Local opcode 17. Assist connection establishment package.
 * `establishTemporaryConnection` on gsmSCF→gsmSSF.
 * Timer `Tetc` (medium: 1 s–60 s; operator-defined within range).
 * (3GPP TS 29.078 V19.0.0 clauses 5.3 and 6.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * opcode-establishTemporaryConnection        Code ::= local: 17
 * ```
 * 
 * @constant
 */
export
const opcode_establishTemporaryConnection: Code = { local: 17 };

/* eslint-enable */
