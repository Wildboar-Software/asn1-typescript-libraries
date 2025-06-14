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
/* START_OF_SYMBOL_DEFINITION ContentTimestamp */
/**
 * @summary ContentTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTimestamp ::=  TimeStampToken
 * ```
 */
export
type ContentTimestamp = TimeStampToken; // DefinedType
/* END_OF_SYMBOL_DEFINITION ContentTimestamp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentTimestamp */
let _cached_decoder_for_ContentTimestamp: $.ASN1Decoder<ContentTimestamp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentTimestamp */

/* START_OF_SYMBOL_DEFINITION _decode_ContentTimestamp */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentTimestamp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentTimestamp} The decoded data structure.
 */
export
function _decode_ContentTimestamp (el: _Element) {
    if (!_cached_decoder_for_ContentTimestamp) { _cached_decoder_for_ContentTimestamp = _decode_TimeStampToken; }
    return _cached_decoder_for_ContentTimestamp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentTimestamp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentTimestamp */
let _cached_encoder_for_ContentTimestamp: $.ASN1Encoder<ContentTimestamp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentTimestamp */

/* START_OF_SYMBOL_DEFINITION _encode_ContentTimestamp */
/**
 * @summary Encodes a(n) ContentTimestamp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentTimestamp, encoded as an ASN.1 Element.
 */
export
function _encode_ContentTimestamp (value: ContentTimestamp, elGetter: $.ASN1Encoder<ContentTimestamp>) {
    if (!_cached_encoder_for_ContentTimestamp) { _cached_encoder_for_ContentTimestamp = _encode_TimeStampToken; }
    return _cached_encoder_for_ContentTimestamp(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentTimestamp */

/* eslint-enable */
