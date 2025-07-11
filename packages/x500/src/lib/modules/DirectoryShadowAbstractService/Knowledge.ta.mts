/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Knowledge_knowledgeType,
    _decode_Knowledge_knowledgeType,
    _encode_Knowledge_knowledgeType,
    _enum_for_Knowledge_knowledgeType,
} from "../DirectoryShadowAbstractService/Knowledge-knowledgeType.ta.mjs";
/**
 * @summary Knowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge ::= SEQUENCE {
 *   knowledgeType      ENUMERATED {
 *     master (0),
 *     shadow (1),
 *     both   (2)},
 *   extendedKnowledge  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 */
export class Knowledge {
    constructor(
        /**
         * @summary `knowledgeType`.
         * @public
         * @readonly
         */
        readonly knowledgeType: Knowledge_knowledgeType,
        /**
         * @summary `extendedKnowledge`.
         * @public
         * @readonly
         */
        readonly extendedKnowledge: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Knowledge
     * @description
     *
     * This takes an `object` and converts it to a `Knowledge`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Knowledge`.
     * @returns {Knowledge}
     */
    public static _from_object(
        _o: { [_K in keyof Knowledge]: Knowledge[_K] }
    ): Knowledge {
        return new Knowledge(
            _o.knowledgeType,
            _o.extendedKnowledge,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `extendedKnowledge`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extendedKnowledge(): BOOLEAN {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `knowledgeType`
     * @public
     * @static
     */

    public static _enum_for_knowledgeType = _enum_for_Knowledge_knowledgeType;
}

/**
 * @summary The Leading Root Component Types of Knowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Knowledge: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "knowledgeType",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "extendedKnowledge",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of Knowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Knowledge: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Knowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Knowledge: $.ComponentSpec[] = [];

let _cached_decoder_for_Knowledge: $.ASN1Decoder<Knowledge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Knowledge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Knowledge} The decoded data structure.
 */
export function _decode_Knowledge(el: _Element): Knowledge {
    if (!_cached_decoder_for_Knowledge) {
        _cached_decoder_for_Knowledge = function (el: _Element): Knowledge {
            let knowledgeType!: Knowledge_knowledgeType;
            let extendedKnowledge: OPTIONAL<BOOLEAN> =
                Knowledge._default_value_for_extendedKnowledge;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                knowledgeType: (_el: _Element): void => {
                    knowledgeType = _decode_Knowledge_knowledgeType(_el);
                },
                extendedKnowledge: (_el: _Element): void => {
                    extendedKnowledge = $._decodeBoolean(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Knowledge,
                _extension_additions_list_spec_for_Knowledge,
                _root_component_type_list_2_spec_for_Knowledge,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Knowledge(
                knowledgeType,
                extendedKnowledge,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Knowledge(el);
}

let _cached_encoder_for_Knowledge: $.ASN1Encoder<Knowledge> | null = null;

/**
 * @summary Encodes a(n) Knowledge into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Knowledge, encoded as an ASN.1 Element.
 */
export function _encode_Knowledge(
    value: Knowledge,
    elGetter: $.ASN1Encoder<Knowledge>
): _Element {
    if (!_cached_encoder_for_Knowledge) {
        _cached_encoder_for_Knowledge = function (
            value: Knowledge        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Knowledge_knowledgeType(
                                value.knowledgeType,
                                $.DER
                            ),
                            /* IF_DEFAULT */ value.extendedKnowledge ===
                                undefined ||
                            $.deepEq(
                                value.extendedKnowledge,
                                Knowledge._default_value_for_extendedKnowledge
                            )
                                ? undefined
                                : $._encodeBoolean(
                                      value.extendedKnowledge,
                                      $.DER
                                  ),
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
    return _cached_encoder_for_Knowledge(value, elGetter);
}


/* eslint-enable */
