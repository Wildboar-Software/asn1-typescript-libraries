/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary KMSResponseBodyKRR
 * @description
 * 
 * Provides the content of the KMS Redirect Response type, encoded as a
 * "KRResponseType" structure according to TS 33.180 [154] clause D.4.4. The
 * XMLType.namespace for this parameter shall be set to the namespace of the
 * root element of the XML document, e.g., urn:3gpp:ns:mcsecKMSKRR:1.0.
 *
 * 3GPP TS 33.128, clause 7.20.2.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSResponseBodyKRR  ::=  XMLType
 * ```
 */
export
type KMSResponseBodyKRR = XMLType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) KMSResponseBodyKRR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_KMSResponseBodyKRR: $.ASN1Decoder<KMSResponseBodyKRR> = _decode_XMLType;

/**
 * @summary Encodes a(n) KMSResponseBodyKRR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KMSResponseBodyKRR, encoded as an ASN.1 Element.
 */
export const _encode_KMSResponseBodyKRR: (value: KMSResponseBodyKRR, elGetter: $.ASN1Encoder<any>) => _Element = _encode_XMLType;


/* eslint-enable */
