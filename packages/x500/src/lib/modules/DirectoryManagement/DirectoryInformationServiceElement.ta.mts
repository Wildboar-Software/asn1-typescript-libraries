/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryInformationServiceElement_operationType,
    _decode_DirectoryInformationServiceElement_operationType,
    _encode_DirectoryInformationServiceElement_operationType,
} from "../DirectoryManagement/DirectoryInformationServiceElement-operationType.ta.mjs";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
import {
    AttributeValue,
    _decode_AttributeValue,
    _encode_AttributeValue,
} from "../InformationFramework/AttributeValue.ta.mjs";
/**
 * @summary DirectoryInformationServiceElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryInformationServiceElement ::= SEQUENCE {
 *   operationType
 *     BIT STRING {read(0), compare(1), abandon(2), list(3), search(4),
 *                 addEntry(5), removeEntry(6), modifyEntry(7), modifyDN(8)}
 *       OPTIONAL,
 *   attributeType   AttributeType OPTIONAL,
 *   attributeValue  [0]  AttributeValue OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DirectoryInformationServiceElement {
    constructor(
        /**
         * @summary `operationType`.
         * @public
         * @readonly
         */
        readonly operationType: OPTIONAL<DirectoryInformationServiceElement_operationType>,
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OPTIONAL<AttributeType>,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: OPTIONAL<AttributeValue>
    ) {}

    /**
     * @summary Restructures an object into a DirectoryInformationServiceElement
     * @description
     *
     * This takes an `object` and converts it to a `DirectoryInformationServiceElement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectoryInformationServiceElement`.
     * @returns {DirectoryInformationServiceElement}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DirectoryInformationServiceElement]: DirectoryInformationServiceElement[_K];
            }
        >
    ): DirectoryInformationServiceElement {
        return new DirectoryInformationServiceElement(
            _o.operationType,
            _o.attributeType,
            _o.attributeValue
        );
    }
}

/**
 * @summary The Leading Root Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "operationType",
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "attributeType",
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "attributeValue",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [];

let _cached_decoder_for_DirectoryInformationServiceElement: $.ASN1Decoder<DirectoryInformationServiceElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryInformationServiceElement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryInformationServiceElement} The decoded data structure.
 */
export function _decode_DirectoryInformationServiceElement(el: _Element) {
    if (!_cached_decoder_for_DirectoryInformationServiceElement) {
        _cached_decoder_for_DirectoryInformationServiceElement = function (
            el: _Element
        ): DirectoryInformationServiceElement {
            let operationType: OPTIONAL<DirectoryInformationServiceElement_operationType>;
            let attributeType: OPTIONAL<AttributeType>;
            let attributeValue: OPTIONAL<AttributeValue>;
            const callbacks: $.DecodingMap = {
                operationType: (_el: _Element): void => {
                    operationType = _decode_DirectoryInformationServiceElement_operationType(
                        _el
                    );
                },
                attributeType: (_el: _Element): void => {
                    attributeType = _decode_AttributeType(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decode_explicit<AttributeValue>(
                        () => _decode_AttributeValue
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DirectoryInformationServiceElement,
                _extension_additions_list_spec_for_DirectoryInformationServiceElement,
                _root_component_type_list_2_spec_for_DirectoryInformationServiceElement,
                undefined
            );
            return new DirectoryInformationServiceElement(
                operationType,
                attributeType,
                attributeValue
            );
        };
    }
    return _cached_decoder_for_DirectoryInformationServiceElement(el);
}

let _cached_encoder_for_DirectoryInformationServiceElement: $.ASN1Encoder<DirectoryInformationServiceElement> | null = null;

/**
 * @summary Encodes a(n) DirectoryInformationServiceElement into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryInformationServiceElement, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryInformationServiceElement(
    value: DirectoryInformationServiceElement,
    elGetter: $.ASN1Encoder<DirectoryInformationServiceElement>
) {
    if (!_cached_encoder_for_DirectoryInformationServiceElement) {
        _cached_encoder_for_DirectoryInformationServiceElement = function (
            value: DirectoryInformationServiceElement        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.operationType === undefined
                            ? undefined
                            : _encode_DirectoryInformationServiceElement_operationType(
                                  value.operationType,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.attributeType === undefined
                            ? undefined
                            : _encode_AttributeType(value.attributeType, $.DER),
                        /* IF_ABSENT  */ value.attributeValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AttributeValue,
                                  $.DER
                              )(value.attributeValue, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_DirectoryInformationServiceElement(
        value,
        elGetter
    );
}


/* eslint-enable */
