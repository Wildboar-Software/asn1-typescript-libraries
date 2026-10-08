/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HoldInstructionCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldInstructionCode  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type HoldInstructionCode = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_HoldInstructionCode = $._decodeObjectIdentifier;
export const _encode_HoldInstructionCode = $._encodeObjectIdentifier;


/* eslint-enable */
