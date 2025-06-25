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
 * @summary TimestampedCertsCRLs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimestampedCertsCRLs  ::=  TimeStampToken
 * ```
 */
export
type TimestampedCertsCRLs = TimeStampToken; // DefinedType

let _cached_decoder_for_TimestampedCertsCRLs: $.ASN1Decoder<TimestampedCertsCRLs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimestampedCertsCRLs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimestampedCertsCRLs} The decoded data structure.
 */
export
function _decode_TimestampedCertsCRLs (el: _Element): TimestampedCertsCRLs {
    if (!_cached_decoder_for_TimestampedCertsCRLs) { _cached_decoder_for_TimestampedCertsCRLs = _decode_TimeStampToken; }
    return _cached_decoder_for_TimestampedCertsCRLs(el);
}

let _cached_encoder_for_TimestampedCertsCRLs: $.ASN1Encoder<TimestampedCertsCRLs> | null = null;

/**
 * @summary Encodes a(n) TimestampedCertsCRLs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimestampedCertsCRLs, encoded as an ASN.1 Element.
 */
export
function _encode_TimestampedCertsCRLs (value: TimestampedCertsCRLs, elGetter: $.ASN1Encoder<TimestampedCertsCRLs>): _Element {
    if (!_cached_encoder_for_TimestampedCertsCRLs) { _cached_encoder_for_TimestampedCertsCRLs = _encode_TimeStampToken; }
    return _cached_encoder_for_TimestampedCertsCRLs(value, elGetter);
}


/* eslint-enable */
