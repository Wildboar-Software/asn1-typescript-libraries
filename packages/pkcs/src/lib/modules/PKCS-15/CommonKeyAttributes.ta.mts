/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta.mjs";
import {
    KeyAccessFlags,
    _decode_KeyAccessFlags,
    _encode_KeyAccessFlags,
} from "../PKCS-15/KeyAccessFlags.ta.mjs";
import {
    KeyUsageFlags,
    _decode_KeyUsageFlags,
    _encode_KeyUsageFlags,
} from "../PKCS-15/KeyUsageFlags.ta.mjs";
import {
    Reference,
    _decode_Reference,
    _encode_Reference,
} from "../PKCS-15/Reference.ta.mjs";

/**
 * @summary CommonKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonKeyAttributes ::= SEQUENCE {
 *     iD  Identifier,
 *     usage  KeyUsageFlags,
 *     native BOOLEAN DEFAULT TRUE,
 *     accessFlags KeyAccessFlags OPTIONAL,
 *     keyReference Reference OPTIONAL,
 *     startDate GeneralizedTime OPTIONAL,
 *     endDate  [0] GeneralizedTime OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class CommonKeyAttributes {
    constructor(
        /**
         * @summary `iD`.
         * @public
         * @readonly
         */
        readonly iD: Identifier,
        /**
         * @summary `usage`.
         * @public
         * @readonly
         */
        readonly usage: KeyUsageFlags,
        /**
         * @summary `native`.
         * @public
         * @readonly
         */
        readonly native: OPTIONAL<BOOLEAN>,
        /**
         * @summary `accessFlags`.
         * @public
         * @readonly
         */
        readonly accessFlags: OPTIONAL<KeyAccessFlags>,
        /**
         * @summary `keyReference`.
         * @public
         * @readonly
         */
        readonly keyReference: OPTIONAL<Reference>,
        /**
         * @summary `startDate`.
         * @public
         * @readonly
         */
        readonly startDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `endDate`.
         * @public
         * @readonly
         */
        readonly endDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CommonKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonKeyAttributes`.
     * @returns {CommonKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof CommonKeyAttributes]: CommonKeyAttributes[_K] }
    ): CommonKeyAttributes {
        return new CommonKeyAttributes(
            _o.iD,
            _o.usage,
            _o.native,
            _o.accessFlags,
            _o.keyReference,
            _o.startDate,
            _o.endDate,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `native`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_native(): boolean {
        return true;
    }
}


/**
 * @summary The Leading Root Component Types of CommonKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "iD",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "usage",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "native",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        "accessFlags",
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "keyReference",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "startDate",
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        "endDate",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of CommonKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonKeyAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CommonKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonKeyAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_CommonKeyAttributes: $.ASN1Decoder<CommonKeyAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CommonKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonKeyAttributes} The decoded data structure.
 */
export function _decode_CommonKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_CommonKeyAttributes) {
        _cached_decoder_for_CommonKeyAttributes = function (
            el: _Element
        ): CommonKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let iD!: Identifier;
            let usage!: KeyUsageFlags;
            let native: OPTIONAL<BOOLEAN> =
                CommonKeyAttributes._default_value_for_native;
            let accessFlags: OPTIONAL<KeyAccessFlags>;
            let keyReference: OPTIONAL<Reference>;
            let startDate: OPTIONAL<GeneralizedTime>;
            let endDate: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                iD: (_el: _Element): void => {
                    iD = _decode_Identifier(_el);
                },
                usage: (_el: _Element): void => {
                    usage = _decode_KeyUsageFlags(_el);
                },
                native: (_el: _Element): void => {
                    native = $._decodeBoolean(_el);
                },
                accessFlags: (_el: _Element): void => {
                    accessFlags = _decode_KeyAccessFlags(_el);
                },
                keyReference: (_el: _Element): void => {
                    keyReference = _decode_Reference(_el);
                },
                startDate: (_el: _Element): void => {
                    startDate = $._decodeGeneralizedTime(_el);
                },
                endDate: (_el: _Element): void => {
                    endDate = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonKeyAttributes,
                _extension_additions_list_spec_for_CommonKeyAttributes,
                _root_component_type_list_2_spec_for_CommonKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonKeyAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ iD,
                usage,
                native,
                accessFlags,
                keyReference,
                startDate,
                endDate,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonKeyAttributes(el);
}


let _cached_encoder_for_CommonKeyAttributes: $.ASN1Encoder<CommonKeyAttributes> | null = null;


/**
 * @summary Encodes a(n) CommonKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CommonKeyAttributes(
    value: CommonKeyAttributes,
    elGetter: $.ASN1Encoder<CommonKeyAttributes>
) {
    if (!_cached_encoder_for_CommonKeyAttributes) {
        _cached_encoder_for_CommonKeyAttributes = function (
            value: CommonKeyAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Identifier(
                                value.iD,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_KeyUsageFlags(
                                value.usage,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.native === undefined ||
                            $.deepEq(
                                value.native,
                                CommonKeyAttributes._default_value_for_native
                            )
                                ? undefined
                                : $._encodeBoolean(value.native, $.BER),
                            /* IF_ABSENT  */ value.accessFlags === undefined
                                ? undefined
                                : _encode_KeyAccessFlags(
                                      value.accessFlags,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.keyReference === undefined
                                ? undefined
                                : _encode_Reference(value.keyReference, $.BER),
                            /* IF_ABSENT  */ value.startDate === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.startDate,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.endDate === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.endDate, $.BER),
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
    return _cached_encoder_for_CommonKeyAttributes(value, elGetter);
}


/* eslint-enable */
