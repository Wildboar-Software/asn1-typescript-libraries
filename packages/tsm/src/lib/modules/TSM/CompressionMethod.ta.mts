/* eslint-disable */
import {
    ENUMERATED,
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



export
enum _enum_for_CompressionMethod {
    null_ = 0,
}

/**
 * @summary CompressionMethod
 * @description
 *
 * TLS compression method. Annex A defines only `null`, plus
 * extension. ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressionMethod     ::=     ENUMERATED {
 * null,
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CompressionMethod = _enum_for_CompressionMethod | ENUMERATED;

/**
 * @summary CompressionMethod_null_
 * @description No compression (`null` in Annex A). X.1084 Annex A.
 * @constant
 * @type {number}
 */
export
const CompressionMethod_null_: CompressionMethod = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary null_
 * @description No compression (`null` in Annex A). X.1084 Annex A.
 * @constant
 * @type {number}
 */
export
const null_: CompressionMethod = CompressionMethod_null_; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CompressionMethod = $._decodeEnumerated;
export const _encode_CompressionMethod = $._encodeEnumerated;


/* eslint-enable */
