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
import { NamedMultiples, _decode_NamedMultiples, _encode_NamedMultiples } from "../SEC1-v1-9/NamedMultiples.ta.mjs";
import { SpecifiedMultiples, _decode_SpecifiedMultiples, _encode_SpecifiedMultiples } from "../SEC1-v1-9/SpecifiedMultiples.ta.mjs";
/* START_OF_SYMBOL_DEFINITION ECCSupplements */
/**
 * @summary ECCSupplements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECCSupplements  ::=  CHOICE {
 *     namedMultiples [0] NamedMultiples,
 *     specifiedMultiples [1] SpecifiedMultiples
 * }
 * ```
 */
export
type ECCSupplements =
    { namedMultiples: NamedMultiples } /* CHOICE_ALT_ROOT */
    | { specifiedMultiples: SpecifiedMultiples } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ECCSupplements */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECCSupplements */
let _cached_decoder_for_ECCSupplements: $.ASN1Decoder<ECCSupplements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECCSupplements */

/* START_OF_SYMBOL_DEFINITION _decode_ECCSupplements */
/**
 * @summary Decodes an ASN.1 element into a(n) ECCSupplements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECCSupplements} The decoded data structure.
 */
export
function _decode_ECCSupplements (el: _Element) {
    if (!_cached_decoder_for_ECCSupplements) { _cached_decoder_for_ECCSupplements = $._decode_inextensible_choice<ECCSupplements>({
    "CONTEXT 0": [ "namedMultiples", $._decode_implicit<NamedMultiples>(() => _decode_NamedMultiples) ],
    "CONTEXT 1": [ "specifiedMultiples", $._decode_implicit<SpecifiedMultiples>(() => _decode_SpecifiedMultiples) ]
}); }
    return _cached_decoder_for_ECCSupplements(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECCSupplements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECCSupplements */
let _cached_encoder_for_ECCSupplements: $.ASN1Encoder<ECCSupplements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECCSupplements */

/* START_OF_SYMBOL_DEFINITION _encode_ECCSupplements */
/**
 * @summary Encodes a(n) ECCSupplements into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECCSupplements, encoded as an ASN.1 Element.
 */
export
function _encode_ECCSupplements (value: ECCSupplements, elGetter: $.ASN1Encoder<ECCSupplements>) {
    if (!_cached_encoder_for_ECCSupplements) { _cached_encoder_for_ECCSupplements = $._encode_choice<ECCSupplements>({
    "namedMultiples": $._encode_implicit(_TagClass.context, 0, () => _encode_NamedMultiples, $.BER),
    "specifiedMultiples": $._encode_implicit(_TagClass.context, 1, () => _encode_SpecifiedMultiples, $.BER),
}, $.BER); }
    return _cached_encoder_for_ECCSupplements(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECCSupplements */

/* eslint-enable */
