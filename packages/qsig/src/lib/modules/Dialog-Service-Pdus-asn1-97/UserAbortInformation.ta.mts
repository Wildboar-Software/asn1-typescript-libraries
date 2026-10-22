/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary UserAbortInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserAbortInformation  ::=  [3] IMPLICIT Extension {{DSE-Extension-Set}}
 * ```
 */
export
type UserAbortInformation = Extension; // DefinedType

let _cached_decoder_for_UserAbortInformation: $.ASN1Decoder<UserAbortInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserAbortInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserAbortInformation (el: _Element): UserAbortInformation {
    if (!_cached_decoder_for_UserAbortInformation) { _cached_decoder_for_UserAbortInformation = $._decode_implicit<UserAbortInformation>(() => _decode_Extension); }
    return _cached_decoder_for_UserAbortInformation(el);
}

let _cached_encoder_for_UserAbortInformation: $.ASN1Encoder<UserAbortInformation> | null = null;

/**
 * @summary Encodes a(n) UserAbortInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserAbortInformation, encoded as an ASN.1 Element.
 */
export
function _encode_UserAbortInformation (value: UserAbortInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserAbortInformation) { _cached_encoder_for_UserAbortInformation = $._encode_implicit(_TagClass.context, 3, () => _encode_Extension, $.BER); }
    return _cached_encoder_for_UserAbortInformation(value, elGetter);
}

/* eslint-enable */
