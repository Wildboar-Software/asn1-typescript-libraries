/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CertHash, _decode_CertHash, _encode_CertHash } from "../X9-84-CMS/CertHash.ta.mjs";

import { DigestInfo, _decode_DigestInfo, _encode_DigestInfo } from "../X9-84-CMS/DigestInfo.ta.mjs";



/**
 * @summary Hash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Hash  ::=  CHOICE {
 *    ietf       CertHash,  -- SHA-1 hash of entire certificate
 *    withAlgID  DigestInfo
 * }
 * ```
 */
export
type Hash =
    { ietf: CertHash } /* CHOICE_ALT_ROOT */
    | { withAlgID: DigestInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Hash: $.ASN1Decoder<Hash> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Hash
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Hash (el: _Element): Hash {
    if (!_cached_decoder_for_Hash) { _cached_decoder_for_Hash = $._decode_inextensible_choice<Hash>({
    "UNIVERSAL 4": [ "ietf", _decode_CertHash ],
    "UNIVERSAL 16": [ "withAlgID", _decode_DigestInfo ]
}); }
    return _cached_decoder_for_Hash(el);
}

let _cached_encoder_for_Hash: $.ASN1Encoder<Hash> | null = null;

/**
 * @summary Encodes a(n) Hash into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Hash, encoded as an ASN.1 Element.
 */
export
function _encode_Hash (value: Hash, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Hash) { _cached_encoder_for_Hash = $._encode_choice<Hash>({
    "ietf": _encode_CertHash,
    "withAlgID": _encode_DigestInfo,
}, $.BER); }
    return _cached_encoder_for_Hash(value, elGetter);
}


/* eslint-enable */
