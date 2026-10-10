/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KnownProximityUnit, _decode_KnownProximityUnit, _encode_KnownProximityUnit } from "../Z39-50-APDU-2001/KnownProximityUnit.ta.mjs";


/**
 * @summary ProximityOperator_proximityUnitCode
 * @description
 * 
 * Unit in which proximity distance is measured (ANSI/NISO Z39.50-2003
 * §3.7.2.1). `known` is one of the units registered as `KnownProximityUnit`.
 * `private` is an integer whose meaning is a prior agreement. This standard
 * assigns no private codes.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximityOperator-proximityUnitCode ::= CHOICE {
 *     known [1] IMPLICIT KnownProximityUnit,
 *     private [2] IMPLICIT INTEGER
 * }
 * ```
 */
export
type ProximityOperator_proximityUnitCode =
    { known: KnownProximityUnit } /* CHOICE_ALT_ROOT */
    | { private_: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProximityOperator_proximityUnitCode: $.ASN1Decoder<ProximityOperator_proximityUnitCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProximityOperator_proximityUnitCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProximityOperator_proximityUnitCode (el: _Element): ProximityOperator_proximityUnitCode {
    if (!_cached_decoder_for_ProximityOperator_proximityUnitCode) { _cached_decoder_for_ProximityOperator_proximityUnitCode = $._decode_inextensible_choice<ProximityOperator_proximityUnitCode>({
    "CONTEXT 1": [ "known", $._decode_implicit<KnownProximityUnit>(() => _decode_KnownProximityUnit) ],
    "CONTEXT 2": [ "private_", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_ProximityOperator_proximityUnitCode(el);
}

let _cached_encoder_for_ProximityOperator_proximityUnitCode: $.ASN1Encoder<ProximityOperator_proximityUnitCode> | null = null;

/**
 * @summary Encodes a(n) ProximityOperator_proximityUnitCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProximityOperator_proximityUnitCode, encoded as an ASN.1 Element.
 */
export
function _encode_ProximityOperator_proximityUnitCode (value: ProximityOperator_proximityUnitCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProximityOperator_proximityUnitCode) { _cached_encoder_for_ProximityOperator_proximityUnitCode = $._encode_choice<ProximityOperator_proximityUnitCode>({
    "known": $._encode_implicit(_TagClass.context, 1, () => _encode_KnownProximityUnit, $.BER),
    "private_": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProximityOperator_proximityUnitCode(value, elGetter);
}


/* eslint-enable */
