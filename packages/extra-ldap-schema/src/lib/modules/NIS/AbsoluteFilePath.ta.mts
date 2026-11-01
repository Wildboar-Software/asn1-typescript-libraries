/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1CharactersError,
    ASN1SizeError,
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AbsoluteFilePath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbsoluteFilePath  ::=  IA5String (SIZE (1..4096))
 * ```
 */
export
type AbsoluteFilePath = IA5String; // IA5String

export
function _decode_AbsoluteFilePath (el: _Element): AbsoluteFilePath {
    const value = $._decodeIA5String(el);
    for (const character of value) {
        if (character.charCodeAt(0) > 127) {
            throw new ASN1CharactersError("AbsoluteFilePath violates IA5String constraint");
        }
    }
    if (value.length < 1 || value.length > 4096) {
        throw new ASN1SizeError("AbsoluteFilePath violates SIZE constraint");
    }
    return value;
}

export
const _encode_AbsoluteFilePath: $.ASN1Encoder<AbsoluteFilePath> = $._encodeIA5String;

/* eslint-enable */
