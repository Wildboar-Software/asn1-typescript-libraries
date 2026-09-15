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
import { KeyInfo_paramsAndOps, _get_decoder_for_KeyInfo_paramsAndOps, _get_encoder_for_KeyInfo_paramsAndOps } from "../CryptographicInformationFramework/KeyInfo-paramsAndOps.ta.mjs";
// export { KeyInfo_paramsAndOps, _get_decoder_for_KeyInfo_paramsAndOps, _get_encoder_for_KeyInfo_paramsAndOps } from "../CryptographicInformationFramework/KeyInfo-paramsAndOps.ta.mjs";
import { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";
// export { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";


/**
 * @summary KeyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyInfo {ParameterType, OperationsType}  ::=  CHOICE {
 *     paramsAndOps    SEQUENCE {
 *         parameters      ParameterType,
 *         operations      OperationsType OPTIONAL
 *     },
 *     reference       Reference -- Historical, not to be used
 * }
 * ```
 */
export
type KeyInfo<ParameterType, OperationsType> =
    { paramsAndOps: KeyInfo_paramsAndOps<ParameterType, OperationsType> } /* CHOICE_ALT_ROOT */
    | { reference: Reference } /* CHOICE_ALT_ROOT */;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) KeyInfo
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_KeyInfo<ParameterType, OperationsType>(_decode_ParameterType: $.ASN1Decoder<ParameterType>, _decode_OperationsType: $.ASN1Decoder<OperationsType>): $.ASN1Decoder<KeyInfo<ParameterType, OperationsType>> {
    return $._decode_inextensible_choice<KeyInfo<ParameterType, OperationsType>>({
    "UNIVERSAL 16": [ "paramsAndOps", _get_decoder_for_KeyInfo_paramsAndOps<ParameterType, OperationsType>(_decode_ParameterType, _decode_OperationsType) ],
    "UNIVERSAL 2": [ "reference", _decode_Reference ],
    "CONTEXT 1": [ "reference", _decode_Reference ]
});
}


/**
 * @summary Returns a function that will encode a(n) KeyInfo into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) KeyInfo as an ASN.1 element.
 */
export
function _get_encoder_for_KeyInfo<ParameterType, OperationsType>(_encode_ParameterType: $.ASN1Encoder<ParameterType>, _encode_OperationsType: $.ASN1Encoder<OperationsType>): $.ASN1Encoder<KeyInfo<ParameterType, OperationsType>> {
    return $._encode_choice<KeyInfo<ParameterType, OperationsType>>({
    "paramsAndOps": _get_encoder_for_KeyInfo_paramsAndOps<ParameterType, OperationsType>(_encode_ParameterType, _encode_OperationsType),
    "reference": _encode_Reference,
}, $.BER);
}

/* eslint-enable */
