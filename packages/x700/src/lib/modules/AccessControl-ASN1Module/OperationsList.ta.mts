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
    OperationType,
    _decode_OperationType,
    _encode_OperationType,
} from '../AccessControl-ASN1Module/OperationType.ta.mjs';

/**
 * @summary OperationsList
 * @description
 *
 * Syntax of `operationsList` on a targets object: set of
 * operation types granted or denied (per the containing
 * rule) on those targets, when no parameter constraints
 * apply. Alternative to contained `operations` managed
 * objects; the package may be present only if no operations
 * object is contained. Empty `targetsList` on a rule makes
 * it a global rule (all targets). ITU-T Rec. X.741 (04/95)
 * [§A.5.21](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.5.2, A.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationsList  ::=  SET OF OperationType
 * ```
 */
export type OperationsList = OperationType[]; // SetOfType

let _cached_decoder_for_OperationsList: $.ASN1Decoder<OperationsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationsList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationsList} The decoded data structure.
 */
export function _decode_OperationsList(el: _Element): OperationsList {
    if (!_cached_decoder_for_OperationsList) {
        _cached_decoder_for_OperationsList = $._decodeSetOf<OperationType>(
            () => _decode_OperationType
        );
    }
    return _cached_decoder_for_OperationsList(el);
}

let _cached_encoder_for_OperationsList: $.ASN1Encoder<OperationsList> | null = null;

/**
 * @summary Encodes a(n) OperationsList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationsList, encoded as an ASN.1 Element.
 */
export function _encode_OperationsList(
    value: OperationsList,
    elGetter: $.ASN1Encoder<OperationsList>
): _Element {
    if (!_cached_encoder_for_OperationsList) {
        _cached_encoder_for_OperationsList = $._encodeSetOf<OperationType>(
            () => _encode_OperationType,
            $.BER
        );
    }
    return _cached_encoder_for_OperationsList(value, elGetter);
}


/* eslint-enable */
