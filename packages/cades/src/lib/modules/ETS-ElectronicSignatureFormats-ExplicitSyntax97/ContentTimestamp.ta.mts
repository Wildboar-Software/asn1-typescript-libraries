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
import { TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp";
/**
 * @summary ContentTimestamp
 * @description
 *
 * Value of the signed `content-time-stamp` attribute: a
 * `TimeStampToken` of the signed data content before it is
 * signed. `messageImprint` shall be a hash of the CMS message
 * digest (clause 5.6.1). Shows the signed information was
 * formed before the TST date. ETSI TS 101 733 V2.2.1
 * (2013-04) §5.11.4, §7.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTimestamp ::=  TimeStampToken
 * ```
 */
export
type ContentTimestamp = TimeStampToken; // DefinedType

let _cached_decoder_for_ContentTimestamp: $.ASN1Decoder<ContentTimestamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContentTimestamp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentTimestamp} The decoded data structure.
 */
export
function _decode_ContentTimestamp (el: _Element): ContentTimestamp {
    if (!_cached_decoder_for_ContentTimestamp) { _cached_decoder_for_ContentTimestamp = _decode_TimeStampToken; }
    return _cached_decoder_for_ContentTimestamp(el);
}

let _cached_encoder_for_ContentTimestamp: $.ASN1Encoder<ContentTimestamp> | null = null;

/**
 * @summary Encodes a(n) ContentTimestamp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentTimestamp, encoded as an ASN.1 Element.
 */
export
function _encode_ContentTimestamp (value: ContentTimestamp, elGetter: $.ASN1Encoder<ContentTimestamp>): _Element {
    if (!_cached_encoder_for_ContentTimestamp) { _cached_encoder_for_ContentTimestamp = _encode_TimeStampToken; }
    return _cached_encoder_for_ContentTimestamp(value, elGetter);
}


/* eslint-enable */
