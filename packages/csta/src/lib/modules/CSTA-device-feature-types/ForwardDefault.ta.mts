/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ForwardDefault
 * @description
 *
 * Marks forwardingType and/or forwardDN as switching-function default settings.
 * If supported and omitted, the information is not a default. ECMA-269
 * §22.1.11.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardDefault  ::=  ENUMERATED
 * {     forwardingTypeAndForwardDN     ( 0),
 *     forwardingType             ( 1),
 *     forwardDN             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ForwardDefault {
    forwardingTypeAndForwardDN = 0,
    forwardingType = 1,
    forwardDN = 2,
}

/**
 * @summary ForwardDefault
 * @description
 *
 * Marks forwardingType and/or forwardDN as switching-function default settings.
 * If supported and omitted, the information is not a default. ECMA-269
 * §22.1.11.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardDefault  ::=  ENUMERATED
 * {     forwardingTypeAndForwardDN     ( 0),
 *     forwardingType             ( 1),
 *     forwardDN             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
type ForwardDefault = _enum_for_ForwardDefault;

/**
 * @summary ForwardDefault
 * @description
 *
 * Marks forwardingType and/or forwardDN as switching-function default settings.
 * If supported and omitted, the information is not a default. ECMA-269
 * §22.1.11.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardDefault  ::=  ENUMERATED
 * {     forwardingTypeAndForwardDN     ( 0),
 *     forwardingType             ( 1),
 *     forwardDN             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
const ForwardDefault = _enum_for_ForwardDefault;

/**
 * @summary ForwardDefault_forwardingTypeAndForwardDN
 * @description
 * Both forwardingType and forwardDN are switching-function defaults. ECMA-269
 * §22.1.11.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardDefault_forwardingTypeAndForwardDN: ForwardDefault = ForwardDefault.forwardingTypeAndForwardDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingTypeAndForwardDN
 * @description Alias of {@link ForwardDefault_forwardingTypeAndForwardDN}.
 * @constant
 * @type {number}
 */
export
const forwardingTypeAndForwardDN: ForwardDefault = ForwardDefault.forwardingTypeAndForwardDN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardDefault_forwardingType
 * @description
 * forwardingType is a switching-function default. ECMA-269 §22.1.11.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardDefault_forwardingType: ForwardDefault = ForwardDefault.forwardingType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingType
 * @description Alias of {@link ForwardDefault_forwardingType}.
 * @constant
 * @type {number}
 */
export
const forwardingType: ForwardDefault = ForwardDefault.forwardingType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardDefault_forwardDN
 * @description forwardDN is a switching-function default. ECMA-269 §22.1.11.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ForwardDefault_forwardDN: ForwardDefault = ForwardDefault.forwardDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardDN
 * @description Alias of {@link ForwardDefault_forwardDN}.
 * @constant
 * @type {number}
 */
export
const forwardDN: ForwardDefault = ForwardDefault.forwardDN; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ForwardDefault: $.ASN1Decoder<ForwardDefault> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardDefault
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardDefault (el: _Element): ForwardDefault {
    if (!_cached_decoder_for_ForwardDefault) { _cached_decoder_for_ForwardDefault = $._decodeEnumerated; }
    return _cached_decoder_for_ForwardDefault(el);
}

let _cached_encoder_for_ForwardDefault: $.ASN1Encoder<ForwardDefault> | null = null;

/**
 * @summary Encodes a(n) ForwardDefault into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardDefault, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardDefault (value: ForwardDefault, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardDefault) { _cached_encoder_for_ForwardDefault = $._encodeEnumerated; }
    return _cached_encoder_for_ForwardDefault(value, elGetter);
}


/* eslint-enable */
