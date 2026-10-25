/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp";
/**
 * @summary ESCTimeStampToken
 * @description
 *
 * Value of the unsigned `CAdES-C-time-stamp` attribute
 * (CAdES-X Type 1). `messageImprint` is a hash of the
 * concatenated (no type/length) `SignatureValue`,
 * `signature-time-stamp` (or a time-mark),
 * `complete-certificate-references`, and
 * `complete-revocation-references`. Protects against later CA
 * compromise. ETSI TS 101 733 V2.2.1 (2013-04) §6.3.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ESCTimeStampToken  ::=  TimeStampToken
 * ```
 */
export
type ESCTimeStampToken = TimeStampToken; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ESCTimeStampToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ESCTimeStampToken} The decoded data structure.
 */
export const _decode_ESCTimeStampToken: $.ASN1Decoder<ESCTimeStampToken> = _decode_TimeStampToken;

/**
 * @summary Encodes a(n) ESCTimeStampToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ESCTimeStampToken, encoded as an ASN.1 Element.
 */
export const _encode_ESCTimeStampToken: $.ASN1Encoder<ESCTimeStampToken> = _encode_TimeStampToken;


/* eslint-enable */
