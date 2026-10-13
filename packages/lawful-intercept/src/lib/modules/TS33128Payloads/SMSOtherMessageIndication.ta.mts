/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSOtherMessageIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOtherMessageIndication  ::=  BOOLEAN
 * ```
 */
export
type SMSOtherMessageIndication = BOOLEAN; // BooleanType
export const _decode_SMSOtherMessageIndication: $.ASN1Decoder<SMSOtherMessageIndication> = $._decodeBoolean;
export const _encode_SMSOtherMessageIndication: $.ASN1Encoder<SMSOtherMessageIndication> = $._encodeBoolean;


/* eslint-enable */
