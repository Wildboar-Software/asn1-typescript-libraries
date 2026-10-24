/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxDisplayInformationLength } from "./maxDisplayInformationLength.va.mjs";
import { minDisplayInformationLength } from "./minDisplayInformationLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisplayInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayInformation  ::= 
 *   IA5String(SIZE (minDisplayInformationLength..maxDisplayInformationLength))
 * ```
 */
export
type DisplayInformation = IA5String; // IA5String

export
function _decode_DisplayInformation (el: _Element): DisplayInformation {
    const value = $._decodeIA5String(el);
    if (value.length < minDisplayInformationLength || value.length > maxDisplayInformationLength) {
        throw new ASN1SizeError("DisplayInformation violates SIZE constraint");
    }
    return value;
}

export
const _encode_DisplayInformation: $.ASN1Encoder<DisplayInformation> = $._encodeIA5String;

/* eslint-enable */
