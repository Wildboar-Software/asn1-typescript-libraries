/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AccessMode,
    _decode_AccessMode,
    _encode_AccessMode,
} from "../PKCS-15/AccessMode.ta.mjs";
import {
    SecurityCondition,
    _decode_SecurityCondition,
    _encode_SecurityCondition,
} from "../PKCS-15/SecurityCondition.ta.mjs";

/**
 * @summary AccessControlRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControlRule ::= SEQUENCE {
 *     accessMode AccessMode,
 *     securityCondition SecurityCondition,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class AccessControlRule {
    constructor(
        /**
         * @summary `accessMode`.
         * @public
         * @readonly
         */
        readonly accessMode: AccessMode,
        /**
         * @summary `securityCondition`.
         * @public
         * @readonly
         */
        readonly securityCondition: SecurityCondition,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AccessControlRule
     * @description
     *
     * This takes an `object` and converts it to a `AccessControlRule`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessControlRule`.
     * @returns {AccessControlRule}
     */
    public static _from_object(
        _o: { [_K in keyof AccessControlRule]: AccessControlRule[_K] }
    ): AccessControlRule {
        return new AccessControlRule(
            _o.accessMode,
            _o.securityCondition,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of AccessControlRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AccessControlRule: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessMode",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "securityCondition",
        false,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of AccessControlRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AccessControlRule: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AccessControlRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AccessControlRule: $.ComponentSpec[] = [];


let _cached_decoder_for_AccessControlRule: $.ASN1Decoder<AccessControlRule> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlRule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessControlRule} The decoded data structure.
 */
export function _decode_AccessControlRule(el: _Element): AccessControlRule {
    if (!_cached_decoder_for_AccessControlRule) {
        _cached_decoder_for_AccessControlRule = function (
            el: _Element
        ): AccessControlRule {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AccessControlRule contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "accessMode";
            sequence[1].name = "securityCondition";
            let accessMode!: AccessMode;
            let securityCondition!: SecurityCondition;
            accessMode = _decode_AccessMode(sequence[0]);
            securityCondition = _decode_SecurityCondition(sequence[1]);
            return new AccessControlRule(
                accessMode,
                securityCondition,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AccessControlRule(el);
}


let _cached_encoder_for_AccessControlRule: $.ASN1Encoder<AccessControlRule> | null = null;


/**
 * @summary Encodes a(n) AccessControlRule into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlRule, encoded as an ASN.1 Element.
 */
export function _encode_AccessControlRule(
    value: AccessControlRule,
    elGetter: $.ASN1Encoder<AccessControlRule>
): _Element {
    if (!_cached_encoder_for_AccessControlRule) {
        _cached_encoder_for_AccessControlRule = function (
            value: AccessControlRule        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AccessMode(
                                value.accessMode,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SecurityCondition(
                                value.securityCondition,
                                $.BER
                            ),
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
    return _cached_encoder_for_AccessControlRule(value, elGetter);
}


/* eslint-enable */
