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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CoincidentUnprotectedUnidirectionalConnections,
    _decode_CoincidentUnprotectedUnidirectionalConnections,
    _encode_CoincidentUnprotectedUnidirectionalConnections,
} from '../M3100ASN1TypeModule6/CoincidentUnprotectedUnidirectionalConnections.ta.mjs';
import {
    CoincidentProtectedUnidirectionalConnections,
    _decode_CoincidentProtectedUnidirectionalConnections,
    _encode_CoincidentProtectedUnidirectionalConnections,
} from '../M3100ASN1TypeModule6/CoincidentProtectedUnidirectionalConnections.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CoincidentUnidirectionalConnections */
/**
 * @summary CoincidentUnidirectionalConnections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoincidentUnidirectionalConnections  ::=  CHOICE {
 *   unprotected  [0]  CoincidentUnprotectedUnidirectionalConnections,
 *   protected    [1]  CoincidentProtectedUnidirectionalConnections
 * }
 * ```
 */
export type CoincidentUnidirectionalConnections =
    | {
          unprotected: CoincidentUnprotectedUnidirectionalConnections;
      } /* CHOICE_ALT_ROOT */
    | {
          protected_: CoincidentProtectedUnidirectionalConnections;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CoincidentUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CoincidentUnidirectionalConnections */
let _cached_decoder_for_CoincidentUnidirectionalConnections: $.ASN1Decoder<CoincidentUnidirectionalConnections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CoincidentUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _decode_CoincidentUnidirectionalConnections */
/**
 * @summary Decodes an ASN.1 element into a(n) CoincidentUnidirectionalConnections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoincidentUnidirectionalConnections} The decoded data structure.
 */
export function _decode_CoincidentUnidirectionalConnections(el: _Element) {
    if (!_cached_decoder_for_CoincidentUnidirectionalConnections) {
        _cached_decoder_for_CoincidentUnidirectionalConnections = $._decode_inextensible_choice<CoincidentUnidirectionalConnections>(
            {
                'CONTEXT 0': [
                    'unprotected',
                    $._decode_implicit<CoincidentUnprotectedUnidirectionalConnections>(
                        () =>
                            _decode_CoincidentUnprotectedUnidirectionalConnections
                    ),
                ],
                'CONTEXT 1': [
                    'protected_',
                    $._decode_implicit<CoincidentProtectedUnidirectionalConnections>(
                        () =>
                            _decode_CoincidentProtectedUnidirectionalConnections
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CoincidentUnidirectionalConnections(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CoincidentUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CoincidentUnidirectionalConnections */
let _cached_encoder_for_CoincidentUnidirectionalConnections: $.ASN1Encoder<CoincidentUnidirectionalConnections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CoincidentUnidirectionalConnections */

/* START_OF_SYMBOL_DEFINITION _encode_CoincidentUnidirectionalConnections */
/**
 * @summary Encodes a(n) CoincidentUnidirectionalConnections into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoincidentUnidirectionalConnections, encoded as an ASN.1 Element.
 */
export function _encode_CoincidentUnidirectionalConnections(
    value: CoincidentUnidirectionalConnections,
    elGetter: $.ASN1Encoder<CoincidentUnidirectionalConnections>
) {
    if (!_cached_encoder_for_CoincidentUnidirectionalConnections) {
        _cached_encoder_for_CoincidentUnidirectionalConnections = $._encode_choice<CoincidentUnidirectionalConnections>(
            {
                unprotected: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _encode_CoincidentUnprotectedUnidirectionalConnections,
                    $.BER
                ),
                protected_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CoincidentProtectedUnidirectionalConnections,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CoincidentUnidirectionalConnections(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CoincidentUnidirectionalConnections */

/* eslint-enable */
