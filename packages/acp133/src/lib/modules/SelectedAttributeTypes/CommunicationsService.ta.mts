/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CommunicationsService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationsService  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type CommunicationsService = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_CommunicationsService: $.ASN1Decoder<CommunicationsService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommunicationsService (el: _Element): CommunicationsService {
    if (!_cached_decoder_for_CommunicationsService) { _cached_decoder_for_CommunicationsService = $._decodeObjectIdentifier; }
    return _cached_decoder_for_CommunicationsService(el);
}

let _cached_encoder_for_CommunicationsService: $.ASN1Encoder<CommunicationsService> | null = null;

/**
 * @summary Encodes a(n) CommunicationsService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsService, encoded as an ASN.1 Element.
 */
export
function _encode_CommunicationsService (value: CommunicationsService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommunicationsService) { _cached_encoder_for_CommunicationsService = $._encodeObjectIdentifier; }
    return _cached_encoder_for_CommunicationsService(value, elGetter);
}


/* eslint-enable */
