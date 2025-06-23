/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AltNameType,
    _decode_AltNameType,
    _encode_AltNameType,
} from "../CertificateExtensions/AltNameType.ta.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
/**
 * @summary AltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltName ::= SEQUENCE {
 *   altnameType   AltNameType,
 *   altNameValue  GeneralName OPTIONAL }
 * ```
 *
 * @class
 */
export class AltName {
    constructor(
        /**
         * @summary `altnameType`.
         * @public
         * @readonly
         */
        readonly altnameType: AltNameType,
        /**
         * @summary `altNameValue`.
         * @public
         * @readonly
         */
        readonly altNameValue: OPTIONAL<GeneralName>
    ) {}

    /**
     * @summary Restructures an object into a AltName
     * @description
     *
     * This takes an `object` and converts it to a `AltName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AltName`.
     * @returns {AltName}
     */
    public static _from_object(
        _o: { [_K in keyof AltName]: AltName[_K] }
    ): AltName {
        return new AltName(_o.altnameType, _o.altNameValue);
    }
}

/**
 * @summary The Leading Root Component Types of AltName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AltName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "altnameType",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "altNameValue",
        true,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of AltName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AltName: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AltName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AltName: $.ComponentSpec[] = [];

let _cached_decoder_for_AltName: $.ASN1Decoder<AltName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AltName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltName} The decoded data structure.
 */
export function _decode_AltName(el: _Element) {
    if (!_cached_decoder_for_AltName) {
        _cached_decoder_for_AltName = function (el: _Element): AltName {
            let altnameType!: AltNameType;
            let altNameValue: OPTIONAL<GeneralName>;
            const callbacks: $.DecodingMap = {
                altnameType: (_el: _Element): void => {
                    altnameType = _decode_AltNameType(_el);
                },
                altNameValue: (_el: _Element): void => {
                    altNameValue = _decode_GeneralName(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AltName,
                _extension_additions_list_spec_for_AltName,
                _root_component_type_list_2_spec_for_AltName,
                undefined
            );
            return new AltName(
                altnameType,
                altNameValue
            );
        };
    }
    return _cached_decoder_for_AltName(el);
}

let _cached_encoder_for_AltName: $.ASN1Encoder<AltName> | null = null;

/**
 * @summary Encodes a(n) AltName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltName, encoded as an ASN.1 Element.
 */
export function _encode_AltName(
    value: AltName,
    elGetter: $.ASN1Encoder<AltName>
) {
    if (!_cached_encoder_for_AltName) {
        _cached_encoder_for_AltName = function (
            value: AltName        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AltNameType(
                            value.altnameType,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.altNameValue === undefined
                            ? undefined
                            : _encode_GeneralName(value.altNameValue, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AltName(value, elGetter);
}


/* eslint-enable */
