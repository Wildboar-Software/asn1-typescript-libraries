/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ContentClass {
    text = 0,
    image_basic = 1,
    image_rich = 2,
    video_basic = 3,
    video_rich = 4,
    megapixel = 5,
    content_basic = 6,
    content_rich = 7,
}

/**
 * @summary ContentClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentClass  ::=  ENUMERATED
 * {
 *     text             (0),
 *     image-basic     (1),
 *     image-rich        (2),
 * 
 *     video-basic        (3),
 *     video-rich        (4),
 *     megapixel        (5),
 *     content-basic    (6),
 *     content-rich    (7),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ContentClass = _enum_for_ContentClass | ENUMERATED;

/**
 * @summary ContentClass_text
 * @constant
 * @type {number}
 */
export
const ContentClass_text: ContentClass = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary text
 * @constant
 * @type {number}
 */
export
const text: ContentClass = ContentClass_text; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_image_basic
 * @constant
 * @type {number}
 */
export
const ContentClass_image_basic: ContentClass = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary image_basic
 * @constant
 * @type {number}
 */
export
const image_basic: ContentClass = ContentClass_image_basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_image_rich
 * @constant
 * @type {number}
 */
export
const ContentClass_image_rich: ContentClass = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary image_rich
 * @constant
 * @type {number}
 */
export
const image_rich: ContentClass = ContentClass_image_rich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_video_basic
 * @constant
 * @type {number}
 */
export
const ContentClass_video_basic: ContentClass = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video_basic
 * @constant
 * @type {number}
 */
export
const video_basic: ContentClass = ContentClass_video_basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_video_rich
 * @constant
 * @type {number}
 */
export
const ContentClass_video_rich: ContentClass = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video_rich
 * @constant
 * @type {number}
 */
export
const video_rich: ContentClass = ContentClass_video_rich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_megapixel
 * @constant
 * @type {number}
 */
export
const ContentClass_megapixel: ContentClass = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary megapixel
 * @constant
 * @type {number}
 */
export
const megapixel: ContentClass = ContentClass_megapixel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_content_basic
 * @constant
 * @type {number}
 */
export
const ContentClass_content_basic: ContentClass = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_basic
 * @constant
 * @type {number}
 */
export
const content_basic: ContentClass = ContentClass_content_basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_content_rich
 * @constant
 * @type {number}
 */
export
const ContentClass_content_rich: ContentClass = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_rich
 * @constant
 * @type {number}
 */
export
const content_rich: ContentClass = ContentClass_content_rich; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_ContentClass: $.ASN1Decoder<ContentClass> = $._decodeEnumerated;

export const _encode_ContentClass: $.ASN1Encoder<ContentClass> = $._encodeEnumerated;


/* eslint-enable */
