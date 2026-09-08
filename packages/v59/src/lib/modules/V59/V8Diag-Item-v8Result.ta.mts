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
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary V8Diag_Item_v8Result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8Diag-Item-v8Result ::= ENUMERATED {v8ComNeg(0), v8NoComNeg(1), v8NoNegAuto(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_V8Diag_Item_v8Result {
    v8ComNeg = 0,
    v8NoComNeg = 1,
    v8NoNegAuto = 2,
}

/**
 * @summary V8Diag_Item_v8Result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8Diag-Item-v8Result ::= ENUMERATED {v8ComNeg(0), v8NoComNeg(1), v8NoNegAuto(2)}
 * ```
 * 
 * @enum {number}
 */
export
type V8Diag_Item_v8Result = _enum_for_V8Diag_Item_v8Result;

/**
 * @summary V8Diag_Item_v8Result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8Diag-Item-v8Result ::= ENUMERATED {v8ComNeg(0), v8NoComNeg(1), v8NoNegAuto(2)}
 * ```
 * 
 * @enum {number}
 */
export
const V8Diag_Item_v8Result = _enum_for_V8Diag_Item_v8Result;

/**
 * @summary V8Diag_Item_v8Result_v8ComNeg
 * @constant
 * @type {number}
 */
export
const V8Diag_Item_v8Result_v8ComNeg: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8ComNeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v8ComNeg
 * @constant
 * @type {number}
 */
export
const v8ComNeg: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8ComNeg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V8Diag_Item_v8Result_v8NoComNeg
 * @constant
 * @type {number}
 */
export
const V8Diag_Item_v8Result_v8NoComNeg: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8NoComNeg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v8NoComNeg
 * @constant
 * @type {number}
 */
export
const v8NoComNeg: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8NoComNeg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V8Diag_Item_v8Result_v8NoNegAuto
 * @constant
 * @type {number}
 */
export
const V8Diag_Item_v8Result_v8NoNegAuto: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8NoNegAuto; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v8NoNegAuto
 * @constant
 * @type {number}
 */
export
const v8NoNegAuto: V8Diag_Item_v8Result = V8Diag_Item_v8Result.v8NoNegAuto; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_V8Diag_Item_v8Result = $._decodeEnumerated;
export const _encode_V8Diag_Item_v8Result = $._encodeEnumerated;

/* eslint-enable */
