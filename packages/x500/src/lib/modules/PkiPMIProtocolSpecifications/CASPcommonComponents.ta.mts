/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CASPsequence,
    _decode_CASPsequence,
    _encode_CASPsequence,
} from "../PkiPMIProtocolSpecifications/CASPsequence.ta.mjs";
import {
    CASPversion,
    CASPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta.mjs";
/**
 * @summary CASPcommonComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPcommonComponents ::= SEQUENCE {
 *   version    CASPversion DEFAULT v1,
 *   sequence   CASPsequence,
 *   ... }
 * ```
 *
 * @class
 */
export class CASPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion>,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CASPcommonComponents
     * @description
     *
     * This takes an `object` and converts it to a `CASPcommonComponents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CASPcommonComponents`.
     * @returns {CASPcommonComponents}
     */
    public static _from_object(
        _o: { [_K in keyof CASPcommonComponents]: CASPcommonComponents[_K] }
    ): CASPcommonComponents {
        return new CASPcommonComponents(
            _o.version,
            _o.sequence,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version(): CASPversion {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}

/**
 * @summary The Leading Root Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CASPcommonComponents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CASPcommonComponents: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CASPcommonComponents: $.ComponentSpec[] = [];

let _cached_decoder_for_CASPcommonComponents: $.ASN1Decoder<CASPcommonComponents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CASPcommonComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASPcommonComponents} The decoded data structure.
 */
export function _decode_CASPcommonComponents(el: _Element): CASPcommonComponents {
    if (!_cached_decoder_for_CASPcommonComponents) {
        _cached_decoder_for_CASPcommonComponents = function (
            el: _Element
        ): CASPcommonComponents {
            let version: OPTIONAL<CASPversion> =
                CASPcommonComponents._default_value_for_version;
            let sequence!: CASPsequence;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CASPcommonComponents,
                _extension_additions_list_spec_for_CASPcommonComponents,
                _root_component_type_list_2_spec_for_CASPcommonComponents,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CASPcommonComponents(
                version,
                sequence,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CASPcommonComponents(el);
}

let _cached_encoder_for_CASPcommonComponents: $.ASN1Encoder<CASPcommonComponents> | null = null;

/**
 * @summary Encodes a(n) CASPcommonComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASPcommonComponents, encoded as an ASN.1 Element.
 */
export function _encode_CASPcommonComponents(
    value: CASPcommonComponents,
    elGetter: $.ASN1Encoder<CASPcommonComponents>
): _Element {
    if (!_cached_encoder_for_CASPcommonComponents) {
        _cached_encoder_for_CASPcommonComponents = function (
            value: CASPcommonComponents        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CASPcommonComponents._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.DER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
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
    return _cached_encoder_for_CASPcommonComponents(value, elGetter);
}


/* eslint-enable */
