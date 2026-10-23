/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";



/**
 * @summary ExemptedAddress
 * @description
 * 
 * One member of an address list that the originator wants excluded when the
 * list is expanded. An O/R descriptor, as in ITU-T X.420 clause 7.1.3.
 * Exclusion is applied by the originating or receiving management domain
 * according to address-list policy. There is no guarantee the addressee will
 * not still receive the message by redirection or distribution-list expansion.
 * If the heading extension is absent, every member of an address list is a
 * valid recipient. STANAG 4406 (Ed. 2), Annex A, A1.1 and B.105.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExemptedAddress  ::=  ORDescriptor
 * ```
 */
export
type ExemptedAddress = ORDescriptor; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ExemptedAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ExemptedAddress: $.ASN1Decoder<ExemptedAddress> = _decode_ORDescriptor;

/**
 * @summary Encodes a(n) ExemptedAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExemptedAddress, encoded as an ASN.1 Element.
 */
export const _encode_ExemptedAddress: $.ASN1Encoder<ExemptedAddress> = _encode_ORDescriptor;


/* eslint-enable */
