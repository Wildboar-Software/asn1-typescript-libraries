/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LegType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegType  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type LegType = OCTET_STRING; // OctetStringType

export
function _decode_LegType (el: _Element): LegType {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("LegType violates SIZE constraint");
    }
    return value;
}

export
const _encode_LegType: $.ASN1Encoder<LegType> = $._encodeOctetString;

/* eslint-enable */
