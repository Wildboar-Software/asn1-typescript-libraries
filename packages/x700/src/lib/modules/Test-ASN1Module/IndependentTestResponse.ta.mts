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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
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
/* START_OF_SYMBOL_DEFINITION IndependentTestResponse */
/**
 * @summary IndependentTestResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndependentTestResponse ::= SEQUENCE {
 *   testInvocationId  TestInvocationId,
 *   tOName            TOName OPTIONAL,
 *   tOAttributeList   AttributeList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class IndependentTestResponse {
    constructor(
        /**
         * @summary `testInvocationId`.
         * @public
         * @readonly
         */
        readonly testInvocationId: TestInvocationId,
        /**
         * @summary `tOName`.
         * @public
         * @readonly
         */
        readonly tOName: OPTIONAL<TOName>,
        /**
         * @summary `tOAttributeList`.
         * @public
         * @readonly
         */
        readonly tOAttributeList: OPTIONAL<AttributeList>
    ) {}

    /**
     * @summary Restructures an object into a IndependentTestResponse
     * @description
     *
     * This takes an `object` and converts it to a `IndependentTestResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndependentTestResponse`.
     * @returns {IndependentTestResponse}
     */
    public static _from_object(
        _o: {
            [_K in keyof IndependentTestResponse]: IndependentTestResponse[_K];
        }
    ): IndependentTestResponse {
        return new IndependentTestResponse(
            _o.testInvocationId,
            _o.tOName,
            _o.tOAttributeList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IndependentTestResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IndependentTestResponse */
/**
 * @summary The Leading Root Component Types of IndependentTestResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IndependentTestResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'testInvocationId',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec('tOName', true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'tOAttributeList',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IndependentTestResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IndependentTestResponse */
/**
 * @summary The Trailing Root Component Types of IndependentTestResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IndependentTestResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IndependentTestResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IndependentTestResponse */
/**
 * @summary The Extension Addition Component Types of IndependentTestResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IndependentTestResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IndependentTestResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IndependentTestResponse */
let _cached_decoder_for_IndependentTestResponse: $.ASN1Decoder<IndependentTestResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IndependentTestResponse */

/* START_OF_SYMBOL_DEFINITION _decode_IndependentTestResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) IndependentTestResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndependentTestResponse} The decoded data structure.
 */
export function _decode_IndependentTestResponse(el: _Element) {
    if (!_cached_decoder_for_IndependentTestResponse) {
        _cached_decoder_for_IndependentTestResponse = function (
            el: _Element
        ): IndependentTestResponse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let testInvocationId!: TestInvocationId;
            let tOName: OPTIONAL<TOName>;
            let tOAttributeList: OPTIONAL<AttributeList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                testInvocationId: (_el: _Element): void => {
                    testInvocationId = _decode_TestInvocationId(_el);
                },
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
                _root_component_type_list_1_spec_for_IndependentTestResponse,
                _extension_additions_list_spec_for_IndependentTestResponse,
                _root_component_type_list_2_spec_for_IndependentTestResponse,
                undefined
            );
            return new IndependentTestResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
                testInvocationId,
                tOName,
                tOAttributeList
            );
        };
    }
    return _cached_decoder_for_IndependentTestResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IndependentTestResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IndependentTestResponse */
let _cached_encoder_for_IndependentTestResponse: $.ASN1Encoder<IndependentTestResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IndependentTestResponse */

/* START_OF_SYMBOL_DEFINITION _encode_IndependentTestResponse */
/**
 * @summary Encodes a(n) IndependentTestResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndependentTestResponse, encoded as an ASN.1 Element.
 */
export function _encode_IndependentTestResponse(
    value: IndependentTestResponse,
    elGetter: $.ASN1Encoder<IndependentTestResponse>
) {
    if (!_cached_encoder_for_IndependentTestResponse) {
        _cached_encoder_for_IndependentTestResponse = function (
            value: IndependentTestResponse        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TestInvocationId(
                            value.testInvocationId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.tOName === undefined
                            ? undefined
                            : _encode_TOName(value.tOName, $.BER),
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
    return _cached_encoder_for_IndependentTestResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IndependentTestResponse */

/* eslint-enable */
