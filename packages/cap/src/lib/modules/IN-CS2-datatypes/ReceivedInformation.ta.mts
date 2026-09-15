/* eslint-disable */
import {
    IA5String,
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



/**
 * @summary ReceivedInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReceivedInformation{PARAMETERS-BOUND:bound}  ::= 
 *   SEQUENCE
 *     SIZE (bound.&minReceivedInformationLength..
 *             bound.&maxReceivedInformationLength) OF IA5String
 * ```
 */
export
type ReceivedInformation = IA5String[]; // SequenceOfType

let _cached_decoder_for_ReceivedInformation: $.ASN1Decoder<ReceivedInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReceivedInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReceivedInformation (el: _Element): ReceivedInformation {
    if (!_cached_decoder_for_ReceivedInformation) { _cached_decoder_for_ReceivedInformation = $._decodeSequenceOf<IA5String>(() => $._decodeIA5String); }
    return _cached_decoder_for_ReceivedInformation(el);
}

let _cached_encoder_for_ReceivedInformation: $.ASN1Encoder<ReceivedInformation> | null = null;

/**
 * @summary Encodes a(n) ReceivedInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceivedInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ReceivedInformation (value: ReceivedInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReceivedInformation) { _cached_encoder_for_ReceivedInformation = $._encodeSequenceOf<IA5String>(() => $._encodeIA5String, $.BER); }
    return _cached_encoder_for_ReceivedInformation(value, elGetter);
}


/* eslint-enable */
