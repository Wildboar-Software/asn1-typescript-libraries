/* eslint-disable */
import {
    type BIT_STRING,
    type NumericString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TSIType, _decode_TSIType, _encode_TSIType } from "../EN301040/TSIType.ta.mjs";
// export { TSIType, _decode_TSIType, _encode_TSIType } from "../EN301040/TSIType.ta.mjs";
import { type TEIType, _decode_TEIType, _encode_TEIType } from "../EN301040/TEIType.ta.mjs";
// export { TEIType, _decode_TEIType, _encode_TEIType } from "../EN301040/TEIType.ta.mjs";


/**
 * @summary TETRAAddressType
 * @description
 * 
 * One address other than, or in addition to, the principal TSI. `tETRAaddress`
 * is a TSI. `pISNaddress` is a PISN number of 20 digits, used towards a PSTN or
 * ISDN gateway. `iP4address` is 32 bits and `iP6address` is 128 bits.
 * `e164address` is an E.164 number of 20 digits. `tEI` is the 60-bit TETRA
 * Equipment Identity of EN 300 392-1. When the (co)target is identified by TEI,
 * the SwMI supports TEI PROVIDE as described in EN 300 392-7, clause 4
 * (clause 6.2). Clause 4.2 does not mandate that exchange for every TETRA
 * system, and it forbids the exchange from breaking service transparency
 * (clause 4.6).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TETRAAddressType  ::=  CHOICE {
 *     tETRAaddress    TSIType,
 *     pISNaddress        NumericString (SIZE (20)),
 *     iP4address        BIT STRING (SIZE (32)), -- 32 bits
 *     iP6address        BIT STRING (SIZE (128)), -- 128 bits
 *     e164address        NumericString (SIZE (20)),
 *     tEI                TEIType
 * }
 * ```
 */
export
type TETRAAddressType =
    { tETRAaddress: TSIType } /* CHOICE_ALT_ROOT */
    | { pISNaddress: NumericString } /* CHOICE_ALT_ROOT */
    | { iP4address: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { iP6address: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { e164address: NumericString } /* CHOICE_ALT_ROOT */
    | { tEI: TEIType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TETRAAddressType: $.ASN1Decoder<TETRAAddressType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TETRAAddressType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TETRAAddressType (el: _Element): TETRAAddressType {
    if (!_cached_decoder_for_TETRAAddressType) { _cached_decoder_for_TETRAAddressType = $._decode_inextensible_choice<TETRAAddressType>({
    "CONTEXT 0": [ "tETRAaddress", _decode_TSIType ],
    "CONTEXT 1": [ "pISNaddress", $._decodeNumericString ],
    "CONTEXT 2": [ "iP4address", $._decodeBitString ],
    "CONTEXT 3": [ "iP6address", $._decodeBitString ],
    "CONTEXT 4": [ "e164address", $._decodeNumericString ],
    "CONTEXT 5": [ "tEI", _decode_TEIType ]
}); }
    const _value = _cached_decoder_for_TETRAAddressType(el);
    if ("pISNaddress" in _value && _value.pISNaddress !== undefined) {
        const _alt = _value.pISNaddress;
        if (_alt.length < 20 || _alt.length > 20) {
            throw new ASN1SizeError("TETRAAddressType.pISNaddress violates SIZE constraint");
        }
    }
    if ("iP4address" in _value && _value.iP4address !== undefined) {
        const _alt = _value.iP4address;
        if (_alt.length < 32 || _alt.length > 32) {
            throw new ASN1SizeError("TETRAAddressType.iP4address violates SIZE constraint");
        }
    }
    if ("iP6address" in _value && _value.iP6address !== undefined) {
        const _alt = _value.iP6address;
        if (_alt.length < 128 || _alt.length > 128) {
            throw new ASN1SizeError("TETRAAddressType.iP6address violates SIZE constraint");
        }
    }
    if ("e164address" in _value && _value.e164address !== undefined) {
        const _alt = _value.e164address;
        if (_alt.length < 20 || _alt.length > 20) {
            throw new ASN1SizeError("TETRAAddressType.e164address violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_TETRAAddressType: $.ASN1Encoder<TETRAAddressType> | null = null;

/**
 * @summary Encodes a(n) TETRAAddressType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TETRAAddressType, encoded as an ASN.1 Element.
 */
export
function _encode_TETRAAddressType (value: TETRAAddressType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TETRAAddressType) { _cached_encoder_for_TETRAAddressType = $._encode_choice<TETRAAddressType>({
    "tETRAaddress": $._encode_implicit(_TagClass.context, 0, () => _encode_TSIType, $.BER),
    "pISNaddress": $._encode_implicit(_TagClass.context, 1, () => $._encodeNumericString, $.BER),
    "iP4address": $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER),
    "iP6address": $._encode_implicit(_TagClass.context, 3, () => $._encodeBitString, $.BER),
    "e164address": $._encode_implicit(_TagClass.context, 4, () => $._encodeNumericString, $.BER),
    "tEI": $._encode_implicit(_TagClass.context, 5, () => _encode_TEIType, $.BER),
}, $.BER); }
    return _cached_encoder_for_TETRAAddressType(value, elGetter);
}


/* eslint-enable */
