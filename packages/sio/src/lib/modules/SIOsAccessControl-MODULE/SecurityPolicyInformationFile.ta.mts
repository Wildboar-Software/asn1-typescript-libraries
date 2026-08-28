/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EncodedSPIF,
    _decode_EncodedSPIF,
    _encode_EncodedSPIF,
} from "../SIOsAccessControl-MODULE/EncodedSPIF.ta.mjs";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../SIOsAccessControl-MODULE/SIGNED.ta.mjs";

/**
 * @summary SecurityPolicyInformationFile
 * @description
 *
 * Signed SPIF: domain-specific access-control policy, protected
 * against unauthorized change. The signature covers the opaque
 * `EncodedSPIF`. ITU-T Rec. X.841 (10/2000)
 * [§6.2](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityPolicyInformationFile  ::=  SIGNED{EncodedSPIF}
 * ```
 */
export type SecurityPolicyInformationFile = SIGNED<EncodedSPIF>; // DefinedType


let _cached_decoder_for_SecurityPolicyInformationFile: $.ASN1Decoder<SecurityPolicyInformationFile> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SecurityPolicyInformationFile
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityPolicyInformationFile} The decoded data structure.
 */
export function _decode_SecurityPolicyInformationFile(el: _Element): SecurityPolicyInformationFile {
    if (!_cached_decoder_for_SecurityPolicyInformationFile) {
        _cached_decoder_for_SecurityPolicyInformationFile = _get_decoder_for_SIGNED<EncodedSPIF>(
            _decode_EncodedSPIF
        );
    }
    return _cached_decoder_for_SecurityPolicyInformationFile(el);
}


let _cached_encoder_for_SecurityPolicyInformationFile: $.ASN1Encoder<SecurityPolicyInformationFile> | null = null;


/**
 * @summary Encodes a(n) SecurityPolicyInformationFile into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityPolicyInformationFile, encoded as an ASN.1 Element.
 */
export function _encode_SecurityPolicyInformationFile(
    value: SecurityPolicyInformationFile,
    elGetter: $.ASN1Encoder<SecurityPolicyInformationFile>
): _Element {
    if (!_cached_encoder_for_SecurityPolicyInformationFile) {
        _cached_encoder_for_SecurityPolicyInformationFile = _get_encoder_for_SIGNED<EncodedSPIF>(
            _encode_EncodedSPIF
        );
    }
    return _cached_encoder_for_SecurityPolicyInformationFile(value, elGetter);
}


/* eslint-enable */
