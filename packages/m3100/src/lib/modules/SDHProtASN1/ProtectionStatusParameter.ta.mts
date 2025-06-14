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
    ProtectionStatus,
    _decode_ProtectionStatus,
    _encode_ProtectionStatus,
} from '../SDHProtASN1/ProtectionStatus.ta.mjs';
import {
    ProtectionDirection,
    _enum_for_ProtectionDirection,
    ProtectionDirection_bidirectional /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_ProtectionDirection,
    _encode_ProtectionDirection,
} from '../SDHProtASN1/ProtectionDirection.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ProtectionStatusParameter */
/**
 * @summary ProtectionStatusParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusParameter ::= SEQUENCE {
 *   oldProtectionStatus  ProtectionStatus,
 *   newProtectionStatus  ProtectionStatus,
 *   psDirection          ProtectionDirection DEFAULT bidirectional
 * }
 * ```
 *
 * @class
 */
export class ProtectionStatusParameter {
    constructor(
        /**
         * @summary `oldProtectionStatus`.
         * @public
         * @readonly
         */
        readonly oldProtectionStatus: ProtectionStatus,
        /**
         * @summary `newProtectionStatus`.
         * @public
         * @readonly
         */
        readonly newProtectionStatus: ProtectionStatus,
        /**
         * @summary `psDirection`.
         * @public
         * @readonly
         */
        readonly psDirection: OPTIONAL<ProtectionDirection>
    ) {}

    /**
     * @summary Restructures an object into a ProtectionStatusParameter
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionStatusParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionStatusParameter`.
     * @returns {ProtectionStatusParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtectionStatusParameter]: ProtectionStatusParameter[_K];
        }
    ): ProtectionStatusParameter {
        return new ProtectionStatusParameter(
            _o.oldProtectionStatus,
            _o.newProtectionStatus,
            _o.psDirection
        );
    }

    /**
     * @summary Getter that returns the default value for `psDirection`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_psDirection() {
        return ProtectionDirection_bidirectional;
    }
    /**
     * @summary The enum used as the type of the component `psDirection`
     * @public
     * @static
     */

    public static _enum_for_psDirection = _enum_for_ProtectionDirection;
}
/* END_OF_SYMBOL_DEFINITION ProtectionStatusParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionStatusParameter */
/**
 * @summary The Leading Root Component Types of ProtectionStatusParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionStatusParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'oldProtectionStatus',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'newProtectionStatus',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'psDirection',
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionStatusParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionStatusParameter */
/**
 * @summary The Trailing Root Component Types of ProtectionStatusParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionStatusParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionStatusParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionStatusParameter */
/**
 * @summary The Extension Addition Component Types of ProtectionStatusParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionStatusParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionStatusParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusParameter */
let _cached_decoder_for_ProtectionStatusParameter: $.ASN1Decoder<ProtectionStatusParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusParameter */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionStatusParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusParameter} The decoded data structure.
 */
export function _decode_ProtectionStatusParameter(el: _Element) {
    if (!_cached_decoder_for_ProtectionStatusParameter) {
        _cached_decoder_for_ProtectionStatusParameter = function (
            el: _Element
        ): ProtectionStatusParameter {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let oldProtectionStatus!: ProtectionStatus;
            let newProtectionStatus!: ProtectionStatus;
            let psDirection: OPTIONAL<ProtectionDirection> =
                ProtectionStatusParameter._default_value_for_psDirection;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                oldProtectionStatus: (_el: _Element): void => {
                    oldProtectionStatus = _decode_ProtectionStatus(_el);
                },
                newProtectionStatus: (_el: _Element): void => {
                    newProtectionStatus = _decode_ProtectionStatus(_el);
                },
                psDirection: (_el: _Element): void => {
                    psDirection = _decode_ProtectionDirection(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectionStatusParameter,
                _extension_additions_list_spec_for_ProtectionStatusParameter,
                _root_component_type_list_2_spec_for_ProtectionStatusParameter,
                undefined
            );
            return new ProtectionStatusParameter /* SEQUENCE_CONSTRUCTOR_CALL */(
                oldProtectionStatus,
                newProtectionStatus,
                psDirection
            );
        };
    }
    return _cached_decoder_for_ProtectionStatusParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionStatusParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusParameter */
let _cached_encoder_for_ProtectionStatusParameter: $.ASN1Encoder<ProtectionStatusParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusParameter */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionStatusParameter */
/**
 * @summary Encodes a(n) ProtectionStatusParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusParameter, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusParameter(
    value: ProtectionStatusParameter,
    elGetter: $.ASN1Encoder<ProtectionStatusParameter>
) {
    if (!_cached_encoder_for_ProtectionStatusParameter) {
        _cached_encoder_for_ProtectionStatusParameter = function (
            value: ProtectionStatusParameter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProtectionStatus(
                            value.oldProtectionStatus,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ProtectionStatus(
                            value.newProtectionStatus,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.psDirection === undefined ||
                        $.deepEq(
                            value.psDirection,
                            ProtectionStatusParameter._default_value_for_psDirection
                        )
                            ? undefined
                            : _encode_ProtectionDirection(
                                  value.psDirection,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionStatusParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionStatusParameter */

/* eslint-enable */
