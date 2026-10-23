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
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";


/**
 * @summary AssistingSSPIPRoutingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistingSSPIPRoutingAddress{PARAMETERS-BOUND:bound}  ::= 
 *   Digits{bound}
 * ```
 */
export
type AssistingSSPIPRoutingAddress = Digits; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AssistingSSPIPRoutingAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AssistingSSPIPRoutingAddress: $.ASN1Decoder<AssistingSSPIPRoutingAddress> = _decode_Digits;

/**
 * @summary Encodes a(n) AssistingSSPIPRoutingAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistingSSPIPRoutingAddress, encoded as an ASN.1 Element.
 */
export const _encode_AssistingSSPIPRoutingAddress: (value: AssistingSSPIPRoutingAddress, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Digits;


/* eslint-enable */
