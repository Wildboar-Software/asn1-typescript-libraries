/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ValidityPeriodSemi
 * @description
 *
 * Relative Validity Period in three semi-octet octets (ECMA-325 §E.1.2.2,
 * Table E.3; ETSI TS 100 901 §9.1.2.3 and §9.2.3.12.3). Octet 1 is hours,
 * octet 2 minutes, octet 3 seconds. In the table's example the high semi-octet
 * is the tens digit (24 hours, 30 minutes, 57 seconds).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriodSemi  ::=  OCTET STRING (SIZE(3))
 * ```
 */
export
type ValidityPeriodSemi = OCTET_STRING; // OctetStringType

export
const _decode_ValidityPeriodSemi = (el: _Element): ValidityPeriodSemi => {
    const value = $._decodeOctetString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("ValidityPeriodSemi violates SIZE constraint");
    }
    return value;
};

export
const _encode_ValidityPeriodSemi: $.ASN1Encoder<ValidityPeriodSemi> = $._encodeOctetString;

/* eslint-enable */
