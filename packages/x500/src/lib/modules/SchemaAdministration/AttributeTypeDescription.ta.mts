/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeTypeInformation,
    _decode_AttributeTypeInformation,
    _encode_AttributeTypeInformation,
} from "../SchemaAdministration/AttributeTypeInformation.ta.mjs";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary AttributeTypeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeDescription ::= SEQUENCE {
 *   identifier        ATTRIBUTE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   information  [0]  AttributeTypeInformation,
 *   ... }
 * ```
 *
 */
export class AttributeTypeDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: AttributeTypeInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeDescription
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeDescription`.
     * @returns {AttributeTypeDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeTypeDescription]: AttributeTypeDescription[_K];
            }
        >
    ): AttributeTypeDescription {
        return new AttributeTypeDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of AttributeTypeDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'description',
        true,
        $.or(
            $.hasTag(_TagClass.universal, 20),
            $.hasTag(_TagClass.universal, 19),
            $.hasTag(_TagClass.universal, 30),
            $.hasTag(_TagClass.universal, 28),
            $.hasTag(_TagClass.universal, 12)
        )
    ),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        "information",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of AttributeTypeDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeDescription: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AttributeTypeDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeDescription: $.ComponentSpec[] = [];

let _cached_decoder_for_AttributeTypeDescription: $.ASN1Decoder<AttributeTypeDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeDescription} The decoded data structure.
 */
export function _decode_AttributeTypeDescription(el: _Element): AttributeTypeDescription {
    if (!_cached_decoder_for_AttributeTypeDescription) {
        _cached_decoder_for_AttributeTypeDescription = function (
            el: _Element
        ): AttributeTypeDescription {
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                AttributeTypeDescription._default_value_for_obsolete;
            let information!: AttributeTypeInformation;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<AttributeTypeInformation>(
                        () => _decode_AttributeTypeInformation
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeDescription,
                _extension_additions_list_spec_for_AttributeTypeDescription,
                _root_component_type_list_2_spec_for_AttributeTypeDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeDescription(
                identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeDescription(el);
}

let _cached_encoder_for_AttributeTypeDescription: $.ASN1Encoder<AttributeTypeDescription> | null = null;

/**
 * @summary Encodes a(n) AttributeTypeDescription into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeDescription, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeDescription(
    value: AttributeTypeDescription,
    elGetter: $.ASN1Encoder<AttributeTypeDescription>
): _Element {
    if (!_cached_encoder_for_AttributeTypeDescription) {
        _cached_encoder_for_AttributeTypeDescription = function (
            value: AttributeTypeDescription        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.DER
                                  )(value.name, $.DER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.DER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                AttributeTypeDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_AttributeTypeInformation,
                                $.DER
                            )(value.information, $.DER),
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
    return _cached_encoder_for_AttributeTypeDescription(value, elGetter);
}


/* eslint-enable */
