/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Ext_AccessRestrictionData
 * @description
 *
 * Additional access restrictions beyond AccessRestrictionData: NR as secondary
 * RAT not allowed, and unlicensed spectrum as secondary RAT not allowed (3GPP
 * TS 29.002 V19.1.0 clauses 7.6.3.97 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-AccessRestrictionData  ::=  BIT STRING {
 *     nrAsSecondaryRATNotAllowed (0),
 *     unlicensedSpectrumAsSecondaryRATNotAllowed (1) } (SIZE (1..32))
 * ```
 */
export
type Ext_AccessRestrictionData = BIT_STRING;

/**
 * @summary Ext_AccessRestrictionData_nrAsSecondaryRATNotAllowed
 * @constant
 */
export
const Ext_AccessRestrictionData_nrAsSecondaryRATNotAllowed: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary nrAsSecondaryRATNotAllowed
 * @constant
 */
export
const nrAsSecondaryRATNotAllowed: number = Ext_AccessRestrictionData_nrAsSecondaryRATNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary Ext_AccessRestrictionData_unlicensedSpectrumAsSecondaryRATNotAllowed
 * @constant
 */
export
const Ext_AccessRestrictionData_unlicensedSpectrumAsSecondaryRATNotAllowed: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary unlicensedSpectrumAsSecondaryRATNotAllowed
 * @constant
 */
export
const unlicensedSpectrumAsSecondaryRATNotAllowed: number = Ext_AccessRestrictionData_unlicensedSpectrumAsSecondaryRATNotAllowed; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_AccessRestrictionData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Ext_AccessRestrictionData = (el: _Element): Ext_AccessRestrictionData => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 32) {
        throw new ASN1SizeError("Ext_AccessRestrictionData violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Ext_AccessRestrictionData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_AccessRestrictionData, encoded as an ASN.1 Element.
 */
export const _encode_Ext_AccessRestrictionData = $._encodeBitString;


/* eslint-enable */
