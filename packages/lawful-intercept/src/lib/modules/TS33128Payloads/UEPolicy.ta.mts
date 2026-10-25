/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEPolicy
 * @description
 * 
 * Content of the N1 NAS message MANAGE UE POLICY COMMAND, as defined in TS
 * 24.501 [13] table D.5.1.1.1 (see NOTE).
 *
 * 3GPP TS 33.128, clause 6.2.2.2.12.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEPolicy  ::=  OCTET STRING (SIZE(16..65540))
 * ```
 */
export
type UEPolicy = OCTET_STRING; // OctetStringType
export const _decode_UEPolicy: $.ASN1Decoder<UEPolicy> = (el: _Element): UEPolicy => {
    const value = $._decodeOctetString(el);
    if (value.length < 16 || value.length > 65540) {
        throw new ASN1SizeError("UEPolicy violates SIZE constraint");
    }
    return value;
};
export const _encode_UEPolicy: $.ASN1Encoder<UEPolicy> = $._encodeOctetString;


/* eslint-enable */
