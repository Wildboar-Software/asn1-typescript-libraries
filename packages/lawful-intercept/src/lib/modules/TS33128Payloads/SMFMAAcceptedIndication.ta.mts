/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFMAAcceptedIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAAcceptedIndication  ::=  BOOLEAN
 * ```
 */
export
type SMFMAAcceptedIndication = BOOLEAN; // BooleanType
export const _decode_SMFMAAcceptedIndication: $.ASN1Decoder<SMFMAAcceptedIndication> = $._decodeBoolean;
export const _encode_SMFMAAcceptedIndication: $.ASN1Encoder<SMFMAAcceptedIndication> = $._encodeBoolean;


/* eslint-enable */
