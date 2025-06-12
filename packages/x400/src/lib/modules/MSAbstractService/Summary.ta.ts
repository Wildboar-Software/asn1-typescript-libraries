/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Summary_present_Item,
    _decode_Summary_present_Item,
    _encode_Summary_present_Item,
} from '../MSAbstractService/Summary-present-Item.ta.js';
export {
    Summary_present_Item,
    _decode_Summary_present_Item,
    _encode_Summary_present_Item,
} from '../MSAbstractService/Summary-present-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION Summary */
/**
 * @summary Summary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Summary ::= SET {
 *   absent
 *     [0]  INTEGER(1..ub-messages)
 *       OPTIONAL --count of entries where X413ATTRIBUTE is absent--,
 *   present
 *     [1]  SET SIZE (1..ub-attribute-values)
 *            OF--one for each X413ATTRIBUTE value present--
 *            SEQUENCE {type   X413ATTRIBUTE.&id({AttributeTable}),
 *                      value  X413ATTRIBUTE.&Type({AttributeTable}{@.type}),
 *                      count  INTEGER(1..ub-messages)} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Summary {
    constructor(
        /**
         * @summary `absent`.
         * @public
         * @readonly
         */
        readonly absent: OPTIONAL<INTEGER>,
        /**
         * @summary `present`.
         * @public
         * @readonly
         */
        readonly present: OPTIONAL<Summary_present_Item[]>
    ) {}

    /**
     * @summary Restructures an object into a Summary
     * @description
     *
     * This takes an `object` and converts it to a `Summary`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Summary`.
     * @returns {Summary}
     */
    public static _from_object(
        _o: { [_K in keyof Summary]: Summary[_K] }
    ): Summary {
        return new Summary(_o.absent, _o.present);
    }
}
/* END_OF_SYMBOL_DEFINITION Summary */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Summary */
/**
 * @summary The Leading Root Component Types of Summary
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Summary: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'absent',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'present',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Summary */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Summary */
/**
 * @summary The Trailing Root Component Types of Summary
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Summary: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Summary */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Summary */
/**
 * @summary The Extension Addition Component Types of Summary
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Summary: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Summary */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Summary */
let _cached_decoder_for_Summary: $.ASN1Decoder<Summary> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Summary */

/* START_OF_SYMBOL_DEFINITION _decode_Summary */
/**
 * @summary Decodes an ASN.1 element into a(n) Summary
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Summary} The decoded data structure.
 */
export function _decode_Summary(el: _Element) {
    if (!_cached_decoder_for_Summary) {
        _cached_decoder_for_Summary = function (el: _Element): Summary {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let absent: OPTIONAL<INTEGER>;
            let present: OPTIONAL<Summary_present_Item[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                absent: (_el: _Element): void => {
                    absent = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                present: (_el: _Element): void => {
                    present = $._decode_explicit<Summary_present_Item[]>(() =>
                        $._decodeSetOf<Summary_present_Item>(
                            () => _decode_Summary_present_Item
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Summary,
                _extension_additions_list_spec_for_Summary,
                _root_component_type_list_2_spec_for_Summary,
                undefined
            );
            return new Summary /* SET_CONSTRUCTOR_CALL */(absent, present);
        };
    }
    return _cached_decoder_for_Summary(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Summary */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Summary */
let _cached_encoder_for_Summary: $.ASN1Encoder<Summary> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Summary */

/* START_OF_SYMBOL_DEFINITION _encode_Summary */
/**
 * @summary Encodes a(n) Summary into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Summary, encoded as an ASN.1 Element.
 */
export function _encode_Summary(
    value: Summary,
    elGetter: $.ASN1Encoder<Summary>
) {
    if (!_cached_encoder_for_Summary) {
        _cached_encoder_for_Summary = function (
            value: Summary,
            elGetter: $.ASN1Encoder<Summary>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.absent === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.absent, $.BER),
                        /* IF_ABSENT  */ value.present === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<Summary_present_Item>(
                                          () => _encode_Summary_present_Item,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.present, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Summary(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Summary */

/* eslint-enable */
