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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    TestState,
    _decode_TestState,
    _encode_TestState,
} from '../Test-ASN1Module/TestState.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TOsState */
/**
 * @summary TOsState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TOsState ::= SEQUENCE {
 *   tOInstance  ObjectInstance OPTIONAL,
 *   -- tOInstance is optional if Test Invocation Id is a tOName
 *   testState   TestState
 * }
 * ```
 *
 * @class
 */
export class TOsState {
    constructor(
        /**
         * @summary `tOInstance`.
         * @public
         * @readonly
         */
        readonly tOInstance: OPTIONAL<ObjectInstance>,
        /**
         * @summary `testState`.
         * @public
         * @readonly
         */
        readonly testState: TestState
    ) {}

    /**
     * @summary Restructures an object into a TOsState
     * @description
     *
     * This takes an `object` and converts it to a `TOsState`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TOsState`.
     * @returns {TOsState}
     */
    public static _from_object(
        _o: { [_K in keyof TOsState]: TOsState[_K] }
    ): TOsState {
        return new TOsState(_o.tOInstance, _o.testState);
    }
}
/* END_OF_SYMBOL_DEFINITION TOsState */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TOsState */
/**
 * @summary The Leading Root Component Types of TOsState
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TOsState: $.ComponentSpec[] = [
    new $.ComponentSpec('tOInstance', true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'testState',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TOsState */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TOsState */
/**
 * @summary The Trailing Root Component Types of TOsState
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TOsState: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TOsState */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TOsState */
/**
 * @summary The Extension Addition Component Types of TOsState
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TOsState: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TOsState */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TOsState */
let _cached_decoder_for_TOsState: $.ASN1Decoder<TOsState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TOsState */

/* START_OF_SYMBOL_DEFINITION _decode_TOsState */
/**
 * @summary Decodes an ASN.1 element into a(n) TOsState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TOsState} The decoded data structure.
 */
export function _decode_TOsState(el: _Element) {
    if (!_cached_decoder_for_TOsState) {
        _cached_decoder_for_TOsState = function (el: _Element): TOsState {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tOInstance: OPTIONAL<ObjectInstance>;
            let testState!: TestState;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                tOInstance: (_el: _Element): void => {
                    tOInstance = _decode_ObjectInstance(_el);
                },
                testState: (_el: _Element): void => {
                    testState = _decode_TestState(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TOsState,
                _extension_additions_list_spec_for_TOsState,
                _root_component_type_list_2_spec_for_TOsState,
                undefined
            );
            return new TOsState /* SEQUENCE_CONSTRUCTOR_CALL */(
                tOInstance,
                testState
            );
        };
    }
    return _cached_decoder_for_TOsState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TOsState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TOsState */
let _cached_encoder_for_TOsState: $.ASN1Encoder<TOsState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TOsState */

/* START_OF_SYMBOL_DEFINITION _encode_TOsState */
/**
 * @summary Encodes a(n) TOsState into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TOsState, encoded as an ASN.1 Element.
 */
export function _encode_TOsState(
    value: TOsState,
    elGetter: $.ASN1Encoder<TOsState>
) {
    if (!_cached_encoder_for_TOsState) {
        _cached_encoder_for_TOsState = function (
            value: TOsState        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.tOInstance === undefined
                            ? undefined
                            : _encode_ObjectInstance(value.tOInstance, $.BER),
                        /* REQUIRED   */ _encode_TestState(
                            value.testState,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TOsState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TOsState */

/* eslint-enable */
