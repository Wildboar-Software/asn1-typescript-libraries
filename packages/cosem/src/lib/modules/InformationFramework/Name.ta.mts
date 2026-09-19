/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RDNSequence, _decode_RDNSequence, _encode_RDNSequence } from "../InformationFramework/RDNSequence.ta.mjs";
// export { RDNSequence, _decode_RDNSequence, _encode_RDNSequence } from "../InformationFramework/RDNSequence.ta.mjs";
import { DomainName, _decode_DomainName, _encode_DomainName } from "../InformationFramework/DomainName.ta.mjs";
// export { DomainName, _decode_DomainName, _encode_DomainName } from "../InformationFramework/DomainName.ta.mjs";


/**
 * @summary Name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Name  ::=  CHOICE {
 *   rdnSequence   RDNSequence,
 *   dnsName       DomainName,
 *   oid           OBJECT IDENTIFIER }
 * ```
 */
export
type Name =
    { rdnSequence: RDNSequence } /* CHOICE_ALT_ROOT */
    | { dnsName: DomainName } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Name (el: _Element): Name {
    if (!_cached_decoder_for_Name) { _cached_decoder_for_Name = $._decode_inextensible_choice<Name>({
    "UNIVERSAL 16": [ "rdnSequence", _decode_RDNSequence ],
    "UNIVERSAL 12": [ "dnsName", _decode_DomainName ],
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_Name(el);
}

let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;

/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export
function _encode_Name (value: Name, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Name) { _cached_encoder_for_Name = $._encode_choice<Name>({
    "rdnSequence": _encode_RDNSequence,
    "dnsName": _encode_DomainName,
    "oid": $._encodeObjectIdentifier,
}, $.BER); }
    return _cached_encoder_for_Name(value, elGetter);
}


/* eslint-enable */
