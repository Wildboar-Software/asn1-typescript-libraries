/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InfoType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoType  ::=  ENUMERATED {numericString(0), characterString(1), iA5String(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InfoType {
    numericString = 0,
    characterString = 1,
    iA5String = 2,
}

/**
 * @summary InfoType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoType  ::=  ENUMERATED {numericString(0), characterString(1), iA5String(2)}
 * ```
 * 
 * @enum {number}
 */
export
type InfoType = _enum_for_InfoType;

/**
 * @summary InfoType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoType  ::=  ENUMERATED {numericString(0), characterString(1), iA5String(2)}
 * ```
 * 
 * @enum {number}
 */
export
const InfoType = _enum_for_InfoType;

/**
 * @summary InfoType_numericString
 * @constant
 * @type {number}
 */
export
const InfoType_numericString: InfoType = InfoType.numericString; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericString
 * @constant
 * @type {number}
 */
export
const numericString: InfoType = InfoType.numericString; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InfoType_characterString
 * @constant
 * @type {number}
 */
export
const InfoType_characterString: InfoType = InfoType.characterString; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterString
 * @constant
 * @type {number}
 */
export
const characterString: InfoType = InfoType.characterString; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InfoType_iA5String
 * @constant
 * @type {number}
 */
export
const InfoType_iA5String: InfoType = InfoType.iA5String; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iA5String
 * @constant
 * @type {number}
 */
export
const iA5String: InfoType = InfoType.iA5String; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_InfoType: $.ASN1Decoder<InfoType> = $._decodeEnumerated;

export
const _encode_InfoType: $.ASN1Encoder<InfoType> = $._encodeEnumerated;

/* eslint-enable */
