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
    _decode_RTORJapdu,
    _encode_RTORJapdu,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RTORJapdu.ta.mjs';
import {
    RefuseReason,
    _decode_RefuseReason,
    _encode_RefuseReason,
} from '@wildboar/rtse/src/lib/modules/Reliable-Transfer-APDU/RefuseReason.ta.mjs';

/**
 * @summary CPR_PPDU_x400_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CPR-PPDU-x400-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CPR_PPDU_x400_mode_parameters {
    constructor(
        /**
         * @summary `refuseReason`.
         * @public
         * @readonly
         */
        readonly refuseReason: OPTIONAL<RefuseReason> /* REPLICATED_COMPONENT */,
        /**
         * @summary `userDataRJ`.
         * @public
         * @readonly
         */
        readonly userDataRJ: OPTIONAL<_Element> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a CPR_PPDU_x400_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `CPR_PPDU_x400_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPR_PPDU_x400_mode_parameters`.
     * @returns {CPR_PPDU_x400_mode_parameters}
     */
    public static _from_object(
        _o: {
            [_K in keyof CPR_PPDU_x400_mode_parameters]: CPR_PPDU_x400_mode_parameters[_K];
        }
    ): CPR_PPDU_x400_mode_parameters {
        return new CPR_PPDU_x400_mode_parameters(
            _o.refuseReason,
            _o.userDataRJ
        );
    }
}


/**
 * @summary The Leading Root Component Types of CPR_PPDU_x400_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CPR_PPDU_x400_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'refuseReason',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'userDataRJ',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of CPR_PPDU_x400_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CPR_PPDU_x400_mode_parameters: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CPR_PPDU_x400_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CPR_PPDU_x400_mode_parameters: $.ComponentSpec[] = [];


let _cached_decoder_for_CPR_PPDU_x400_mode_parameters: $.ASN1Decoder<CPR_PPDU_x400_mode_parameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CPR_PPDU_x400_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CPR_PPDU_x400_mode_parameters} The decoded data structure.
 */
export function _decode_CPR_PPDU_x400_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_CPR_PPDU_x400_mode_parameters) {
        _cached_decoder_for_CPR_PPDU_x400_mode_parameters = function (
            el: _Element
        ): CPR_PPDU_x400_mode_parameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let refuseReason: OPTIONAL<RefuseReason>;
            let userDataRJ: OPTIONAL<_Element>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                refuseReason: (_el: _Element): void => {
                    refuseReason = $._decode_implicit<RefuseReason>(
                        () => _decode_RefuseReason
                    )(_el);
                },
                userDataRJ: (_el: _Element): void => {
                    userDataRJ = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CPR_PPDU_x400_mode_parameters,
                _extension_additions_list_spec_for_CPR_PPDU_x400_mode_parameters,
                _root_component_type_list_2_spec_for_CPR_PPDU_x400_mode_parameters,
                undefined
            );
            return new CPR_PPDU_x400_mode_parameters /* SET_CONSTRUCTOR_CALL */(
                refuseReason,
                userDataRJ
            );
        };
    }
    return _cached_decoder_for_CPR_PPDU_x400_mode_parameters(el);
}


let _cached_encoder_for_CPR_PPDU_x400_mode_parameters: $.ASN1Encoder<CPR_PPDU_x400_mode_parameters> | null = null;


/**
 * @summary Encodes a(n) CPR_PPDU_x400_mode_parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPR_PPDU_x400_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_CPR_PPDU_x400_mode_parameters(
    value: CPR_PPDU_x400_mode_parameters,
    elGetter: $.ASN1Encoder<CPR_PPDU_x400_mode_parameters>
) {
    if (!_cached_encoder_for_CPR_PPDU_x400_mode_parameters) {
        _cached_encoder_for_CPR_PPDU_x400_mode_parameters = function (
            value: CPR_PPDU_x400_mode_parameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.refuseReason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RefuseReason,
                                  $.BER
                              )(value.refuseReason, $.BER),
                        /* IF_ABSENT  */ value.userDataRJ === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.userDataRJ, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CPR_PPDU_x400_mode_parameters(value, elGetter);
}


/* eslint-enable */
