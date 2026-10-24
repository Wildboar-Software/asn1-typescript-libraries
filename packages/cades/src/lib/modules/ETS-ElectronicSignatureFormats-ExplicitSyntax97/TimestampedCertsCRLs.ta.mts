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
import { TimeStampToken, _decode_TimeStampToken, _encode_TimeStampToken } from "@wildboar/tsp";

/**
 * @summary TimestampedCertsCRLs
 * @description
 *
 * Value of the unsigned `time-stamped-certs-crls-references`
 * attribute (CAdES-X Type 2). `messageImprint` is a hash of
 * the concatenated `complete-certificate-references` and
 * `complete-revocation-references` (attrType and attrValues,
 * without the outer SEQUENCE type/length). Protects against
 * later CA compromise. ETSI TS 101 733 V2.2.1 (2013-04)
 * §6.3.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimestampedCertsCRLs  ::=  TimeStampToken
 * ```
 */
export
type TimestampedCertsCRLs = TimeStampToken; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TimestampedCertsCRLs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimestampedCertsCRLs} The decoded data structure.
 */
export const _decode_TimestampedCertsCRLs: $.ASN1Decoder<TimestampedCertsCRLs> = _decode_TimeStampToken;

/**
 * @summary Encodes a(n) TimestampedCertsCRLs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimestampedCertsCRLs, encoded as an ASN.1 Element.
 */
export const _encode_TimestampedCertsCRLs: $.ASN1Encoder<TimestampedCertsCRLs> = _encode_TimeStampToken;


/* eslint-enable */
