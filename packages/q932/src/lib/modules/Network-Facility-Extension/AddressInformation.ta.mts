/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";


/**
 * @summary AddressInformation
 * @description
 * 
 * Address of the source or destination entity in a network facility extension.
 * It is a `PartyNumber`.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex D, Figure D.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressInformation  ::=  PartyNumber
 * ```
 */
export
type AddressInformation = PartyNumber; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AddressInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AddressInformation: $.ASN1Decoder<AddressInformation> = _decode_PartyNumber;

/**
 * @summary Encodes a(n) AddressInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressInformation, encoded as an ASN.1 Element.
 */
export const _encode_AddressInformation: $.ASN1Encoder<AddressInformation> = _encode_PartyNumber;


/* eslint-enable */
