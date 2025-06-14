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
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta.mjs';
import {
    TestObjectResponse,
    _decode_TestObjectResponse,
    _encode_TestObjectResponse,
} from '../Test-ASN1Module/TestObjectResponse.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RelatedTestResponse */
/**
 * @summary RelatedTestResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedTestResponse ::= SEQUENCE {
 *   testInvocationId        TestInvocationId,
 *   testObjectResponseList  SEQUENCE OF TestObjectResponse
 * }
 * ```
 *
 * @class
 */
export class RelatedTestResponse {
    constructor(
        /**
         * @summary `testInvocationId`.
         * @public
         * @readonly
         */
        readonly testInvocationId: TestInvocationId,
        /**
         * @summary `testObjectResponseList`.
         * @public
         * @readonly
         */
        readonly testObjectResponseList: TestObjectResponse[]
    ) {}

    /**
     * @summary Restructures an object into a RelatedTestResponse
     * @description
     *
     * This takes an `object` and converts it to a `RelatedTestResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelatedTestResponse`.
     * @returns {RelatedTestResponse}
     */
    public static _from_object(
        _o: { [_K in keyof RelatedTestResponse]: RelatedTestResponse[_K] }
    ): RelatedTestResponse {
        return new RelatedTestResponse(
            _o.testInvocationId,
            _o.testObjectResponseList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RelatedTestResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RelatedTestResponse */
/**
 * @summary The Leading Root Component Types of RelatedTestResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RelatedTestResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'testInvocationId',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'testObjectResponseList',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RelatedTestResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RelatedTestResponse */
/**
 * @summary The Trailing Root Component Types of RelatedTestResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RelatedTestResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RelatedTestResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RelatedTestResponse */
/**
 * @summary The Extension Addition Component Types of RelatedTestResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RelatedTestResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RelatedTestResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedTestResponse */
let _cached_decoder_for_RelatedTestResponse: $.ASN1Decoder<RelatedTestResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedTestResponse */

/* START_OF_SYMBOL_DEFINITION _decode_RelatedTestResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) RelatedTestResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedTestResponse} The decoded data structure.
 */
export function _decode_RelatedTestResponse(el: _Element) {
    if (!_cached_decoder_for_RelatedTestResponse) {
        _cached_decoder_for_RelatedTestResponse = function (
            el: _Element
        ): RelatedTestResponse {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RelatedTestResponse contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'testInvocationId';
            sequence[1].name = 'testObjectResponseList';
            let testInvocationId!: TestInvocationId;
            let testObjectResponseList!: TestObjectResponse[];
            testInvocationId = _decode_TestInvocationId(sequence[0]);
            testObjectResponseList = $._decodeSequenceOf<TestObjectResponse>(
                () => _decode_TestObjectResponse
            )(sequence[1]);
            return new RelatedTestResponse(
                testInvocationId,
                testObjectResponseList
            );
        };
    }
    return _cached_decoder_for_RelatedTestResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelatedTestResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedTestResponse */
let _cached_encoder_for_RelatedTestResponse: $.ASN1Encoder<RelatedTestResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedTestResponse */

/* START_OF_SYMBOL_DEFINITION _encode_RelatedTestResponse */
/**
 * @summary Encodes a(n) RelatedTestResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedTestResponse, encoded as an ASN.1 Element.
 */
export function _encode_RelatedTestResponse(
    value: RelatedTestResponse,
    elGetter: $.ASN1Encoder<RelatedTestResponse>
) {
    if (!_cached_encoder_for_RelatedTestResponse) {
        _cached_encoder_for_RelatedTestResponse = function (
            value: RelatedTestResponse        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TestInvocationId(
                            value.testInvocationId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<TestObjectResponse>(
                            () => _encode_TestObjectResponse,
                            $.BER
                        )(value.testObjectResponseList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RelatedTestResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelatedTestResponse */

/* eslint-enable */
