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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ConnectionTestResults,
    _decode_ConnectionTestResults,
    _encode_ConnectionTestResults,
} from '../TestCategories-ASN1Module/ConnectionTestResults.ta.mjs';
/**
 * @summary EndConnectionTestResults
 * @description
 *
 * Alias of `ConnectionTestResults`. Introduced by Cor.1;
 * clause 8.1.7 only says this attribute contains end-connection
 * test results and does not define a distinct meaning. ITU-T Rec.
 * X.737 (11/95) [§8.1.7](https://www.itu.int/rec/T-REC-X.737-199511-I), A.6.7;
 * Cor.1 (06/98)
 * [https://www.itu.int/rec/T-REC-X.737-199806-I].
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndConnectionTestResults  ::=  ConnectionTestResults
 * ```
 */
export type EndConnectionTestResults = ConnectionTestResults; // DefinedType

let _cached_decoder_for_EndConnectionTestResults: $.ASN1Decoder<EndConnectionTestResults> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EndConnectionTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EndConnectionTestResults} The decoded data structure.
 */
export function _decode_EndConnectionTestResults(el: _Element): EndConnectionTestResults {
    if (!_cached_decoder_for_EndConnectionTestResults) {
        _cached_decoder_for_EndConnectionTestResults = _decode_ConnectionTestResults;
    }
    return _cached_decoder_for_EndConnectionTestResults(el);
}

let _cached_encoder_for_EndConnectionTestResults: $.ASN1Encoder<EndConnectionTestResults> | null = null;

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
): _Element {
    if (!_cached_encoder_for_EndConnectionTestResults) {
        _cached_encoder_for_EndConnectionTestResults = _encode_ConnectionTestResults;
    }
    return _cached_encoder_for_EndConnectionTestResults(value, elGetter);
}


/* eslint-enable */
