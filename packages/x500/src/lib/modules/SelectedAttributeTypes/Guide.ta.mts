/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Criteria,
    _decode_Criteria,
    _encode_Criteria,
} from "../SelectedAttributeTypes/Criteria.ta.mjs";
/**
 * @summary Guide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Guide ::= SET {
 *   objectClass  [0]  OBJECT-CLASS.&id OPTIONAL,
 *   criteria     [1]  Criteria,
 *   ... }
 * ```
 *
 */
export class Guide {
    constructor(
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `criteria`.
         * @public
         * @readonly
         */
        readonly criteria: Criteria,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Guide
     * @description
     *
     * This takes an `object` and converts it to a `Guide`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Guide`.
     * @returns {Guide}
     */
    public static _from_object(_o: { [_K in keyof Guide]: Guide[_K] }): Guide {
        return new Guide(
            _o.objectClass,
            _o.criteria,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of Guide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Guide: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "objectClass",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "criteria",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of Guide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Guide: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Guide
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Guide: $.ComponentSpec[] = [];

let _cached_decoder_for_Guide: $.ASN1Decoder<Guide> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Guide
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Guide} The decoded data structure.
 */
export function _decode_Guide(el: _Element): Guide {
    if (!_cached_decoder_for_Guide) {
        _cached_decoder_for_Guide = function (el: _Element): Guide {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let objectClass: OPTIONAL<OBJECT_IDENTIFIER>;
            let criteria!: Criteria;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                objectClass: (_el: _Element): void => {
                    objectClass = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                criteria: (_el: _Element): void => {
                    criteria = $._decode_explicit<Criteria>(
                        () => _decode_Criteria
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Guide,
                _extension_additions_list_spec_for_Guide,
                _root_component_type_list_2_spec_for_Guide,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Guide(
                /* SET_CONSTRUCTOR_CALL */ objectClass,
                criteria,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Guide(el);
}

let _cached_encoder_for_Guide: $.ASN1Encoder<Guide> | null = null;

/**
 * @summary Encodes a(n) Guide into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Guide, encoded as an ASN.1 Element.
 */
export function _encode_Guide(value: Guide, elGetter: $.ASN1Encoder<Guide>): _Element {
    if (!_cached_encoder_for_Guide) {
        _cached_encoder_for_Guide = function (
            value: Guide        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.objectClass === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeObjectIdentifier,
                                      $.DER
                                  )(value.objectClass, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_Criteria,
                                $.DER
                            )(value.criteria, $.DER),
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
    return _cached_encoder_for_Guide(value, elGetter);
}


/* eslint-enable */
