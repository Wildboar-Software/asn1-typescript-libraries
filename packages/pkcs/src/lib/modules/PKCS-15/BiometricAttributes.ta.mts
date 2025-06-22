/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    BiometricFlags,
    _decode_BiometricFlags,
    _encode_BiometricFlags,
} from "../PKCS-15/BiometricFlags.ta.mjs";
import {
    BiometricType,
    _decode_BiometricType,
    _encode_BiometricType,
} from "../PKCS-15/BiometricType.ta.mjs";
import { Path, _decode_Path, _encode_Path } from "../PKCS-15/Path.ta.mjs";
import {
    Reference,
    _decode_Reference,
    _encode_Reference,
} from "../PKCS-15/Reference.ta.mjs";

/**
 * @summary BiometricAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricAttributes ::= SEQUENCE {
 *     bioFlags BiometricFlags,
 *     templateId OBJECT IDENTIFIER,
 *     bioType BiometricType,
 *     bioReference Reference DEFAULT 0,
 *     lastChange GeneralizedTime OPTIONAL,
 *     path Path OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class BiometricAttributes {
    constructor(
        /**
         * @summary `bioFlags`.
         * @public
         * @readonly
         */
        readonly bioFlags: BiometricFlags,
        /**
         * @summary `templateId`.
         * @public
         * @readonly
         */
        readonly templateId: OBJECT_IDENTIFIER,
        /**
         * @summary `bioType`.
         * @public
         * @readonly
         */
        readonly bioType: BiometricType,
        /**
         * @summary `bioReference`.
         * @public
         * @readonly
         */
        readonly bioReference: OPTIONAL<Reference>,
        /**
         * @summary `lastChange`.
         * @public
         * @readonly
         */
        readonly lastChange: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `path`.
         * @public
         * @readonly
         */
        readonly path: OPTIONAL<Path>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BiometricAttributes
     * @description
     *
     * This takes an `object` and converts it to a `BiometricAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricAttributes`.
     * @returns {BiometricAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof BiometricAttributes]: BiometricAttributes[_K] }
    ): BiometricAttributes {
        return new BiometricAttributes(
            _o.bioFlags,
            _o.templateId,
            _o.bioType,
            _o.bioReference,
            _o.lastChange,
            _o.path,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `bioReference`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bioReference() {
        return 0;
    }
}


/**
 * @summary The Leading Root Component Types of BiometricAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BiometricAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bioFlags",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "templateId",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec("bioType", false, $.hasAnyTag),
    new $.ComponentSpec(
        "bioReference",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "lastChange",
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "path",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of BiometricAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BiometricAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BiometricAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BiometricAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_BiometricAttributes: $.ASN1Decoder<BiometricAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BiometricAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricAttributes} The decoded data structure.
 */
export function _decode_BiometricAttributes(el: _Element) {
    if (!_cached_decoder_for_BiometricAttributes) {
        _cached_decoder_for_BiometricAttributes = function (
            el: _Element
        ): BiometricAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bioFlags!: BiometricFlags;
            let templateId!: OBJECT_IDENTIFIER;
            let bioType!: BiometricType;
            let bioReference: OPTIONAL<Reference> =
                BiometricAttributes._default_value_for_bioReference;
            let lastChange: OPTIONAL<GeneralizedTime>;
            let path: OPTIONAL<Path>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bioFlags: (_el: _Element): void => {
                    bioFlags = _decode_BiometricFlags(_el);
                },
                templateId: (_el: _Element): void => {
                    templateId = $._decodeObjectIdentifier(_el);
                },
                bioType: (_el: _Element): void => {
                    bioType = _decode_BiometricType(_el);
                },
                bioReference: (_el: _Element): void => {
                    bioReference = _decode_Reference(_el);
                },
                lastChange: (_el: _Element): void => {
                    lastChange = $._decodeGeneralizedTime(_el);
                },
                path: (_el: _Element): void => {
                    path = _decode_Path(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BiometricAttributes,
                _extension_additions_list_spec_for_BiometricAttributes,
                _root_component_type_list_2_spec_for_BiometricAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BiometricAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bioFlags,
                templateId,
                bioType,
                bioReference,
                lastChange,
                path,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BiometricAttributes(el);
}


let _cached_encoder_for_BiometricAttributes: $.ASN1Encoder<BiometricAttributes> | null = null;


/**
 * @summary Encodes a(n) BiometricAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricAttributes, encoded as an ASN.1 Element.
 */
export function _encode_BiometricAttributes(
    value: BiometricAttributes,
    elGetter: $.ASN1Encoder<BiometricAttributes>
) {
    if (!_cached_encoder_for_BiometricAttributes) {
        _cached_encoder_for_BiometricAttributes = function (
            value: BiometricAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_BiometricFlags(
                                value.bioFlags,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.templateId,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_BiometricType(
                                value.bioType,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.bioReference === undefined ||
                            $.deepEq(
                                value.bioReference,
                                BiometricAttributes._default_value_for_bioReference
                            )
                                ? undefined
                                : _encode_Reference(value.bioReference, $.BER),
                            /* IF_ABSENT  */ value.lastChange === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.lastChange,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.path === undefined
                                ? undefined
                                : _encode_Path(value.path, $.BER),
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
    return _cached_encoder_for_BiometricAttributes(value, elGetter);
}


/* eslint-enable */
