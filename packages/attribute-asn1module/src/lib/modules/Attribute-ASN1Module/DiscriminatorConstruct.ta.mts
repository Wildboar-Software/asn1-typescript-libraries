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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { CMISFilter, _decode_CMISFilter, _encode_CMISFilter } from "@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.mjs";
/**
 * @summary DiscriminatorConstruct
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscriminatorConstruct  ::=
 *   CMISFilter
 * ```
 */
export
type DiscriminatorConstruct = CMISFilter; // DefinedType

let _cached_decoder_for_DiscriminatorConstruct: $.ASN1Decoder<DiscriminatorConstruct> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiscriminatorConstruct
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DiscriminatorConstruct} The decoded data structure.
 */
export
function _decode_DiscriminatorConstruct (el: _Element) {
    if (!_cached_decoder_for_DiscriminatorConstruct) { _cached_decoder_for_DiscriminatorConstruct = _decode_CMISFilter; }
    return _cached_decoder_for_DiscriminatorConstruct(el);
}

let _cached_encoder_for_DiscriminatorConstruct: $.ASN1Encoder<DiscriminatorConstruct> | null = null;

/**
 * @summary Encodes a(n) DiscriminatorConstruct into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiscriminatorConstruct, encoded as an ASN.1 Element.
 */
export
function _encode_DiscriminatorConstruct (value: DiscriminatorConstruct, elGetter: $.ASN1Encoder<DiscriminatorConstruct>) {
    if (!_cached_encoder_for_DiscriminatorConstruct) { _cached_encoder_for_DiscriminatorConstruct = _encode_CMISFilter; }
    return _cached_encoder_for_DiscriminatorConstruct(value, elGetter);
}


/* eslint-enable */
