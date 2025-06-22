/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    Versions,
    Versions_v1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Versions,
    _encode_Versions,
} from "../DirectoryAbstractService/Versions.ta.mjs";
import {
    DSACredentials,
    _decode_DSACredentials,
    _encode_DSACredentials,
} from "../DistributedOperations/DSACredentials.ta.mjs";
/**
 * @summary DSABindArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSABindArgument ::= SET  {
 *   credentials  [0]  DSACredentials OPTIONAL,
 *   versions     [1]  Versions DEFAULT {v1},
 *   ... }
 * ```
 *
 * @class
 */
export class DSABindArgument {
    constructor(
        /**
         * @summary `credentials`.
         * @public
         * @readonly
         */
        readonly credentials?: OPTIONAL<DSACredentials>,
        /**
         * @summary `versions`.
         * @public
         * @readonly
         */
        readonly versions?: OPTIONAL<Versions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DSABindArgument
     * @description
     *
     * This takes an `object` and converts it to a `DSABindArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DSABindArgument`.
     * @returns {DSABindArgument}
     */
    public static _from_object(
        _o: { [_K in keyof DSABindArgument]: DSABindArgument[_K] }
    ): DSABindArgument {
        return new DSABindArgument(
            _o.credentials,
            _o.versions,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `versions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_versions() {
        return (() => {
            const _ret = new Uint8ClampedArray(2);
            _ret[Versions_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of DSABindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DSABindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "credentials",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "versions",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of DSABindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DSABindArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DSABindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DSABindArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_DSABindArgument: $.ASN1Decoder<DSABindArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSABindArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSABindArgument} The decoded data structure.
 */
export function _decode_DSABindArgument(el: _Element) {
    if (!_cached_decoder_for_DSABindArgument) {
        _cached_decoder_for_DSABindArgument = function (
            el: _Element
        ): DSABindArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let credentials: OPTIONAL<DSACredentials>;
            let versions: OPTIONAL<Versions> =
                DSABindArgument._default_value_for_versions;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                credentials: (_el: _Element): void => {
                    credentials = $._decode_explicit<DSACredentials>(
                        () => _decode_DSACredentials
                    )(_el);
                },
                versions: (_el: _Element): void => {
                    versions = $._decode_explicit<Versions>(
                        () => _decode_Versions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DSABindArgument,
                _extension_additions_list_spec_for_DSABindArgument,
                _root_component_type_list_2_spec_for_DSABindArgument,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DSABindArgument(
                /* SET_CONSTRUCTOR_CALL */ credentials,
                versions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DSABindArgument(el);
}

let _cached_encoder_for_DSABindArgument: $.ASN1Encoder<DSABindArgument> | null = null;

/**
 * @summary Encodes a(n) DSABindArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSABindArgument, encoded as an ASN.1 Element.
 */
export function _encode_DSABindArgument(
    value: DSABindArgument,
    elGetter: $.ASN1Encoder<DSABindArgument>
) {
    if (!_cached_encoder_for_DSABindArgument) {
        _cached_encoder_for_DSABindArgument = function (
            value: DSABindArgument        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.credentials === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DSACredentials,
                                      $.DER
                                  )(value.credentials, $.DER),
                            /* IF_DEFAULT */ value.versions === undefined ||
                            $.deepEq(
                                value.versions,
                                DSABindArgument._default_value_for_versions
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Versions,
                                      $.DER
                                  )(value.versions, $.DER),
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
    return _cached_encoder_for_DSABindArgument(value, elGetter);
}


/* eslint-enable */
