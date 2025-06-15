/* eslint-disable */
import {
    OPTIONAL,
    GraphicString,
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
    RestrictionsOnSLC_restrictionId,
    _enum_for_RestrictionsOnSLC_restrictionId,
    _decode_RestrictionsOnSLC_restrictionId,
    _encode_RestrictionsOnSLC_restrictionId,
} from '../M3108Part2ASN1Module/RestrictionsOnSLC-restrictionId.ta.mjs';

/**
 * @summary RestrictionsOnSLC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestrictionsOnSLC ::= SEQUENCE {
 *   restrictionId
 *     [0]  ENUMERATED {noRestrictions(1), protectedSLCsOnly(2),
 *                      protectedDedicatedSLCsOnly(3),
 *                      dedicatedSLCsOnlyWithProtectedSLCsPreferred(4),
 *                      dedicatedSLCsPreferredProtectedSLCsRequired(5),
 *                      dedicatedProtectedSLCsPreferred(6), ...
 *                      },
 *   restrictionText  [1]  GraphicString OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class RestrictionsOnSLC {
    constructor(
        /**
         * @summary `restrictionId`.
         * @public
         * @readonly
         */
        readonly restrictionId: RestrictionsOnSLC_restrictionId,
        /**
         * @summary `restrictionText`.
         * @public
         * @readonly
         */
        readonly restrictionText: OPTIONAL<GraphicString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RestrictionsOnSLC
     * @description
     *
     * This takes an `object` and converts it to a `RestrictionsOnSLC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RestrictionsOnSLC`.
     * @returns {RestrictionsOnSLC}
     */
    public static _from_object(
        _o: { [_K in keyof RestrictionsOnSLC]: RestrictionsOnSLC[_K] }
    ): RestrictionsOnSLC {
        return new RestrictionsOnSLC(
            _o.restrictionId,
            _o.restrictionText,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `restrictionId`
     * @public
     * @static
     */

    public static _enum_for_restrictionId = _enum_for_RestrictionsOnSLC_restrictionId;
}


/**
 * @summary The Leading Root Component Types of RestrictionsOnSLC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RestrictionsOnSLC: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'restrictionId',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'restrictionText',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of RestrictionsOnSLC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RestrictionsOnSLC: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RestrictionsOnSLC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RestrictionsOnSLC: $.ComponentSpec[] = [];


let _cached_decoder_for_RestrictionsOnSLC: $.ASN1Decoder<RestrictionsOnSLC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RestrictionsOnSLC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestrictionsOnSLC} The decoded data structure.
 */
export function _decode_RestrictionsOnSLC(el: _Element) {
    if (!_cached_decoder_for_RestrictionsOnSLC) {
        _cached_decoder_for_RestrictionsOnSLC = function (
            el: _Element
        ): RestrictionsOnSLC {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let restrictionId!: RestrictionsOnSLC_restrictionId;
            let restrictionText: OPTIONAL<GraphicString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                restrictionId: (_el: _Element): void => {
                    restrictionId = $._decode_implicit<RestrictionsOnSLC_restrictionId>(
                        () => _decode_RestrictionsOnSLC_restrictionId
                    )(_el);
                },
                restrictionText: (_el: _Element): void => {
                    restrictionText = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RestrictionsOnSLC,
                _extension_additions_list_spec_for_RestrictionsOnSLC,
                _root_component_type_list_2_spec_for_RestrictionsOnSLC,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RestrictionsOnSLC /* SEQUENCE_CONSTRUCTOR_CALL */(
                restrictionId,
                restrictionText,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RestrictionsOnSLC(el);
}


let _cached_encoder_for_RestrictionsOnSLC: $.ASN1Encoder<RestrictionsOnSLC> | null = null;


/**
 * @summary Encodes a(n) RestrictionsOnSLC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestrictionsOnSLC, encoded as an ASN.1 Element.
 */
export function _encode_RestrictionsOnSLC(
    value: RestrictionsOnSLC,
    elGetter: $.ASN1Encoder<RestrictionsOnSLC>
) {
    if (!_cached_encoder_for_RestrictionsOnSLC) {
        _cached_encoder_for_RestrictionsOnSLC = function (
            value: RestrictionsOnSLC        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_RestrictionsOnSLC_restrictionId,
                                $.BER
                            )(value.restrictionId, $.BER),
                            /* IF_ABSENT  */ value.restrictionText === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGraphicString,
                                      $.BER
                                  )(value.restrictionText, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RestrictionsOnSLC(value, elGetter);
}


/* eslint-enable */
