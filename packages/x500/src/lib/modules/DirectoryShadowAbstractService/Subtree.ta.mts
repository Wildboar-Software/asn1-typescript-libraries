/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SDSEContent,
    _decode_SDSEContent,
    _encode_SDSEContent,
} from "../DirectoryShadowAbstractService/SDSEContent.ta.mjs";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
import { TotalRefresh, _root_component_type_list_1_spec_for_TotalRefresh } from "../DirectoryShadowAbstractService/TotalRefresh.ta.mjs";

/**
 * @summary Subtree
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Subtree ::= SEQUENCE {
 *   rdn  RelativeDistinguishedName,
 *   COMPONENTS OF TotalRefresh,
 *   ...}
 * ```
 *
 */
export class Subtree implements TotalRefresh {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `sDSE`.
         * @public
         * @readonly
         */
        readonly sDSE: OPTIONAL<SDSEContent> /* REPLICATED_COMPONENT */,
        /**
         * @summary `subtree`.
         * @public
         * @readonly
         */
        readonly subtree: OPTIONAL<Subtree[]> /* REPLICATED_COMPONENT */,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Subtree
     * @description
     *
     * This takes an `object` and converts it to a `Subtree`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Subtree`.
     * @returns {Subtree}
     */
    public static _from_object(
        _o: { [_K in keyof Subtree]: Subtree[_K] }
    ): Subtree {
        return new Subtree(
            _o.rdn,
            _o.sDSE,
            _o.subtree,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Subtree: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    ..._root_component_type_list_1_spec_for_TotalRefresh,
];

/**
 * @summary The Trailing Root Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Subtree: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Subtree: $.ComponentSpec[] = [];

let _cached_decoder_for_Subtree: $.ASN1Decoder<Subtree> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Subtree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Subtree} The decoded data structure.
 */
export function _decode_Subtree(el: _Element): Subtree {
    if (!_cached_decoder_for_Subtree) {
        _cached_decoder_for_Subtree = function (el: _Element): Subtree {
            let rdn!: RelativeDistinguishedName;
            let sDSE: OPTIONAL<SDSEContent>;
            let subtree: OPTIONAL<Subtree[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                rdn: (_el: _Element): void => {
                    rdn = _decode_RelativeDistinguishedName(_el);
                },
                sDSE: (_el: _Element): void => {
                    sDSE = _decode_SDSEContent(_el);
                },
                subtree: (_el: _Element): void => {
                    subtree = $._decodeSetOf<Subtree>(() => _decode_Subtree)(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Subtree,
                _extension_additions_list_spec_for_Subtree,
                _root_component_type_list_2_spec_for_Subtree,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Subtree(
                rdn,
                sDSE,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Subtree(el);
}

let _cached_encoder_for_Subtree: $.ASN1Encoder<Subtree> | null = null;

/**
 * @summary Encodes a(n) Subtree into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Subtree, encoded as an ASN.1 Element.
 */
export function _encode_Subtree(
    value: Subtree,
    elGetter: $.ASN1Encoder<Subtree>
): _Element {
    if (!_cached_encoder_for_Subtree) {
        _cached_encoder_for_Subtree = function (
            value: Subtree        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.rdn,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.sDSE === undefined
                                ? undefined
                                : _encode_SDSEContent(value.sDSE, $.DER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : $._encodeSetOf<Subtree>(
                                      () => _encode_Subtree,
                                      $.DER
                                  )(value.subtree, $.DER),
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
    return _cached_encoder_for_Subtree(value, elGetter);
}


/* eslint-enable */
