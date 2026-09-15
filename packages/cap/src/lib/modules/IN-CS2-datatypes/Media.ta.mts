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
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Media {
    voiceMail = 0,
    faxGroup3 = 1,
    faxGroup4 = 2,
}

/**
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
type Media = _enum_for_Media;

/**
 * @summary Media
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Media  ::=  ENUMERATED {voiceMail(0), faxGroup3(1), faxGroup4(2)}
 * ```
 * 
 * @enum {number}
 */
export
const Media = _enum_for_Media;

/**
 * @summary Media_voiceMail
 * @constant
 * @type {number}
 */
export
const Media_voiceMail: Media = Media.voiceMail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceMail
 * @constant
 * @type {number}
 */
export
const voiceMail: Media = Media.voiceMail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Media_faxGroup3
 * @constant
 * @type {number}
 */
export
const Media_faxGroup3: Media = Media.faxGroup3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxGroup3
 * @constant
 * @type {number}
 */
export
const faxGroup3: Media = Media.faxGroup3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Media_faxGroup4
 * @constant
 * @type {number}
 */
export
const Media_faxGroup4: Media = Media.faxGroup4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary faxGroup4
 * @constant
 * @type {number}
 */
export
const faxGroup4: Media = Media.faxGroup4; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Media = $._decodeEnumerated;
export const _encode_Media = $._encodeEnumerated;


/* eslint-enable */
