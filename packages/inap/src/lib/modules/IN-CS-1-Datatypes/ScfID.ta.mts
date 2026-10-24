/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { minScfIDLength } from "./minScfIDLength.va.mjs";
import { maxScfIDLength } from "./maxScfIDLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScfID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfID  ::=  OCTET STRING(SIZE (minScfIDLength..maxScfIDLength))
 * ```
 */
export
type ScfID = OCTET_STRING; // OctetStringType

export
function _decode_ScfID (el: _Element): ScfID {
    const value = $._decodeOctetString(el);
    if (value.length < minScfIDLength || value.length > maxScfIDLength) {
        throw new ASN1SizeError("ScfID violates SIZE constraint");
    }
    return value;
}

export
const _encode_ScfID: $.ASN1Encoder<ScfID> = $._encodeOctetString;

/* eslint-enable */
