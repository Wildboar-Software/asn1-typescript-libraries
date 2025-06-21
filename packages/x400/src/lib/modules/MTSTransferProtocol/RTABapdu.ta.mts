/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
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
    AbortReason,
    _decode_AbortReason,
    _encode_AbortReason,
} from '../MTSTransferProtocol/AbortReason.ta.mjs';
/**
 * @summary RTABapdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTABapdu ::= SET {
 *   abortReason         [0] IMPLICIT AbortReason OPTIONAL,
 *   reflectedParameter  [1] IMPLICIT BIT STRING OPTIONAL,
 *   -- 8 bits maximum, only if abortReason is invalidParameter
 *   userdataAB
 *     [2]  TYPE-IDENTIFIER.&Type
 *       OPTIONAL -- only in normal mode and if abortReason--
 *   -- is userError
 * }
 * ```
 *
 * @class
 */
export class RTABapdu {
    constructor(
        /**
         * @summary `abortReason`.
         * @public
         * @readonly
         */
        readonly abortReason: OPTIONAL<AbortReason>,
        /**
         * @summary `reflectedParameter`.
         * @public
         * @readonly
         */
        readonly reflectedParameter: OPTIONAL<BIT_STRING>,
        /**
         * @summary `userdataAB`.
         * @public
         * @readonly
         */
        readonly userdataAB: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a RTABapdu
     * @description
     *
     * This takes an `object` and converts it to a `RTABapdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RTABapdu`.
     * @returns {RTABapdu}
     */
    public static _from_object(
        _o: { [_K in keyof RTABapdu]: RTABapdu[_K] }
    ): RTABapdu {
        return new RTABapdu(
            _o.abortReason,
            _o.reflectedParameter,
            _o.userdataAB
        );
    }
}

/**
 * @summary The Leading Root Component Types of RTABapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RTABapdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'abortReason',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'reflectedParameter',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'userdataAB',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of RTABapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RTABapdu: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RTABapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RTABapdu: $.ComponentSpec[] = [];

let _cached_decoder_for_RTABapdu: $.ASN1Decoder<RTABapdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RTABapdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RTABapdu} The decoded data structure.
 */
export function _decode_RTABapdu(el: _Element) {
    if (!_cached_decoder_for_RTABapdu) {
        _cached_decoder_for_RTABapdu = function (el: _Element): RTABapdu {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let abortReason: OPTIONAL<AbortReason>;
            let reflectedParameter: OPTIONAL<BIT_STRING>;
            let userdataAB: OPTIONAL<_Element>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                abortReason: (_el: _Element): void => {
                    abortReason = $._decode_implicit<AbortReason>(
                        () => _decode_AbortReason
                    )(_el);
                },
                reflectedParameter: (_el: _Element): void => {
                    reflectedParameter = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                userdataAB: (_el: _Element): void => {
                    userdataAB = $._decode_implicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RTABapdu,
                _extension_additions_list_spec_for_RTABapdu,
                _root_component_type_list_2_spec_for_RTABapdu,
                undefined
            );
            return new RTABapdu /* SET_CONSTRUCTOR_CALL */(
                abortReason,
                reflectedParameter,
                userdataAB
            );
        };
    }
    return _cached_decoder_for_RTABapdu(el);
}

let _cached_encoder_for_RTABapdu: $.ASN1Encoder<RTABapdu> | null = null;

/**
 * @summary Encodes a(n) RTABapdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTABapdu, encoded as an ASN.1 Element.
 */
export function _encode_RTABapdu(
    value: RTABapdu,
    elGetter: $.ASN1Encoder<RTABapdu>
) {
    if (!_cached_encoder_for_RTABapdu) {
        _cached_encoder_for_RTABapdu = function (
            value: RTABapdu        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.abortReason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AbortReason,
                                  $.BER
                              )(value.abortReason, $.BER),
                        /* IF_ABSENT  */ value.reflectedParameter === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.reflectedParameter, $.BER),
                        /* IF_ABSENT  */ value.userdataAB === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.userdataAB, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RTABapdu(value, elGetter);
}


/* eslint-enable */
