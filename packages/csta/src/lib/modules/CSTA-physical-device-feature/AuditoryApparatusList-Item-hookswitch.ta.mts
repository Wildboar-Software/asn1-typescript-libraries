/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AuditoryApparatusList_Item_hookswitch
 * @description
 *
 * Hookswitch capabilities of an auditory apparatus. ECMA-285 §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList-Item-hookswitch ::= BIT STRING {
 *     hookswitchSettable (0),
 *     hookswitchOnHook (1)
 * }
 * ```
 */
export
type AuditoryApparatusList_Item_hookswitch = BIT_STRING;

/**
 * @summary AuditoryApparatusList_Item_hookswitch_hookswitchSettable
 * @description
 *
 * Hookswitch state can be set. ECMA-285 §9.16.
 *
 * @constant
 */
export
const AuditoryApparatusList_Item_hookswitch_hookswitchSettable: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary hookswitchSettable
 * @constant
 */
export
const hookswitchSettable: number = AuditoryApparatusList_Item_hookswitch_hookswitchSettable; /* SHORT_NAMED_BIT */

/**
 * @summary AuditoryApparatusList_Item_hookswitch_hookswitchOnHook
 * @description
 *
 * Hookswitch is on-hook. ECMA-285 §9.16.
 *
 * @constant
 */
export
const AuditoryApparatusList_Item_hookswitch_hookswitchOnHook: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary hookswitchOnHook
 * @constant
 */
export
const hookswitchOnHook: number = AuditoryApparatusList_Item_hookswitch_hookswitchOnHook; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AuditoryApparatusList_Item_hookswitch: $.ASN1Decoder<AuditoryApparatusList_Item_hookswitch> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList_Item_hookswitch
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList_Item_hookswitch (el: _Element): AuditoryApparatusList_Item_hookswitch {
    if (!_cached_decoder_for_AuditoryApparatusList_Item_hookswitch) { _cached_decoder_for_AuditoryApparatusList_Item_hookswitch = $._decodeBitString; }
    return _cached_decoder_for_AuditoryApparatusList_Item_hookswitch(el);
}

let _cached_encoder_for_AuditoryApparatusList_Item_hookswitch: $.ASN1Encoder<AuditoryApparatusList_Item_hookswitch> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList_Item_hookswitch into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList_Item_hookswitch, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList_Item_hookswitch (value: AuditoryApparatusList_Item_hookswitch, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList_Item_hookswitch) { _cached_encoder_for_AuditoryApparatusList_Item_hookswitch = $._encodeBitString; }
    return _cached_encoder_for_AuditoryApparatusList_Item_hookswitch(value, elGetter);
}


/* eslint-enable */
