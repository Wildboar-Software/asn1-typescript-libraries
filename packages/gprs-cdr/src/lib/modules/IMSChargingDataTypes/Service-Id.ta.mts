/* eslint-disable */
import {
    type GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service_Id
 * @description
 *
 * Service hosted by the MRFC. For a conference the value is the conference
 * ID (clause 6.3.1.2).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This field identifies the service the MRFC is hosting. For conferences the
 * conference ID is used here.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.56.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service-Id  ::=  GraphicString
 * ```
 */
export
type Service_Id = GraphicString; // GraphicString

export
const _decode_Service_Id: $.ASN1Decoder<Service_Id> = $._decodeGraphicString;

export
const _encode_Service_Id: $.ASN1Encoder<Service_Id> = $._encodeGraphicString;

/* eslint-enable */
