/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FlexParameterBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlexParameterBlock  ::=  OCTET STRING(SIZE(1..120))
 * ```
 */
export
type FlexParameterBlock = OCTET_STRING; // OctetStringType

let _cached_decoder_for_FlexParameterBlock: $.ASN1Decoder<FlexParameterBlock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FlexParameterBlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FlexParameterBlock (el: _Element): FlexParameterBlock {
    if (!_cached_decoder_for_FlexParameterBlock) { _cached_decoder_for_FlexParameterBlock = $._decodeOctetString; }
    return _cached_decoder_for_FlexParameterBlock(el);
}

let _cached_encoder_for_FlexParameterBlock: $.ASN1Encoder<FlexParameterBlock> | null = null;

/**
 * @summary Encodes a(n) FlexParameterBlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FlexParameterBlock, encoded as an ASN.1 Element.
 */
export
function _encode_FlexParameterBlock (value: FlexParameterBlock, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FlexParameterBlock) { _cached_encoder_for_FlexParameterBlock = $._encodeOctetString; }
    return _cached_encoder_for_FlexParameterBlock(value, elGetter);
}


/* eslint-enable */
