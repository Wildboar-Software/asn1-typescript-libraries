/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SystemType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemType  ::=  ENUMERATED {
 *    unknown     ( 0 ),
 *    iuUTRAN     ( 1 ),
 *    gERAN       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SystemType {
    unknown = 0,
    iuUTRAN = 1,
    gERAN = 2,
}

/**
 * @summary SystemType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemType  ::=  ENUMERATED {
 *    unknown     ( 0 ),
 *    iuUTRAN     ( 1 ),
 *    gERAN       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SystemType = _enum_for_SystemType;

/**
 * @summary SystemType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemType  ::=  ENUMERATED {
 *    unknown     ( 0 ),
 *    iuUTRAN     ( 1 ),
 *    gERAN       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SystemType = _enum_for_SystemType;

/**
 * @summary SystemType_unknown
 * @constant
 * @type {number}
 */
export
const SystemType_unknown = SystemType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown = SystemType.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemType_iuUTRAN
 * @constant
 * @type {number}
 */
export
const SystemType_iuUTRAN = SystemType.iuUTRAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iuUTRAN
 * @constant
 * @type {number}
 */
export
const iuUTRAN = SystemType.iuUTRAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemType_gERAN
 * @constant
 * @type {number}
 */
export
const SystemType_gERAN = SystemType.gERAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gERAN
 * @constant
 * @type {number}
 */
export
const gERAN = SystemType.gERAN; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SystemType: $.ASN1Decoder<SystemType> = $._decodeEnumerated;

export
const _encode_SystemType: $.ASN1Encoder<SystemType> = $._encodeEnumerated;

/* eslint-enable */
