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
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary InvokeIdsPerforming
 * @description
 *
 * Syntax of the X.727 `invokeIdsPerforming` attribute
 * (`{crsAttribute 6}`) on `cmiseInvocation`: invoke ids
 * received in confirmed mode for which a confirmation has not
 * yet been sent. ITU-T Rec. X.727 (03/99)
 * [§6.4](https://www.itu.int/rec/T-REC-X.727-199903-I),
 * §7.6, Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeIdsPerforming  ::=  SET OF INTEGER
 * ```
 */
export type InvokeIdsPerforming = INTEGER[]; // SetOfType

let _cached_decoder_for_InvokeIdsPerforming: $.ASN1Decoder<InvokeIdsPerforming> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeIdsPerforming
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeIdsPerforming} The decoded data structure.
 */
export function _decode_InvokeIdsPerforming(el: _Element): InvokeIdsPerforming {
    if (!_cached_decoder_for_InvokeIdsPerforming) {
        _cached_decoder_for_InvokeIdsPerforming = $._decodeSetOf<INTEGER>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_InvokeIdsPerforming(el);
}

let _cached_encoder_for_InvokeIdsPerforming: $.ASN1Encoder<InvokeIdsPerforming> | null = null;

/**
 * @summary Encodes a(n) InvokeIdsPerforming into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeIdsPerforming, encoded as an ASN.1 Element.
 */
export function _encode_InvokeIdsPerforming(
    value: InvokeIdsPerforming,
    elGetter: $.ASN1Encoder<InvokeIdsPerforming>
): _Element {
    if (!_cached_encoder_for_InvokeIdsPerforming) {
        _cached_encoder_for_InvokeIdsPerforming = $._encodeSetOf<INTEGER>(
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_InvokeIdsPerforming(value, elGetter);
}


/* eslint-enable */
