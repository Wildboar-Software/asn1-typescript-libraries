/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary AttributeMappings_Item_typeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMappings-Item-typeMappings ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class AttributeMappings_Item_typeMappings {
    constructor(
        /**
         * @summary `local`.
         * @public
         * @readonly
         */
        readonly local: AttributeType,
        /**
         * @summary `remote`.
         * @public
         * @readonly
         */
        readonly remote: AttributeType,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeMappings_Item_typeMappings
     * @description
     *
     * This takes an `object` and converts it to a `AttributeMappings_Item_typeMappings`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeMappings_Item_typeMappings`.
     * @returns {AttributeMappings_Item_typeMappings}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeMappings_Item_typeMappings]: AttributeMappings_Item_typeMappings[_K];
            }
        >
    ): AttributeMappings_Item_typeMappings {
        return new AttributeMappings_Item_typeMappings(
            _o.local,
            _o.remote,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "local",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "remote",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [];

let _cached_decoder_for_AttributeMappings_Item_typeMappings: $.ASN1Decoder<AttributeMappings_Item_typeMappings> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings_Item_typeMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings_Item_typeMappings} The decoded data structure.
 */
export function _decode_AttributeMappings_Item_typeMappings(el: _Element): AttributeMappings_Item_typeMappings {
    if (!_cached_decoder_for_AttributeMappings_Item_typeMappings) {
        _cached_decoder_for_AttributeMappings_Item_typeMappings = function (
            el: _Element
        ): AttributeMappings_Item_typeMappings {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeMappings-Item-typeMappings contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "local";
            sequence[1].name = "remote";
            let local!: AttributeType;
            let remote!: AttributeType;
            local = $._decode_implicit<AttributeType>(
                () => _decode_AttributeType
            )(sequence[0]);
            remote = $._decode_implicit<AttributeType>(
                () => _decode_AttributeType
            )(sequence[1]);
            return new AttributeMappings_Item_typeMappings(
                local,
                remote,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttributeMappings_Item_typeMappings(el);
}

let _cached_encoder_for_AttributeMappings_Item_typeMappings: $.ASN1Encoder<AttributeMappings_Item_typeMappings> | null = null;

/**
 * @summary Encodes a(n) AttributeMappings_Item_typeMappings into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings_Item_typeMappings, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings_Item_typeMappings(
    value: AttributeMappings_Item_typeMappings,
    elGetter: $.ASN1Encoder<AttributeMappings_Item_typeMappings>
): _Element {
    if (!_cached_encoder_for_AttributeMappings_Item_typeMappings) {
        _cached_encoder_for_AttributeMappings_Item_typeMappings = function (
            value: AttributeMappings_Item_typeMappings        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_AttributeType,
                                $.DER
                            )(value.local, $.DER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_AttributeType,
                                $.DER
                            )(value.remote, $.DER),
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
    return _cached_encoder_for_AttributeMappings_Item_typeMappings(
        value,
        elGetter
    );
}


/* eslint-enable */
