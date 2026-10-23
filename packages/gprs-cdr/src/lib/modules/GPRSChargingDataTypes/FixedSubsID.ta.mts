/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FixedSubsID
 * @description
 *
 * This field contains the subscriber identity, as defined in Broadband Forum
 * TR 134 [601], used by the Fixed User (i.e. Fixed Device or RG) for
 * Subscriber IP session in fixed broadband access network.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.57A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FixedSubsID  ::=  OCTET STRING
 * ```
 */
export
type FixedSubsID = OCTET_STRING; // OctetStringType

export
const _decode_FixedSubsID: $.ASN1Decoder<FixedSubsID> = $._decodeOctetString;

export
const _encode_FixedSubsID: $.ASN1Encoder<FixedSubsID> = $._encodeOctetString;

/* eslint-enable */
