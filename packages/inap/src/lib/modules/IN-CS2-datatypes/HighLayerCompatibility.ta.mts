/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { highLayerCompatibilityLength } from "./highLayerCompatibilityLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HighLayerCompatibility
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HighLayerCompatibility  ::=  OCTET STRING(SIZE (highLayerCompatibilityLength))
 * ```
 */
export
type HighLayerCompatibility = OCTET_STRING; // OctetStringType

export
function _decode_HighLayerCompatibility (el: _Element): HighLayerCompatibility {
    const value = $._decodeOctetString(el);
    if (value.length < highLayerCompatibilityLength || value.length > highLayerCompatibilityLength) {
        throw new ASN1SizeError("HighLayerCompatibility violates SIZE constraint");
    }
    return value;
}

export
const _encode_HighLayerCompatibility: $.ASN1Encoder<HighLayerCompatibility> = $._encodeOctetString;

/* eslint-enable */
