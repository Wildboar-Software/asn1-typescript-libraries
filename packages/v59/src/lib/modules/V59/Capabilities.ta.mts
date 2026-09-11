/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError, ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Capabilities
 * @description
 *
 * Whether a modulation or protocol mode is present and selected. Table 5/V.59:
 * `notSupported`(0), `default`(1) preferred, `enabled`(2), `disabled`(3)
 * supported but off. INTEGER alternative values must match the named code.
 * ITU-T Rec. V.59 (11/2000) §6.6 Table 5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Capabilities  ::=  CHOICE {
 *   notSupported  INTEGER(0),
 *   default       INTEGER(1),
 *   enabled       INTEGER(2),
 *   disabled      INTEGER(3)
 * }
 * ```
 */
export
type Capabilities =
    { notSupported: INTEGER } /* CHOICE_ALT_ROOT */
    | { default_: INTEGER } /* CHOICE_ALT_ROOT */
    | { enabled: INTEGER } /* CHOICE_ALT_ROOT */
    | { disabled: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Capabilities: $.ASN1Decoder<Capabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Capabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Capabilities (el: _Element): Capabilities {
    if (!_cached_decoder_for_Capabilities) { _cached_decoder_for_Capabilities = $._decode_inextensible_choice<Capabilities>({
        "CONTEXT 0": [ "notSupported", $._decodeInteger ],
        "CONTEXT 1": [ "default_", $._decodeInteger ],
        "CONTEXT 2": [ "enabled", $._decodeInteger ],
        "CONTEXT 3": [ "disabled", $._decodeInteger ]
    }); }
        const value = _cached_decoder_for_Capabilities(el);
        const _key = Object.keys(value)[0];
        const _expected: Record<string, number> = { "notSupported": 0, "default_": 1, "enabled": 2, "disabled": 3 }
        if (_key !== undefined && Object.prototype.hasOwnProperty.call(_expected, _key)) {
            const _raw = (value as Record<string, unknown>)[_key];
            const _n = typeof _raw === "bigint" ? Number(_raw) : Number(_raw);
            if (_n !== _expected[_key]) {
                throw new ASN1OverflowError("Capabilities violates INTEGER range");
            }
        }
        return value;
}

let _cached_encoder_for_Capabilities: $.ASN1Encoder<Capabilities> | null = null;

/**
 * @summary Encodes a(n) Capabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capabilities, encoded as an ASN.1 Element.
 */
export
function _encode_Capabilities (value: Capabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Capabilities) { _cached_encoder_for_Capabilities = $._encode_choice<Capabilities>({
    "notSupported": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "default_": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "enabled": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "disabled": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_Capabilities(value, elGetter);
}

/* eslint-enable */
