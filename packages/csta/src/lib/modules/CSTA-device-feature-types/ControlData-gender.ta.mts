/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ControlData_gender
 * @description
 *
 * Voice gender for Synthesize Message control data. ECMA-269 §26.1.17.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlData_gender ::= ENUMERATED {
 *     male (0),
 *     female (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ControlData_gender {
    male = 0,
    female = 1,
}

/**
 * @summary ControlData_gender
 * @description
 *
 * Voice gender for Synthesize Message control data. ECMA-269 §26.1.17.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlData_gender ::= ENUMERATED {
 *     male (0),
 *     female (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ControlData_gender = _enum_for_ControlData_gender;

/**
 * @summary ControlData_gender
 * @description
 *
 * Voice gender for Synthesize Message control data. ECMA-269 §26.1.17.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlData_gender ::= ENUMERATED {
 *     male (0),
 *     female (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ControlData_gender = _enum_for_ControlData_gender;

/**
 * @summary ControlData_gender_male
 * @description Male voice. ECMA-269 §26.1.17.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ControlData_gender_male: ControlData_gender = ControlData_gender.male; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary male
 * @description Alias of {@link ControlData_gender_male}.
 * @constant
 * @type {number}
 */
export
const male: ControlData_gender = ControlData_gender.male; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlData_gender_female
 * @description Female voice. ECMA-269 §26.1.17.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const ControlData_gender_female: ControlData_gender = ControlData_gender.female; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary female
 * @description Alias of {@link ControlData_gender_female}.
 * @constant
 * @type {number}
 */
export
const female: ControlData_gender = ControlData_gender.female; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ControlData_gender: $.ASN1Decoder<ControlData_gender> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlData_gender
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlData_gender (el: _Element): ControlData_gender {
    if (!_cached_decoder_for_ControlData_gender) { _cached_decoder_for_ControlData_gender = $._decodeEnumerated; }
    return _cached_decoder_for_ControlData_gender(el);
}

let _cached_encoder_for_ControlData_gender: $.ASN1Encoder<ControlData_gender> | null = null;

/**
 * @summary Encodes a(n) ControlData_gender into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlData_gender, encoded as an ASN.1 Element.
 */
export
function _encode_ControlData_gender (value: ControlData_gender, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlData_gender) { _cached_encoder_for_ControlData_gender = $._encodeEnumerated; }
    return _cached_encoder_for_ControlData_gender(value, elGetter);
}


/* eslint-enable */
