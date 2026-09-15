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
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";


/**
 * @summary dfrUnbind
 * @description
 *
 * Release the DFR port. Drops retrieve-restrictions from bind. No arguments or
 * errors. Does not change reservations. ISO/IEC 10166-1:1991 §7.2, §8.2.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfrUnbind OPERATION ::= emptyUnbind
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const dfrUnbind: OPERATION = emptyUnbind;

/* eslint-enable */
