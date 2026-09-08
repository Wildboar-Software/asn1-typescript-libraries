/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceDescription  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export
type ServiceDescription = GraphicString; // GraphicString
export function _decode_ServiceDescription (el: _Element): ServiceDescription {
    const value = ($._decodeGraphicString)(el);
    if (value.length < 0 || value.length > 256) {
        throw new ASN1SizeError("ServiceDescription violates SIZE constraint");
    }
    return value;
}
export const _encode_ServiceDescription = $._encodeGraphicString;


/* eslint-enable */
