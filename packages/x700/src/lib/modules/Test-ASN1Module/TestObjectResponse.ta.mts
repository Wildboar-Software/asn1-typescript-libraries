/* eslint-disable */
import {
    OPTIONAL,
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
    TOName,
    _decode_TOName,
    _encode_TOName,
} from '../Test-ASN1Module/TOName.ta.mjs';
import {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta.mjs';
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

/**
 * @summary The Leading Root Component Types of TestObjectResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestObjectResponse: $.ComponentSpec[] = [
    new $.ComponentSpec('tOName', false, $.hasAnyTag),
    new $.ComponentSpec(
        'tOAttributeList',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of TestObjectResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestObjectResponse: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TestObjectResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestObjectResponse: $.ComponentSpec[] = [];

let _cached_decoder_for_TestObjectResponse: $.ASN1Decoder<TestObjectResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestObjectResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestObjectResponse} The decoded data structure.
 */
export function _decode_TestObjectResponse(el: _Element): TestObjectResponse {
    if (!_cached_decoder_for_TestObjectResponse) {
        _cached_decoder_for_TestObjectResponse = function (
            el: _Element
        ): TestObjectResponse {
            let tOName!: TOName;
            let tOAttributeList: OPTIONAL<AttributeList>;
            const callbacks: $.DecodingMap = {
                tOName: (_el: _Element): void => {
                    tOName = _decode_TOName(_el);
                },
                tOAttributeList: (_el: _Element): void => {
                    tOAttributeList = _decode_AttributeList(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestObjectResponse,
                _extension_additions_list_spec_for_TestObjectResponse,
                _root_component_type_list_2_spec_for_TestObjectResponse,
                undefined
            );
            return new TestObjectResponse (
                tOName,
                tOAttributeList
            );
        };
    }
    return _cached_decoder_for_TestObjectResponse(el);
}

let _cached_encoder_for_TestObjectResponse: $.ASN1Encoder<TestObjectResponse> | null = null;

/**
 * @summary Encodes a(n) TestObjectResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestObjectResponse, encoded as an ASN.1 Element.
 */
export function _encode_TestObjectResponse(
    value: TestObjectResponse,
    elGetter: $.ASN1Encoder<TestObjectResponse>
): _Element {
    if (!_cached_encoder_for_TestObjectResponse) {
        _cached_encoder_for_TestObjectResponse = function (
            value: TestObjectResponse        ): _Element {
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


/* eslint-enable */
