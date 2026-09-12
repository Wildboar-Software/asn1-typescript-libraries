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



/**
 * @summary Nullable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Nullable{T}  ::=  CHOICE {
 *        present T,
 *        absent NULL
 * }
 * ```
 */
export
type Nullable<T> =
    { present: T } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) Nullable
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_Nullable<T>(_decode_T: $.ASN1Decoder<T>): $.ASN1Decoder<Nullable<T>> {
    return $._decode_inextensible_choice<Nullable<T>>({
    "*": [ "present", _decode_T ],
    "UNIVERSAL 5": [ "absent", $._decodeNull ]
});
}


/**
 * @summary Returns a function that will encode a(n) Nullable into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) Nullable as an ASN.1 element.
 */
export
function _get_encoder_for_Nullable<T>(_encode_T: $.ASN1Encoder<T>): $.ASN1Encoder<Nullable<T>> {
    return $._encode_choice<Nullable<T>>({
    "present": _encode_T,
    "absent": $._encodeNull,
}, $.BER);
}

/* eslint-enable */
