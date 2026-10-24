/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSOtherMessageIndication
 * @description
 * 
 * In the event of a server-initiated transfer, indicates whether the server
 * will send another SMS. May be omitted if the transfer is target-initiated.
 * See NOTE 6.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
