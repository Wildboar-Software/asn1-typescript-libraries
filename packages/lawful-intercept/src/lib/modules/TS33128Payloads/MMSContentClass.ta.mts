/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSContentClass
 * @description
 * 
 * Classifies the content of the MM to the smallest content class to which the
 * message belongs. Identifies the class of the content. Include if sent to the
 * MMS Proxy-Relay. Include if sent to the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentClass  ::=  ENUMERATED
 * {
 *     text(1),
 *     imageBasic(2),
 *     imageRich(3),
 *     videoBasic(4),
 *     videoRich(5),
 *     megaPixel(6),
 *     contentBasic(7),
 *     contentRich(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSContentClass {
    text = 1,
    imageBasic = 2,
    imageRich = 3,
    videoBasic = 4,
    videoRich = 5,
    megaPixel = 6,
    contentBasic = 7,
    contentRich = 8,
}

/**
 * @summary MMSContentClass
 * @description
 * 
 * Classifies the content of the MM to the smallest content class to which the
 * message belongs. Identifies the class of the content. Include if sent to the
 * MMS Proxy-Relay. Include if sent to the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentClass  ::=  ENUMERATED
 * {
 *     text(1),
 *     imageBasic(2),
 *     imageRich(3),
 *     videoBasic(4),
 *     videoRich(5),
 *     megaPixel(6),
 *     contentBasic(7),
 *     contentRich(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSContentClass = _enum_for_MMSContentClass;

/**
 * @summary MMSContentClass
 * @description
 * 
 * Classifies the content of the MM to the smallest content class to which the
 * message belongs. Identifies the class of the content. Include if sent to the
 * MMS Proxy-Relay. Include if sent to the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentClass  ::=  ENUMERATED
 * {
 *     text(1),
 *     imageBasic(2),
 *     imageRich(3),
 *     videoBasic(4),
 *     videoRich(5),
 *     megaPixel(6),
 *     contentBasic(7),
 *     contentRich(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSContentClass = _enum_for_MMSContentClass;

/**
 * @summary MMSContentClass_text
 * @constant
 * @type {number}
 */
export
const MMSContentClass_text = MMSContentClass.text; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary text
 * @constant
 * @type {number}
 */
export
const text = MMSContentClass.text; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_imageBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_imageBasic = MMSContentClass.imageBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imageBasic
 * @constant
 * @type {number}
 */
export
const imageBasic = MMSContentClass.imageBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_imageRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_imageRich = MMSContentClass.imageRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imageRich
 * @constant
 * @type {number}
 */
export
const imageRich = MMSContentClass.imageRich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_videoBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_videoBasic = MMSContentClass.videoBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoBasic
 * @constant
 * @type {number}
 */
export
const videoBasic = MMSContentClass.videoBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_videoRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_videoRich = MMSContentClass.videoRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoRich
 * @constant
 * @type {number}
 */
export
const videoRich = MMSContentClass.videoRich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_megaPixel
 * @constant
 * @type {number}
 */
export
const MMSContentClass_megaPixel = MMSContentClass.megaPixel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary megaPixel
 * @constant
 * @type {number}
 */
export
const megaPixel = MMSContentClass.megaPixel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_contentBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_contentBasic = MMSContentClass.contentBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contentBasic
 * @constant
 * @type {number}
 */
export
const contentBasic = MMSContentClass.contentBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_contentRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_contentRich = MMSContentClass.contentRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contentRich
 * @constant
 * @type {number}
 */
export
const contentRich = MMSContentClass.contentRich; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSContentClass: $.ASN1Decoder<MMSContentClass> = $._decodeEnumerated;
export const _encode_MMSContentClass: $.ASN1Encoder<MMSContentClass> = $._encodeEnumerated;


/* eslint-enable */
