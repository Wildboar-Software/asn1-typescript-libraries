/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    UniversalOrBMPString_character_encoding,
    _decode_UniversalOrBMPString_character_encoding,
    _encode_UniversalOrBMPString_character_encoding,
} from '../MTSAbstractService/UniversalOrBMPString-character-encoding.ta.mjs';
/**
 * @summary UniversalOrBMPString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrBMPString{INTEGER:ub-string-length} ::= SET {
 *   character-encoding
 *     CHOICE {two-octets   BMPString(SIZE (1..ub-string-length)),
 *             four-octets  UniversalString(SIZE (1..ub-string-length))},
 *   iso-639-language-code  PrintableString(SIZE (2 | 5)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class UniversalOrBMPString {
    constructor(
        /**
         * @summary `character_encoding`.
         * @public
         * @readonly
         */
        readonly character_encoding: UniversalOrBMPString_character_encoding,
        /**
         * @summary `iso_639_language_code`.
         * @public
         * @readonly
         */
        readonly iso_639_language_code: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a UniversalOrBMPString
     * @description
     *
     * This takes an `object` and converts it to a `UniversalOrBMPString`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniversalOrBMPString`.
     * @returns {UniversalOrBMPString}
     */
    public static _from_object(
        _o: { [_K in keyof UniversalOrBMPString]: UniversalOrBMPString[_K] }
    ): UniversalOrBMPString {
        return new UniversalOrBMPString(
            _o.character_encoding,
            _o.iso_639_language_code
        );
    }
}

/**
 * @summary The Leading Root Component Types of UniversalOrBMPString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniversalOrBMPString: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'character-encoding',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'iso-639-language-code',
        true,
        $.hasTag(_TagClass.universal, 19)
    ),
];

/**
 * @summary The Trailing Root Component Types of UniversalOrBMPString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniversalOrBMPString: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UniversalOrBMPString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniversalOrBMPString: $.ComponentSpec[] = [];

let _cached_decoder_for_UniversalOrBMPString: $.ASN1Decoder<UniversalOrBMPString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrBMPString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrBMPString} The decoded data structure.
 */
export function _decode_UniversalOrBMPString(el: _Element): UniversalOrBMPString {
    if (!_cached_decoder_for_UniversalOrBMPString) {
        _cached_decoder_for_UniversalOrBMPString = function (
            el: _Element
        ): UniversalOrBMPString {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let character_encoding!: UniversalOrBMPString_character_encoding;
            let iso_639_language_code: OPTIONAL<PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'character-encoding': (_el: _Element): void => {
                    character_encoding = _decode_UniversalOrBMPString_character_encoding(
                        _el
                    );
                },
                'iso-639-language-code': (_el: _Element): void => {
                    iso_639_language_code = $._decodePrintableString(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniversalOrBMPString,
                _extension_additions_list_spec_for_UniversalOrBMPString,
                _root_component_type_list_2_spec_for_UniversalOrBMPString,
                undefined
            );
            return new UniversalOrBMPString /* SET_CONSTRUCTOR_CALL */(
                character_encoding,
                iso_639_language_code
            );
        };
    }
    return _cached_decoder_for_UniversalOrBMPString(el);
}

let _cached_encoder_for_UniversalOrBMPString: $.ASN1Encoder<UniversalOrBMPString> | null = null;

/**
 * @summary Encodes a(n) UniversalOrBMPString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrBMPString, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrBMPString(
    value: UniversalOrBMPString,
    elGetter: $.ASN1Encoder<UniversalOrBMPString>
): _Element {
    if (!_cached_encoder_for_UniversalOrBMPString) {
        _cached_encoder_for_UniversalOrBMPString = function (
            value: UniversalOrBMPString        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UniversalOrBMPString_character_encoding(
                            value.character_encoding,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.iso_639_language_code ===
                        undefined
                            ? undefined
                            : $._encodePrintableString(
                                  value.iso_639_language_code,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UniversalOrBMPString(value, elGetter);
}


/* eslint-enable */
