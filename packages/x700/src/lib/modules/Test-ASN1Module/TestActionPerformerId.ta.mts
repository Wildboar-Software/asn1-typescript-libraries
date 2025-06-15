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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
/**
 * @summary TestActionPerformerId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestActionPerformerId  ::=  SimpleNameType
 * ```
 */
export type TestActionPerformerId = SimpleNameType; // DefinedType

let _cached_decoder_for_TestActionPerformerId: $.ASN1Decoder<TestActionPerformerId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestActionPerformerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestActionPerformerId} The decoded data structure.
 */
export function _decode_TestActionPerformerId(el: _Element) {
    if (!_cached_decoder_for_TestActionPerformerId) {
        _cached_decoder_for_TestActionPerformerId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_TestActionPerformerId(el);
}

let _cached_encoder_for_TestActionPerformerId: $.ASN1Encoder<TestActionPerformerId> | null = null;

/**
 * @summary Encodes a(n) TestActionPerformerId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestActionPerformerId, encoded as an ASN.1 Element.
 */
export function _encode_TestActionPerformerId(
    value: TestActionPerformerId,
    elGetter: $.ASN1Encoder<TestActionPerformerId>
) {
    if (!_cached_encoder_for_TestActionPerformerId) {
        _cached_encoder_for_TestActionPerformerId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_TestActionPerformerId(value, elGetter);
}


/* eslint-enable */
