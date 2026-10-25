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
import { type BioAPI_BIR_BIOMETRIC_TYPE, _decode_BioAPI_BIR_BIOMETRIC_TYPE, _encode_BioAPI_BIR_BIOMETRIC_TYPE } from "../BIP/BioAPI-BIR-BIOMETRIC-TYPE.ta.mjs";



/**
 * @summary BiometricType
 * @description
 *
 * Alias of BioAPI `BioAPI-BIR-BIOMETRIC-TYPE` (32-bit string: face,
 * voice, finger, iris, …). [ISO/IEC 19784-1]; ITU-T Rec. X.1084
 * (05/2008) §10.1.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricType  ::=  BioAPI-BIR-BIOMETRIC-TYPE
 * ```
 */
export
type BiometricType = BioAPI_BIR_BIOMETRIC_TYPE; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BiometricType: $.ASN1Decoder<BiometricType> = _decode_BioAPI_BIR_BIOMETRIC_TYPE;

/**
 * @summary Encodes a(n) BiometricType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricType, encoded as an ASN.1 Element.
 */
export const _encode_BiometricType: $.ASN1Encoder<BiometricType> = _encode_BioAPI_BIR_BIOMETRIC_TYPE;


/* eslint-enable */
