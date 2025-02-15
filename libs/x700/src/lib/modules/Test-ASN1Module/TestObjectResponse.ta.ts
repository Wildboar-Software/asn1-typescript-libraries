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
    TOName,
    _decode_TOName,
    _encode_TOName,
} from '../Test-ASN1Module/TOName.ta';
export {
    TOName,
    _decode_TOName,
    _encode_TOName,
} from '../Test-ASN1Module/TOName.ta';
import {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta';
export {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta';

/* START_OF_SYMBOL_DEFINITION TestObjectResponse */
/**
 * @summary TestObjectResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestObjectResponse ::= SEQUENCE {
 *   tOName           TOName,
 *   tOAttributeList  AttributeList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class TestObjectResponse {
    constructor(
        /**
         * @summary `tOName`.
         * @public
         * @readonly
         */
        readonly tOName: TOName,
        /**
         * @summary `tOAttributeList`.
         * @public
         * @readonly
         */
        readonly tOAttributeList: OPTIONAL<AttributeList>
    ) {}

    /**
     * @summary Restructures an object into a TestObjectResponse
     * @description
     *
     * This takes an `object` and converts it to a `TestObjectResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestObjectResponse`.
     * @returns {TestObjectResponse}
     */
    public static _from_object(
        _o: { [_K in keyof TestObjectResponse]: TestObjectResponse[_K] }
    ): TestObjectResponse {
        return new TestObjectResponse(_o.tOName, _o.tOAttributeList);
    }
}
/* END_OF_SYMBOL_DEFINITION TestObjectResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestObjectResponse */
/**
 * @summary The Leading Root Component Types of TestObjectResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestObjectResponse: $.ComponentSpec[] = [
    new $.ComponentSpec('tOName', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'tOAttributeList',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestObjectResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestObjectResponse */
/**
 * @summary The Trailing Root Component Types of TestObjectResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestObjectResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestObjectResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestObjectResponse */
/**
 * @summary The Extension Addition Component Types of TestObjectResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestObjectResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestObjectResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestObjectResponse */
let _cached_decoder_for_TestObjectResponse: $.ASN1Decoder<TestObjectResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestObjectResponse */

/* START_OF_SYMBOL_DEFINITION _decode_TestObjectResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) TestObjectResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestObjectResponse} The decoded data structure.
 */
export function _decode_TestObjectResponse(el: _Element) {
    if (!_cached_decoder_for_TestObjectResponse) {
        _cached_decoder_for_TestObjectResponse = function (
            el: _Element
        ): TestObjectResponse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tOName!: TOName;
            let tOAttributeList: OPTIONAL<AttributeList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                tOName: (_el: _Element): void => {
                    tOName = _decode_TOName(_el);
                },
                tOAttributeList: (_el: _Element): void => {
                    tOAttributeList = _decode_AttributeList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestObjectResponse,
                _extension_additions_list_spec_for_TestObjectResponse,
                _root_component_type_list_2_spec_for_TestObjectResponse,
                undefined
            );
            return new TestObjectResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
                tOName,
                tOAttributeList
            );
        };
    }
    return _cached_decoder_for_TestObjectResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestObjectResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestObjectResponse */
let _cached_encoder_for_TestObjectResponse: $.ASN1Encoder<TestObjectResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestObjectResponse */

/* START_OF_SYMBOL_DEFINITION _encode_TestObjectResponse */
/**
 * @summary Encodes a(n) TestObjectResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestObjectResponse, encoded as an ASN.1 Element.
 */
export function _encode_TestObjectResponse(
    value: TestObjectResponse,
    elGetter: $.ASN1Encoder<TestObjectResponse>
) {
    if (!_cached_encoder_for_TestObjectResponse) {
        _cached_encoder_for_TestObjectResponse = function (
            value: TestObjectResponse,
            elGetter: $.ASN1Encoder<TestObjectResponse>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TOName(value.tOName, $.BER),
                        /* IF_ABSENT  */ value.tOAttributeList === undefined
                            ? undefined
                            : _encode_AttributeList(
                                  value.tOAttributeList,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestObjectResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestObjectResponse */

/* eslint-enable */
