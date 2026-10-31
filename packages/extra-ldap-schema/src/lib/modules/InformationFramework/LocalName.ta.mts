/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type RDNSequence, _decode_RDNSequence, _encode_RDNSequence } from "../InformationFramework/RDNSequence.ta.mjs";
// export { RDNSequence, _decode_RDNSequence, _encode_RDNSequence } from "../InformationFramework/RDNSequence.ta.mjs";


/**
 * @summary LocalName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalName  ::=  RDNSequence
 * ```
 */
export
type LocalName = RDNSequence; // DefinedType

export
const _decode_LocalName: $.ASN1Decoder<LocalName> = _decode_RDNSequence;

export
const _encode_LocalName: $.ASN1Encoder<LocalName> = _encode_RDNSequence;

/* eslint-enable */
