/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GloballyUniqueID
 * @description
 *
 * Globally unique linkage identifier (ECMA-314 §6.3.1). It shall be coded as
 * the H.225 §7.6 GloballyUniqueID imported in Annex D.2: 16 octets, no
 * padding, with time_low, time_mid, time_hi_and_version, clock sequence, and
 * a 48-bit node. The ASN.1 size is 1..16, which is wider than that 16-octet
 * record. Octet zero is encoded first. When two assignments collide, the
 * higher binary value is kept (§6.5.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GloballyUniqueID  ::=  OCTET STRING (SIZE(1..16))
 * ```
 */
export
type GloballyUniqueID = OCTET_STRING; // OctetStringType

export
const _decode_GloballyUniqueID = (el: _Element): GloballyUniqueID => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("GloballyUniqueID violates SIZE constraint");
    }
    return value;
};

export
const _encode_GloballyUniqueID: $.ASN1Encoder<GloballyUniqueID> = $._encodeOctetString;

/* eslint-enable */
