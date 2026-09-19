/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EstablishmentCauseNon3GPPAccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishmentCauseNon3GPPAccess  ::=  OCTET STRING
 * ```
 */
export
type EstablishmentCauseNon3GPPAccess = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EstablishmentCauseNon3GPPAccess: $.ASN1Decoder<EstablishmentCauseNon3GPPAccess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishmentCauseNon3GPPAccess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishmentCauseNon3GPPAccess (el: _Element): EstablishmentCauseNon3GPPAccess {
    if (!_cached_decoder_for_EstablishmentCauseNon3GPPAccess) { _cached_decoder_for_EstablishmentCauseNon3GPPAccess = $._decodeOctetString; }
    return _cached_decoder_for_EstablishmentCauseNon3GPPAccess(el);
}

let _cached_encoder_for_EstablishmentCauseNon3GPPAccess: $.ASN1Encoder<EstablishmentCauseNon3GPPAccess> | null = null;

/**
 * @summary Encodes a(n) EstablishmentCauseNon3GPPAccess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishmentCauseNon3GPPAccess, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishmentCauseNon3GPPAccess (value: EstablishmentCauseNon3GPPAccess, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishmentCauseNon3GPPAccess) { _cached_encoder_for_EstablishmentCauseNon3GPPAccess = $._encodeOctetString; }
    return _cached_encoder_for_EstablishmentCauseNon3GPPAccess(value, elGetter);
}


/* eslint-enable */
