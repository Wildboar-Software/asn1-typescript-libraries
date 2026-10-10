/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSContentClass
 * @description
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
const MMSContentClass_text: MMSContentClass = MMSContentClass.text; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary text
 * @constant
 * @type {number}
 */
export
const text: MMSContentClass = MMSContentClass.text; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_imageBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_imageBasic: MMSContentClass = MMSContentClass.imageBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imageBasic
 * @constant
 * @type {number}
 */
export
const imageBasic: MMSContentClass = MMSContentClass.imageBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_imageRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_imageRich: MMSContentClass = MMSContentClass.imageRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imageRich
 * @constant
 * @type {number}
 */
export
const imageRich: MMSContentClass = MMSContentClass.imageRich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_videoBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_videoBasic: MMSContentClass = MMSContentClass.videoBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoBasic
 * @constant
 * @type {number}
 */
export
const videoBasic: MMSContentClass = MMSContentClass.videoBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_videoRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_videoRich: MMSContentClass = MMSContentClass.videoRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary videoRich
 * @constant
 * @type {number}
 */
export
const videoRich: MMSContentClass = MMSContentClass.videoRich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_megaPixel
 * @constant
 * @type {number}
 */
export
const MMSContentClass_megaPixel: MMSContentClass = MMSContentClass.megaPixel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary megaPixel
 * @constant
 * @type {number}
 */
export
const megaPixel: MMSContentClass = MMSContentClass.megaPixel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_contentBasic
 * @constant
 * @type {number}
 */
export
const MMSContentClass_contentBasic: MMSContentClass = MMSContentClass.contentBasic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contentBasic
 * @constant
 * @type {number}
 */
export
const contentBasic: MMSContentClass = MMSContentClass.contentBasic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSContentClass_contentRich
 * @constant
 * @type {number}
 */
export
const MMSContentClass_contentRich: MMSContentClass = MMSContentClass.contentRich; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contentRich
 * @constant
 * @type {number}
 */
export
const contentRich: MMSContentClass = MMSContentClass.contentRich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) MMSContentClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMSContentClass = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MMSContentClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSContentClass, encoded as an ASN.1 Element.
 */
export const _encode_MMSContentClass = $._encodeEnumerated;


/* eslint-enable */
