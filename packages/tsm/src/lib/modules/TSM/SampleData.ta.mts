/* eslint-disable */
import {
    type ASN1Element as _Element,
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

/**
 * @summary Decodes an ASN.1 element into a(n) SampleData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SampleData: $.ASN1Decoder<SampleData> = _decode_BioAPI_BIR;

/**
 * @summary Encodes a(n) SampleData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SampleData, encoded as an ASN.1 Element.
 */
export const _encode_SampleData: $.ASN1Encoder<SampleData> = _encode_BioAPI_BIR;


/* eslint-enable */
