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
import { BioAPI_BIR, _decode_BioAPI_BIR, _encode_BioAPI_BIR } from "../BIP/BioAPI-BIR.ta.mjs";



/**
 * @summary SampleData
 * @description
 *
 * Captured biometric sample as a BioAPI BIR. BIR includes BSP/device
 * information so the verifier can check sensor security and quality.
 * [ISO/IEC 19784-1]; ITU-T Rec. X.1084 (05/2008) §11.3–§11.4, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SampleData  ::=  BioAPI-BIR
 * ```
 */
export
type SampleData = BioAPI_BIR; // DefinedType

let _cached_decoder_for_SampleData: $.ASN1Decoder<SampleData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SampleData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SampleData (el: _Element): SampleData {
    if (!_cached_decoder_for_SampleData) { _cached_decoder_for_SampleData = _decode_BioAPI_BIR; }
    return _cached_decoder_for_SampleData(el);
}

let _cached_encoder_for_SampleData: $.ASN1Encoder<SampleData> | null = null;

/**
 * @summary Encodes a(n) SampleData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SampleData, encoded as an ASN.1 Element.
 */
export
function _encode_SampleData (value: SampleData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SampleData) { _cached_encoder_for_SampleData = _encode_BioAPI_BIR; }
    return _cached_encoder_for_SampleData(value, elGetter);
}


/* eslint-enable */
