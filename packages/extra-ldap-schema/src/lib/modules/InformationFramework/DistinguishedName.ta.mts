/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { RDNSequence, _decode_RDNSequence, _encode_RDNSequence } from "../InformationFramework/RDNSequence.ta.mjs";
// export { RDNSequence, _decode_RDNSequence, _encode_RDNSequence } from "../InformationFramework/RDNSequence.ta.mjs";


/**
 * @summary DistinguishedName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistinguishedName  ::=  RDNSequence
 * ```
 */
export
type DistinguishedName = RDNSequence; // DefinedType

export
const _decode_DistinguishedName: $.ASN1Decoder<DistinguishedName> = _decode_RDNSequence;

export
const _encode_DistinguishedName: $.ASN1Encoder<DistinguishedName> = _encode_RDNSequence;

/* eslint-enable */
