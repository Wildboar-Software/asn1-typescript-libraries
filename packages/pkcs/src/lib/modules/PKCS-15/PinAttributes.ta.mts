/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Path, _decode_Path, _encode_Path } from "../PKCS-15/Path.ta.mjs";
import {
    PinFlags,
    _decode_PinFlags,
    _encode_PinFlags,
} from "../PKCS-15/PinFlags.ta.mjs";
import {
    PinType,
    _decode_PinType,
    _encode_PinType,
    _enum_for_PinType,
} from "../PKCS-15/PinType.ta.mjs";
import {
    Reference,
    _decode_Reference,
    _encode_Reference,
} from "../PKCS-15/Reference.ta.mjs";

/**
 * @summary PinAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PinAttributes ::= SEQUENCE {
 *     pinFlags  PinFlags,
 *     pinType  PinType,
 *     minLength INTEGER (pkcs15-lb-minPinLength..pkcs15-ub-minPinLength),
 *     storedLength  INTEGER (0..pkcs15-ub-storedPinLength),
 *     maxLength INTEGER OPTIONAL,
 *     pinReference  [0] Reference DEFAULT 0,
 *     padChar  OCTET STRING (SIZE(1)) OPTIONAL,
 *     lastPinChange GeneralizedTime OPTIONAL,
 *     path   Path OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class PinAttributes {
    constructor(
        /**
         * @summary `pinFlags`.
         * @public
         * @readonly
         */
        readonly pinFlags: PinFlags,
        /**
         * @summary `pinType`.
         * @public
         * @readonly
         */
        readonly pinType: PinType,
        /**
         * @summary `minLength`.
         * @public
         * @readonly
         */
        readonly minLength: INTEGER,
        /**
         * @summary `storedLength`.
         * @public
         * @readonly
         */
        readonly storedLength: INTEGER,
        /**
         * @summary `maxLength`.
         * @public
         * @readonly
         */
        readonly maxLength: OPTIONAL<INTEGER>,
        /**
         * @summary `pinReference`.
         * @public
         * @readonly
         */
        readonly pinReference: OPTIONAL<Reference>,
        /**
         * @summary `padChar`.
         * @public
         * @readonly
         */
        readonly padChar: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `lastPinChange`.
         * @public
         * @readonly
         */
        readonly lastPinChange: OPTIONAL<GeneralizedTime>,
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
     * @summary Restructures an object into a PinAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PinAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PinAttributes`.
     * @returns {PinAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof PinAttributes]: PinAttributes[_K] }
    ): PinAttributes {
        return new PinAttributes(
            _o.pinFlags,
            _o.pinType,
            _o.minLength,
            _o.storedLength,
            _o.maxLength,
            _o.pinReference,
            _o.padChar,
            _o.lastPinChange,
            _o.path,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `pinReference`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_pinReference(): Reference {
        return 0;
    }
    /**
     * @summary The enum used as the type of the component `pinType`
     * @public
     * @static
     */

    public static _enum_for_pinType = _enum_for_PinType;
}


/**
 * @summary The Leading Root Component Types of PinAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PinAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pinFlags",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "pinType",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "minLength",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "storedLength",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "maxLength",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "pinReference",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "padChar",
        true,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "lastPinChange",
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
 * @summary The Trailing Root Component Types of PinAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PinAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PinAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PinAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_PinAttributes: $.ASN1Decoder<PinAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PinAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PinAttributes} The decoded data structure.
 */
export function _decode_PinAttributes(el: _Element): PinAttributes {
    if (!_cached_decoder_for_PinAttributes) {
        _cached_decoder_for_PinAttributes = function (
            el: _Element
        ): PinAttributes {
            let pinFlags!: PinFlags;
            let pinType!: PinType;
            let minLength!: INTEGER;
            let storedLength!: INTEGER;
            let maxLength: OPTIONAL<INTEGER>;
            let pinReference: OPTIONAL<Reference> =
                PinAttributes._default_value_for_pinReference;
            let padChar: OPTIONAL<OCTET_STRING>;
            let lastPinChange: OPTIONAL<GeneralizedTime>;
            let path: OPTIONAL<Path>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                pinFlags: (_el: _Element): void => {
                    pinFlags = _decode_PinFlags(_el);
                },
                pinType: (_el: _Element): void => {
                    pinType = _decode_PinType(_el);
                },
                minLength: (_el: _Element): void => {
                    minLength = $._decodeInteger(_el);
                },
                storedLength: (_el: _Element): void => {
                    storedLength = $._decodeInteger(_el);
                },
                maxLength: (_el: _Element): void => {
                    maxLength = $._decodeInteger(_el);
                },
                pinReference: (_el: _Element): void => {
                    pinReference = $._decode_implicit<Reference>(
                        () => _decode_Reference
                    )(_el);
                },
                padChar: (_el: _Element): void => {
                    padChar = $._decodeOctetString(_el);
                },
                lastPinChange: (_el: _Element): void => {
                    lastPinChange = $._decodeGeneralizedTime(_el);
                },
                path: (_el: _Element): void => {
                    path = _decode_Path(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PinAttributes,
                _extension_additions_list_spec_for_PinAttributes,
                _root_component_type_list_2_spec_for_PinAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PinAttributes(
                pinFlags,
                pinType,
                minLength,
                storedLength,
                maxLength,
                pinReference,
                padChar,
                lastPinChange,
                path,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PinAttributes(el);
}


let _cached_encoder_for_PinAttributes: $.ASN1Encoder<PinAttributes> | null = null;


/**
 * @summary Encodes a(n) PinAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PinAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PinAttributes(
    value: PinAttributes,
    elGetter: $.ASN1Encoder<PinAttributes>
): _Element {
    if (!_cached_encoder_for_PinAttributes) {
        _cached_encoder_for_PinAttributes = function (
            value: PinAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_PinFlags(
                                value.pinFlags,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_PinType(
                                value.pinType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.minLength,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.storedLength,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.maxLength === undefined
                                ? undefined
                                : $._encodeInteger(value.maxLength, $.BER),
                            /* IF_DEFAULT */ value.pinReference === undefined ||
                            $.deepEq(
                                value.pinReference,
                                PinAttributes._default_value_for_pinReference
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Reference,
                                      $.BER
                                  )(value.pinReference, $.BER),
                            /* IF_ABSENT  */ value.padChar === undefined
                                ? undefined
                                : $._encodeOctetString(value.padChar, $.BER),
                            /* IF_ABSENT  */ value.lastPinChange === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.lastPinChange,
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
    return _cached_encoder_for_PinAttributes(value, elGetter);
}


/* eslint-enable */
