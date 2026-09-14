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
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary AccessId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessId  ::=  DistinguishedName
 * ```
 */
export
type AccessId = DistinguishedName; // DefinedType

let _cached_decoder_for_AccessId: $.ASN1Decoder<AccessId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessId (el: _Element): AccessId {
    if (!_cached_decoder_for_AccessId) { _cached_decoder_for_AccessId = _decode_DistinguishedName; }
    return _cached_decoder_for_AccessId(el);
}

let _cached_encoder_for_AccessId: $.ASN1Encoder<AccessId> | null = null;

/**
 * @summary Encodes a(n) AccessId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessId, encoded as an ASN.1 Element.
 */
export
function _encode_AccessId (value: AccessId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessId) { _cached_encoder_for_AccessId = _encode_DistinguishedName; }
    return _cached_encoder_for_AccessId(value, elGetter);
}


/* eslint-enable */
