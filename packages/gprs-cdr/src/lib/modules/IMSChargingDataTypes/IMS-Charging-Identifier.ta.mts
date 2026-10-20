/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMS_Charging_Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMS-Charging-Identifier  ::=  OCTET STRING
 * ```
 */
export
type IMS_Charging_Identifier = OCTET_STRING; // OctetStringType

export
const _decode_IMS_Charging_Identifier: $.ASN1Decoder<IMS_Charging_Identifier> = $._decodeOctetString;

export
const _encode_IMS_Charging_Identifier: $.ASN1Encoder<IMS_Charging_Identifier> = $._encodeOctetString;

/* eslint-enable */
