/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary RequestAttribute_defaultValues_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestAttribute-defaultValues-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class RequestAttribute_defaultValues_Item {
    constructor(
        /**
         * @summary `entryType`.
         * @public
         * @readonly
         */
        readonly entryType: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: _Element[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestAttribute_defaultValues_Item
     * @description
     *
     * This takes an `object` and converts it to a `RequestAttribute_defaultValues_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestAttribute_defaultValues_Item`.
     * @returns {RequestAttribute_defaultValues_Item}
     */
    public static _from_object(
        _o:
            {
                [_K in keyof RequestAttribute_defaultValues_Item]: RequestAttribute_defaultValues_Item[_K];
            }
    ): RequestAttribute_defaultValues_Item {
        return new RequestAttribute_defaultValues_Item(
            _o.entryType,
            _o.values,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of RequestAttribute_defaultValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestAttribute_defaultValues_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entryType",
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "values",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of RequestAttribute_defaultValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestAttribute_defaultValues_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RequestAttribute_defaultValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestAttribute_defaultValues_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_RequestAttribute_defaultValues_Item: $.ASN1Decoder<RequestAttribute_defaultValues_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestAttribute_defaultValues_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestAttribute_defaultValues_Item} The decoded data structure.
 */
export function _decode_RequestAttribute_defaultValues_Item(el: _Element): RequestAttribute_defaultValues_Item {
    if (!_cached_decoder_for_RequestAttribute_defaultValues_Item) {
        _cached_decoder_for_RequestAttribute_defaultValues_Item = function (
            el: _Element
        ): RequestAttribute_defaultValues_Item {
            let entryType: OPTIONAL<OBJECT_IDENTIFIER>;
            let values!: _Element[];
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                entryType: (_el: _Element): void => {
                    entryType = $._decodeObjectIdentifier(_el);
                },
                values: (_el: _Element): void => {
                    values = $._decodeSequenceOf<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RequestAttribute_defaultValues_Item,
                _extension_additions_list_spec_for_RequestAttribute_defaultValues_Item,
                _root_component_type_list_2_spec_for_RequestAttribute_defaultValues_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RequestAttribute_defaultValues_Item(
                entryType,
                values,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RequestAttribute_defaultValues_Item(el);
}

let _cached_encoder_for_RequestAttribute_defaultValues_Item: $.ASN1Encoder<RequestAttribute_defaultValues_Item> | null = null;

/**
 * @summary Encodes a(n) RequestAttribute_defaultValues_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestAttribute_defaultValues_Item, encoded as an ASN.1 Element.
 */
export function _encode_RequestAttribute_defaultValues_Item(
    value: RequestAttribute_defaultValues_Item,
    elGetter: $.ASN1Encoder<RequestAttribute_defaultValues_Item>
): _Element {
    if (!_cached_encoder_for_RequestAttribute_defaultValues_Item) {
        _cached_encoder_for_RequestAttribute_defaultValues_Item = function (
            value: RequestAttribute_defaultValues_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entryType === undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.entryType,
                                      $.DER
                                  ),
                            /* REQUIRED   */ $._encodeSequenceOf<_Element>(
                                () => $._encodeAny,
                                $.DER
                            )(value.values, $.DER),
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
    return _cached_encoder_for_RequestAttribute_defaultValues_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
