/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPReturnBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPReturnBlock  ::=  [78] IMPLICIT OCTET STRING(SIZE(1..120))
 * ```
 */
export
type IPReturnBlock = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IPReturnBlock: $.ASN1Decoder<IPReturnBlock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPReturnBlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPReturnBlock (el: _Element): IPReturnBlock {
    if (!_cached_decoder_for_IPReturnBlock) { _cached_decoder_for_IPReturnBlock = $._decode_implicit<IPReturnBlock>(() => $._decodeOctetString); }
    return _cached_decoder_for_IPReturnBlock(el);
}

let _cached_encoder_for_IPReturnBlock: $.ASN1Encoder<IPReturnBlock> | null = null;

/**
 * @summary Encodes a(n) IPReturnBlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPReturnBlock, encoded as an ASN.1 Element.
 */
export
function _encode_IPReturnBlock (value: IPReturnBlock, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPReturnBlock) { _cached_encoder_for_IPReturnBlock = $._encode_implicit(_TagClass.context, 78, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_IPReturnBlock(value, elGetter);
}


/* eslint-enable */
