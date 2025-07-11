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
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../Attribute-ASN1Module/ManagementExtension.ta.mjs";
/**
 * @summary AdditionalInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalInformation  ::=  SET OF ManagementExtension
 * ```
 */
export
type AdditionalInformation = ManagementExtension[]; // SetOfType

let _cached_decoder_for_AdditionalInformation: $.ASN1Decoder<AdditionalInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalInformation} The decoded data structure.
 */
export
function _decode_AdditionalInformation (el: _Element): AdditionalInformation {
    if (!_cached_decoder_for_AdditionalInformation) { _cached_decoder_for_AdditionalInformation = $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension); }
    return _cached_decoder_for_AdditionalInformation(el);
}

let _cached_encoder_for_AdditionalInformation: $.ASN1Encoder<AdditionalInformation> | null = null;

/**
 * @summary Encodes a(n) AdditionalInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalInformation (value: AdditionalInformation, elGetter: $.ASN1Encoder<AdditionalInformation>): _Element {
    if (!_cached_encoder_for_AdditionalInformation) { _cached_encoder_for_AdditionalInformation = $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER); }
    return _cached_encoder_for_AdditionalInformation(value, elGetter);
}


/* eslint-enable */
