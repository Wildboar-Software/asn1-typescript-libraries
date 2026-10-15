/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LawfulInterceptionIdentifier
 * @description
 * 
 * Lawful Interception Identifier for one target identity, agreed between the
 * LEA and the operator. It may contain, among other information, a
 * lawful-authorization reference and the date the authorization was issued. The
 * operator assigns a distinct value for each target identity, or, as a national
 * option, one value for several identities of the same interception subject. If
 * more than one LEA intercepts the same target identity, each LEA has its own
 * identifier. It is used on HI2 and HI3 to identify the interception and to
 * correlate IRI with CC.
 *
 * ASCII characters in `a` to `z`, `A` to `Z`, `-`, `_`, `.`, and `0` to `9` are
 * recommended. For the subaddress option only the digits `0` to `9` shall be
 * used. Annex E carries the identifier in the calling-party subaddress as 2 to
 * 25 decimal digits, ended by a field separator. Where the octet string is not
 * an imported parameter format, clause D.1 places the most significant
 * half-octet in bits 5 to 8 and the least significant half-octet in bits 1 to
 * 4. An imported format, such as an E.164 number coded as ISUP, keeps the order
 * of that standard.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.1, annex E, clause D.1, clause
 * D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LawfulInterceptionIdentifier  ::=  OCTET STRING (SIZE (1..25))
 * ```
 */
export
type LawfulInterceptionIdentifier = OCTET_STRING; // OctetStringType
export const _decode_LawfulInterceptionIdentifier: $.ASN1Decoder<LawfulInterceptionIdentifier> = (el: _Element): LawfulInterceptionIdentifier => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 25) {
        throw new ASN1SizeError("LawfulInterceptionIdentifier violates SIZE constraint");
    }
    return value;
};
export const _encode_LawfulInterceptionIdentifier: $.ASN1Encoder<LawfulInterceptionIdentifier> = $._encodeOctetString;


/* eslint-enable */
