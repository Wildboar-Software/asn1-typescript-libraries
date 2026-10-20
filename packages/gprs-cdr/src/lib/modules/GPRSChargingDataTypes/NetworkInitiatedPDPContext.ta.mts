/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkInitiatedPDPContext
 * @description
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
