/* eslint-disable */
import {
    OCTET_STRING,
    EXTERNAL,
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
 * @summary Token
 * @description
 *
 * Optional DOR access token. Used when Read dereferences a DOR that had a
 * token at produce-time. Not stored in DfrReferenceContent. ISO/IEC
 * 10166-1:1991 §6.3.3, §8.2.5.1. Details: ISO/IEC 10031-2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Token  ::=  CHOICE {
 *   simpletoken    OCTET STRING,
 *   -- used to validate an access which use this DOR
 *   externaltoken  EXTERNAL -- for future proxy mechanism
 * }
 * ```
 */
export
type Token =
    { simpletoken: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { externaltoken: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Token: $.ASN1Decoder<Token> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Token
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Token (el: _Element): Token {
    if (!_cached_decoder_for_Token) { _cached_decoder_for_Token = $._decode_inextensible_choice<Token>({
    "UNIVERSAL 4": [ "simpletoken", $._decodeOctetString ],
    "UNIVERSAL 8": [ "externaltoken", $._decodeExternal ]
}); }
    return _cached_decoder_for_Token(el);
}

let _cached_encoder_for_Token: $.ASN1Encoder<Token> | null = null;

/**
 * @summary Encodes a(n) Token into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Token, encoded as an ASN.1 Element.
 */
export
function _encode_Token (value: Token, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Token) { _cached_encoder_for_Token = $._encode_choice<Token>({
    "simpletoken": $._encodeOctetString,
    "externaltoken": $._encodeExternal,
}, $.BER); }
    return _cached_encoder_for_Token(value, elGetter);
}


/* eslint-enable */
