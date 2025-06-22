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
    Mode_selector,
    _decode_Mode_selector,
    _encode_Mode_selector,
} from '../ISO8823-PRESENTATION/Mode-selector.ta.mjs';
import {
    CP_type_x410_mode_parameters,
    _decode_CP_type_x410_mode_parameters,
    _encode_CP_type_x410_mode_parameters,
} from '../ISO8823-PRESENTATION/CP-type-x410-mode-parameters.ta.mjs';
import {
    CP_type_normal_mode_parameters,
    _decode_CP_type_normal_mode_parameters,
    _encode_CP_type_normal_mode_parameters,
} from '../ISO8823-PRESENTATION/CP-type-normal-mode-parameters.ta.mjs';

/**
 * @summary CP_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CP-type ::= SET {
 *   mode-selector           [0] IMPLICIT Mode-selector,
 *   x410-mode-parameters
 *     [1] IMPLICIT SET {COMPONENTS OF Reliable-Transfer-APDU.RTORQapdu} OPTIONAL--  This OPTIONAL element shall be absent for a
 *   --  nested presentation connection.
 *   --  Shall be used for X.410 mode only. Shall be bitwise
 *   --  compatible with CCITT Recommendation X.410-1984.
 *   --  This shall be the User data parameter of the CP PPDU1) --,
 *   normal-mode-parameters
 *     [2] IMPLICIT SEQUENCE {protocol-version
 *                              [0] IMPLICIT Protocol-version DEFAULT {version-1},
 *                            calling-presentation-selector
 *                              [1] IMPLICIT Calling-presentation-selector
 *                                OPTIONAL,
 *                            called-presentation-selector
 *                              [2] IMPLICIT Called-presentation-selector OPTIONAL,
 *                            presentation-context-definition-list
 *                              [4] IMPLICIT Presentation-context-definition-list
 *                                OPTIONAL,
 *                            default-context-name
 *                              [6] IMPLICIT Default-context-name OPTIONAL,
 *                            presentation-requirements
 *                              [8] IMPLICIT Presentation-requirements OPTIONAL,
 *                            user-session-requirements
 *                              [9] IMPLICIT User-session-requirements OPTIONAL-- shall not be present if equal to the Revised session
 *                            -- requirements parameter --,
 *                            protocol-options
 *                              [11]  Protocol-options DEFAULT {},
 *                            --  shall be absent if no options are offered
 *                            initiators-nominated-context
 *                              [12]  Presentation-context-identifier OPTIONAL,
 *                            --  shall only be present if nominated-context is
 *                            --  offered in protocol-options
 *                            extensions
 *                              [14]  SEQUENCE {...} OPTIONAL,
 *                            --  to allow for future extensions
 *                            user-data
 *                              User-data OPTIONAL} OPTIONAL
 *   -- Shall be used for normal mode only.
 *   -- Shall be the parameters of the CP PPDU.
 * }
 * ```
 *
 * @class
 */
export class CP_type {
    constructor(
        /**
         * @summary `mode_selector`.
         * @public
         * @readonly
         */
        readonly mode_selector: Mode_selector,
        /**
         * @summary `x410_mode_parameters`.
         * @public
         * @readonly
         */
        readonly x410_mode_parameters: OPTIONAL<CP_type_x410_mode_parameters>,
        /**
         * @summary `normal_mode_parameters`.
         * @public
         * @readonly
         */
        readonly normal_mode_parameters: OPTIONAL<CP_type_normal_mode_parameters>
    ) {}

    /**
     * @summary Restructures an object into a CP_type
     * @description
     *
     * This takes an `object` and converts it to a `CP_type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CP_type`.
     * @returns {CP_type}
     */
    public static _from_object(
        _o: { [_K in keyof CP_type]: CP_type[_K] }
    ): CP_type {
        return new CP_type(
            _o.mode_selector,
            _o.x410_mode_parameters,
            _o.normal_mode_parameters
        );
    }
}


/**
 * @summary The Leading Root Component Types of CP_type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CP_type: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'mode-selector',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'x410-mode-parameters',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'normal-mode-parameters',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of CP_type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CP_type: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CP_type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CP_type: $.ComponentSpec[] = [];


let _cached_decoder_for_CP_type: $.ASN1Decoder<CP_type> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CP_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CP_type} The decoded data structure.
 */
export function _decode_CP_type(el: _Element) {
    if (!_cached_decoder_for_CP_type) {
        _cached_decoder_for_CP_type = function (el: _Element): CP_type {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_selector!: Mode_selector;
            let x410_mode_parameters: OPTIONAL<CP_type_x410_mode_parameters>;
            let normal_mode_parameters: OPTIONAL<CP_type_normal_mode_parameters>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'mode-selector': (_el: _Element): void => {
                    mode_selector = $._decode_implicit<Mode_selector>(
                        () => _decode_Mode_selector
                    )(_el);
                },
                'x410-mode-parameters': (_el: _Element): void => {
                    x410_mode_parameters = $._decode_implicit<CP_type_x410_mode_parameters>(
                        () => _decode_CP_type_x410_mode_parameters
                    )(_el);
                },
                'normal-mode-parameters': (_el: _Element): void => {
                    normal_mode_parameters = $._decode_implicit<CP_type_normal_mode_parameters>(
                        () => _decode_CP_type_normal_mode_parameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CP_type,
                _extension_additions_list_spec_for_CP_type,
                _root_component_type_list_2_spec_for_CP_type,
                undefined
            );
            return new CP_type /* SET_CONSTRUCTOR_CALL */(
                mode_selector,
                x410_mode_parameters,
                normal_mode_parameters
            );
        };
    }
    return _cached_decoder_for_CP_type(el);
}


let _cached_encoder_for_CP_type: $.ASN1Encoder<CP_type> | null = null;


/**
 * @summary Encodes a(n) CP_type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CP_type, encoded as an ASN.1 Element.
 */
export function _encode_CP_type(
    value: CP_type,
    elGetter: $.ASN1Encoder<CP_type>
) {
    if (!_cached_encoder_for_CP_type) {
        _cached_encoder_for_CP_type = function (
            value: CP_type        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_Mode_selector,
                            $.BER
                        )(value.mode_selector, $.BER),
                        /* IF_ABSENT  */ value.x410_mode_parameters ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CP_type_x410_mode_parameters,
                                  $.BER
                              )(value.x410_mode_parameters, $.BER),
                        /* IF_ABSENT  */ value.normal_mode_parameters ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_CP_type_normal_mode_parameters,
                                  $.BER
                              )(value.normal_mode_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CP_type(value, elGetter);
}


/* eslint-enable */
