/* eslint-disable */
import {
    ASN1Element as _Element,
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FEIdentifierList
 * @description
 *
 * One or more IM CN subsystem functional entity addresses, and/or an AS
 * address with the application identifier of the application that AS
 * executed. An address is included when that entity creates charging
 * information for its CDR. An AS that hosts several applications repeats
 * its address, once per application (clause 5.1.2.8, citing TS 32.240).
 * Values received in SIP requests shall be ignored. The SIP encoding is
 * the FE-Identifier header defined in TS 24.229.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.2.8.
 *
 * This parameter holds the FE Identifier List of the P-Charging-Vector
 * header, as received in the FE-Identifier-List AVP as defined in TS 32.299
 * [50].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.16aA.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FEIdentifierList  ::=  SEQUENCE  OF
 *    GraphicString
 * ```
 */
export
type FEIdentifierList = GraphicString[]; // SequenceOfType

let _cached_decoder_for_FEIdentifierList: $.ASN1Decoder<FEIdentifierList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FEIdentifierList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FEIdentifierList (el: _Element): FEIdentifierList {
    if (!_cached_decoder_for_FEIdentifierList) { _cached_decoder_for_FEIdentifierList = $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString); }
    return _cached_decoder_for_FEIdentifierList(el);
}

let _cached_encoder_for_FEIdentifierList: $.ASN1Encoder<FEIdentifierList> | null = null;

/**
 * @summary Encodes a(n) FEIdentifierList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FEIdentifierList, encoded as an ASN.1 Element.
 */
export
function _encode_FEIdentifierList (value: FEIdentifierList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FEIdentifierList) { _cached_encoder_for_FEIdentifierList = $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_FEIdentifierList(value, elGetter);
}


/* eslint-enable */
