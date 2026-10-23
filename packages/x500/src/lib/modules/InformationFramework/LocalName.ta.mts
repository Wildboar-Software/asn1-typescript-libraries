/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../InformationFramework/RDNSequence.ta.mjs";
/**
 * @summary LocalName
 * @description
 *
 * Name relative to a context vertex (administrative point, subtree base,
 * etc.): an {@link RDNSequence} from that vertex toward the leaf. The empty
 * sequence is the context vertex itself. Ordering is DIT-descending (root
 * of the local scope first), opposite LDAP string order.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalName  ::=  RDNSequence
 * ```
 */
export type LocalName = RDNSequence; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LocalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalName} The decoded data structure.
 */
export const _decode_LocalName: $.ASN1Decoder<LocalName> = _decode_RDNSequence;

/**
 * @summary Encodes a(n) LocalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalName, encoded as an ASN.1 Element.
 */
export const _encode_LocalName: $.ASN1Encoder<LocalName> = _encode_RDNSequence;


/* eslint-enable */
