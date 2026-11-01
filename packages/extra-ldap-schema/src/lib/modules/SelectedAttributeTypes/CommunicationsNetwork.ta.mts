/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommunicationsNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationsNetwork  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type CommunicationsNetwork = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_CommunicationsNetwork: $.ASN1Decoder<CommunicationsNetwork> = $._decodeObjectIdentifier;

export
const _encode_CommunicationsNetwork: $.ASN1Encoder<CommunicationsNetwork> = $._encodeObjectIdentifier;

/* eslint-enable */
