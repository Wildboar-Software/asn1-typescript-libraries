/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessRestrictions_Item, _decode_AccessRestrictions_Item, _encode_AccessRestrictions_Item } from "../RecordSyntax-explain/AccessRestrictions-Item.ta.mjs";
// export { AccessRestrictions_Item, _decode_AccessRestrictions_Item, _encode_AccessRestrictions_Item } from "../RecordSyntax-explain/AccessRestrictions-Item.ta.mjs";


/**
 * @summary AccessRestrictions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRestrictions  ::=  SEQUENCE OF SEQUENCE {
 *   accessType          [0] INTEGER {
 *                           any                (0),
 *                           search             (1),
 *                           present            (2),
 *                           specific-elements  (3),
 *                           extended-services  (4),
 *                           by-database        (5)},
 *   accessText          [1]  IMPLICIT HumanString OPTIONAL,
 *   accessChallenges    [2]  IMPLICIT SEQUENCE OF OBJECT IDENTIFIER OPTIONAL}
 * ```
 */
export
type AccessRestrictions = AccessRestrictions_Item[]; // SequenceOfType

let _cached_decoder_for_AccessRestrictions: $.ASN1Decoder<AccessRestrictions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessRestrictions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessRestrictions (el: _Element): AccessRestrictions {
    if (!_cached_decoder_for_AccessRestrictions) { _cached_decoder_for_AccessRestrictions = $._decodeSequenceOf<AccessRestrictions_Item>(() => _decode_AccessRestrictions_Item); }
    return _cached_decoder_for_AccessRestrictions(el);
}

let _cached_encoder_for_AccessRestrictions: $.ASN1Encoder<AccessRestrictions> | null = null;

/**
 * @summary Encodes a(n) AccessRestrictions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessRestrictions, encoded as an ASN.1 Element.
 */
export
function _encode_AccessRestrictions (value: AccessRestrictions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessRestrictions) { _cached_encoder_for_AccessRestrictions = $._encodeSequenceOf<AccessRestrictions_Item>(() => _encode_AccessRestrictions_Item, $.BER); }
    return _cached_encoder_for_AccessRestrictions(value, elGetter);
}


/* eslint-enable */
