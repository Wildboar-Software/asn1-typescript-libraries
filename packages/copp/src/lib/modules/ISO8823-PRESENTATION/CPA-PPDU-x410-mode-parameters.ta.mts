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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    _decode_RTOACapdu,
    _encode_RTOACapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTOACapdu.ta.mjs';
import {
    ConnectionData,
    _decode_ConnectionData,
    _encode_ConnectionData,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/ConnectionData.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CPA_PPDU_x410_mode_parameters */
/**
 * @summary CPA_PPDU_x410_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CPA-PPDU-x410-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CPA_PPDU_x410_mode_parameters {
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
         * @summary `connectionDataAC`.
         * @public
         * @readonly
         */
        readonly connectionDataAC: ConnectionData /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a CPA_PPDU_x410_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `CPA_PPDU_x410_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPA_PPDU_x410_mode_parameters`.
     * @returns {CPA_PPDU_x410_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof CPA_PPDU_x410_mode_parameters]: CPA_PPDU_x410_mode_parameters[_K];
        }
    ): CPA_PPDU_x410_mode_parameters {
        return new CPA_PPDU_x410_mode_parameters(
            _o.checkpointSize,
            _o.windowSize,
            _o.connectionDataAC
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
}
/* END_OF_SYMBOL_DEFINITION CPA_PPDU_x410_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CPA_PPDU_x410_mode_parameters */
/**
 * @summary The Leading Root Component Types of CPA_PPDU_x410_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CPA_PPDU_x410_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'checkpointSize',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'windowSize',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'connectionDataAC',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CPA_PPDU_x410_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CPA_PPDU_x410_mode_parameters */
/**
 * @summary The Trailing Root Component Types of CPA_PPDU_x410_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CPA_PPDU_x410_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CPA_PPDU_x410_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CPA_PPDU_x410_mode_parameters */
/**
 * @summary The Extension Addition Component Types of CPA_PPDU_x410_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CPA_PPDU_x410_mode_parameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CPA_PPDU_x410_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CPA_PPDU_x410_mode_parameters */
let _cached_decoder_for_CPA_PPDU_x410_mode_parameters: $.ASN1Decoder<CPA_PPDU_x410_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CPA_PPDU_x410_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _decode_CPA_PPDU_x410_mode_parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) CPA_PPDU_x410_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPA_PPDU_x410_mode_parameters} The decoded data structure.
 */
export function _decode_CPA_PPDU_x410_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_CPA_PPDU_x410_mode_parameters) {
        _cached_decoder_for_CPA_PPDU_x410_mode_parameters = function (
            el: _Element
        ): CPA_PPDU_x410_mode_parameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let checkpointSize: OPTIONAL<INTEGER> =
                CPA_PPDU_x410_mode_parameters._default_value_for_checkpointSize;
            let windowSize: OPTIONAL<INTEGER> =
                CPA_PPDU_x410_mode_parameters._default_value_for_windowSize;
            let connectionDataAC!: ConnectionData;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
                connectionDataAC: (_el: _Element): void => {
                    connectionDataAC = $._decode_explicit<ConnectionData>(
                        () => _decode_ConnectionData
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CPA_PPDU_x410_mode_parameters,
                _extension_additions_list_spec_for_CPA_PPDU_x410_mode_parameters,
                _root_component_type_list_2_spec_for_CPA_PPDU_x410_mode_parameters,
                undefined
            );
            return new CPA_PPDU_x410_mode_parameters /* SET_CONSTRUCTOR_CALL */(
                checkpointSize,
                windowSize,
                connectionDataAC
            );
        };
    }
    return _cached_decoder_for_CPA_PPDU_x410_mode_parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CPA_PPDU_x410_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CPA_PPDU_x410_mode_parameters */
let _cached_encoder_for_CPA_PPDU_x410_mode_parameters: $.ASN1Encoder<CPA_PPDU_x410_mode_parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CPA_PPDU_x410_mode_parameters */

/* START_OF_SYMBOL_DEFINITION _encode_CPA_PPDU_x410_mode_parameters */
/**
 * @summary Encodes a(n) CPA_PPDU_x410_mode_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPA_PPDU_x410_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_CPA_PPDU_x410_mode_parameters(
    value: CPA_PPDU_x410_mode_parameters,
    elGetter: $.ASN1Encoder<CPA_PPDU_x410_mode_parameters>
) {
    if (!_cached_encoder_for_CPA_PPDU_x410_mode_parameters) {
        _cached_encoder_for_CPA_PPDU_x410_mode_parameters = function (
            value: CPA_PPDU_x410_mode_parameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.checkpointSize === undefined ||
                        $.deepEq(
                            value.checkpointSize,
                            CPA_PPDU_x410_mode_parameters._default_value_for_checkpointSize
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
                            CPA_PPDU_x410_mode_parameters._default_value_for_windowSize
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.windowSize, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_ConnectionData,
                            $.BER
                        )(value.connectionDataAC, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CPA_PPDU_x410_mode_parameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CPA_PPDU_x410_mode_parameters */

/* eslint-enable */
