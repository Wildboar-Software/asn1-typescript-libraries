/* eslint-disable */
import {
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
 * Smallest content class to which the MM belongs (table 15.3.6.1.2). Annex B.15
 * names the classes. Clause 15.3 does not further define each class.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
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
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ContentClass = _enum_for_ContentClass | ENUMERATED;

/**
 * @summary ContentClass_text
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_text: ContentClass = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary text
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const text: ContentClass = ContentClass_text; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_image_basic
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_image_basic: ContentClass = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary image_basic
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const image_basic: ContentClass = ContentClass_image_basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_image_rich
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_image_rich: ContentClass = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary image_rich
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const image_rich: ContentClass = ContentClass_image_rich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_video_basic
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_video_basic: ContentClass = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video_basic
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const video_basic: ContentClass = ContentClass_video_basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_video_rich
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_video_rich: ContentClass = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video_rich
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const video_rich: ContentClass = ContentClass_video_rich; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_megapixel
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_megapixel: ContentClass = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary megapixel
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const megapixel: ContentClass = ContentClass_megapixel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_content_basic
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_content_basic: ContentClass = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_basic
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const content_basic: ContentClass = ContentClass_content_basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_content_rich
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_content_rich: ContentClass = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_rich
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const content_rich: ContentClass = ContentClass_content_rich; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ContentClass: $.ASN1Decoder<ContentClass> = $._decodeEnumerated;
export const _encode_ContentClass: $.ASN1Encoder<ContentClass> = $._encodeEnumerated;


/* eslint-enable */
