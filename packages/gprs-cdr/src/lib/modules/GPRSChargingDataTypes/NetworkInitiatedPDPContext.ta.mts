/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkInitiatedPDPContext
 * @description
 *
 * This field in S-CDR indicates that PDP context is network initiated. The
 * field is missing in case of mobile activated PDP context.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.35.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkInitiatedPDPContext  ::=  BOOLEAN
 * ```
 */
export
type NetworkInitiatedPDPContext = BOOLEAN; // BooleanType

export
const _decode_NetworkInitiatedPDPContext: $.ASN1Decoder<NetworkInitiatedPDPContext> = $._decodeBoolean;

export
const _encode_NetworkInitiatedPDPContext: $.ASN1Encoder<NetworkInitiatedPDPContext> = $._encodeBoolean;

/* eslint-enable */
