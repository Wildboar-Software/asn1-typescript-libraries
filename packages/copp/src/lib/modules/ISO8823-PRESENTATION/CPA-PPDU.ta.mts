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
    Mode_selector,
    _decode_Mode_selector,
    _encode_Mode_selector,
} from '../ISO8823-PRESENTATION/Mode-selector.ta.mjs';
import {
    CPA_PPDU_x410_mode_parameters,
    _decode_CPA_PPDU_x410_mode_parameters,
    _encode_CPA_PPDU_x410_mode_parameters,
} from '../ISO8823-PRESENTATION/CPA-PPDU-x410-mode-parameters.ta.mjs';
import {
    CPA_PPDU_normal_mode_parameters,
    _decode_CPA_PPDU_normal_mode_parameters,
    _encode_CPA_PPDU_normal_mode_parameters,
} from '../ISO8823-PRESENTATION/CPA-PPDU-normal-mode-parameters.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CPA_PPDU */
/**
 * @summary CPA_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CPA-PPDU ::= SET {
 *   mode-selector           [0] IMPLICIT Mode-selector,
 *   x410-mode-parameters
 *     [1] IMPLICIT SET {COMPONENTS OF Reliable-Transfer-APDU.RTOACapdu} OPTIONAL--  This OPTIONAL element shall be absent for a
 *   --  nested presentation connection.
 *   --  Shall be used for X.410 mode only. Shall be bitwise
 *   --  compatible with CCITT Recommendation X.410-1984.
 *   --  This shall be the User data parameter of the CPA PPDU1) --,
 *   normal-mode-parameters
 *     [2] IMPLICIT SEQUENCE {protocol-version
 *                              [0] IMPLICIT Protocol-version DEFAULT {version-1},
 *                            responding-presentation-selector
 *                              [3] IMPLICIT Responding-presentation-selector
 *                                OPTIONAL,
 *                            presentation-context-definition-result-list
 *                              [5] IMPLICIT Presentation-context-definition-result-list
 *                                OPTIONAL,
 *                            presentation-requirements
 *                              [8] IMPLICIT Presentation-requirements OPTIONAL,
 *                            user-session-requirements
 *                              [9] IMPLICIT User-session-requirements OPTIONAL,
 *                            --  shall not be present if equal to the Revised session
 *                            --  requirements parameter
 *                            protocol-options
 *                              [11]  Protocol-options DEFAULT {},
 *                            --  shall be absent if no options are selected
 *                            responders-nominated-context
 *                              [13]  Presentation-context-identifier OPTIONAL,
 *                            --  shall only be present if nominated-context is
 *                            --  selected in protocol-options
 *                            user-data
 *                              User-data OPTIONAL} OPTIONAL
 *   --  Shall be used for normal mode only.
 * }
 * ```
 *
 * @class
 */
export class CPA_PPDU {
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
        readonly x410_mode_parameters: OPTIONAL<CPA_PPDU_x410_mode_parameters>,
        /**
         * @summary `normal_mode_parameters`.
         * @public
         * @readonly
         */
        readonly normal_mode_parameters: OPTIONAL<CPA_PPDU_normal_mode_parameters>
    ) {}

    /**
     * @summary Restructures an object into a CPA_PPDU
     * @description
     *
     * This takes an `object` and converts it to a `CPA_PPDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPA_PPDU`.
     * @returns {CPA_PPDU}
     */
    public static _from_object(
        _o: { [_K in keyof CPA_PPDU]: CPA_PPDU[_K] }
    ): CPA_PPDU {
        return new CPA_PPDU(
            _o.mode_selector,
            _o.x410_mode_parameters,
            _o.normal_mode_parameters
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CPA_PPDU */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CPA_PPDU */
/**
 * @summary The Leading Root Component Types of CPA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CPA_PPDU: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'mode-selector',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'x410-mode-parameters',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'normal-mode-parameters',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CPA_PPDU */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CPA_PPDU */
/**
 * @summary The Trailing Root Component Types of CPA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CPA_PPDU: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CPA_PPDU */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CPA_PPDU */
/**
 * @summary The Extension Addition Component Types of CPA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CPA_PPDU: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CPA_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CPA_PPDU */
let _cached_decoder_for_CPA_PPDU: $.ASN1Decoder<CPA_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CPA_PPDU */

/* START_OF_SYMBOL_DEFINITION _decode_CPA_PPDU */
/**
 * @summary Decodes an ASN.1 element into a(n) CPA_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPA_PPDU} The decoded data structure.
 */
export function _decode_CPA_PPDU(el: _Element) {
    if (!_cached_decoder_for_CPA_PPDU) {
        _cached_decoder_for_CPA_PPDU = function (el: _Element): CPA_PPDU {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_selector!: Mode_selector;
            let x410_mode_parameters: OPTIONAL<CPA_PPDU_x410_mode_parameters>;
            let normal_mode_parameters: OPTIONAL<CPA_PPDU_normal_mode_parameters>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'mode-selector': (_el: _Element): void => {
                    mode_selector = $._decode_implicit<Mode_selector>(
                        () => _decode_Mode_selector
                    )(_el);
                },
                'x410-mode-parameters': (_el: _Element): void => {
                    x410_mode_parameters = $._decode_implicit<CPA_PPDU_x410_mode_parameters>(
                        () => _decode_CPA_PPDU_x410_mode_parameters
                    )(_el);
                },
                'normal-mode-parameters': (_el: _Element): void => {
                    normal_mode_parameters = $._decode_implicit<CPA_PPDU_normal_mode_parameters>(
                        () => _decode_CPA_PPDU_normal_mode_parameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CPA_PPDU,
                _extension_additions_list_spec_for_CPA_PPDU,
                _root_component_type_list_2_spec_for_CPA_PPDU,
                undefined
            );
            return new CPA_PPDU /* SET_CONSTRUCTOR_CALL */(
                mode_selector,
                x410_mode_parameters,
                normal_mode_parameters
            );
        };
    }
    return _cached_decoder_for_CPA_PPDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CPA_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CPA_PPDU */
let _cached_encoder_for_CPA_PPDU: $.ASN1Encoder<CPA_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CPA_PPDU */

/* START_OF_SYMBOL_DEFINITION _encode_CPA_PPDU */
/**
 * @summary Encodes a(n) CPA_PPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPA_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_CPA_PPDU(
    value: CPA_PPDU,
    elGetter: $.ASN1Encoder<CPA_PPDU>
) {
    if (!_cached_encoder_for_CPA_PPDU) {
        _cached_encoder_for_CPA_PPDU = function (
            value: CPA_PPDU        ): _Element {
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
                                  () => _encode_CPA_PPDU_x410_mode_parameters,
                                  $.BER
                              )(value.x410_mode_parameters, $.BER),
                        /* IF_ABSENT  */ value.normal_mode_parameters ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_CPA_PPDU_normal_mode_parameters,
                                  $.BER
                              )(value.normal_mode_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CPA_PPDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CPA_PPDU */

/* eslint-enable */
