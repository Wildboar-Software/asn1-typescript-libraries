/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";


/**
 * @summary OPTIONALLY_SIGNED
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OPTIONALLY-SIGNED{Type}  ::=  CHOICE {unsigned  Type,
 *                                     signed    SIGNED{Type}
 * }
 * ```
 */
export
type OPTIONALLY_SIGNED<Type> =
    { unsigned: Type } /* CHOICE_ALT_ROOT */
    | { signed: SIGNED<Type> } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OPTIONALLY_SIGNED: $.ASN1Decoder<OPTIONALLY_SIGNED<Type>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) OPTIONALLY_SIGNED
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_OPTIONALLY_SIGNED<Type>(_decode_Type: $.ASN1Decoder<Type>): $.ASN1Decoder<OPTIONALLY_SIGNED<Type>> {
    return $._decode_inextensible_choice<OPTIONALLY_SIGNED<Type>>({
    "*": [ "unsigned", _decode_Type ],
    "UNIVERSAL 16": [ "signed", _get_decoder_for_SIGNED<Type>(_decode_Type) ]
});
}

let _cached_encoder_for_OPTIONALLY_SIGNED: $.ASN1Encoder<OPTIONALLY_SIGNED<Type>> | null = null;

/**
 * @summary Returns a function that will encode a(n) OPTIONALLY_SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) OPTIONALLY_SIGNED as an ASN.1 element.
 */
export
function _get_encoder_for_OPTIONALLY_SIGNED<Type>(_encode_Type: $.ASN1Encoder<Type>): $.ASN1Encoder<OPTIONALLY_SIGNED<Type>> {
    return $._encode_choice<OPTIONALLY_SIGNED<Type>>({
    "unsigned": _encode_Type,
    "signed": _get_encoder_for_SIGNED<Type>(_encode_Type),
}, $.BER);
}

/* eslint-enable */
