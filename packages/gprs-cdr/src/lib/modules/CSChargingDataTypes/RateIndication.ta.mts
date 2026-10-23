/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RateIndication
 * @description
 *
 * This parameter specifies the rate adaptation that was used for the
 * connection. The field is constructed from the information in the
 * parameters "rate adaptation" and "other rate adaptation" signalled between
 * the MS/UE and the network, see TS 24.008 [208]. The format of this field
 * is a single octet with the following format: Bits 0-1: the Rate Adaptation
 * field as defined in TS 24.008 [208]; Bits 2-3: the Other Rate Adaptation
 * field as defined in TS 24.008 [208]; Bits 4-7: not used.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.69.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RateIndication  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type RateIndication = OCTET_STRING; // OctetStringType

export const _decode_RateIndication = (el: _Element): RateIndication => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("RateIndication violates SIZE constraint");
    }
    return value;
};

export
const _encode_RateIndication: $.ASN1Encoder<RateIndication> = $._encodeOctetString;

/* eslint-enable */
