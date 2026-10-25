/* eslint-disable */
import {
    type ENUMERATED
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
 * How conference media changed. Clause 11 names add, remove, and change. The
 * module also defines unknown, which clause 11 does not describe. 3GPP TS
 * 33.108, clause 11.5, table 11.2.
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
 * @description
 * 
 * Media added on a bearer modification. 3GPP TS 33.108, clause 11.5, tables
 * 11.9 and 11.10.
 * 
 * @constant
 * @type {number}
 */
export
const MediaModification_add: _enum_for_MediaModification.add = _enum_for_MediaModification.add; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary add
 * @description
 * 
 * Media added. 3GPP TS 33.108, clause 11.5.
 * 
 * @constant
 * @type {number}
 */
export
const add: _enum_for_MediaModification.add = MediaModification_add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_remove
 * @description
 * 
 * Media removed on a bearer modification. 3GPP TS 33.108, clause 11.5, tables
 * 11.9 and 11.10.
 * 
 * @constant
 * @type {number}
 */
export
const MediaModification_remove: _enum_for_MediaModification.remove = _enum_for_MediaModification.remove; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remove
 * @description
 * 
 * Media removed. 3GPP TS 33.108, clause 11.5.
 * 
 * @constant
 * @type {number}
 */
export
const remove: _enum_for_MediaModification.remove = MediaModification_remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_change
 * @description
 * 
 * Existing media changed on a bearer modification. 3GPP TS 33.108, clause 11.5,
 * tables 11.9 and 11.10.
 * 
 * @constant
 * @type {number}
 */
export
const MediaModification_change: _enum_for_MediaModification.change = _enum_for_MediaModification.change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary change
 * @description
 * 
 * Media changed. 3GPP TS 33.108, clause 11.5.
 * 
 * @constant
 * @type {number}
 */
export
const change: _enum_for_MediaModification.change = MediaModification_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_unknown
 * @description
 * 
 * Defined in annex B.11.1. Clause 11 does not say when to use it.
 * 
 * @constant
 * @type {number}
 */
export
const MediaModification_unknown: _enum_for_MediaModification.unknown = _enum_for_MediaModification.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 * 
 * Clause 11 does not describe this value.
 * 
 * @constant
 * @type {number}
 */
export
const unknown: _enum_for_MediaModification.unknown = MediaModification_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MediaModification: $.ASN1Decoder<MediaModification> = $._decodeEnumerated;
export const _encode_MediaModification: $.ASN1Encoder<MediaModification> = $._encodeEnumerated;


/* eslint-enable */
