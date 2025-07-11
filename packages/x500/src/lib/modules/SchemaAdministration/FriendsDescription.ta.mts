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
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary FriendsDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FriendsDescription ::= SEQUENCE {
 *   anchor            ATTRIBUTE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   friends      [0]  SET SIZE (1..MAX) OF ATTRIBUTE.&id,
 *   ... }
 * ```
 *
 */
export class FriendsDescription {
    constructor(
        /**
         * @summary `anchor`.
         * @public
         * @readonly
         */
        readonly anchor: OBJECT_IDENTIFIER,
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
         * @summary `friends`.
         * @public
         * @readonly
         */
        readonly friends: OBJECT_IDENTIFIER[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FriendsDescription
     * @description
     *
     * This takes an `object` and converts it to a `FriendsDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FriendsDescription`.
     * @returns {FriendsDescription}
     */
    public static _from_object(
        _o: { [_K in keyof FriendsDescription]: FriendsDescription[_K] }
    ): FriendsDescription {
        return new FriendsDescription(
            _o.anchor,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.friends,
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
 * @summary The Leading Root Component Types of FriendsDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FriendsDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "anchor",
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
        "friends",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of FriendsDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FriendsDescription: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FriendsDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FriendsDescription: $.ComponentSpec[] = [];

let _cached_decoder_for_FriendsDescription: $.ASN1Decoder<FriendsDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FriendsDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FriendsDescription} The decoded data structure.
 */
export function _decode_FriendsDescription(el: _Element): FriendsDescription {
    if (!_cached_decoder_for_FriendsDescription) {
        _cached_decoder_for_FriendsDescription = function (
            el: _Element
        ): FriendsDescription {
            let anchor!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                FriendsDescription._default_value_for_obsolete;
            let friends!: OBJECT_IDENTIFIER[];
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                anchor: (_el: _Element): void => {
                    anchor = $._decodeObjectIdentifier(_el);
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
                friends: (_el: _Element): void => {
                    friends = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FriendsDescription,
                _extension_additions_list_spec_for_FriendsDescription,
                _root_component_type_list_2_spec_for_FriendsDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new FriendsDescription(
                anchor,
                name,
                description,
                obsolete,
                friends,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_FriendsDescription(el);
}

let _cached_encoder_for_FriendsDescription: $.ASN1Encoder<FriendsDescription> | null = null;

/**
 * @summary Encodes a(n) FriendsDescription into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FriendsDescription, encoded as an ASN.1 Element.
 */
export function _encode_FriendsDescription(
    value: FriendsDescription,
    elGetter: $.ASN1Encoder<FriendsDescription>
): _Element {
    if (!_cached_encoder_for_FriendsDescription) {
        _cached_encoder_for_FriendsDescription = function (
            value: FriendsDescription        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.anchor,
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
                                FriendsDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () =>
                                    $._encodeSetOf<OBJECT_IDENTIFIER>(
                                        () => $._encodeObjectIdentifier,
                                        $.DER
                                    ),
                                $.DER
                            )(value.friends, $.DER),
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
    return _cached_encoder_for_FriendsDescription(value, elGetter);
}


/* eslint-enable */
