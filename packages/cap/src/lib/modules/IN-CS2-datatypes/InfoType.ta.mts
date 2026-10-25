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
const InfoType_numericString = InfoType.numericString satisfies InfoType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numericString
 * @constant
 * @type {number}
 */
export
const numericString = InfoType.numericString satisfies InfoType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InfoType_characterString
 * @constant
 * @type {number}
 */
export
const InfoType_characterString = InfoType.characterString satisfies InfoType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterString
 * @constant
 * @type {number}
 */
export
const characterString = InfoType.characterString satisfies InfoType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InfoType_iA5String
 * @constant
 * @type {number}
 */
export
const InfoType_iA5String = InfoType.iA5String satisfies InfoType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iA5String
 * @constant
 * @type {number}
 */
export
const iA5String = InfoType.iA5String satisfies InfoType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InfoType = $._decodeEnumerated;
export const _encode_InfoType = $._encodeEnumerated;


/* eslint-enable */
