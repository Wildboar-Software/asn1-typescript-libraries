/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimeOffer_Item, _decode_TimeOffer_Item, _encode_TimeOffer_Item } from "../DEV/TimeOffer-Item.ta.mjs";
// export { TimeOffer_Item, _decode_TimeOffer_Item, _encode_TimeOffer_Item } from "../DEV/TimeOffer-Item.ta.mjs";


/**
 * @summary TimeOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeOffer  ::=  SET OF CHOICE {
 *     value [0] IMPLICIT SEQUENCE {
 *         multiplier INTEGER,
 *         exponent INTEGER
 *     },
 *     range [1] IMPLICIT SEQUENCE {
 *         lowerMultiplier     INTEGER,
 *         lowerExponent       INTEGER,
 *         upperMultiplier     INTEGER,
 *         upperExponent       INTEGER
 *     }
 * }
 * ```
 */
export
type TimeOffer = TimeOffer_Item[]; // SetOfType

let _cached_decoder_for_TimeOffer: $.ASN1Decoder<TimeOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeOffer (el: _Element): TimeOffer {
    if (!_cached_decoder_for_TimeOffer) { _cached_decoder_for_TimeOffer = $._decodeSetOf<TimeOffer_Item>(() => _decode_TimeOffer_Item); }
    return _cached_decoder_for_TimeOffer(el);
}

let _cached_encoder_for_TimeOffer: $.ASN1Encoder<TimeOffer> | null = null;

/**
 * @summary Encodes a(n) TimeOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeOffer, encoded as an ASN.1 Element.
 */
export
function _encode_TimeOffer (value: TimeOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeOffer) { _cached_encoder_for_TimeOffer = $._encodeSetOf<TimeOffer_Item>(() => _encode_TimeOffer_Item, $.BER); }
    return _cached_encoder_for_TimeOffer(value, elGetter);
}


/* eslint-enable */
