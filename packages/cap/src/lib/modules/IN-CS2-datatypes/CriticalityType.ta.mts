/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * @summary CriticalityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {ignore(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CriticalityType {
    ignore = 0,
    abort = 1,
}

/**
 * @summary CriticalityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {ignore(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
type CriticalityType = _enum_for_CriticalityType;

/**
 * @summary CriticalityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {ignore(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
const CriticalityType: typeof _enum_for_CriticalityType = _enum_for_CriticalityType;

/**
 * @summary CriticalityType_ignore
 * @constant
 * @type {number}
 */
export
const CriticalityType_ignore: _enum_for_CriticalityType.ignore = CriticalityType.ignore; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignore
 * @constant
 * @type {number}
 */
export
const ignore: _enum_for_CriticalityType.ignore = CriticalityType.ignore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CriticalityType_abort
 * @constant
 * @type {number}
 */
export
const CriticalityType_abort: _enum_for_CriticalityType.abort = CriticalityType.abort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abort
 * @constant
 * @type {number}
 */
export
const abort: _enum_for_CriticalityType.abort = CriticalityType.abort; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CriticalityType: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_CriticalityType: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
