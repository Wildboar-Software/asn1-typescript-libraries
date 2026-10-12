/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MediaModification {
    add = 1,
    remove = 2,
    change = 3,
    unknown = 4,
}

/**
 * @summary MediaModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaModification  ::=  ENUMERATED
 * {
 *         add (1),
 *         remove (2),
 *         change (3),
 *         unknown (4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MediaModification = _enum_for_MediaModification | ENUMERATED;

/**
 * @summary MediaModification_add
 * @constant
 * @type {number}
 */
export
const MediaModification_add: MediaModification = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary add
 * @constant
 * @type {number}
 */
export
const add: MediaModification = MediaModification_add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_remove
 * @constant
 * @type {number}
 */
export
const MediaModification_remove: MediaModification = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remove
 * @constant
 * @type {number}
 */
export
const remove: MediaModification = MediaModification_remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_change
 * @constant
 * @type {number}
 */
export
const MediaModification_change: MediaModification = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary change
 * @constant
 * @type {number}
 */
export
const change: MediaModification = MediaModification_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_unknown
 * @constant
 * @type {number}
 */
export
const MediaModification_unknown: MediaModification = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: MediaModification = MediaModification_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MediaModification: $.ASN1Decoder<MediaModification> = $._decodeEnumerated;
export const _encode_MediaModification: $.ASN1Encoder<MediaModification> = $._encodeEnumerated;


/* eslint-enable */
