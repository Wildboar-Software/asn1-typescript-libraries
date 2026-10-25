/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFMAUpgradeIndication
 * @description
 * 
 * Indicates whether the PDU session is allowed to be upgraded to MA-Confirmed
 * MA PDU session (see TS 23.502 [4] clause 4.22.3). Include if known.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.7.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAUpgradeIndication  ::=  BOOLEAN
 * ```
 */
export
type SMFMAUpgradeIndication = BOOLEAN; // BooleanType
export const _decode_SMFMAUpgradeIndication: $.ASN1Decoder<SMFMAUpgradeIndication> = $._decodeBoolean;
export const _encode_SMFMAUpgradeIndication: $.ASN1Encoder<SMFMAUpgradeIndication> = $._encodeBoolean;


/* eslint-enable */
