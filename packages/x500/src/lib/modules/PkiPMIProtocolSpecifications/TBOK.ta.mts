/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
    UTCTime,
    UTF8String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TBOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBOK ::= SEQUENCE {
 *   levelOfAssurance  [0]  INTEGER (0..100),
 *   confidenceLevel   [1]  INTEGER (0..100),
 *   validationTime    [2]  UTCTime,
 *   info                   UTF8String  OPTIONAL,
 *   ... }
 * ```
 *
 */
export class TBOK {
    constructor(
        /**
         * @summary `levelOfAssurance`.
         * @public
         * @readonly
         */
        readonly levelOfAssurance: INTEGER,
        /**
         * @summary `confidenceLevel`.
         * @public
         * @readonly
         */
        readonly confidenceLevel: INTEGER,
        /**
         * @summary `validationTime`.
         * @public
         * @readonly
         */
        readonly validationTime: UTCTime,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBOK
     * @description
     *
     * This takes an `object` and converts it to a `TBOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBOK`.
     * @returns {TBOK}
     */
    public static _from_object(_o: { [_K in keyof TBOK]: TBOK[_K] }): TBOK {
        return new TBOK(
            _o.levelOfAssurance,
            _o.confidenceLevel,
            _o.validationTime,
            _o.info,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "levelOfAssurance",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "confidenceLevel",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "validationTime",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "info",
        true,
        $.hasTag(_TagClass.universal, 12)
    ),
];

/**
 * @summary The Trailing Root Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBOK: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBOK: $.ComponentSpec[] = [];

let _cached_decoder_for_TBOK: $.ASN1Decoder<TBOK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBOK} The decoded data structure.
 */
export function _decode_TBOK(el: _Element): TBOK {
    if (!_cached_decoder_for_TBOK) {
        _cached_decoder_for_TBOK = function (el: _Element): TBOK {
            let levelOfAssurance!: INTEGER;
            let confidenceLevel!: INTEGER;
            let validationTime!: UTCTime;
            let info: OPTIONAL<UTF8String>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                levelOfAssurance: (_el: _Element): void => {
                    levelOfAssurance = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                confidenceLevel: (_el: _Element): void => {
                    confidenceLevel = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                validationTime: (_el: _Element): void => {
                    validationTime = $._decode_explicit<UTCTime>(
                        () => $._decodeUTCTime
                    )(_el);
                },
                info: (_el: _Element): void => {
                    info = $._decodeUTF8String(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBOK,
                _extension_additions_list_spec_for_TBOK,
                _root_component_type_list_2_spec_for_TBOK,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBOK(
                levelOfAssurance,
                confidenceLevel,
                validationTime,
                info,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBOK(el);
}

let _cached_encoder_for_TBOK: $.ASN1Encoder<TBOK> | null = null;

/**
 * @summary Encodes a(n) TBOK into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBOK, encoded as an ASN.1 Element.
 */
export function _encode_TBOK(value: TBOK, elGetter: $.ASN1Encoder<TBOK>): _Element {
    if (!_cached_encoder_for_TBOK) {
        _cached_encoder_for_TBOK = function (
            value: TBOK        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeInteger,
                                $.DER
                            )(value.levelOfAssurance, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeInteger,
                                $.DER
                            )(value.confidenceLevel, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => $._encodeUTCTime,
                                $.DER
                            )(value.validationTime, $.DER),
                            /* IF_ABSENT  */ value.info === undefined
                                ? undefined
                                : $._encodeUTF8String(value.info, $.DER),
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
    return _cached_encoder_for_TBOK(value, elGetter);
}


/* eslint-enable */
