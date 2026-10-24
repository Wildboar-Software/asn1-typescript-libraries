/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";


/**
 * @summary AdditionalCallingPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCallingPartyNumber{PARAMETERS-BOUND:bound}  ::=  Digits{bound}
 * ```
 */
export
type AdditionalCallingPartyNumber = Digits; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalCallingPartyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalCallingPartyNumber: $.ASN1Decoder<AdditionalCallingPartyNumber> = _decode_Digits;

/**
 * @summary Encodes a(n) AdditionalCallingPartyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalCallingPartyNumber, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalCallingPartyNumber: $.ASN1Encoder<AdditionalCallingPartyNumber> = _encode_Digits;


/* eslint-enable */
