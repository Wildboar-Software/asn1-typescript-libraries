import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedInformation, _decode_RequestedInformation, _encode_RequestedInformation } from "./RequestedInformation.ta.mjs";

/**
 * @summary RequestedInformationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedInformationList {PARAMETERS-BOUND : bound} ::= SEQUENCE SIZE (1.. numOfInfoItems) OF RequestedInformation {bound}
 * ```
 *
 */
export type RequestedInformationList = RequestedInformation[];
export const _decode_RequestedInformationList = (el: _Element): RequestedInformationList => {
    const value = $._decodeSequenceOf<RequestedInformation>(() => _decode_RequestedInformation)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("RequestedInformationList violates SIZE constraint");
    }
    return value;
};
export const _encode_RequestedInformationList = $._encodeSequenceOf<RequestedInformation>(() => _encode_RequestedInformation, $.BER);
