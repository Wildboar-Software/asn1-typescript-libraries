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
import { type TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp";
/**
 * @summary SignatureTimeStampToken
 * @description
 *
 * Value of the unsigned `signature-time-stamp` attribute
 * (CAdES-T): a `TimeStampToken` whose `messageImprint` is a
 * hash of `SignerInfo.signature`. Several instances from
 * different TSAs may occur. ETSI TS 101 733 V2.2.1 (2013-04)
 * §6.1.1, §7.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureTimeStampToken  ::=  TimeStampToken
 * ```
 */
export
type SignatureTimeStampToken = TimeStampToken; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SignatureTimeStampToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureTimeStampToken} The decoded data structure.
 */
export const _decode_SignatureTimeStampToken: $.ASN1Decoder<SignatureTimeStampToken> = _decode_TimeStampToken;

/**
 * @summary Encodes a(n) SignatureTimeStampToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureTimeStampToken, encoded as an ASN.1 Element.
 */
export const _encode_SignatureTimeStampToken: $.ASN1Encoder<SignatureTimeStampToken> = _encode_TimeStampToken;


/* eslint-enable */
