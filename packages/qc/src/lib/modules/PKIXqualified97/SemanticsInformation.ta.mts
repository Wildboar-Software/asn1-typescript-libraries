/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    NameRegistrationAuthorities,
    _decode_NameRegistrationAuthorities,
    _encode_NameRegistrationAuthorities,
} from "../PKIXqualified97/NameRegistrationAuthorities.ta.mjs";

/**
 * @summary SemanticsInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SemanticsInformation ::= SEQUENCE {
 *     semanticsIdentifier         OBJECT IDENTIFIER OPTIONAL,
 *     nameRegistrationAuthorities NameRegistrationAuthorities OPTIONAL
 *     }(WITH COMPONENTS {..., semanticsIdentifier PRESENT}|
 *         WITH COMPONENTS {..., nameRegistrationAuthorities PRESENT})
 * ```
 *
 */
export class SemanticsInformation {
    constructor(
        /**
         * @summary `semanticsIdentifier`.
         * @public
         * @readonly
         */
        readonly semanticsIdentifier: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `nameRegistrationAuthorities`.
         * @public
         * @readonly
         */
        readonly nameRegistrationAuthorities: OPTIONAL<NameRegistrationAuthorities>
    ) {}

    /**
     * @summary Restructures an object into a SemanticsInformation
     * @description
     *
     * This takes an `object` and converts it to a `SemanticsInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SemanticsInformation`.
     * @returns {SemanticsInformation}
     */
    public static _from_object(
        _o: { [_K in keyof SemanticsInformation]: SemanticsInformation[_K] }
    ): SemanticsInformation {
        return new SemanticsInformation(
            _o.semanticsIdentifier,
            _o.nameRegistrationAuthorities
        );
    }
}


/**
 * @summary The Leading Root Component Types of SemanticsInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SemanticsInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "semanticsIdentifier",
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "nameRegistrationAuthorities",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of SemanticsInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SemanticsInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SemanticsInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SemanticsInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_SemanticsInformation: $.ASN1Decoder<SemanticsInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SemanticsInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SemanticsInformation} The decoded data structure.
 */
export function _decode_SemanticsInformation(el: _Element): SemanticsInformation {
    if (!_cached_decoder_for_SemanticsInformation) {
        _cached_decoder_for_SemanticsInformation = function (
            el: _Element
        ): SemanticsInformation {
            let semanticsIdentifier: OPTIONAL<OBJECT_IDENTIFIER>;
            let nameRegistrationAuthorities: OPTIONAL<NameRegistrationAuthorities>;
            const callbacks: $.DecodingMap = {
                semanticsIdentifier: (_el: _Element): void => {
                    semanticsIdentifier = $._decodeObjectIdentifier(_el);
                },
                nameRegistrationAuthorities: (_el: _Element): void => {
                    nameRegistrationAuthorities = _decode_NameRegistrationAuthorities(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SemanticsInformation,
                _extension_additions_list_spec_for_SemanticsInformation,
                _root_component_type_list_2_spec_for_SemanticsInformation,
                undefined
            );
            return new SemanticsInformation(
                semanticsIdentifier,
                nameRegistrationAuthorities
            );
        };
    }
    return _cached_decoder_for_SemanticsInformation(el);
}


let _cached_encoder_for_SemanticsInformation: $.ASN1Encoder<SemanticsInformation> | null = null;


/**
 * @summary Encodes a(n) SemanticsInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SemanticsInformation, encoded as an ASN.1 Element.
 */
export function _encode_SemanticsInformation(
    value: SemanticsInformation,
    elGetter: $.ASN1Encoder<SemanticsInformation>
): _Element {
    if (!_cached_encoder_for_SemanticsInformation) {
        _cached_encoder_for_SemanticsInformation = function (
            value: SemanticsInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.semanticsIdentifier === undefined
                            ? undefined
                            : $._encodeObjectIdentifier(
                                  value.semanticsIdentifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.nameRegistrationAuthorities ===
                        undefined
                            ? undefined
                            : _encode_NameRegistrationAuthorities(
                                  value.nameRegistrationAuthorities,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SemanticsInformation(value, elGetter);
}


/* eslint-enable */
