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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp/src/lib/modules/PKIXTSP/TimeStampToken.ta.mjs";
/* START_OF_SYMBOL_DEFINITION ESCTimeStampToken */
/**
 * @summary ESCTimeStampToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ESCTimeStampToken  ::=  TimeStampToken
 * ```
 */
export
type ESCTimeStampToken = TimeStampToken; // DefinedType
/* END_OF_SYMBOL_DEFINITION ESCTimeStampToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ESCTimeStampToken */
let _cached_decoder_for_ESCTimeStampToken: $.ASN1Decoder<ESCTimeStampToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ESCTimeStampToken */

/* START_OF_SYMBOL_DEFINITION _decode_ESCTimeStampToken */
/**
 * @summary Decodes an ASN.1 element into a(n) ESCTimeStampToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ESCTimeStampToken} The decoded data structure.
 */
export
function _decode_ESCTimeStampToken (el: _Element) {
    if (!_cached_decoder_for_ESCTimeStampToken) { _cached_decoder_for_ESCTimeStampToken = _decode_TimeStampToken; }
    return _cached_decoder_for_ESCTimeStampToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ESCTimeStampToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ESCTimeStampToken */
let _cached_encoder_for_ESCTimeStampToken: $.ASN1Encoder<ESCTimeStampToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ESCTimeStampToken */

/* START_OF_SYMBOL_DEFINITION _encode_ESCTimeStampToken */
/**
 * @summary Encodes a(n) ESCTimeStampToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ESCTimeStampToken, encoded as an ASN.1 Element.
 */
export
function _encode_ESCTimeStampToken (value: ESCTimeStampToken, elGetter: $.ASN1Encoder<ESCTimeStampToken>) {
    if (!_cached_encoder_for_ESCTimeStampToken) { _cached_encoder_for_ESCTimeStampToken = _encode_TimeStampToken; }
    return _cached_encoder_for_ESCTimeStampToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ESCTimeStampToken */

/* eslint-enable */
