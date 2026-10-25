/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary UserInfo_1
 * @description
 * 
 * UserInfo-1 `{Z39-50-userInfoFormat 3}` is the same structure as otherInfo,
 * registered so userInformationField (an EXTERNAL) can carry it (USR.3,
 * ASN1.12). Use it on InitializeRequest and InitializeResponse when otherInfo
 * cannot be used, including whenever version 3 is not in force.
 * 
 * USR.2: otherInfo was added in Z39.50-1995 and is valid only when version 3 is
 * in force. During initialization the version may still be unsettled, so
 * otherInfo on Init is not recommended. Put externally defined Init information
 * in userInformationField and identify it with this OID. Nothing is lost:
 * UserInfo-1 matches otherInfo.
 * 
 * The structure may hold any number of items. Any item may include a category,
 * and each is characterInfo, binaryInfo, externallyDefinedInfo, or an OID.
 * Category is optional; diagnostics and negotiation records need not include
 * one. A diagnostic is externallyDefinedInfo (DIAG.3): a General Diagnostic
 * Container inside this value, inside userInformationField. A negotiation
 * record is externallyDefinedInfo or an OID, and the OID identifies a
 * negotiation-record definition. Init examples are General Diagnostic Set
 * conditions 1010 through 1013.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserInfo-1  ::=  OtherInformation
 * ```
 */
export
type UserInfo_1 = OtherInformation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UserInfo_1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UserInfo_1: $.ASN1Decoder<UserInfo_1> = _decode_OtherInformation;

/**
 * @summary Encodes a(n) UserInfo_1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserInfo_1, encoded as an ASN.1 Element.
 */
export const _encode_UserInfo_1: $.ASN1Encoder<UserInfo_1> = _encode_OtherInformation;


/* eslint-enable */
