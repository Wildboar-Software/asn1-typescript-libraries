/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    EXTERNAL,
    OBJECT_IDENTIFIER,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "./InternationalString.ta.mjs";


/**
 * @summary OtherInformation_Item_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherInformation-Item-information ::= CHOICE {
 *     characterInfo           [2] IMPLICIT InternationalString,
 *     binaryInfo              [3] IMPLICIT OCTET STRING,
 *     externallyDefinedInfo   [4] IMPLICIT EXTERNAL,
 *     oid                     [5] IMPLICIT OBJECT IDENTIFIER
 * }
 * ```
 */
export
type OtherInformation_Item_information =
    { characterInfo: InternationalString } /* CHOICE_ALT_ROOT */
    | { binaryInfo: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { externallyDefinedInfo: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OtherInformation_Item_information: $.ASN1Decoder<OtherInformation_Item_information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherInformation_Item_information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherInformation_Item_information (el: _Element): OtherInformation_Item_information {
    if (!_cached_decoder_for_OtherInformation_Item_information) { _cached_decoder_for_OtherInformation_Item_information = $._decode_inextensible_choice<OtherInformation_Item_information>({
    "CONTEXT 2": [ "characterInfo", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 3": [ "binaryInfo", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "externallyDefinedInfo", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 5": [ "oid", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ]
}); }
    return _cached_decoder_for_OtherInformation_Item_information(el);
}

let _cached_encoder_for_OtherInformation_Item_information: $.ASN1Encoder<OtherInformation_Item_information> | null = null;

/**
 * @summary Encodes a(n) OtherInformation_Item_information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherInformation_Item_information, encoded as an ASN.1 Element.
 */
export
function _encode_OtherInformation_Item_information (value: OtherInformation_Item_information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherInformation_Item_information) { _cached_encoder_for_OtherInformation_Item_information = $._encode_choice<OtherInformation_Item_information>({
    "characterInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER),
    "binaryInfo": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "externallyDefinedInfo": $._encode_implicit(_TagClass.context, 4, () => $._encodeExternal, $.BER),
    "oid": $._encode_implicit(_TagClass.context, 5, () => $._encodeObjectIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_OtherInformation_Item_information(value, elGetter);
}

/* eslint-enable */
