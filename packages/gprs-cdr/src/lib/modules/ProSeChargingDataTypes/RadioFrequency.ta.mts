/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RadioFrequency
 * @description
 *
 * The radio frequency used for ProSe Direct Communication. The UE reports it
 * with transmitted and received data volume when the network has configured it
 * to do so. TS 32.277 does not define the layout of this octet string.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3, 5.1.2.4, and 6.1.3.4. Table
 * 6.1.3.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioFrequency  ::=  OCTET STRING
 * ```
 */
export
type RadioFrequency = OCTET_STRING; // OctetStringType

export
const _decode_RadioFrequency: $.ASN1Decoder<RadioFrequency> = $._decodeOctetString;

export
const _encode_RadioFrequency: $.ASN1Encoder<RadioFrequency> = $._encodeOctetString;

/* eslint-enable */
