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
    ConnectionTestResults,
    _decode_ConnectionTestResults,
    _encode_ConnectionTestResults,
} from '../TestCategories-ASN1Module/ConnectionTestResults.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EndConnectionTestResults */
/**
 * @summary EndConnectionTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndConnectionTestResults  ::=  ConnectionTestResults
 * ```
 */
export type EndConnectionTestResults = ConnectionTestResults; // DefinedType
/* END_OF_SYMBOL_DEFINITION EndConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndConnectionTestResults */
let _cached_decoder_for_EndConnectionTestResults: $.ASN1Decoder<EndConnectionTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_EndConnectionTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) EndConnectionTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EndConnectionTestResults} The decoded data structure.
 */
export function _decode_EndConnectionTestResults(el: _Element) {
    if (!_cached_decoder_for_EndConnectionTestResults) {
        _cached_decoder_for_EndConnectionTestResults = _decode_ConnectionTestResults;
    }
    return _cached_decoder_for_EndConnectionTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EndConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndConnectionTestResults */
let _cached_encoder_for_EndConnectionTestResults: $.ASN1Encoder<EndConnectionTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndConnectionTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_EndConnectionTestResults */
/**
 * @summary Encodes a(n) EndConnectionTestResults into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndConnectionTestResults, encoded as an ASN.1 Element.
 */
export function _encode_EndConnectionTestResults(
    value: EndConnectionTestResults,
    elGetter: $.ASN1Encoder<EndConnectionTestResults>
) {
    if (!_cached_encoder_for_EndConnectionTestResults) {
        _cached_encoder_for_EndConnectionTestResults = _encode_ConnectionTestResults;
    }
    return _cached_encoder_for_EndConnectionTestResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EndConnectionTestResults */

/* eslint-enable */
