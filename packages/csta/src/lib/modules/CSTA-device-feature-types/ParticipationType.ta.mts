/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ParticipationType
 * @description
 *
 * How a device participates when joining a call (Intrude Call, Join Call,
 * Single Step Conference, etc.). Also used to specify flowDirection. ECMA-269
 * §12.2.8; ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipationType  ::=  ENUMERATED
 * {     silent                 (0),
 *     active                 (1),
 *     none                (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ParticipationType {
    silent = 0,
    active = 1,
    none = 2,
}

/**
 * @summary ParticipationType
 * @description
 *
 * How a device participates when joining a call (Intrude Call, Join Call,
 * Single Step Conference, etc.). Also used to specify flowDirection. ECMA-269
 * §12.2.8; ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipationType  ::=  ENUMERATED
 * {     silent                 (0),
 *     active                 (1),
 *     none                (2) }
 * ```
 * 
 * @enum {number}
 */
export
type ParticipationType = _enum_for_ParticipationType;

/**
 * @summary ParticipationType
 * @description
 *
 * How a device participates when joining a call (Intrude Call, Join Call,
 * Single Step Conference, etc.). Also used to specify flowDirection. ECMA-269
 * §12.2.8; ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipationType  ::=  ENUMERATED
 * {     silent                 (0),
 *     active                 (1),
 *     none                (2) }
 * ```
 * 
 * @enum {number}
 */
export
const ParticipationType = _enum_for_ParticipationType;

/**
 * @summary ParticipationType_silent
 * @description Silent participation. ECMA-269 §12.2.8.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ParticipationType_silent: ParticipationType = ParticipationType.silent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silent
 * @description Alias of {@link ParticipationType_silent}.
 * @constant
 * @type {number}
 */
export
const silent: ParticipationType = ParticipationType.silent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipationType_active
 * @description Active participation. ECMA-269 §12.2.8.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ParticipationType_active: ParticipationType = ParticipationType.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @description Alias of {@link ParticipationType_active}.
 * @constant
 * @type {number}
 */
export
const active: ParticipationType = ParticipationType.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipationType_none
 * @description No participation. ECMA-269 §12.2.8.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ParticipationType_none: ParticipationType = ParticipationType.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @description Alias of {@link ParticipationType_none}.
 * @constant
 * @type {number}
 */
export
const none: ParticipationType = ParticipationType.none; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ParticipationType: $.ASN1Decoder<ParticipationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParticipationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParticipationType (el: _Element): ParticipationType {
    if (!_cached_decoder_for_ParticipationType) { _cached_decoder_for_ParticipationType = $._decodeEnumerated; }
    return _cached_decoder_for_ParticipationType(el);
}

let _cached_encoder_for_ParticipationType: $.ASN1Encoder<ParticipationType> | null = null;

/**
 * @summary Encodes a(n) ParticipationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParticipationType, encoded as an ASN.1 Element.
 */
export
function _encode_ParticipationType (value: ParticipationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParticipationType) { _cached_encoder_for_ParticipationType = $._encodeEnumerated; }
    return _cached_encoder_for_ParticipationType(value, elGetter);
}


/* eslint-enable */
