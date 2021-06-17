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
    OperationalState,
    _enum_for_OperationalState,
    OperationalState_disabled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    disabled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    OperationalState_enabled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    enabled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_OperationalState,
    _encode_OperationalState,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/OperationalState.ta';
export {
    OperationalState,
    _enum_for_OperationalState,
    OperationalState_disabled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    disabled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    OperationalState_enabled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    enabled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_OperationalState,
    _encode_OperationalState,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/OperationalState.ta';
import {
    ProceduralStatus,
    _decode_ProceduralStatus,
    _encode_ProceduralStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProceduralStatus.ta';
export {
    ProceduralStatus,
    _decode_ProceduralStatus,
    _encode_ProceduralStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProceduralStatus.ta';
import {
    ControlStatus,
    _decode_ControlStatus,
    _encode_ControlStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ControlStatus.ta';
export {
    ControlStatus,
    _decode_ControlStatus,
    _encode_ControlStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ControlStatus.ta';
import {
    AvailabilityStatus,
    _decode_AvailabilityStatus,
    _encode_AvailabilityStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AvailabilityStatus.ta';
export {
    AvailabilityStatus,
    _decode_AvailabilityStatus,
    _encode_AvailabilityStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AvailabilityStatus.ta';

/* START_OF_SYMBOL_DEFINITION TestState */
/**
 * @summary TestState
 * @description
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
 * @class
 */
export class TestState {
    constructor(
        /**
         * @summary `operationalState`.
         * @public
         * @readonly
         */
        readonly operationalState: OperationalState,
        /**
         * @summary `proceduralStatus`.
         * @public
         * @readonly
         */
        readonly proceduralStatus: ProceduralStatus,
        /**
         * @summary `controlStatus`.
         * @public
         * @readonly
         */
        readonly controlStatus: OPTIONAL<ControlStatus>,
        /**
         * @summary `availabilityStatus`.
         * @public
         * @readonly
         */
        readonly availabilityStatus: OPTIONAL<AvailabilityStatus>
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
/* END_OF_SYMBOL_DEFINITION TestState */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestState */
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
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'proceduralStatus',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'controlStatus',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'availabilityStatus',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestState */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestState */
/**
 * @summary The Trailing Root Component Types of TestState
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestState: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestState */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestState */
/**
 * @summary The Extension Addition Component Types of TestState
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestState: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestState */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestState */
let _cached_decoder_for_TestState: $.ASN1Decoder<TestState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestState */

/* START_OF_SYMBOL_DEFINITION _decode_TestState */
/**
 * @summary Decodes an ASN.1 element into a(n) TestState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestState} The decoded data structure.
 */
export function _decode_TestState(el: _Element) {
    if (!_cached_decoder_for_TestState) {
        _cached_decoder_for_TestState = function (el: _Element): TestState {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let operationalState!: OperationalState;
            let proceduralStatus!: ProceduralStatus;
            let controlStatus: OPTIONAL<ControlStatus>;
            let availabilityStatus: OPTIONAL<AvailabilityStatus>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestState,
                _extension_additions_list_spec_for_TestState,
                _root_component_type_list_2_spec_for_TestState,
                undefined
            );
            return new TestState /* SEQUENCE_CONSTRUCTOR_CALL */(
                operationalState,
                proceduralStatus,
                controlStatus,
                availabilityStatus
            );
        };
    }
    return _cached_decoder_for_TestState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestState */
let _cached_encoder_for_TestState: $.ASN1Encoder<TestState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestState */

/* START_OF_SYMBOL_DEFINITION _encode_TestState */
/**
 * @summary Encodes a(n) TestState into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestState, encoded as an ASN.1 Element.
 */
export function _encode_TestState(
    value: TestState,
    elGetter: $.ASN1Encoder<TestState>
) {
    if (!_cached_encoder_for_TestState) {
        _cached_encoder_for_TestState = function (
            value: TestState,
            elGetter: $.ASN1Encoder<TestState>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_TestState */

/* eslint-enable */
