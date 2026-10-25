/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary VolumeUnit
 * @description
 *
 * Unit priced by a volume rate: octet, segment, or a message to which
 * user-to-user information has been attached (ECMA-211 §A.1.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolumeUnit  ::=  ENUMERATED {
 *     octet(0),
 *     segment(1),
 *     message(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VolumeUnit {
    octet = 0,
    segment = 1,
    message = 2,
}

/**
 * @summary VolumeUnit
 * @description
 *
 * Unit priced by a volume rate: octet, segment, or a message to which
 * user-to-user information has been attached (ECMA-211 §A.1.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolumeUnit  ::=  ENUMERATED {
 *     octet(0),
 *     segment(1),
 *     message(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VolumeUnit = _enum_for_VolumeUnit;

/**
 * @summary VolumeUnit
 * @description
 *
 * Unit priced by a volume rate: octet, segment, or a message to which
 * user-to-user information has been attached (ECMA-211 §A.1.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolumeUnit  ::=  ENUMERATED {
 *     octet(0),
 *     segment(1),
 *     message(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VolumeUnit: typeof _enum_for_VolumeUnit = _enum_for_VolumeUnit;

/**
 * @summary VolumeUnit_octet
 * @description Volume unit of one octet (ECMA-211 §A.1.3.2).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const VolumeUnit_octet: _enum_for_VolumeUnit.octet = VolumeUnit.octet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary octet
 * @description Alias of {@link VolumeUnit_octet}.
 * @constant
 * @type {number}
 */
export
const octet: _enum_for_VolumeUnit.octet = VolumeUnit.octet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VolumeUnit_segment
 * @description
 *
 * Volume unit named segment. ECMA-211 §A.1.3.2 lists it and does not define it
 * further.
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const VolumeUnit_segment: _enum_for_VolumeUnit.segment = VolumeUnit.segment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary segment
 * @description Alias of {@link VolumeUnit_segment}.
 * @constant
 * @type {number}
 */
export
const segment: _enum_for_VolumeUnit.segment = VolumeUnit.segment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VolumeUnit_message
 * @description
 *
 * A message to which user-to-user information has been attached (ECMA-211
 * §A.1.3.2).
 *
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const VolumeUnit_message: _enum_for_VolumeUnit.message = VolumeUnit.message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary message
 * @description Alias of {@link VolumeUnit_message}.
 * @constant
 * @type {number}
 */
export
const message: _enum_for_VolumeUnit.message = VolumeUnit.message; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_VolumeUnit: $.ASN1Decoder<VolumeUnit> = $._decodeEnumerated;

export
const _encode_VolumeUnit: $.ASN1Encoder<VolumeUnit> = $._encodeEnumerated;

/* eslint-enable */
