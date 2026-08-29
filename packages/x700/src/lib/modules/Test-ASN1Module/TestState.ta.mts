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
    OperationalState,
    _enum_for_OperationalState,
    _decode_OperationalState,
    _encode_OperationalState,
} from '@wildboar/attribute-asn1module';
import {
    ProceduralStatus,
    _decode_ProceduralStatus,
    _encode_ProceduralStatus,
} from '@wildboar/attribute-asn1module';
import {
    ControlStatus,
    _decode_ControlStatus,
    _encode_ControlStatus,
} from '@wildboar/attribute-asn1module';
import {
    AvailabilityStatus,
    _decode_AvailabilityStatus,
    _encode_AvailabilityStatus,
} from '@wildboar/attribute-asn1module';
/**
 * @summary TestState
 * @description
 *
 * X.731 state attributes of a TO, mapped from the seven test states in 7.3.3 /
 * Table 1. All TOs support at least Testing. Not initialized: enabled,
 * procedural not-initialized, not suspended, off-duty. Idle: enabled, empty or
 * reporting, not suspended, off-duty. Initializing: enabled, initializing, not
 * suspended, empty or off-duty. Testing: enabled, empty or reporting, not
 * suspended, empty. Terminating: enabled, terminating (may also be reporting),
 * not suspended, empty. Suspended: enabled, any procedural, suspended, any
 * availability. Disabled: disabled, any other. Tags on controlStatus [2] and
 * availabilityStatus [3] are from Cor.1. ITU-T Rec. X.745 (11/93) §7.3.3.
 * [§7.3.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
 * Tags: X.745 Cor.1 (08/97) A.7.2.
 * https://www.itu.int/rec/T-REC-X.745-199708-I_Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestState ::= SEQUENCE {
 *   operationalState    OperationalState,
 *   proceduralStatus    ProceduralStatus,
 *   controlStatus       [2]  ControlStatus OPTIONAL,
 *   availabilityStatus  [3]  AvailabilityStatus OPTIONAL
 * }
 * ```
 *
 */
export class TestState {
    constructor(
        /**
         * @summary `operationalState`.
         * @description
         *
         * X.731 operationalState. Enabled for every test state except Disabled.
         * ITU-T Rec. X.745 (11/93) §7.3.3.
         * [§7.3.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
         *
         * @public
         * @readonly
         */
        readonly operationalState: OperationalState,
        /**
         * @summary `proceduralStatus`.
         * @description
         *
         * X.731 proceduralStatus: not-initialized, initializing, terminating,
         * reporting, or empty, per Table 1. ITU-T Rec. X.745 (11/93) §7.3.3.
         * [§7.3.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
         *
         * @public
         * @readonly
         */
        readonly proceduralStatus: ProceduralStatus,
        /**
         * @summary `controlStatus`.
         * @description
         *
         * X.731 controlStatus; required only if the TO supports Suspended.
         * Present as [2] (Cor.1). ITU-T Rec. X.745 (11/93) §7.3.3.
         * [§7.3.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
         *
         * @public
         * @readonly
         */
        readonly controlStatus?: OPTIONAL<ControlStatus>,
        /**
         * @summary `availabilityStatus`.
         * @description
         *
         * X.731 availabilityStatus; required only if scheduling is supported
         * (Idle / off-duty). Present as [3] (Cor.1). ITU-T Rec. X.745 (11/93)
         * §7.3.3.
         * [§7.3.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
         *
         * @public
         * @readonly
         */
        readonly availabilityStatus?: OPTIONAL<AvailabilityStatus>
    ) {}

    /**
     * @summary Restructures an object into a TestState
     * @description
     *
     * This takes an `object` and converts it to a `TestState`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestState`.
     * @returns {TestState}
     */
    public static _from_object(
        _o: { [_K in keyof TestState]: TestState[_K] }
    ): TestState {
        return new TestState(
            _o.operationalState,
            _o.proceduralStatus,
            _o.controlStatus,
            _o.availabilityStatus
        );
    }

    /**
     * @summary The enum used as the type of the component `operationalState`
     * @public
     * @static
     */

    public static _enum_for_operationalState = _enum_for_OperationalState;
}

/**
 * @summary The Leading Root Component Types of TestState
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestState: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'operationalState',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'proceduralStatus',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'controlStatus',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'availabilityStatus',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of TestState
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestState: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TestState
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestState: $.ComponentSpec[] = [];

let _cached_decoder_for_TestState: $.ASN1Decoder<TestState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestState} The decoded data structure.
 */
export function _decode_TestState(el: _Element): TestState {
    if (!_cached_decoder_for_TestState) {
        _cached_decoder_for_TestState = function (el: _Element): TestState {
            let operationalState!: OperationalState;
            let proceduralStatus!: ProceduralStatus;
            let controlStatus: OPTIONAL<ControlStatus>;
            let availabilityStatus: OPTIONAL<AvailabilityStatus>;
            const callbacks: $.DecodingMap = {
                operationalState: (_el: _Element): void => {
                    operationalState = _decode_OperationalState(_el);
                },
                proceduralStatus: (_el: _Element): void => {
                    proceduralStatus = _decode_ProceduralStatus(_el);
                },
                controlStatus: (_el: _Element): void => {
                    controlStatus = $._decode_implicit<ControlStatus>(
                        () => _decode_ControlStatus
                    )(_el);
                },
                availabilityStatus: (_el: _Element): void => {
                    availabilityStatus = $._decode_implicit<AvailabilityStatus>(
                        () => _decode_AvailabilityStatus
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestState,
                _extension_additions_list_spec_for_TestState,
                _root_component_type_list_2_spec_for_TestState,
                undefined
            );
            return new TestState (
                operationalState,
                proceduralStatus,
                controlStatus,
                availabilityStatus
            );
        };
    }
    return _cached_decoder_for_TestState(el);
}

let _cached_encoder_for_TestState: $.ASN1Encoder<TestState> | null = null;

/**
 * @summary Encodes a(n) TestState into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestState, encoded as an ASN.1 Element.
 */
export function _encode_TestState(
    value: TestState,
    elGetter: $.ASN1Encoder<TestState>
): _Element {
    if (!_cached_encoder_for_TestState) {
        _cached_encoder_for_TestState = function (
            value: TestState        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_OperationalState(
                            value.operationalState,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ProceduralStatus(
                            value.proceduralStatus,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.controlStatus === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ControlStatus,
                                  $.BER
                              )(value.controlStatus, $.BER),
                        /* IF_ABSENT  */ value.availabilityStatus === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_AvailabilityStatus,
                                  $.BER
                              )(value.availabilityStatus, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestState(value, elGetter);
}


/* eslint-enable */
