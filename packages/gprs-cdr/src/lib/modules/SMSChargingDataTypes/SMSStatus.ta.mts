/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSStatus
 * @description
 *
 * TP-Status from a Status-Report TPDU. Applicable only to delivery-report
 * charging procedures, or where ECUR is used (table 6.3.1.2.1). TS 32.274 does
 * not list the octet values; they are the TP-Status values of TS 23.040.
 *
 * 3GPP TS 32.274 V19.1.0 table 6.1.3.4.1 and table 6.3.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSStatus   ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type SMSStatus = OCTET_STRING; // OctetStringType

export const _decode_SMSStatus = (el: _Element): SMSStatus => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("SMSStatus violates SIZE constraint");
    }
    return value;
};

export
const _encode_SMSStatus: $.ASN1Encoder<SMSStatus> = $._encodeOctetString;

/* eslint-enable */
