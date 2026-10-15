/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LIID
 * @description
 *
 * Lawful Interception Identifier. For each target identity of an
 * interception, the authorized CSP assigns an LIID agreed with the LEA.
 * It identifies the interception in parameters of all HI ports, in CC
 * delivery, and in IRI records, and it correlates information at HI2
 * and HI3. Indirect identification keeps knowledge of the target with
 * authorized CSP operators and LEA handling agents.
 *
 * The format shall consist of alphanumeric characters. It may contain,
 * among other information, a lawful-authorization reference and the
 * date the authorization was issued. The CSP assigns a unique LIID for
 * each target identity of the subject or, as a national option, one
 * LIID for several identities of the same subject. If several LEAs
 * intercept the same identity, each LEA has its own LIID.
 *
 * The value is 1 to 25 octets, so it may be binary or ASCII printable.
 * Clause 6.1 accepts both. Printable example: `ZZZ123`. Binary example,
 * in hexadecimal:
 * `46565527098f6bcd4621d373cade4e832627b4f6ff00ff00ff`.
 * The XSD pattern is `([!-~]{1,25})|([0-9a-f]{26,50})`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.1, citing ETSI
 * TS 102 232-1, clause 5.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIID  ::=  OCTET STRING (SIZE (1..25))
 * ```
 */
export
type LIID = OCTET_STRING; // OctetStringType
export const _decode_LIID: $.ASN1Decoder<LIID> = (el: _Element): LIID => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 25) {
        throw new ASN1SizeError("LIID violates SIZE constraint");
    }
    return value;
};
export const _encode_LIID: $.ASN1Encoder<LIID> = $._encodeOctetString;


/* eslint-enable */
