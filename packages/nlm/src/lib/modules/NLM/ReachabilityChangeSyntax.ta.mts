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
import * as $ from '@wildboar/asn1/functional';
import {
    ReachabilityChangeSyntax_newState,
    _enum_for_ReachabilityChangeSyntax_newState,
    _decode_ReachabilityChangeSyntax_newState,
    _encode_ReachabilityChangeSyntax_newState,
} from '../NLM/ReachabilityChangeSyntax-newState.ta.mjs';
import {
    NAddress,
    _decode_NAddress,
    _encode_NAddress,
} from '../NLM/NAddress.ta.mjs';
import {
    SNPAAddress,
    _decode_SNPAAddress,
    _encode_SNPAAddress,
} from '../NLM/SNPAAddress.ta.mjs';
import {
    ReachabilityChangeSyntax_reason,
    _enum_for_ReachabilityChangeSyntax_reason,
    _decode_ReachabilityChangeSyntax_reason,
    _encode_ReachabilityChangeSyntax_reason,
} from '../NLM/ReachabilityChangeSyntax-reason.ta.mjs';

/**
 * @summary ReachabilityChangeSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax ::= SEQUENCE {
 *   newState     [1]  ENUMERATED {down(0), up(1)},
 *   nAddresses   [2]  SET OF NAddress,
 *   sNPAAddress  [3]  SNPAAddress OPTIONAL,
 *   reason
 *     [4]  ENUMERATED {holdingTimerExpired(0), circuitDisabled(1)} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ReachabilityChangeSyntax {
    constructor(
        /**
         * @summary `newState`.
         * @public
         * @readonly
         */
        readonly newState: ReachabilityChangeSyntax_newState,
        /**
         * @summary `nAddresses`.
         * @public
         * @readonly
         */
        readonly nAddresses: NAddress[],
        /**
         * @summary `sNPAAddress`.
         * @public
         * @readonly
         */
        readonly sNPAAddress: OPTIONAL<SNPAAddress>,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<ReachabilityChangeSyntax_reason>
    ) {}

    /**
     * @summary Restructures an object into a ReachabilityChangeSyntax
     * @description
     *
     * This takes an `object` and converts it to a `ReachabilityChangeSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReachabilityChangeSyntax`.
     * @returns {ReachabilityChangeSyntax}
     */
    public static _from_object(
        _o: {
            [_K in keyof ReachabilityChangeSyntax]: ReachabilityChangeSyntax[_K];
        }
    ): ReachabilityChangeSyntax {
        return new ReachabilityChangeSyntax(
            _o.newState,
            _o.nAddresses,
            _o.sNPAAddress,
            _o.reason
        );
    }

    /**
     * @summary The enum used as the type of the component `newState`
     * @public
     * @static
     */

    public static _enum_for_newState = _enum_for_ReachabilityChangeSyntax_newState;
    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_ReachabilityChangeSyntax_reason;
}


/**
 * @summary The Leading Root Component Types of ReachabilityChangeSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReachabilityChangeSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'newState',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'nAddresses',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'sNPAAddress',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'reason',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of ReachabilityChangeSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReachabilityChangeSyntax: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ReachabilityChangeSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReachabilityChangeSyntax: $.ComponentSpec[] = [];


let _cached_decoder_for_ReachabilityChangeSyntax: $.ASN1Decoder<ReachabilityChangeSyntax> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReachabilityChangeSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReachabilityChangeSyntax} The decoded data structure.
 */
export function _decode_ReachabilityChangeSyntax(el: _Element) {
    if (!_cached_decoder_for_ReachabilityChangeSyntax) {
        _cached_decoder_for_ReachabilityChangeSyntax = function (
            el: _Element
        ): ReachabilityChangeSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let newState!: ReachabilityChangeSyntax_newState;
            let nAddresses!: NAddress[];
            let sNPAAddress: OPTIONAL<SNPAAddress>;
            let reason: OPTIONAL<ReachabilityChangeSyntax_reason>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                newState: (_el: _Element): void => {
                    newState = $._decode_implicit<ReachabilityChangeSyntax_newState>(
                        () => _decode_ReachabilityChangeSyntax_newState
                    )(_el);
                },
                nAddresses: (_el: _Element): void => {
                    nAddresses = $._decode_implicit<NAddress[]>(() =>
                        $._decodeSetOf<NAddress>(() => _decode_NAddress)
                    )(_el);
                },
                sNPAAddress: (_el: _Element): void => {
                    sNPAAddress = $._decode_implicit<SNPAAddress>(
                        () => _decode_SNPAAddress
                    )(_el);
                },
                reason: (_el: _Element): void => {
                    reason = $._decode_implicit<ReachabilityChangeSyntax_reason>(
                        () => _decode_ReachabilityChangeSyntax_reason
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReachabilityChangeSyntax,
                _extension_additions_list_spec_for_ReachabilityChangeSyntax,
                _root_component_type_list_2_spec_for_ReachabilityChangeSyntax,
                undefined
            );
            return new ReachabilityChangeSyntax /* SEQUENCE_CONSTRUCTOR_CALL */(
                newState,
                nAddresses,
                sNPAAddress,
                reason
            );
        };
    }
    return _cached_decoder_for_ReachabilityChangeSyntax(el);
}


let _cached_encoder_for_ReachabilityChangeSyntax: $.ASN1Encoder<ReachabilityChangeSyntax> | null = null;


/**
 * @summary Encodes a(n) ReachabilityChangeSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReachabilityChangeSyntax, encoded as an ASN.1 Element.
 */
export function _encode_ReachabilityChangeSyntax(
    value: ReachabilityChangeSyntax,
    elGetter: $.ASN1Encoder<ReachabilityChangeSyntax>
) {
    if (!_cached_encoder_for_ReachabilityChangeSyntax) {
        _cached_encoder_for_ReachabilityChangeSyntax = function (
            value: ReachabilityChangeSyntax        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_ReachabilityChangeSyntax_newState,
                            $.BER
                        )(value.newState, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () =>
                                $._encodeSetOf<NAddress>(
                                    () => _encode_NAddress,
                                    $.BER
                                ),
                            $.BER
                        )(value.nAddresses, $.BER),
                        /* IF_ABSENT  */ value.sNPAAddress === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_SNPAAddress,
                                  $.BER
                              )(value.sNPAAddress, $.BER),
                        /* IF_ABSENT  */ value.reason === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_ReachabilityChangeSyntax_reason,
                                  $.BER
                              )(value.reason, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ReachabilityChangeSyntax(value, elGetter);
}


/* eslint-enable */
