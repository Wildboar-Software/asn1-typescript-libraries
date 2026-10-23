/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Time, _decode_Time, _encode_Time } from "@wildboar/pki-stub";


/**
 * @summary ExpirationDate
 * @description
 * 
 * Value of the v2 `id-rsp-expDate` extension. Typed as the PKIX `Time` imported
 * by this module. SGP.22 v3.1 Annex H does not define this type.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExpirationDate  ::=  Time
 * ```
 */
export
type ExpirationDate = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ExpirationDate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ExpirationDate: $.ASN1Decoder<ExpirationDate> = _decode_Time;

/**
 * @summary Encodes a(n) ExpirationDate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpirationDate, encoded as an ASN.1 Element.
 */
export const _encode_ExpirationDate: $.ASN1Encoder<ExpirationDate> = _encode_Time;


/* eslint-enable */
