/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
import {
    ArcState,
    _enum_for_ArcState,
    _decode_ArcState,
    _encode_ArcState,
} from '../M3100ASN1TypeModule4/ArcState.ta.mjs';

/**
 * @summary AlarmReportingControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmReportingControl ::= SEQUENCE {
 *   controlledEntity         ObjectInstance,
 *   arcProbableCauseList     SET OF ProbableCause, -- empty means all
 *   arcState                 ArcState, -- the value alm(0) is not used
 *   timeRemainingInARCState  INTEGER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlarmReportingControl {
    constructor(
        /**
         * @summary `controlledEntity`.
         * @public
         * @readonly
         */
        readonly controlledEntity: ObjectInstance,
        /**
         * @summary `arcProbableCauseList`.
         * @public
         * @readonly
         */
        readonly arcProbableCauseList: ProbableCause[],
        /**
         * @summary `arcState`.
         * @public
         * @readonly
         */
        readonly arcState: ArcState,
        /**
         * @summary `timeRemainingInARCState`.
         * @public
         * @readonly
         */
        readonly timeRemainingInARCState: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a AlarmReportingControl
     * @description
     *
     * This takes an `object` and converts it to a `AlarmReportingControl`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlarmReportingControl`.
     * @returns {AlarmReportingControl}
     */
    public static _from_object(
        _o: { [_K in keyof AlarmReportingControl]: AlarmReportingControl[_K] }
    ): AlarmReportingControl {
        return new AlarmReportingControl(
            _o.controlledEntity,
            _o.arcProbableCauseList,
            _o.arcState,
            _o.timeRemainingInARCState
        );
    }

    /**
     * @summary The enum used as the type of the component `arcState`
     * @public
     * @static
     */

    public static _enum_for_arcState = _enum_for_ArcState;
}


/**
 * @summary The Leading Root Component Types of AlarmReportingControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlarmReportingControl: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'controlledEntity',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'arcProbableCauseList',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'arcState',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'timeRemainingInARCState',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of AlarmReportingControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlarmReportingControl: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AlarmReportingControl
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlarmReportingControl: $.ComponentSpec[] = [];


let _cached_decoder_for_AlarmReportingControl: $.ASN1Decoder<AlarmReportingControl> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AlarmReportingControl
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmReportingControl} The decoded data structure.
 */
export function _decode_AlarmReportingControl(el: _Element) {
    if (!_cached_decoder_for_AlarmReportingControl) {
        _cached_decoder_for_AlarmReportingControl = function (
            el: _Element
        ): AlarmReportingControl {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let controlledEntity!: ObjectInstance;
            let arcProbableCauseList!: ProbableCause[];
            let arcState!: ArcState;
            let timeRemainingInARCState: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                controlledEntity: (_el: _Element): void => {
                    controlledEntity = _decode_ObjectInstance(_el);
                },
                arcProbableCauseList: (_el: _Element): void => {
                    arcProbableCauseList = $._decodeSetOf<ProbableCause>(
                        () => _decode_ProbableCause
                    )(_el);
                },
                arcState: (_el: _Element): void => {
                    arcState = _decode_ArcState(_el);
                },
                timeRemainingInARCState: (_el: _Element): void => {
                    timeRemainingInARCState = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlarmReportingControl,
                _extension_additions_list_spec_for_AlarmReportingControl,
                _root_component_type_list_2_spec_for_AlarmReportingControl,
                undefined
            );
            return new AlarmReportingControl /* SEQUENCE_CONSTRUCTOR_CALL */(
                controlledEntity,
                arcProbableCauseList,
                arcState,
                timeRemainingInARCState
            );
        };
    }
    return _cached_decoder_for_AlarmReportingControl(el);
}


let _cached_encoder_for_AlarmReportingControl: $.ASN1Encoder<AlarmReportingControl> | null = null;


/**
 * @summary Encodes a(n) AlarmReportingControl into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmReportingControl, encoded as an ASN.1 Element.
 */
export function _encode_AlarmReportingControl(
    value: AlarmReportingControl,
    elGetter: $.ASN1Encoder<AlarmReportingControl>
) {
    if (!_cached_encoder_for_AlarmReportingControl) {
        _cached_encoder_for_AlarmReportingControl = function (
            value: AlarmReportingControl        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.controlledEntity,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ProbableCause>(
                            () => _encode_ProbableCause,
                            $.BER
                        )(value.arcProbableCauseList, $.BER),
                        /* REQUIRED   */ _encode_ArcState(
                            value.arcState,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.timeRemainingInARCState ===
                        undefined
                            ? undefined
                            : $._encodeInteger(
                                  value.timeRemainingInARCState,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlarmReportingControl(value, elGetter);
}


/* eslint-enable */
