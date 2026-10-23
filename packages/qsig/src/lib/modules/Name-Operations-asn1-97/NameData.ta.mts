/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NameData
 * @description
 *
 * Octets of a name. The field is 1 to 50 octets (ECMA-164 §6.1). A name is also
 * described as at most 50 characters (§4.2). A PINX may register fewer than 50
 * characters (§7.2.1, §8.2.1). On interworking, characters beyond 50 are
 * truncated (§7.5.1, §8.5.1). For `iso10646-BmpString` each character occupies
 * 2 octets, and for UTF-8 each character occupies 1 to 6 octets, so the octet
 * limit and the character limit are not the same (§6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameData  ::=  OCTET STRING (SIZE(1..50))
 * ```
 */
export
type NameData = OCTET_STRING; // OctetStringType

export
const _decode_NameData = (el: _Element): NameData => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 50) {
        throw new ASN1SizeError("NameData violates SIZE constraint");
    }
    return value;
};

export
const _encode_NameData: $.ASN1Encoder<NameData> = $._encodeOctetString;

/* eslint-enable */
