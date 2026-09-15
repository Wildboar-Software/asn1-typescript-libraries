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
import { ExtensionValue, _decode_ExtensionValue, _encode_ExtensionValue } from "../TSM/ExtensionValue.ta.mjs";



/**
 * @summary ExtensionValues
 * @description
 *
 * SEQUENCE OF `ExtensionValue` on ClientHello / ServerHello. ITU-T
 * Rec. X.1084 (05/2008) §10.3.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionValues     ::=     SEQUENCE OF ExtensionValue
 * ```
 */
export
type ExtensionValues = ExtensionValue[]; // SequenceOfType

let _cached_decoder_for_ExtensionValues: $.ASN1Decoder<ExtensionValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionValues (el: _Element): ExtensionValues {
    if (!_cached_decoder_for_ExtensionValues) { _cached_decoder_for_ExtensionValues = $._decodeSequenceOf<ExtensionValue>(() => _decode_ExtensionValue); }
    return _cached_decoder_for_ExtensionValues(el);
}

let _cached_encoder_for_ExtensionValues: $.ASN1Encoder<ExtensionValues> | null = null;

/**
 * @summary Encodes a(n) ExtensionValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionValues, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionValues (value: ExtensionValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionValues) { _cached_encoder_for_ExtensionValues = $._encodeSequenceOf<ExtensionValue>(() => _encode_ExtensionValue, $.BER); }
    return _cached_encoder_for_ExtensionValues(value, elGetter);
}


/* eslint-enable */
