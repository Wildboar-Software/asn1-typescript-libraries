/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BiometricInformationTemplateExplicit, _decode_BiometricInformationTemplateExplicit, _encode_BiometricInformationTemplateExplicit } from "../CBEFF-SMARTCARD-BIDO-EXPLICIT/BiometricInformationTemplateExplicit.ta.mjs";

/**
 * @summary GroupBIT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupBIT  ::=  [APPLICATION 97] SET OF BiometricInformationTemplateExplicit
 * ```
 */
export
type GroupBIT = BiometricInformationTemplateExplicit[]; // SetOfType

let _cached_decoder_for_GroupBIT: $.ASN1Decoder<GroupBIT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupBIT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupBIT (el: _Element): GroupBIT {
    if (!_cached_decoder_for_GroupBIT) { _cached_decoder_for_GroupBIT = $._decode_implicit<GroupBIT>(() => $._decodeSetOf<BiometricInformationTemplateExplicit>(() => _decode_BiometricInformationTemplateExplicit)); }
    return _cached_decoder_for_GroupBIT(el);
}

let _cached_encoder_for_GroupBIT: $.ASN1Encoder<GroupBIT> | null = null;

/**
 * @summary Encodes a(n) GroupBIT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupBIT, encoded as an ASN.1 Element.
 */
export
function _encode_GroupBIT (value: GroupBIT, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupBIT) { _cached_encoder_for_GroupBIT = $._encode_implicit(_TagClass.application, 97, () => $._encodeSetOf<BiometricInformationTemplateExplicit>(() => _encode_BiometricInformationTemplateExplicit, $.BER), $.BER); }
    return _cached_encoder_for_GroupBIT(value, elGetter);
}

/* eslint-enable */
