/* eslint-disable */
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    StatusChange_Item,
    _decode_StatusChange_Item,
    _encode_StatusChange_Item,
} from "../Q821-ASN1Module/StatusChange-Item.ta.mjs";



/**
 * @summary StatusChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusChange  ::= 
 *   SET OF
 *     SEQUENCE {statusAttributeID
 *                 Q821-ATTRIBUTE.&id({SupportedStatusAttributes}),
 *               oldStatusValue
 *                 [1]  Q821-ATTRIBUTE.&Type
 *                        ({SupportedStatusAttributes}{@.statusAttributeID})
 *                   OPTIONAL,
 *               newStatusValue
 *                 [2]  Q821-ATTRIBUTE.&Type
 *                        ({SupportedStatusAttributes}{@.statusAttributeID})
 *     }
 * ```
 */
export
type StatusChange = StatusChange_Item[]; // SetOfType

let _cached_decoder_for_StatusChange: $.ASN1Decoder<StatusChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusChange (el: _Element): StatusChange {
    if (!_cached_decoder_for_StatusChange) { _cached_decoder_for_StatusChange = $._decodeSetOf<StatusChange_Item>(() => _decode_StatusChange_Item); }
    return _cached_decoder_for_StatusChange(el);
}

let _cached_encoder_for_StatusChange: $.ASN1Encoder<StatusChange> | null = null;

/**
 * @summary Encodes a(n) StatusChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusChange, encoded as an ASN.1 Element.
 */
export
function _encode_StatusChange (value: StatusChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusChange) { _cached_encoder_for_StatusChange = $._encodeSetOf<StatusChange_Item>(() => _encode_StatusChange_Item, $.BER); }
    return _cached_encoder_for_StatusChange(value, elGetter);
}


/* eslint-enable */
