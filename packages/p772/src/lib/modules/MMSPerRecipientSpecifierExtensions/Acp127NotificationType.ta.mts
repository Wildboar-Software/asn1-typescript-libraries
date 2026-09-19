/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Acp127NotificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127NotificationType  ::=  BIT STRING {
 *   acp127-nn(0), -- negative notification
 *   acp127-pn(1), -- positive notification
 *   acp127-tn(2)}
 * ```
 */
export
type Acp127NotificationType = BIT_STRING;

/**
 * @summary Acp127NotificationType_acp127_nn
 * @constant
 */
export
const Acp127NotificationType_acp127_nn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acp127_nn
 * @constant
 */
export
const acp127_nn: number = Acp127NotificationType_acp127_nn; /* SHORT_NAMED_BIT */

/**
 * @summary Acp127NotificationType_acp127_pn
 * @constant
 */
export
const Acp127NotificationType_acp127_pn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acp127_pn
 * @constant
 */
export
const acp127_pn: number = Acp127NotificationType_acp127_pn; /* SHORT_NAMED_BIT */

/**
 * @summary Acp127NotificationType_acp127_tn
 * @constant
 */
export
const Acp127NotificationType_acp127_tn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary acp127_tn
 * @constant
 */
export
const acp127_tn: number = Acp127NotificationType_acp127_tn; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Acp127NotificationType: $.ASN1Decoder<Acp127NotificationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Acp127NotificationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Acp127NotificationType (el: _Element): Acp127NotificationType {
    if (!_cached_decoder_for_Acp127NotificationType) { _cached_decoder_for_Acp127NotificationType = $._decodeBitString; }
    return _cached_decoder_for_Acp127NotificationType(el);
}

let _cached_encoder_for_Acp127NotificationType: $.ASN1Encoder<Acp127NotificationType> | null = null;

/**
 * @summary Encodes a(n) Acp127NotificationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Acp127NotificationType, encoded as an ASN.1 Element.
 */
export
function _encode_Acp127NotificationType (value: Acp127NotificationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Acp127NotificationType) { _cached_encoder_for_Acp127NotificationType = $._encodeBitString; }
    return _cached_encoder_for_Acp127NotificationType(value, elGetter);
}


/* eslint-enable */
