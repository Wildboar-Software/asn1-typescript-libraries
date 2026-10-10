/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Ext_QoS_Subscribed
 * @description
 *
 * Enhanced QoS subscribed for a service, defined in 3GPP TS 23.060, extending
 * QoS-Subscribed. Octet 1 is Allocation/Retention Priority (3GPP TS 23.107 / TS
 * 29.060); octets 2-9 are 3GPP TS 24.008 Quality of Service octets 6-13. Sent
 * to an SGSN that indicated GPRS enhancements support (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.74, 8.1.7.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-QoS-Subscribed  ::=  OCTET STRING (SIZE (1..9))
 * ```
 */
export
type Ext_QoS_Subscribed = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_QoS_Subscribed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Ext_QoS_Subscribed = (el: _Element): Ext_QoS_Subscribed => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 9) {
        throw new ASN1SizeError("Ext_QoS_Subscribed violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Ext_QoS_Subscribed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_QoS_Subscribed, encoded as an ASN.1 Element.
 */
export const _encode_Ext_QoS_Subscribed = $._encodeOctetString;


/* eslint-enable */
