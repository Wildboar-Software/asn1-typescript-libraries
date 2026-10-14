/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary CltuIdentification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuIdentification                ::=    IntUnsignedLong
 * ```
 */
export
type CltuIdentification = IntUnsignedLong; // DefinedType

let _cached_decoder_for_CltuIdentification: $.ASN1Decoder<CltuIdentification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuIdentification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuIdentification (el: _Element): CltuIdentification {
    if (!_cached_decoder_for_CltuIdentification) { _cached_decoder_for_CltuIdentification = _decode_IntUnsignedLong; }
    return _cached_decoder_for_CltuIdentification(el);
}

let _cached_encoder_for_CltuIdentification: $.ASN1Encoder<CltuIdentification> | null = null;

/**
 * @summary Encodes a(n) CltuIdentification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuIdentification, encoded as an ASN.1 Element.
 */
export
function _encode_CltuIdentification (value: CltuIdentification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuIdentification) { _cached_encoder_for_CltuIdentification = _encode_IntUnsignedLong; }
    return _cached_encoder_for_CltuIdentification(value, elGetter);
}


/* eslint-enable */
