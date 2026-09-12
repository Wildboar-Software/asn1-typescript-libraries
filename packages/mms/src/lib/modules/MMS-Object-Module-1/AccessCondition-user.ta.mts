/* eslint-disable */
import {
    NULL,
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
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";


/**
 * @summary AccessCondition_user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessCondition-user ::= CHOICE {
 *     association ApplicationReference,
 *     none NULL
 * }
 * ```
 */
export
type AccessCondition_user =
    { association: ApplicationReference } /* CHOICE_ALT_ROOT */
    | { none: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AccessCondition_user: $.ASN1Decoder<AccessCondition_user> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessCondition_user
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessCondition_user (el: _Element): AccessCondition_user {
    if (!_cached_decoder_for_AccessCondition_user) { _cached_decoder_for_AccessCondition_user = $._decode_inextensible_choice<AccessCondition_user>({
    "UNIVERSAL 16": [ "association", _decode_ApplicationReference ],
    "UNIVERSAL 5": [ "none", $._decodeNull ]
}); }
    return _cached_decoder_for_AccessCondition_user(el);
}

let _cached_encoder_for_AccessCondition_user: $.ASN1Encoder<AccessCondition_user> | null = null;

/**
 * @summary Encodes a(n) AccessCondition_user into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessCondition_user, encoded as an ASN.1 Element.
 */
export
function _encode_AccessCondition_user (value: AccessCondition_user, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessCondition_user) { _cached_encoder_for_AccessCondition_user = $._encode_choice<AccessCondition_user>({
    "association": _encode_ApplicationReference,
    "none": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_AccessCondition_user(value, elGetter);
}


/* eslint-enable */
