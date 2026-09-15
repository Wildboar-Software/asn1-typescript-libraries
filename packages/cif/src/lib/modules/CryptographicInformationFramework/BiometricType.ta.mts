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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FingerPrintInformation, _decode_FingerPrintInformation, _encode_FingerPrintInformation } from "../CryptographicInformationFramework/FingerPrintInformation.ta.mjs";
// export { FingerPrintInformation, _decode_FingerPrintInformation, _encode_FingerPrintInformation } from "../CryptographicInformationFramework/FingerPrintInformation.ta.mjs";
import { IrisInformation, _decode_IrisInformation, _encode_IrisInformation } from "../CryptographicInformationFramework/IrisInformation.ta.mjs";
import { cia_ub_biometricTypes } from "../CryptographicInformationFramework/cia-ub-biometricTypes.va.mjs";
// export { IrisInformation, _decode_IrisInformation, _encode_IrisInformation } from "../CryptographicInformationFramework/IrisInformation.ta.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary BiometricType
 * @description
 * 
 * `chained` requires more than one biometric feature in the same verification
 * process. ISO/IEC 7816-15:2016 §8.9.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricType  ::=  CHOICE {
 *     fingerPrint FingerPrintInformation,
 *     iris        [0] IrisInformation,
 *     chained     [1] SEQUENCE SIZE (2..cia-ub-biometricTypes) OF BiometricType,
 *     ... -- For future extensions
 * }
 * ```
 */
export
type BiometricType =
    { fingerPrint: FingerPrintInformation } /* CHOICE_ALT_ROOT */
    | { iris: IrisInformation } /* CHOICE_ALT_ROOT */
    | { chained: BiometricType[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_BiometricType: $.ASN1Decoder<BiometricType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricType (el: _Element): BiometricType {
    if (!_cached_decoder_for_BiometricType) { _cached_decoder_for_BiometricType = $._decode_extensible_choice<BiometricType>({
    "UNIVERSAL 16": [ "fingerPrint", _decode_FingerPrintInformation ],
    "CONTEXT 0": [ "iris", $._decode_implicit<IrisInformation>(() => _decode_IrisInformation) ],
    "CONTEXT 1": [ "chained", $._decode_implicit<BiometricType[]>(() => $._decodeSequenceOf<BiometricType>(() => _decode_BiometricType)) ]
}); }
    const value = _cached_decoder_for_BiometricType(el);
    if ("chained" in value) {
        if (value.chained.length < 2 || value.chained.length > cia_ub_biometricTypes) {
            throw new ASN1SizeError("BiometricType.chained violates SIZE constraint");
        }
    }
    return value;
}

let _cached_encoder_for_BiometricType: $.ASN1Encoder<BiometricType> | null = null;

/**
 * @summary Encodes a(n) BiometricType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricType, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricType (value: BiometricType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricType) { _cached_encoder_for_BiometricType = $._encode_choice<BiometricType>({
    "fingerPrint": _encode_FingerPrintInformation,
    "iris": $._encode_implicit(_TagClass.context, 0, () => _encode_IrisInformation, $.BER),
    "chained": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<BiometricType>(() => _encode_BiometricType, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_BiometricType(value, elGetter);
}


/* eslint-enable */
