/* eslint-disable */
import {
    GraphicString,
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
 * @summary FileName
 * @description
 *
 * Virtual filestore name: SEQUENCE OF GraphicString. Component semantics are a
 * local matter; ISO 9506 defines no interpretation. Minimum support: a single
 * component of 1..8 uppercase letters or digits, starting with a letter.
 * Length/character limits belong in the System Configuration and Initialisation
 * Statement (ISO 9506-2:2003 §7.5.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileName  ::=  SEQUENCE OF GraphicString
 * ```
 */
export
type FileName = GraphicString[]; // SequenceOfType

let _cached_decoder_for_FileName: $.ASN1Decoder<FileName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileName (el: _Element): FileName {
    if (!_cached_decoder_for_FileName) { _cached_decoder_for_FileName = $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString); }
    return _cached_decoder_for_FileName(el);
}

let _cached_encoder_for_FileName: $.ASN1Encoder<FileName> | null = null;

/**
 * @summary Encodes a(n) FileName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileName, encoded as an ASN.1 Element.
 */
export
function _encode_FileName (value: FileName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileName) { _cached_encoder_for_FileName = $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_FileName(value, elGetter);
}


/* eslint-enable */
