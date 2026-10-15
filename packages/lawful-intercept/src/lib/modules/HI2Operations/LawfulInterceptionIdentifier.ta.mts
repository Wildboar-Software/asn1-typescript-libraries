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
 * LIID. The authorized operator assigns it, and it is agreed with the LEA, for
 * each target identity of an interception. It is used on HI2 and HI3 to
 * identify the interception and to correlate IRI with CC, and within parameters
 * of all HI ports. Indirect identification keeps knowledge of the target with
 * authorized operator staff and LEA agents.
 *
 * Alphanumeric, or a digit string when the subaddress option is used. It may
 * contain a lawful-authorization reference and the date the authorization was
 * issued. One unique LIID per target identity, or, as a national option, one
 * LIID for several identities of the same subject. Example: an ISDN access with
 * three MSNs, either one LIID each or one LIID for all three. If several LEAs
 * intercept the same identity, each LEA has its own LIID.
 *
 * Octet string of size 1 to 25. Recommended characters are `a` to `z`, `A` to
 * `Z`, "-", "_", ".", and `0` to `9`. For the subaddress option only `0` to `9`
 * shall be used. Annex E carries it in the Calling Party Subaddress as decimal
 * digits, minimum 2 and maximum 25, ended by a field separator. Each GSM and
 * GPRS record sent to the LEMF includes it. At the GSM IIF it is the warrant
 * reference number. Tables A.1.1 and A.1.2 place it on HI1 and HI2, and on HI3
 * when CC is delivered. FTP file-naming method A starts the file name with this
 * LIID.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.1, clause A.1.3, clause A.8.2,
 * clause B.5.3, clause C.2.2, clause D.5, annex E.
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
