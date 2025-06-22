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
import { TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp/src/lib/modules/PKIXTSP/TimeStampToken.ta.mjs";
/**
 * @summary SignatureTimeStampToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureTimeStampToken  ::=  TimeStampToken
 * ```
 */
export
type SignatureTimeStampToken = TimeStampToken; // DefinedType

let _cached_decoder_for_SignatureTimeStampToken: $.ASN1Decoder<SignatureTimeStampToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignatureTimeStampToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureTimeStampToken} The decoded data structure.
 */
export
function _decode_SignatureTimeStampToken (el: _Element) {
    if (!_cached_decoder_for_SignatureTimeStampToken) { _cached_decoder_for_SignatureTimeStampToken = _decode_TimeStampToken; }
    return _cached_decoder_for_SignatureTimeStampToken(el);
}

let _cached_encoder_for_SignatureTimeStampToken: $.ASN1Encoder<SignatureTimeStampToken> | null = null;

/**
 * @summary Encodes a(n) SignatureTimeStampToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureTimeStampToken, encoded as an ASN.1 Element.
 */
export
function _encode_SignatureTimeStampToken (value: SignatureTimeStampToken, elGetter: $.ASN1Encoder<SignatureTimeStampToken>) {
    if (!_cached_encoder_for_SignatureTimeStampToken) { _cached_encoder_for_SignatureTimeStampToken = _encode_TimeStampToken; }
    return _cached_encoder_for_SignatureTimeStampToken(value, elGetter);
}


/* eslint-enable */
