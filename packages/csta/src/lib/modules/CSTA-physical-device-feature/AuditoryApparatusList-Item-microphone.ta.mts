/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AuditoryApparatusList_Item_microphone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item-microphone ::= BIT STRING {
 *     present (0),
 *     gainSettable (1),
 *     gainReadable (2),
 *     muteSettable (3),
 *     muteReadable (4)
 * }
 * ```
 */
export
type AuditoryApparatusList_Item_microphone = BIT_STRING;

/**
 * @summary AuditoryApparatusList_Item_microphone_present
 * @constant
 */
export
const AuditoryApparatusList_Item_microphone_present: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary present
 * @constant
 */
export
const present: number = AuditoryApparatusList_Item_microphone_present; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_microphone_gainSettable
 * @constant
 */
export
const AuditoryApparatusList_Item_microphone_gainSettable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary gainSettable
 * @constant
 */
export
const gainSettable: number = AuditoryApparatusList_Item_microphone_gainSettable; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_microphone_gainReadable
 * @constant
 */
export
const AuditoryApparatusList_Item_microphone_gainReadable: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary gainReadable
 * @constant
 */
export
const gainReadable: number = AuditoryApparatusList_Item_microphone_gainReadable; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_microphone_muteSettable
 * @constant
 */
export
const AuditoryApparatusList_Item_microphone_muteSettable: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary muteSettable
 * @constant
 */
export
const muteSettable: number = AuditoryApparatusList_Item_microphone_muteSettable; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_microphone_muteReadable
 * @constant
 */
export
const AuditoryApparatusList_Item_microphone_muteReadable: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary muteReadable
 * @constant
 */
export
const muteReadable: number = AuditoryApparatusList_Item_microphone_muteReadable; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AuditoryApparatusList_Item_microphone: $.ASN1Decoder<AuditoryApparatusList_Item_microphone> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList_Item_microphone
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList_Item_microphone (el: _Element): AuditoryApparatusList_Item_microphone {
    if (!_cached_decoder_for_AuditoryApparatusList_Item_microphone) { _cached_decoder_for_AuditoryApparatusList_Item_microphone = $._decodeBitString; }
    return _cached_decoder_for_AuditoryApparatusList_Item_microphone(el);
}

let _cached_encoder_for_AuditoryApparatusList_Item_microphone: $.ASN1Encoder<AuditoryApparatusList_Item_microphone> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList_Item_microphone into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList_Item_microphone, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList_Item_microphone (value: AuditoryApparatusList_Item_microphone, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList_Item_microphone) { _cached_encoder_for_AuditoryApparatusList_Item_microphone = $._encodeBitString; }
    return _cached_encoder_for_AuditoryApparatusList_Item_microphone(value, elGetter);
}


/* eslint-enable */
