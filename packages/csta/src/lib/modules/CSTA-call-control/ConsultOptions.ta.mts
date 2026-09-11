/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConsultOptions
 * @description
 *
 * Potential action after Consultation Call or Alternate Call so the switch can
 * allocate Transfer or Conference facilities. Does not restrict other services.
 * Default Unrestricted. If the switch does not support this parameter,
 * Unrestricted is implicit. ECMA-269 §17.1.10.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultOptions  ::=  ENUMERATED
 * {     unrestricted                     ( 0),
 *     consultOnly                     ( 1),
 *     transferOnly                     ( 2),
 *     conferenceOnly                     ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConsultOptions {
    unrestricted = 0,
    consultOnly = 1,
    transferOnly = 2,
    conferenceOnly = 3,
}

/**
 * @summary ConsultOptions
 * @description
 *
 * Potential action after Consultation Call or Alternate Call so the switch can
 * allocate Transfer or Conference facilities. Does not restrict other services.
 * Default Unrestricted. If the switch does not support this parameter,
 * Unrestricted is implicit. ECMA-269 §17.1.10.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultOptions  ::=  ENUMERATED
 * {     unrestricted                     ( 0),
 *     consultOnly                     ( 1),
 *     transferOnly                     ( 2),
 *     conferenceOnly                     ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
type ConsultOptions = _enum_for_ConsultOptions;

/**
 * @summary ConsultOptions
 * @description
 *
 * Potential action after Consultation Call or Alternate Call so the switch can
 * allocate Transfer or Conference facilities. Does not restrict other services.
 * Default Unrestricted. If the switch does not support this parameter,
 * Unrestricted is implicit. ECMA-269 §17.1.10.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultOptions  ::=  ENUMERATED
 * {     unrestricted                     ( 0),
 *     consultOnly                     ( 1),
 *     transferOnly                     ( 2),
 *     conferenceOnly                     ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
const ConsultOptions = _enum_for_ConsultOptions;

/**
 * @summary ConsultOptions_unrestricted
 * @description
 *
 * No restriction on a later Transfer or Conference. Default. ECMA-269 §17.1.10.
 *
 * @constant
 * @type {number}
 */
export
const ConsultOptions_unrestricted: ConsultOptions = ConsultOptions.unrestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestricted
 * @constant
 * @type {number}
 */
export
const unrestricted: ConsultOptions = ConsultOptions.unrestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsultOptions_consultOnly
 * @description
 *
 * Consultation only; not intending Transfer or Conference. ECMA-269 §17.1.10.
 *
 * @constant
 * @type {number}
 */
export
const ConsultOptions_consultOnly: ConsultOptions = ConsultOptions.consultOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultOnly
 * @constant
 * @type {number}
 */
export
const consultOnly: ConsultOptions = ConsultOptions.consultOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsultOptions_transferOnly
 * @description
 *
 * Consultation intended to be completed by Transfer. ECMA-269 §17.1.10.
 *
 * @constant
 * @type {number}
 */
export
const ConsultOptions_transferOnly: ConsultOptions = ConsultOptions.transferOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferOnly
 * @constant
 * @type {number}
 */
export
const transferOnly: ConsultOptions = ConsultOptions.transferOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsultOptions_conferenceOnly
 * @description
 *
 * Consultation intended to be completed by Conference. ECMA-269 §17.1.10.
 *
 * @constant
 * @type {number}
 */
export
const ConsultOptions_conferenceOnly: ConsultOptions = ConsultOptions.conferenceOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conferenceOnly
 * @constant
 * @type {number}
 */
export
const conferenceOnly: ConsultOptions = ConsultOptions.conferenceOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ConsultOptions: $.ASN1Decoder<ConsultOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConsultOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConsultOptions (el: _Element): ConsultOptions {
    if (!_cached_decoder_for_ConsultOptions) { _cached_decoder_for_ConsultOptions = $._decodeEnumerated; }
    return _cached_decoder_for_ConsultOptions(el);
}

let _cached_encoder_for_ConsultOptions: $.ASN1Encoder<ConsultOptions> | null = null;

/**
 * @summary Encodes a(n) ConsultOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsultOptions, encoded as an ASN.1 Element.
 */
export
function _encode_ConsultOptions (value: ConsultOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConsultOptions) { _cached_encoder_for_ConsultOptions = $._encodeEnumerated; }
    return _cached_encoder_for_ConsultOptions(value, elGetter);
}


/* eslint-enable */
