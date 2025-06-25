/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary SortKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SortKey ::= SEQUENCE {
 *   type          AttributeType,
 *   orderingRule  MATCHING-RULE.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SortKey {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `orderingRule`.
         * @public
         * @readonly
         */
        readonly orderingRule?: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SortKey
     * @description
     *
     * This takes an `object` and converts it to a `SortKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortKey`.
     * @returns {SortKey}
     */
    public static _from_object(
        _o: { [_K in keyof SortKey]: SortKey[_K] }
    ): SortKey {
        return new SortKey(
            _o.type_,
            _o.orderingRule,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SortKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SortKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "orderingRule",
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of SortKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SortKey: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SortKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SortKey: $.ComponentSpec[] = [];

let _cached_decoder_for_SortKey: $.ASN1Decoder<SortKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SortKey} The decoded data structure.
 */
export function _decode_SortKey(el: _Element): SortKey {
    if (!_cached_decoder_for_SortKey) {
        _cached_decoder_for_SortKey = function (el: _Element): SortKey {
            let type_!: AttributeType;
            let orderingRule: OPTIONAL<OBJECT_IDENTIFIER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = _decode_AttributeType(_el);
                },
                orderingRule: (_el: _Element): void => {
                    orderingRule = $._decodeObjectIdentifier(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SortKey,
                _extension_additions_list_spec_for_SortKey,
                _root_component_type_list_2_spec_for_SortKey,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SortKey(
                type_,
                orderingRule,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SortKey(el);
}

let _cached_encoder_for_SortKey: $.ASN1Encoder<SortKey> | null = null;

/**
 * @summary Encodes a(n) SortKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKey, encoded as an ASN.1 Element.
 */
export function _encode_SortKey(
    value: SortKey,
    elGetter: $.ASN1Encoder<SortKey>
): _Element {
    if (!_cached_encoder_for_SortKey) {
        _cached_encoder_for_SortKey = function (
            value: SortKey        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.orderingRule === undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.orderingRule,
                                      $.BER
                                  ),
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
    return _cached_encoder_for_SortKey(value, elGetter);
}


/* eslint-enable */
