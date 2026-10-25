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

/**
 * @summary Decodes an ASN.1 element into a(n) ContentTimestamp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentTimestamp} The decoded data structure.
 */
export const _decode_ContentTimestamp: $.ASN1Decoder<ContentTimestamp> = _decode_TimeStampToken;

/**
 * @summary Encodes a(n) ContentTimestamp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentTimestamp, encoded as an ASN.1 Element.
 */
export const _encode_ContentTimestamp: $.ASN1Encoder<ContentTimestamp> = _encode_TimeStampToken;


/* eslint-enable */
