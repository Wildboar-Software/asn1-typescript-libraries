/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClassIdentifier, _decode_ClassIdentifier, _encode_ClassIdentifier } from "../MmsHI2Operations/ClassIdentifier.ta.mjs";
// export { ClassIdentifier, _enum_for_ClassIdentifier, ClassIdentifier_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClassIdentifier_advertisement /* IMPORTED_LONG_ENUMERATION_ITEM */, advertisement /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClassIdentifier_informational /* IMPORTED_LONG_ENUMERATION_ITEM */, informational /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClassIdentifier_auto /* IMPORTED_LONG_ENUMERATION_ITEM */, auto /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ClassIdentifier, _encode_ClassIdentifier } from "../MmsHI2Operations/ClassIdentifier.ta.mjs";


/**
 * @summary MessageClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageClass  ::=  CHOICE
 * {
 *     classIdentifier    [1] ClassIdentifier,
 *     tokenText        [2] OCTET STRING,
 *     ...
 * }
 * ```
 */
export
type MessageClass =
    { classIdentifier: ClassIdentifier } /* CHOICE_ALT_ROOT */
    | { tokenText: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MessageClass: $.ASN1Decoder<MessageClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageClass (el: _Element): MessageClass {
    if (!_cached_decoder_for_MessageClass) { _cached_decoder_for_MessageClass = $._decode_extensible_choice<MessageClass>({
    "CONTEXT 1": [ "classIdentifier", $._decode_implicit<ClassIdentifier>(() => _decode_ClassIdentifier) ],
    "CONTEXT 2": [ "tokenText", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_MessageClass(el);
}

let _cached_encoder_for_MessageClass: $.ASN1Encoder<MessageClass> | null = null;

/**
 * @summary Encodes a(n) MessageClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageClass, encoded as an ASN.1 Element.
 */
export
function _encode_MessageClass (value: MessageClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageClass) { _cached_encoder_for_MessageClass = $._encode_choice<MessageClass>({
    "classIdentifier": $._encode_implicit(_TagClass.context, 1, () => _encode_ClassIdentifier, $.BER),
    "tokenText": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_MessageClass(value, elGetter);
}


/* eslint-enable */
