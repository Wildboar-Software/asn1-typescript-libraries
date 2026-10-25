/* eslint-disable */
import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type NumericName,
    _decode_NumericName,
    _encode_NumericName,
} from "../Q821-ASN1Module/NumericName.ta.mjs";



/**
 * @summary LogRecordId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogRecordId  ::=  NumericName
 * ```
 */
export
type LogRecordId = NumericName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LogRecordId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LogRecordId: $.ASN1Decoder<LogRecordId> = _decode_NumericName;

/**
 * @summary Encodes a(n) LogRecordId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogRecordId, encoded as an ASN.1 Element.
 */
export const _encode_LogRecordId: $.ASN1Encoder<LogRecordId> = _encode_NumericName;


/* eslint-enable */
