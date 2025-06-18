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
import { IpAddress, _decode_IpAddress, _encode_IpAddress } from "../SNMPv2-PDU/IpAddress.ta.mjs";
import { Counter32, _decode_Counter32, _encode_Counter32 } from "../SNMPv2-PDU/Counter32.ta.mjs";
import { TimeTicks, _decode_TimeTicks, _encode_TimeTicks } from "../SNMPv2-PDU/TimeTicks.ta.mjs";
import { Opaque, _decode_Opaque, _encode_Opaque } from "../SNMPv2-PDU/Opaque.ta.mjs";
import { Counter64, _decode_Counter64, _encode_Counter64 } from "../SNMPv2-PDU/Counter64.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../SNMPv2-PDU/Unsigned32.ta.mjs";
/**
 * @summary ApplicationSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationSyntax  ::=  CHOICE {
 *         ipAddress-value        IpAddress,
 *         counter-value          Counter32,
 *         timeticks-value        TimeTicks,
 *         arbitrary-value        Opaque,
 *         big-counter-value      Counter64,
 *         unsigned-integer-value Unsigned32 }
 * ```
 */
export
type ApplicationSyntax =
    { ipAddress_value: IpAddress } /* CHOICE_ALT_ROOT */
    | { counter_value: Counter32 } /* CHOICE_ALT_ROOT */
    | { timeticks_value: TimeTicks } /* CHOICE_ALT_ROOT */
    | { arbitrary_value: Opaque } /* CHOICE_ALT_ROOT */
    | { big_counter_value: Counter64 } /* CHOICE_ALT_ROOT */
    | { unsigned_integer_value: Unsigned32 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ApplicationSyntax: $.ASN1Decoder<ApplicationSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationSyntax} The decoded data structure.
 */
export
function _decode_ApplicationSyntax (el: _Element) {
    if (!_cached_decoder_for_ApplicationSyntax) { _cached_decoder_for_ApplicationSyntax = $._decode_inextensible_choice<ApplicationSyntax>({
    "APPLICATION 0": [ "ipAddress_value", _decode_IpAddress ],
    "APPLICATION 1": [ "counter_value", _decode_Counter32 ],
    "APPLICATION 3": [ "timeticks_value", _decode_TimeTicks ],
    "APPLICATION 4": [ "arbitrary_value", _decode_Opaque ],
    "APPLICATION 6": [ "big_counter_value", _decode_Counter64 ],
    "APPLICATION 2": [ "unsigned_integer_value", _decode_Unsigned32 ]
}); }
    return _cached_decoder_for_ApplicationSyntax(el);
}

let _cached_encoder_for_ApplicationSyntax: $.ASN1Encoder<ApplicationSyntax> | null = null;

/**
 * @summary Encodes a(n) ApplicationSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationSyntax (value: ApplicationSyntax, elGetter: $.ASN1Encoder<ApplicationSyntax>) {
    if (!_cached_encoder_for_ApplicationSyntax) { _cached_encoder_for_ApplicationSyntax = $._encode_choice<ApplicationSyntax>({
    "ipAddress_value": _encode_IpAddress,
    "counter_value": _encode_Counter32,
    "timeticks_value": _encode_TimeTicks,
    "arbitrary_value": _encode_Opaque,
    "big_counter_value": _encode_Counter64,
    "unsigned_integer_value": _encode_Unsigned32,
}, $.BER); }
    return _cached_encoder_for_ApplicationSyntax(value, elGetter);
}


/* eslint-enable */
