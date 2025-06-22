/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
    UTF8String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EpcFormat_fields_Item,
    _decode_EpcFormat_fields_Item,
    _encode_EpcFormat_fields_Item,
} from "../SelectedAttributeTypes/EpcFormat-fields-Item.ta.mjs";
/**
 * @summary EpcFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat ::= SEQUENCE {
 *   fields          SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *     bits            INTEGER,
 *     charField       CHOICE {
 *       characters  [0] INTEGER,
 *       maxValue    [1] INTEGER },
 *     result          ENUMERATED {
 *       numericPad     (0),
 *       numeric        (1),
 *       alpha7bits     (2) } DEFAULT numericPad },
 *   digitShift  [0] INTEGER                        OPTIONAL,
 *   checkCalc   [1] INTEGER                        OPTIONAL,
 *   urnPrefix       UTF8String                     OPTIONAL }
 * ```
 *
 * @class
 */
export class EpcFormat {
    constructor(
        /**
         * @summary `fields`.
         * @public
         * @readonly
         */
        readonly fields: EpcFormat_fields_Item[],
        /**
         * @summary `digitShift`.
         * @public
         * @readonly
         */
        readonly digitShift: OPTIONAL<INTEGER>,
        /**
         * @summary `checkCalc`.
         * @public
         * @readonly
         */
        readonly checkCalc: OPTIONAL<INTEGER>,
        /**
         * @summary `urnPrefix`.
         * @public
         * @readonly
         */
        readonly urnPrefix: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a EpcFormat
     * @description
     *
     * This takes an `object` and converts it to a `EpcFormat`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EpcFormat`.
     * @returns {EpcFormat}
     */
    public static _from_object(
        _o: { [_K in keyof EpcFormat]: EpcFormat[_K] }
    ): EpcFormat {
        return new EpcFormat(
            _o.fields,
            _o.digitShift,
            _o.checkCalc,
            _o.urnPrefix
        );
    }
}

/**
 * @summary The Leading Root Component Types of EpcFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EpcFormat: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "fields",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "digitShift",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "checkCalc",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "urnPrefix",
        true,
        $.hasTag(_TagClass.universal, 12)
    ),
];

/**
 * @summary The Trailing Root Component Types of EpcFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EpcFormat: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EpcFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EpcFormat: $.ComponentSpec[] = [];

let _cached_decoder_for_EpcFormat: $.ASN1Decoder<EpcFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EpcFormat} The decoded data structure.
 */
export function _decode_EpcFormat(el: _Element) {
    if (!_cached_decoder_for_EpcFormat) {
        _cached_decoder_for_EpcFormat = function (el: _Element): EpcFormat {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let fields!: EpcFormat_fields_Item[];
            let digitShift: OPTIONAL<INTEGER>;
            let checkCalc: OPTIONAL<INTEGER>;
            let urnPrefix: OPTIONAL<UTF8String>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                fields: (_el: _Element): void => {
                    fields = $._decodeSequenceOf<EpcFormat_fields_Item>(
                        () => _decode_EpcFormat_fields_Item
                    )(_el);
                },
                digitShift: (_el: _Element): void => {
                    digitShift = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                checkCalc: (_el: _Element): void => {
                    checkCalc = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                urnPrefix: (_el: _Element): void => {
                    urnPrefix = $._decodeUTF8String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EpcFormat,
                _extension_additions_list_spec_for_EpcFormat,
                _root_component_type_list_2_spec_for_EpcFormat,
                undefined
            );
            return new EpcFormat(
                /* SEQUENCE_CONSTRUCTOR_CALL */ fields,
                digitShift,
                checkCalc,
                urnPrefix
            );
        };
    }
    return _cached_decoder_for_EpcFormat(el);
}

let _cached_encoder_for_EpcFormat: $.ASN1Encoder<EpcFormat> | null = null;

/**
 * @summary Encodes a(n) EpcFormat into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat, encoded as an ASN.1 Element.
 */
export function _encode_EpcFormat(
    value: EpcFormat,
    elGetter: $.ASN1Encoder<EpcFormat>
) {
    if (!_cached_encoder_for_EpcFormat) {
        _cached_encoder_for_EpcFormat = function (
            value: EpcFormat        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSequenceOf<EpcFormat_fields_Item>(
                            () => _encode_EpcFormat_fields_Item,
                            $.DER
                        )(value.fields, $.DER),
                        /* IF_ABSENT  */ value.digitShift === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.DER
                              )(value.digitShift, $.DER),
                        /* IF_ABSENT  */ value.checkCalc === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.DER
                              )(value.checkCalc, $.DER),
                        /* IF_ABSENT  */ value.urnPrefix === undefined
                            ? undefined
                            : $._encodeUTF8String(value.urnPrefix, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_EpcFormat(value, elGetter);
}


/* eslint-enable */
