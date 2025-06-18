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
import * as $ from "asn1-ts/dist/functional.mjs";
import { SimpleSyntax, _decode_SimpleSyntax, _encode_SimpleSyntax } from "../SNMPv2-PDU/SimpleSyntax.ta.mjs";
import { ApplicationSyntax, _decode_ApplicationSyntax, _encode_ApplicationSyntax } from "../SNMPv2-PDU/ApplicationSyntax.ta.mjs";
/**
 * @summary ObjectSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectSyntax  ::=  CHOICE {
 *         simple           SimpleSyntax,
 *         application-wide ApplicationSyntax }
 * ```
 */
export
type ObjectSyntax =
    { simple: SimpleSyntax } /* CHOICE_ALT_ROOT */
    | { application_wide: ApplicationSyntax } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ObjectSyntax: $.ASN1Decoder<ObjectSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectSyntax} The decoded data structure.
 */
export
function _decode_ObjectSyntax (el: _Element) {
    if (!_cached_decoder_for_ObjectSyntax) { _cached_decoder_for_ObjectSyntax = $._decode_inextensible_choice<ObjectSyntax>({
    "UNIVERSAL 2": [ "simple", _decode_SimpleSyntax ],
    "UNIVERSAL 4": [ "simple", _decode_SimpleSyntax ],
    "UNIVERSAL 6": [ "simple", _decode_SimpleSyntax ],
    "APPLICATION 0": [ "application_wide", _decode_ApplicationSyntax ],
    "APPLICATION 1": [ "application_wide", _decode_ApplicationSyntax ],
    "APPLICATION 3": [ "application_wide", _decode_ApplicationSyntax ],
    "APPLICATION 4": [ "application_wide", _decode_ApplicationSyntax ],
    "APPLICATION 6": [ "application_wide", _decode_ApplicationSyntax ],
    "APPLICATION 2": [ "application_wide", _decode_ApplicationSyntax ]
}); }
    return _cached_decoder_for_ObjectSyntax(el);
}

let _cached_encoder_for_ObjectSyntax: $.ASN1Encoder<ObjectSyntax> | null = null;

/**
 * @summary Encodes a(n) ObjectSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectSyntax (value: ObjectSyntax, elGetter: $.ASN1Encoder<ObjectSyntax>) {
    if (!_cached_encoder_for_ObjectSyntax) { _cached_encoder_for_ObjectSyntax = $._encode_choice<ObjectSyntax>({
    "simple": _encode_SimpleSyntax,
    "application_wide": _encode_ApplicationSyntax,
}, $.BER); }
    return _cached_encoder_for_ObjectSyntax(value, elGetter);
}


/* eslint-enable */
