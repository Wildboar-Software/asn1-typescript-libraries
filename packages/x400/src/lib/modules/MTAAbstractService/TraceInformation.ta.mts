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
    TraceInformationElement,
    _decode_TraceInformationElement,
    _encode_TraceInformationElement,
} from '../MTAAbstractService/TraceInformationElement.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TraceInformation */
/**
 * @summary TraceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TraceInformation  ::=
 *   [APPLICATION 9]  SEQUENCE SIZE (1..ub-transfers) OF TraceInformationElement
 * ```
 */
export type TraceInformation = TraceInformationElement[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TraceInformation */
let _cached_decoder_for_TraceInformation: $.ASN1Decoder<TraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TraceInformation */

/* START_OF_SYMBOL_DEFINITION _decode_TraceInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) TraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TraceInformation} The decoded data structure.
 */
export function _decode_TraceInformation(el: _Element) {
    if (!_cached_decoder_for_TraceInformation) {
        _cached_decoder_for_TraceInformation = $._decode_implicit<TraceInformation>(
            () =>
                $._decodeSequenceOf<TraceInformationElement>(
                    () => _decode_TraceInformationElement
                )
        );
    }
    return _cached_decoder_for_TraceInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TraceInformation */
let _cached_encoder_for_TraceInformation: $.ASN1Encoder<TraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TraceInformation */

/* START_OF_SYMBOL_DEFINITION _encode_TraceInformation */
/**
 * @summary Encodes a(n) TraceInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_TraceInformation(
    value: TraceInformation,
    elGetter: $.ASN1Encoder<TraceInformation>
) {
    if (!_cached_encoder_for_TraceInformation) {
        _cached_encoder_for_TraceInformation = $._encode_implicit(
            _TagClass.application,
            9,
            () =>
                $._encodeSequenceOf<TraceInformationElement>(
                    () => _encode_TraceInformationElement,
                    $.BER
                ),
            $.BER
        );
    }
    return _cached_encoder_for_TraceInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TraceInformation */

/* eslint-enable */
