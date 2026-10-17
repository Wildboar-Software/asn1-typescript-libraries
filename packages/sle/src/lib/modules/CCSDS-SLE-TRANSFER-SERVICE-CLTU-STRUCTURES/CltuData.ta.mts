/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SpaceLinkDataUnit, _decode_SpaceLinkDataUnit, _encode_SpaceLinkDataUnit } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SpaceLinkDataUnit.ta.mjs";


/**
 * @summary CltuData
 * @description
 * 
 * One CLTU handed to the provider for radiation on the forward physical
 * channel. The provider buffers complete CLTUs only. Embedded TC frames may
 * already carry Space Data Link Security protection; that protection is
 * transparent to this service. CCSDS 912.1-B-5, sections 3.6.2.10 and 3.1.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuData                                ::=    SpaceLinkDataUnit
 * ```
 */
export
type CltuData = SpaceLinkDataUnit; // DefinedType

let _cached_decoder_for_CltuData: $.ASN1Decoder<CltuData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuData (el: _Element): CltuData {
    if (!_cached_decoder_for_CltuData) { _cached_decoder_for_CltuData = _decode_SpaceLinkDataUnit; }
    return _cached_decoder_for_CltuData(el);
}

let _cached_encoder_for_CltuData: $.ASN1Encoder<CltuData> | null = null;

/**
 * @summary Encodes a(n) CltuData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuData, encoded as an ASN.1 Element.
 */
export
function _encode_CltuData (value: CltuData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuData) { _cached_encoder_for_CltuData = _encode_SpaceLinkDataUnit; }
    return _cached_encoder_for_CltuData(value, elGetter);
}


/* eslint-enable */
