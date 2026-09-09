import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
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
export const _decode_RequestedInformationList = $._decodeSequenceOf<RequestedInformation>(() => _decode_RequestedInformation);
export const _encode_RequestedInformationList = $._encodeSequenceOf<RequestedInformation>(() => _encode_RequestedInformation, $.BER);
