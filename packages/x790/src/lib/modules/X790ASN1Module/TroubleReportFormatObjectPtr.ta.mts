/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";



/**
 * @summary TroubleReportFormatObjectPtr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleReportFormatObjectPtr  ::=  ObjectInstance
 * ```
 */
export
type TroubleReportFormatObjectPtr = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportFormatObjectPtr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TroubleReportFormatObjectPtr: $.ASN1Decoder<TroubleReportFormatObjectPtr> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) TroubleReportFormatObjectPtr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportFormatObjectPtr, encoded as an ASN.1 Element.
 */
export const _encode_TroubleReportFormatObjectPtr: (value: TroubleReportFormatObjectPtr, elGetter: $.ASN1Encoder<any>) => _Element = _encode_ObjectInstance;


/* eslint-enable */
