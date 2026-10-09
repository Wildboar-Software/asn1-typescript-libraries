/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    NULL,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { Unit, _decode_Unit, _encode_Unit } from "../Z39-50-APDU-2001/Unit.ta.mjs";
// export { Unit, _decode_Unit, _encode_Unit } from "../Z39-50-APDU-2001/Unit.ta.mjs";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
// export { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";


/**
 * @summary Variant_triples_Item_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Variant-triples-Item-value ::= CHOICE {
 *     integer INTEGER,
 *     string InternationalString,
 *     octets OCTET STRING,
 *     oid OBJECT IDENTIFIER,
 *     bool BOOLEAN,
 *     null NULL,
 *     -- Following need context tags:
 *     unit [1] IMPLICIT Unit,
 *     valueAndUnit [2] IMPLICIT IntUnit
 * }
 * ```
 */
export
type Variant_triples_Item_value =
    { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_: InternationalString } /* CHOICE_ALT_ROOT */
    | { octets: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { bool: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { unit: Unit } /* CHOICE_ALT_ROOT */
    | { valueAndUnit: IntUnit } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Variant_triples_Item_value: $.ASN1Decoder<Variant_triples_Item_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Variant_triples_Item_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Variant_triples_Item_value (el: _Element): Variant_triples_Item_value {
    if (!_cached_decoder_for_Variant_triples_Item_value) { _cached_decoder_for_Variant_triples_Item_value = $._decode_inextensible_choice<Variant_triples_Item_value>({
    "UNIVERSAL 2": [ "integer", $._decodeInteger ],
    "UNIVERSAL 27": [ "string_", _decode_InternationalString ],
    "UNIVERSAL 4": [ "octets", $._decodeOctetString ],
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "UNIVERSAL 1": [ "bool", $._decodeBoolean ],
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 1": [ "unit", $._decode_implicit<Unit>(() => _decode_Unit) ],
    "CONTEXT 2": [ "valueAndUnit", $._decode_implicit<IntUnit>(() => _decode_IntUnit) ]
}); }
    return _cached_decoder_for_Variant_triples_Item_value(el);
}

let _cached_encoder_for_Variant_triples_Item_value: $.ASN1Encoder<Variant_triples_Item_value> | null = null;

/**
 * @summary Encodes a(n) Variant_triples_Item_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Variant_triples_Item_value, encoded as an ASN.1 Element.
 */
export
function _encode_Variant_triples_Item_value (value: Variant_triples_Item_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Variant_triples_Item_value) { _cached_encoder_for_Variant_triples_Item_value = $._encode_choice<Variant_triples_Item_value>({
    "integer": $._encodeInteger,
    "string_": _encode_InternationalString,
    "octets": $._encodeOctetString,
    "oid": $._encodeObjectIdentifier,
    "bool": $._encodeBoolean,
    "null_": $._encodeNull,
    "unit": $._encode_implicit(_TagClass.context, 1, () => _encode_Unit, $.BER),
    "valueAndUnit": $._encode_implicit(_TagClass.context, 2, () => _encode_IntUnit, $.BER),
}, $.BER); }
    return _cached_encoder_for_Variant_triples_Item_value(value, elGetter);
}


/* eslint-enable */
