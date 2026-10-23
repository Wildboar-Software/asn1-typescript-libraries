/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSHandoverRestrictionList
 * @description
 * 
 * This IE is derived from the Handover Restriction List IE defined in TS 36.413
 * [38] clause 9.2.1.22. This information describes roaming or access
 * restrictions for subsequent mobility of a UE.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSHandoverRestrictionList  ::=  ExternalASNType
 * ```
 */
export
type EPSHandoverRestrictionList = ExternalASNType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EPSHandoverRestrictionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSHandoverRestrictionList: $.ASN1Decoder<EPSHandoverRestrictionList> = _decode_ExternalASNType;

/**
 * @summary Encodes a(n) EPSHandoverRestrictionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSHandoverRestrictionList, encoded as an ASN.1 Element.
 */
export const _encode_EPSHandoverRestrictionList: (value: EPSHandoverRestrictionList, elGetter: $.ASN1Encoder<any>) => _Element = _encode_ExternalASNType;


/* eslint-enable */
