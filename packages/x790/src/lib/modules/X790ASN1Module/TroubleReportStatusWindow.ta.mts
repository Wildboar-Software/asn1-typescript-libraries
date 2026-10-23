/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from "../X790ASN1Module/TimeInterval.ta.mjs";



/**
 * @summary TroubleReportStatusWindow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleReportStatusWindow  ::=  TimeInterval
 * ```
 */
export
type TroubleReportStatusWindow = TimeInterval; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportStatusWindow
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TroubleReportStatusWindow: $.ASN1Decoder<TroubleReportStatusWindow> = _decode_TimeInterval;

/**
 * @summary Encodes a(n) TroubleReportStatusWindow into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportStatusWindow, encoded as an ASN.1 Element.
 */
export const _encode_TroubleReportStatusWindow: (value: TroubleReportStatusWindow, elGetter: $.ASN1Encoder<any>) => _Element = _encode_TimeInterval;


/* eslint-enable */
