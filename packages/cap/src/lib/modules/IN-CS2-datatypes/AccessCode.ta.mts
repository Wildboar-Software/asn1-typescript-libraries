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
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";


/**
 * @summary AccessCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessCode{PARAMETERS-BOUND:bound}  ::=  LocationNumber{bound}
 * ```
 */
export
type AccessCode = LocationNumber; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AccessCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AccessCode: $.ASN1Decoder<AccessCode> = _decode_LocationNumber;

/**
 * @summary Encodes a(n) AccessCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessCode, encoded as an ASN.1 Element.
 */
export const _encode_AccessCode: $.ASN1Encoder<AccessCode> = _encode_LocationNumber;


/* eslint-enable */
