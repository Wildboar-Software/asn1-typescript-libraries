/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    UTF8String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TBerror_code,
    _decode_TBerror_code,
    _encode_TBerror_code,
    _enum_for_TBerror_code,
} from "../PkiPMIProtocolSpecifications/TBerror-code.ta.mjs";
/**
 * @summary TBerror
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBerror ::= SEQUENCE {
 *   code        ENUMERATED {
 *     caCertInvalid        (1),
 *     unknownCert          (2),
 *     unknownCertStatus    (3),
 *     subjectCertRevoked   (4),
 *     incorrectCert        (5),
 *     contractExpired      (6),
 *     pathValidationFailed (7),
 *     timeOut              (8),
 *     other                (99),
 *     ... },
 *   diagnostic  UTF8String OPTIONAL,
 *   ... }
 * ```
 *
 */
export class TBerror {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: TBerror_code,
        /**
         * @summary `diagnostic`.
         * @public
         * @readonly
         */
        readonly diagnostic: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBerror
     * @description
     *
     * This takes an `object` and converts it to a `TBerror`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBerror`.
     * @returns {TBerror}
     */
    public static _from_object(
        _o: { [_K in keyof TBerror]: TBerror[_K] }
    ): TBerror {
        return new TBerror(
            _o.code,
            _o.diagnostic,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_TBerror_code;
}

/**
 * @summary The Leading Root Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBerror: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "diagnostic",
        true,
        $.hasTag(_TagClass.universal, 12)
    ),
];

/**
 * @summary The Trailing Root Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBerror: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBerror: $.ComponentSpec[] = [];

let _cached_decoder_for_TBerror: $.ASN1Decoder<TBerror> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBerror
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBerror} The decoded data structure.
 */
export function _decode_TBerror(el: _Element): TBerror {
    if (!_cached_decoder_for_TBerror) {
        _cached_decoder_for_TBerror = function (el: _Element): TBerror {
            let code!: TBerror_code;
            let diagnostic: OPTIONAL<UTF8String>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                code: (_el: _Element): void => {
                    code = _decode_TBerror_code(_el);
                },
                diagnostic: (_el: _Element): void => {
                    diagnostic = $._decodeUTF8String(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBerror,
                _extension_additions_list_spec_for_TBerror,
                _root_component_type_list_2_spec_for_TBerror,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBerror(
                code,
                diagnostic,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBerror(el);
}

let _cached_encoder_for_TBerror: $.ASN1Encoder<TBerror> | null = null;

/**
 * @summary Encodes a(n) TBerror into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBerror, encoded as an ASN.1 Element.
 */
export function _encode_TBerror(
    value: TBerror,
    elGetter: $.ASN1Encoder<TBerror>
): _Element {
    if (!_cached_encoder_for_TBerror) {
        _cached_encoder_for_TBerror = function (
            value: TBerror        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TBerror_code(
                                value.code,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.diagnostic === undefined
                                ? undefined
                                : $._encodeUTF8String(value.diagnostic, $.DER),
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
    return _cached_encoder_for_TBerror(value, elGetter);
}


/* eslint-enable */
