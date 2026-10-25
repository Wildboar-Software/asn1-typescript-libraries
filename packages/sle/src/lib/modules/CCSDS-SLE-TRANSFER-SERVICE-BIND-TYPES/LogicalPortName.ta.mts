/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IdentifierString, _decode_IdentifierString, _encode_IdentifierString } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/IdentifierString.ta.mjs";


/**
 * @summary LogicalPortName
 * @description
 * 
 * Logical name that SLE Complex Management and SLE Utilization Management
 * agree, and translate into technology-specific addressing. The length is 1 to
 * 128 characters, with no space.
 * 
 * CCSDS 911.1-B-5, section 2.6.4.5 and annex A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalPortName          ::=    IdentifierString (SIZE (1 .. 128))
 * ```
 */
export
type LogicalPortName = IdentifierString; // DefinedType

let _cached_decoder_for_LogicalPortName: $.ASN1Decoder<LogicalPortName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogicalPortName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogicalPortName (el: _Element): LogicalPortName {
    if (!_cached_decoder_for_LogicalPortName) { _cached_decoder_for_LogicalPortName = _decode_IdentifierString; }
    const _decoded = _cached_decoder_for_LogicalPortName(el);
    if (_decoded.length < 1 || _decoded.length > 128) {
        throw new ASN1SizeError("LogicalPortName violates SIZE (1..128)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) LogicalPortName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalPortName, encoded as an ASN.1 Element.
 */
export const _encode_LogicalPortName: $.ASN1Encoder<LogicalPortName> = _encode_IdentifierString;


/* eslint-enable */
