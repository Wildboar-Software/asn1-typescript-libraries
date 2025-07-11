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
 * @summary ArchiveTimeStampToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArchiveTimeStampToken  ::=  TimeStampToken
 * ```
 */
export
type ArchiveTimeStampToken = TimeStampToken; // DefinedType

let _cached_decoder_for_ArchiveTimeStampToken: $.ASN1Decoder<ArchiveTimeStampToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ArchiveTimeStampToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArchiveTimeStampToken} The decoded data structure.
 */
export
function _decode_ArchiveTimeStampToken (el: _Element): ArchiveTimeStampToken {
    if (!_cached_decoder_for_ArchiveTimeStampToken) { _cached_decoder_for_ArchiveTimeStampToken = _decode_TimeStampToken; }
    return _cached_decoder_for_ArchiveTimeStampToken(el);
}

let _cached_encoder_for_ArchiveTimeStampToken: $.ASN1Encoder<ArchiveTimeStampToken> | null = null;

/**
 * @summary Encodes a(n) ArchiveTimeStampToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArchiveTimeStampToken, encoded as an ASN.1 Element.
 */
export
function _encode_ArchiveTimeStampToken (value: ArchiveTimeStampToken, elGetter: $.ASN1Encoder<ArchiveTimeStampToken>): _Element {
    if (!_cached_encoder_for_ArchiveTimeStampToken) { _cached_encoder_for_ArchiveTimeStampToken = _encode_TimeStampToken; }
    return _cached_encoder_for_ArchiveTimeStampToken(value, elGetter);
}


/* eslint-enable */
