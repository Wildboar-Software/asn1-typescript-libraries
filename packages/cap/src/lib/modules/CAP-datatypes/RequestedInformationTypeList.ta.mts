import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedInformationType, _enum_for_RequestedInformationType, _decode_RequestedInformationType, _encode_RequestedInformationType } from "./RequestedInformationType.ta.mjs";

/**
 * @summary RequestedInformationTypeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedInformationTypeList ::= SEQUENCE SIZE (1.. numOfInfoItems) OF RequestedInformationType
 * ```
 *
 */
export type RequestedInformationTypeList = RequestedInformationType[];
export const _decode_RequestedInformationTypeList = (el: _Element): RequestedInformationTypeList => {
    const value = $._decodeSequenceOf<RequestedInformationType>(() => _decode_RequestedInformationType)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("RequestedInformationTypeList violates SIZE constraint");
    }
    return value;
};
export const _encode_RequestedInformationTypeList = $._encodeSequenceOf<RequestedInformationType>(() => _encode_RequestedInformationType, $.BER);
