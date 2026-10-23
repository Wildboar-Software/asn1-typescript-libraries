/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary MgtName
 * @description
 *
 * `Name` wrapper (currently `rdnSequence`). CMIP syntax for names (calling
 * AE-title, customer/user names, DMD name).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtName  ::=  Name
 * ```
 */
export type MgtName = Name; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MgtName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtName} The decoded data structure.
 */
export const _decode_MgtName: $.ASN1Decoder<MgtName> = _decode_Name;

/**
 * @summary Encodes a(n) MgtName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtName, encoded as an ASN.1 Element.
 */
export const _encode_MgtName: $.ASN1Encoder<MgtName> = _encode_Name;


/* eslint-enable */
