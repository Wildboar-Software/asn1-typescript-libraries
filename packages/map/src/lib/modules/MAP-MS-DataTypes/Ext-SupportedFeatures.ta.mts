/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Ext_SupportedFeatures
 * @description
 *
 * Additional supported-feature indications beyond SupportedFeatures, also
 * applied to the MME/IWF. Additional supported features are encoded in this bit
 * string (3GPP TS 29.002 V19.1.0 clauses 8.1.7.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-SupportedFeatures  ::=  BIT STRING {
 *     unlicensedSpectrumAsSecondaryRAT (0) } (SIZE (1..40))
 * ```
 */
export
type Ext_SupportedFeatures = BIT_STRING;

/**
 * @summary Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT
 * @constant
 */
export
const Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary unlicensedSpectrumAsSecondaryRAT
 * @constant
 */
export
const unlicensedSpectrumAsSecondaryRAT: number = Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_SupportedFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Ext_SupportedFeatures = (el: _Element): Ext_SupportedFeatures => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 40) {
        throw new ASN1SizeError("Ext_SupportedFeatures violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Ext_SupportedFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_SupportedFeatures, encoded as an ASN.1 Element.
 */
export const _encode_Ext_SupportedFeatures = $._encodeBitString;


/* eslint-enable */
