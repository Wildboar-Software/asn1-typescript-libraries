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
    _decode_RTORQapdu,
    _encode_RTORQapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTORQapdu.ta.mjs';
import {
    RTORQapdu_dialogueMode,
    monologue /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RTORQapdu_dialogueMode,
    _encode_RTORQapdu_dialogueMode,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTORQapdu-dialogueMode.ta.mjs';
import {
    ConnectionData,
    _decode_ConnectionData,
    _encode_ConnectionData,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/ConnectionData.ta.mjs';

/**
 * @summary CP_type_x410_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CP-type-x410-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CP_type_x410_mode_parameters {
    constructor(
        /**
         * @summary `checkpointSize`.
         * @public
         * @readonly
         */
        readonly checkpointSize: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */,
        /**
         * @summary `windowSize`.
         * @public
         * @readonly
         */
        readonly windowSize: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */,
        /**
         * @summary `dialogueMode`.
         * @public
         * @readonly
         */
        readonly dialogueMode: OPTIONAL<RTORQapdu_dialogueMode> /* REPLICATED_COMPONENT */,
        /**
         * @summary `connectionDataRQ`.
         * @public
         * @readonly
         */
        readonly connectionDataRQ: ConnectionData /* REPLICATED_COMPONENT */,
        /**
         * @summary `applicationProtocol`.
         * @public
         * @readonly
         */
        readonly applicationProtocol: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a CP_type_x410_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `CP_type_x410_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CP_type_x410_mode_parameters`.
     * @returns {CP_type_x410_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof CP_type_x410_mode_parameters]: CP_type_x410_mode_parameters[_K];
        }
    ): CP_type_x410_mode_parameters {
        return new CP_type_x410_mode_parameters(
            _o.checkpointSize,
            _o.windowSize,
            _o.dialogueMode,
            _o.connectionDataRQ,
            _o.applicationProtocol
        );
    }

    /**
     * @summary Getter that returns the default value for `checkpointSize`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_checkpointSize() {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `windowSize`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_windowSize() {
        return 3;
    }
    /**
     * @summary Getter that returns the default value for `dialogueMode`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dialogueMode() {
        return monologue;
    }
}


/**
 * @summary The Leading Root Component Types of CP_type_x410_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CP_type_x410_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'checkpointSize',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'windowSize',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'dialogueMode',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'connectionDataRQ',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'applicationProtocol',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of CP_type_x410_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CP_type_x410_mode_parameters: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CP_type_x410_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CP_type_x410_mode_parameters: $.ComponentSpec[] = [];


let _cached_decoder_for_CP_type_x410_mode_parameters: $.ASN1Decoder<CP_type_x410_mode_parameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CP_type_x410_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CP_type_x410_mode_parameters} The decoded data structure.
 */
export function _decode_CP_type_x410_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_CP_type_x410_mode_parameters) {
        _cached_decoder_for_CP_type_x410_mode_parameters = function (
            el: _Element
        ): CP_type_x410_mode_parameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let checkpointSize: OPTIONAL<INTEGER> =
                CP_type_x410_mode_parameters._default_value_for_checkpointSize;
            let windowSize: OPTIONAL<INTEGER> =
                CP_type_x410_mode_parameters._default_value_for_windowSize;
            let dialogueMode: OPTIONAL<RTORQapdu_dialogueMode> =
                CP_type_x410_mode_parameters._default_value_for_dialogueMode;
            let connectionDataRQ!: ConnectionData;
            let applicationProtocol: OPTIONAL<INTEGER>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                checkpointSize: (_el: _Element): void => {
                    checkpointSize = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                windowSize: (_el: _Element): void => {
                    windowSize = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                dialogueMode: (_el: _Element): void => {
                    dialogueMode = $._decode_implicit<RTORQapdu_dialogueMode>(
                        () => _decode_RTORQapdu_dialogueMode
                    )(_el);
                },
                connectionDataRQ: (_el: _Element): void => {
                    connectionDataRQ = $._decode_explicit<ConnectionData>(
                        () => _decode_ConnectionData
                    )(_el);
                },
                applicationProtocol: (_el: _Element): void => {
                    applicationProtocol = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CP_type_x410_mode_parameters,
                _extension_additions_list_spec_for_CP_type_x410_mode_parameters,
                _root_component_type_list_2_spec_for_CP_type_x410_mode_parameters,
                undefined
            );
            return new CP_type_x410_mode_parameters /* SET_CONSTRUCTOR_CALL */(
                checkpointSize,
                windowSize,
                dialogueMode,
                connectionDataRQ,
                applicationProtocol
            );
        };
    }
    return _cached_decoder_for_CP_type_x410_mode_parameters(el);
}


let _cached_encoder_for_CP_type_x410_mode_parameters: $.ASN1Encoder<CP_type_x410_mode_parameters> | null = null;


/**
 * @summary Encodes a(n) CP_type_x410_mode_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CP_type_x410_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_CP_type_x410_mode_parameters(
    value: CP_type_x410_mode_parameters,
    elGetter: $.ASN1Encoder<CP_type_x410_mode_parameters>
) {
    if (!_cached_encoder_for_CP_type_x410_mode_parameters) {
        _cached_encoder_for_CP_type_x410_mode_parameters = function (
            value: CP_type_x410_mode_parameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.checkpointSize === undefined ||
                        $.deepEq(
                            value.checkpointSize,
                            CP_type_x410_mode_parameters._default_value_for_checkpointSize
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.checkpointSize, $.BER),
                        /* IF_DEFAULT */ value.windowSize === undefined ||
                        $.deepEq(
                            value.windowSize,
                            CP_type_x410_mode_parameters._default_value_for_windowSize
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.windowSize, $.BER),
                        /* IF_DEFAULT */ value.dialogueMode === undefined ||
                        $.deepEq(
                            value.dialogueMode,
                            CP_type_x410_mode_parameters._default_value_for_dialogueMode
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_RTORQapdu_dialogueMode,
                                  $.BER
                              )(value.dialogueMode, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            3,
                            () => _encode_ConnectionData,
                            $.BER
                        )(value.connectionDataRQ, $.BER),
                        /* IF_ABSENT  */ value.applicationProtocol === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.applicationProtocol, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CP_type_x410_mode_parameters(value, elGetter);
}


/* eslint-enable */
