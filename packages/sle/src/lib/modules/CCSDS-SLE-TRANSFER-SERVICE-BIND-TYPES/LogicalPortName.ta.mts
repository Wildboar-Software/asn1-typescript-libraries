/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IdentifierString, _decode_IdentifierString, _encode_IdentifierString } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/IdentifierString.ta.mjs";
// export { IdentifierString, _decode_IdentifierString, _encode_IdentifierString } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/IdentifierString.ta.mjs";


/**
 * @summary LogicalPortName
 * @description
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
    return _cached_decoder_for_LogicalPortName(el);
}

let _cached_encoder_for_LogicalPortName: $.ASN1Encoder<LogicalPortName> | null = null;

/**
 * @summary Encodes a(n) LogicalPortName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalPortName, encoded as an ASN.1 Element.
 */
export
function _encode_LogicalPortName (value: LogicalPortName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogicalPortName) { _cached_encoder_for_LogicalPortName = _encode_IdentifierString; }
    return _cached_encoder_for_LogicalPortName(value, elGetter);
}


/* eslint-enable */
