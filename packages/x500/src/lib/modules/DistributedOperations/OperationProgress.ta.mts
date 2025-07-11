/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OperationProgress_nameResolutionPhase,
    _decode_OperationProgress_nameResolutionPhase,
    _encode_OperationProgress_nameResolutionPhase,
    _enum_for_OperationProgress_nameResolutionPhase,
} from "../DistributedOperations/OperationProgress-nameResolutionPhase.ta.mjs";
/**
 * @summary OperationProgress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationProgress ::= SET {
 *   nameResolutionPhase  [0]  ENUMERATED {
 *     notStarted  (1),
 *     proceeding  (2),
 *     completed   (3),
 *     ... },
 *   nextRDNToBeResolved  [1]  INTEGER OPTIONAL,
 *   ... }
 * ```
 *
 */
export class OperationProgress {
    constructor(
        /**
         * @summary `nameResolutionPhase`.
         * @public
         * @readonly
         */
        readonly nameResolutionPhase: OperationProgress_nameResolutionPhase,
        /**
         * @summary `nextRDNToBeResolved`.
         * @public
         * @readonly
         */
        readonly nextRDNToBeResolved?: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a OperationProgress
     * @description
     *
     * This takes an `object` and converts it to a `OperationProgress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperationProgress`.
     * @returns {OperationProgress}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OperationProgress]: OperationProgress[_K] }>
    ): OperationProgress {
        return new OperationProgress(
            _o.nameResolutionPhase,
            _o.nextRDNToBeResolved,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `nameResolutionPhase`
     * @public
     * @static
     */

    public static _enum_for_nameResolutionPhase = _enum_for_OperationProgress_nameResolutionPhase;
}

/**
 * @summary The Leading Root Component Types of OperationProgress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OperationProgress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "nameResolutionPhase",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "nextRDNToBeResolved",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of OperationProgress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OperationProgress: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OperationProgress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OperationProgress: $.ComponentSpec[] = [];

let _cached_decoder_for_OperationProgress: $.ASN1Decoder<OperationProgress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationProgress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationProgress} The decoded data structure.
 */
export function _decode_OperationProgress(el: _Element): OperationProgress {
    if (!_cached_decoder_for_OperationProgress) {
        _cached_decoder_for_OperationProgress = function (
            el: _Element
        ): OperationProgress {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let nameResolutionPhase!: OperationProgress_nameResolutionPhase;
            let nextRDNToBeResolved: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                nameResolutionPhase: (_el: _Element): void => {
                    nameResolutionPhase = $._decode_explicit<OperationProgress_nameResolutionPhase>(
                        () => _decode_OperationProgress_nameResolutionPhase
                    )(_el);
                },
                nextRDNToBeResolved: (_el: _Element): void => {
                    nextRDNToBeResolved = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OperationProgress,
                _extension_additions_list_spec_for_OperationProgress,
                _root_component_type_list_2_spec_for_OperationProgress,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new OperationProgress(
                /* SET_CONSTRUCTOR_CALL */ nameResolutionPhase,
                nextRDNToBeResolved,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_OperationProgress(el);
}

let _cached_encoder_for_OperationProgress: $.ASN1Encoder<OperationProgress> | null = null;

/**
 * @summary Encodes a(n) OperationProgress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationProgress, encoded as an ASN.1 Element.
 */
export function _encode_OperationProgress(
    value: OperationProgress,
    elGetter: $.ASN1Encoder<OperationProgress>
): _Element {
    if (!_cached_encoder_for_OperationProgress) {
        _cached_encoder_for_OperationProgress = function (
            value: OperationProgress        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () =>
                                    _encode_OperationProgress_nameResolutionPhase,
                                $.DER
                            )(value.nameResolutionPhase, $.DER),
                            /* IF_ABSENT  */ value.nextRDNToBeResolved ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.DER
                                  )(value.nextRDNToBeResolved, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OperationProgress(value, elGetter);
}


/* eslint-enable */
