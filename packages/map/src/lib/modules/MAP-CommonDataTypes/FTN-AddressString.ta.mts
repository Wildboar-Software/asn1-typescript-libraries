/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AddressString, _encode_AddressString, type AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";



/**
 * @summary FTN_AddressString
 * @description
 *
 * Forwarded-to number. `AddressString` of size 1..`maxFTN-AddressLength` (15).
 * If NAI is international, the first digits are the country code (CC) and
 * network destination code (NDC) as for E.164.
 *
 * A subaddress may be appended (see `ISDN-SubaddressString`). For subscribers
 * with originating CAMEL Phase 2 or higher, this address need not be in E.164
 * international format.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8, 7.6.2.22 and 7.6.2.22A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FTN-AddressString  ::=  
 *     AddressString (SIZE (1..maxFTN-AddressLength))
 * ```
 */
export
type FTN_AddressString = AddressString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) FTN_AddressString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FTN_AddressString: $.ASN1Decoder<FTN_AddressString> = _decode_AddressString;

/**
 * @summary Encodes a(n) FTN_AddressString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FTN_AddressString, encoded as an ASN.1 Element.
 */
export const _encode_FTN_AddressString: $.ASN1Encoder<FTN_AddressString> = _encode_AddressString;


/* eslint-enable */
