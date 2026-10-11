/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PathName
 * @description
 * 
 * Device name or path name, 1 to 64 characters. Used as a message identifier
 * (`deviceName`) and as a ServiceChange address.
 *
 * Annex A.3 copies the path-name syntax from Annex B: an optional leading "*",
 * a NAME, then slashes, "*", letters, digits, "_", or "$", and an optional "@"
 * domain. Total length does not exceed 64 characters (ITU-T Rec. H.248.1
 * (03/2013) Annex A.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PathName  ::=  IA5String(SIZE (1..64))
 * ```
 */
export
type PathName = IA5String; // IA5String
export const _decode_PathName = (el: _Element): PathName => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 64) {
        throw new ASN1SizeError("PathName violates SIZE constraint");
    }
    return value;
};
export const _encode_PathName = $._encodeIA5String;


/* eslint-enable */
