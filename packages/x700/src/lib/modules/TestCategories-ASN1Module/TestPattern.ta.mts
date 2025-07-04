/* eslint-disable */
import {
    OCTET_STRING,
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
    DataType,
    _decode_DataType,
    _encode_DataType,
} from '../TestCategories-ASN1Module/DataType.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module';
/**
 * @summary TestPattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestPattern  ::=  CHOICE {
 *   rawData        OCTET STRING,
 *   standardType   DataType,
 *   undefinedType  ManagementExtension
 * }
 * ```
 */
export type TestPattern =
    | { rawData: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { standardType: DataType } /* CHOICE_ALT_ROOT */
    | { undefinedType: ManagementExtension } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TestPattern: $.ASN1Decoder<TestPattern> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestPattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestPattern} The decoded data structure.
 */
export function _decode_TestPattern(el: _Element): TestPattern {
    if (!_cached_decoder_for_TestPattern) {
        _cached_decoder_for_TestPattern = $._decode_inextensible_choice<TestPattern>(
            {
                'UNIVERSAL 4': ['rawData', $._decodeOctetString],
                'UNIVERSAL 2': ['standardType', _decode_DataType],
                'UNIVERSAL 6': ['standardType', _decode_DataType],
                'UNIVERSAL 16': ['undefinedType', _decode_ManagementExtension],
            }
        );
    }
    return _cached_decoder_for_TestPattern(el);
}

let _cached_encoder_for_TestPattern: $.ASN1Encoder<TestPattern> | null = null;

/**
 * @summary Encodes a(n) TestPattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestPattern, encoded as an ASN.1 Element.
 */
export function _encode_TestPattern(
    value: TestPattern,
    elGetter: $.ASN1Encoder<TestPattern>
): _Element {
    if (!_cached_encoder_for_TestPattern) {
        _cached_encoder_for_TestPattern = $._encode_choice<TestPattern>(
            {
                rawData: $._encodeOctetString,
                standardType: _encode_DataType,
                undefinedType: _encode_ManagementExtension,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestPattern(value, elGetter);
}


/* eslint-enable */
