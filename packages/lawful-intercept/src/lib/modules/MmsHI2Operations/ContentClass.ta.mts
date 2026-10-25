/* eslint-disable */
import {
    type ENUMERATED
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
const ContentClass_text = _enum_for_ContentClass.text satisfies ContentClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary text
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const text = ContentClass_text satisfies ContentClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_image_basic
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_image_basic = _enum_for_ContentClass.image_basic satisfies ContentClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary image_basic
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const image_basic = ContentClass_image_basic satisfies ContentClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_image_rich
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_image_rich = _enum_for_ContentClass.image_rich satisfies ContentClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary image_rich
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const image_rich = ContentClass_image_rich satisfies ContentClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_video_basic
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_video_basic = _enum_for_ContentClass.video_basic satisfies ContentClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video_basic
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const video_basic = ContentClass_video_basic satisfies ContentClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_video_rich
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_video_rich = _enum_for_ContentClass.video_rich satisfies ContentClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video_rich
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const video_rich = ContentClass_video_rich satisfies ContentClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_megapixel
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_megapixel = _enum_for_ContentClass.megapixel satisfies ContentClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary megapixel
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const megapixel = ContentClass_megapixel satisfies ContentClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_content_basic
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_content_basic = _enum_for_ContentClass.content_basic satisfies ContentClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_basic
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const content_basic = ContentClass_content_basic satisfies ContentClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ContentClass_content_rich
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const ContentClass_content_rich = _enum_for_ContentClass.content_rich satisfies ContentClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_rich
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const content_rich = ContentClass_content_rich satisfies ContentClass; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ContentClass: $.ASN1Decoder<ContentClass> = $._decodeEnumerated;
export const _encode_ContentClass: $.ASN1Encoder<ContentClass> = $._encodeEnumerated;


/* eslint-enable */
