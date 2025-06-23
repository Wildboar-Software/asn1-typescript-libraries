/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContextProfile,
    _decode_ContextProfile,
    _encode_ContextProfile,
} from "../ServiceAdministration/ContextProfile.ta.mjs";
import {
    ResultAttribute_outputValues,
    _decode_ResultAttribute_outputValues,
    _encode_ResultAttribute_outputValues,
} from "../ServiceAdministration/ResultAttribute-outputValues.ta.mjs";
/**
 * @summary ResultAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultAttribute ::= SEQUENCE {
 *   attributeType      ATTRIBUTE.&id({SupportedAttributes}),
 *   outputValues       CHOICE {
 *     selectedValues     SEQUENCE OF ATTRIBUTE.&Type
 *                        ({SupportedAttributes}{@attributeType}),
 *     matchedValuesOnly  NULL } OPTIONAL,
 *   contexts      [0]  SEQUENCE SIZE (1..MAX) OF ContextProfile OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ResultAttribute {
    constructor(
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OBJECT_IDENTIFIER,
        /**
         * @summary `outputValues`.
         * @public
         * @readonly
         */
        readonly outputValues?: OPTIONAL<ResultAttribute_outputValues>,
        /**
         * @summary `contexts`.
         * @public
         * @readonly
         */
        readonly contexts?: OPTIONAL<ContextProfile[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResultAttribute
     * @description
     *
     * This takes an `object` and converts it to a `ResultAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultAttribute`.
     * @returns {ResultAttribute}
     */
    public static _from_object(
        _o: { [_K in keyof ResultAttribute]: ResultAttribute[_K] }
    ): ResultAttribute {
        return new ResultAttribute(
            _o.attributeType,
            _o.outputValues,
            _o.contexts,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResultAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'outputValues',
        true,
        $.or(
            $.hasTag(_TagClass.universal, 16),
            $.hasTag(_TagClass.universal, 5)
        )
    ),
    new $.ComponentSpec(
        "contexts",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResultAttribute: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResultAttribute: $.ComponentSpec[] = [];

let _cached_decoder_for_ResultAttribute: $.ASN1Decoder<ResultAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAttribute} The decoded data structure.
 */
export function _decode_ResultAttribute(el: _Element) {
    if (!_cached_decoder_for_ResultAttribute) {
        _cached_decoder_for_ResultAttribute = function (
            el: _Element
        ): ResultAttribute {
            let attributeType!: OBJECT_IDENTIFIER;
            let outputValues: OPTIONAL<ResultAttribute_outputValues>;
            let contexts: OPTIONAL<ContextProfile[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                attributeType: (_el: _Element): void => {
                    attributeType = $._decodeObjectIdentifier(_el);
                },
                outputValues: (_el: _Element): void => {
                    outputValues = _decode_ResultAttribute_outputValues(_el);
                },
                contexts: (_el: _Element): void => {
                    contexts = $._decode_explicit<ContextProfile[]>(() =>
                        $._decodeSequenceOf<ContextProfile>(
                            () => _decode_ContextProfile
                        )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResultAttribute,
                _extension_additions_list_spec_for_ResultAttribute,
                _root_component_type_list_2_spec_for_ResultAttribute,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ResultAttribute(
                attributeType,
                outputValues,
                contexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ResultAttribute(el);
}

let _cached_encoder_for_ResultAttribute: $.ASN1Encoder<ResultAttribute> | null = null;

/**
 * @summary Encodes a(n) ResultAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAttribute, encoded as an ASN.1 Element.
 */
export function _encode_ResultAttribute(
    value: ResultAttribute,
    elGetter: $.ASN1Encoder<ResultAttribute>
) {
    if (!_cached_encoder_for_ResultAttribute) {
        _cached_encoder_for_ResultAttribute = function (
            value: ResultAttribute        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.attributeType,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.outputValues === undefined
                                ? undefined
                                : _encode_ResultAttribute_outputValues(
                                      value.outputValues,
                                      $.DER
                                  ),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<ContextProfile>(
                                              () => _encode_ContextProfile,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.contexts, $.DER),
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
    return _cached_encoder_for_ResultAttribute(value, elGetter);
}


/* eslint-enable */
