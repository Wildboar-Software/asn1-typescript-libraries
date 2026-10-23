/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary Input_Response
 * @description
 *
 * Input String from the operator. One input buffer; end-of-line
 * is not included. Multi-line input needs multiple Input
 * requests. ISO 9506-1:2003 §17.2.1.2.1. ISO 9506-2:2003
 * §17.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Input-Response  ::=  MMSString
 * ```
 */
export
type Input_Response = MMSString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Input_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Input_Response: $.ASN1Decoder<Input_Response> = _decode_MMSString;

/**
 * @summary Encodes a(n) Input_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Input_Response, encoded as an ASN.1 Element.
 */
export const _encode_Input_Response: $.ASN1Encoder<Input_Response> = _encode_MMSString;


/* eslint-enable */
