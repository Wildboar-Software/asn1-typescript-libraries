/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxServiceInteractionIndicatorsLength } from "./maxServiceInteractionIndicatorsLength.va.mjs";
import { minServiceInteractionIndicatorsLength } from "./minServiceInteractionIndicatorsLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceInteractionIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInteractionIndicators  ::= 
 *   OCTET STRING
 *     (SIZE (minServiceInteractionIndicatorsLength..
 *              maxServiceInteractionIndicatorsLength))
 * ```
 */
export
type ServiceInteractionIndicators = OCTET_STRING; // OctetStringType

export
function _decode_ServiceInteractionIndicators (el: _Element): ServiceInteractionIndicators {
    const value = $._decodeOctetString(el);
    if (value.length < minServiceInteractionIndicatorsLength || value.length > maxServiceInteractionIndicatorsLength) {
        throw new ASN1SizeError("ServiceInteractionIndicators violates SIZE constraint");
    }
    return value;
}

export
const _encode_ServiceInteractionIndicators: $.ASN1Encoder<ServiceInteractionIndicators> = $._encodeOctetString;

/* eslint-enable */
