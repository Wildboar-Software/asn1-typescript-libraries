/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VersionType
 * @description
 * 
 * Three-octet specification or release number: major, minor, revision, each as
 * a binary value. When a revision is not used, the third octet is `00`. The
 * comment in SGP.22 v3.1 Annex H gives `'02 00 0C'` for v2.0.12. Radio
 * capabilities in `DeviceCapabilities` usually encode a 3GPP release N as `{N,
 * 0, 0}` (§4.2).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionType  ::=  OCTET STRING(SIZE(3))
 * ```
 */
export
type VersionType = OCTET_STRING; // OctetStringType
export function _decode_VersionType (el: _Element): VersionType {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("VersionType violates SIZE constraint");
    }
    return value;
}
export const _encode_VersionType = $._encodeOctetString;


/* eslint-enable */
