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
 * @summary InstructionMode
 * @description
 *
 * How subjects were instructed (Clause 6.5.2): `written-manual`(1),
 * `poster`(2), `video`(3), `personal`(4). The `video` option covers
 * slides or other sets of static images.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InstructionMode  ::=  ENUMERATED {
 *     written-manual  (1),
 *     poster          (2),
 *     video           (3),
 *     personal        (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InstructionMode {
    written_manual = 1,
    poster = 2,
    video = 3,
    personal = 4,
}

/**
 * @summary InstructionMode
 * @description
 *
 * How subjects were instructed (Clause 6.5.2): `written-manual`(1),
 * `poster`(2), `video`(3), `personal`(4). The `video` option covers
 * slides or other sets of static images.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InstructionMode  ::=  ENUMERATED {
 *     written-manual  (1),
 *     poster          (2),
 *     video           (3),
 *     personal        (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InstructionMode = _enum_for_InstructionMode;

/**
 * @summary InstructionMode
 * @description
 *
 * How subjects were instructed (Clause 6.5.2): `written-manual`(1),
 * `poster`(2), `video`(3), `personal`(4). The `video` option covers
 * slides or other sets of static images.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InstructionMode  ::=  ENUMERATED {
 *     written-manual  (1),
 *     poster          (2),
 *     video           (3),
 *     personal        (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const InstructionMode: typeof _enum_for_InstructionMode = _enum_for_InstructionMode;

/**
 * @summary InstructionMode_written_manual
 * @constant
 * @type {number}
 */
export
const InstructionMode_written_manual: _enum_for_InstructionMode.written_manual = InstructionMode.written_manual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary written_manual
 * @constant
 * @type {number}
 */
export
const written_manual: _enum_for_InstructionMode.written_manual = InstructionMode.written_manual; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InstructionMode_poster
 * @constant
 * @type {number}
 */
export
const InstructionMode_poster: _enum_for_InstructionMode.poster = InstructionMode.poster; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary poster
 * @constant
 * @type {number}
 */
export
const poster: _enum_for_InstructionMode.poster = InstructionMode.poster; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InstructionMode_video
 * @description
 *
 * Video instruction; also covers slides or other sets of static
 * images (Clause 6.5.2).
 *
 * @constant
 * @type {number}
 */
export
const InstructionMode_video: _enum_for_InstructionMode.video = InstructionMode.video; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary video
 * @constant
 * @type {number}
 */
export
const video: _enum_for_InstructionMode.video = InstructionMode.video; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InstructionMode_personal
 * @constant
 * @type {number}
 */
export
const InstructionMode_personal: _enum_for_InstructionMode.personal = InstructionMode.personal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: _enum_for_InstructionMode.personal = InstructionMode.personal; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) InstructionMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_InstructionMode: $.ASN1Decoder<number> = $._decodeEnumerated;


/**
 * @summary Encodes a(n) InstructionMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InstructionMode, encoded as an ASN.1 Element.
 */
export const _encode_InstructionMode: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
