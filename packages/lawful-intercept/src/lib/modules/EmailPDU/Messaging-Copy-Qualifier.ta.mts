/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Copy_Qualifier {
    unknown = 0,
    none = 1,
    cc = 2,
    bcc = 3,
}

/**
 * @summary Messaging_Copy_Qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Copy-Qualifier  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     none(1),
 *     cc(2),
 *     bcc(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Copy_Qualifier = _enum_for_Messaging_Copy_Qualifier | ENUMERATED;

/**
 * @summary Messaging_Copy_Qualifier_unknown
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_unknown: Messaging_Copy_Qualifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Messaging_Copy_Qualifier = Messaging_Copy_Qualifier_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_none
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_none: Messaging_Copy_Qualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Messaging_Copy_Qualifier = Messaging_Copy_Qualifier_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_cc
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_cc: Messaging_Copy_Qualifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cc
 * @constant
 * @type {number}
 */
export
const cc: Messaging_Copy_Qualifier = Messaging_Copy_Qualifier_cc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Copy_Qualifier_bcc
 * @constant
 * @type {number}
 */
export
const Messaging_Copy_Qualifier_bcc: Messaging_Copy_Qualifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bcc
 * @constant
 * @type {number}
 */
export
const bcc: Messaging_Copy_Qualifier = Messaging_Copy_Qualifier_bcc; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Messaging_Copy_Qualifier: $.ASN1Decoder<Messaging_Copy_Qualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Copy_Qualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Copy_Qualifier (el: _Element): Messaging_Copy_Qualifier {
    if (!_cached_decoder_for_Messaging_Copy_Qualifier) { _cached_decoder_for_Messaging_Copy_Qualifier = $._decodeEnumerated; }
    return _cached_decoder_for_Messaging_Copy_Qualifier(el);
}

let _cached_encoder_for_Messaging_Copy_Qualifier: $.ASN1Encoder<Messaging_Copy_Qualifier> | null = null;

/**
 * @summary Encodes a(n) Messaging_Copy_Qualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Copy_Qualifier, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Copy_Qualifier (value: Messaging_Copy_Qualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Copy_Qualifier) { _cached_encoder_for_Messaging_Copy_Qualifier = $._encodeEnumerated; }
    return _cached_encoder_for_Messaging_Copy_Qualifier(value, elGetter);
}


/* eslint-enable */
