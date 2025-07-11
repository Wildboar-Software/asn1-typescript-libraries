/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KeyInfo_paramsAndOps,
    _get_decoder_for_KeyInfo_paramsAndOps,
    _get_encoder_for_KeyInfo_paramsAndOps,
} from "../PKCS-15/KeyInfo-paramsAndOps.ta.mjs";
import {
    Reference,
    _decode_Reference,
    _encode_Reference,
} from "../PKCS-15/Reference.ta.mjs";

/**
 * @summary KeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyInfo {ParameterType, OperationsType}  ::=  CHOICE {
 *     reference Reference,
 *     paramsAndOps SEQUENCE {
 *         parameters ParameterType,
 *         supportedOperations OperationsType OPTIONAL
 *     }
 * }
 * ```
 */
export type KeyInfo<ParameterType, OperationsType> =
    | { reference: Reference } /* CHOICE_ALT_ROOT */
    | {
          paramsAndOps: KeyInfo_paramsAndOps<ParameterType, OperationsType>;
      } /* CHOICE_ALT_ROOT */;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) KeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_KeyInfo<ParameterType, OperationsType>(
    _decode_ParameterType: $.ASN1Decoder<ParameterType>,
    _decode_OperationsType: $.ASN1Decoder<OperationsType>
): $.ASN1Decoder<KeyInfo<ParameterType, OperationsType>> {
    return $._decode_inextensible_choice<
        KeyInfo<ParameterType, OperationsType>
    >({
        "UNIVERSAL 2": ["reference", _decode_Reference],
        "UNIVERSAL 16": [
            "paramsAndOps",
            _get_decoder_for_KeyInfo_paramsAndOps<
                ParameterType,
                OperationsType
            >(_decode_ParameterType, _decode_OperationsType),
        ],
    });
}


/**
 * @summary Returns a function that will encode a(n) KeyInfo into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) KeyInfo as an ASN.1 element.
 */
export function _get_encoder_for_KeyInfo<ParameterType, OperationsType>(
    _encode_ParameterType: $.ASN1Encoder<ParameterType>,
    _encode_OperationsType: $.ASN1Encoder<OperationsType>
): $.ASN1Encoder<KeyInfo<ParameterType, OperationsType>> {
    return $._encode_choice<KeyInfo<ParameterType, OperationsType>>(
        {
            reference: _encode_Reference,
            paramsAndOps: _get_encoder_for_KeyInfo_paramsAndOps<
                ParameterType,
                OperationsType
            >(_encode_ParameterType, _encode_OperationsType),
        },
        $.BER
    );
}

/* eslint-enable */
