/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    DataType,
    _decode_DataType,
    _encode_DataType,
} from '../TestCategories-ASN1Module/DataType.ta';
export {
    DataType,
    _decode_DataType,
    _encode_DataType,
} from '../TestCategories-ASN1Module/DataType.ta';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';

/* START_OF_SYMBOL_DEFINITION TestPattern */
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
/* END_OF_SYMBOL_DEFINITION TestPattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestPattern */
let _cached_decoder_for_TestPattern: $.ASN1Decoder<TestPattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestPattern */

/* START_OF_SYMBOL_DEFINITION _decode_TestPattern */
/**
 * @summary Decodes an ASN.1 element into a(n) TestPattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestPattern} The decoded data structure.
 */
export function _decode_TestPattern(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_TestPattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestPattern */
let _cached_encoder_for_TestPattern: $.ASN1Encoder<TestPattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestPattern */

/* START_OF_SYMBOL_DEFINITION _encode_TestPattern */
/**
 * @summary Encodes a(n) TestPattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestPattern, encoded as an ASN.1 Element.
 */
export function _encode_TestPattern(
    value: TestPattern,
    elGetter: $.ASN1Encoder<TestPattern>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_TestPattern */

/* eslint-enable */
