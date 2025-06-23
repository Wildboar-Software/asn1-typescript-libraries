/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary ContextInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextInformation ::= SEQUENCE {
 *   syntax           UnboundedDirectoryString,
 *   assertionSyntax  UnboundedDirectoryString OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ContextInformation {
    constructor(
        /**
         * @summary `syntax`.
         * @public
         * @readonly
         */
        readonly syntax: UnboundedDirectoryString,
        /**
         * @summary `assertionSyntax`.
         * @public
         * @readonly
         */
        readonly assertionSyntax?: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextInformation
     * @description
     *
     * This takes an `object` and converts it to a `ContextInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextInformation`.
     * @returns {ContextInformation}
     */
    public static _from_object(
        _o: { [_K in keyof ContextInformation]: ContextInformation[_K] }
    ): ContextInformation {
        return new ContextInformation(
            _o.syntax,
            _o.assertionSyntax,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContextInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("syntax", false, $.hasAnyTag),
    new $.ComponentSpec(
        'assertionSyntax',
        true,
        $.or(
            $.hasTag(_TagClass.universal, 20),
            $.hasTag(_TagClass.universal, 19),
            $.hasTag(_TagClass.universal, 30),
            $.hasTag(_TagClass.universal, 28),
            $.hasTag(_TagClass.universal, 12)
        )
    ),
];

/**
 * @summary The Trailing Root Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContextInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContextInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_ContextInformation: $.ASN1Decoder<ContextInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextInformation} The decoded data structure.
 */
export function _decode_ContextInformation(el: _Element) {
    if (!_cached_decoder_for_ContextInformation) {
        _cached_decoder_for_ContextInformation = function (
            el: _Element
        ): ContextInformation {
            let syntax!: UnboundedDirectoryString;
            let assertionSyntax: OPTIONAL<UnboundedDirectoryString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                syntax: (_el: _Element): void => {
                    syntax = _decode_UnboundedDirectoryString(_el);
                },
                assertionSyntax: (_el: _Element): void => {
                    assertionSyntax = _decode_UnboundedDirectoryString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContextInformation,
                _extension_additions_list_spec_for_ContextInformation,
                _root_component_type_list_2_spec_for_ContextInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContextInformation(
                syntax,
                assertionSyntax,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContextInformation(el);
}

let _cached_encoder_for_ContextInformation: $.ASN1Encoder<ContextInformation> | null = null;

/**
 * @summary Encodes a(n) ContextInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextInformation, encoded as an ASN.1 Element.
 */
export function _encode_ContextInformation(
    value: ContextInformation,
    elGetter: $.ASN1Encoder<ContextInformation>
) {
    if (!_cached_encoder_for_ContextInformation) {
        _cached_encoder_for_ContextInformation = function (
            value: ContextInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UnboundedDirectoryString(
                                value.syntax,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.assertionSyntax === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.assertionSyntax,
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
    return _cached_encoder_for_ContextInformation(value, elGetter);
}


/* eslint-enable */
