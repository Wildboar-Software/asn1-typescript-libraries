/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary PINClientProfile
 * @description
 * 
 * Contains the PIN client profile information of the target PIN client. The PIN
 * client profile is encoded as a "PIN-Client-Profile" XML structure according
 * to TS 24.583 [142] clause 6.2.4. The XMLType.namespace for this parameter
 * shall be set to the namespace of the root element of the XML document, e.g.
 * "urn:3GPP:ns:pinapp:2023".
 *
 * 3GPP TS 33.128, clause 7.18.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINClientProfile  ::= XMLType
 * ```
 */
export
type PINClientProfile = XMLType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PINClientProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PINClientProfile: $.ASN1Decoder<PINClientProfile> = _decode_XMLType;

/**
 * @summary Encodes a(n) PINClientProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINClientProfile, encoded as an ASN.1 Element.
 */
export const _encode_PINClientProfile: (value: PINClientProfile, elGetter: $.ASN1Encoder<any>) => _Element = _encode_XMLType;


/* eslint-enable */
