/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Ext2_QoS_Subscribed
 * @description
 *
 * Further extension to Extension QoS-Subscribed. Shall be used when the maximum
 * bit rate exceeds 8640 kbps. Octets 1-3 are 3GPP TS 24.008 Quality of Service
 * octets 14-16 (3GPP TS 29.002 V19.1.0 clauses 7.6.3.75A and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext2-QoS-Subscribed  ::=  OCTET STRING (SIZE (1..3))
 * ```
 */
export
type Ext2_QoS_Subscribed = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Ext2_QoS_Subscribed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Ext2_QoS_Subscribed = (el: _Element): Ext2_QoS_Subscribed => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 3) {
        throw new ASN1SizeError("Ext2_QoS_Subscribed violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Ext2_QoS_Subscribed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext2_QoS_Subscribed, encoded as an ASN.1 Element.
 */
export const _encode_Ext2_QoS_Subscribed = $._encodeOctetString;


/* eslint-enable */
