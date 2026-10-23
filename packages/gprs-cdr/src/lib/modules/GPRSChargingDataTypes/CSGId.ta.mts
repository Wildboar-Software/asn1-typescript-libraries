/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGId
 * @description
 * 
 * Identity of the CSG cell or hybrid cell through which the UE is taking
 * service (clause 5.1.2). Omitted, together with the access mode and
 * membership indication, when a user CSG information change reports that
 * the user has left the cell and is not entering another (clause
 * 5.2.3.3.1).
 * 
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGId       ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type CSGId = OCTET_STRING; // OctetStringType

export const _decode_CSGId = (el: _Element): CSGId => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("CSGId violates SIZE constraint");
    }
    return value;
};

export
const _encode_CSGId: $.ASN1Encoder<CSGId> = $._encodeOctetString;

/* eslint-enable */
