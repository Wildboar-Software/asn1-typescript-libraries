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
import * as $ from 'asn1-ts/dist/node/functional';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";
import { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa';
export { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta";

/* START_OF_SYMBOL_DEFINITION AttributeSelection */
/**
 * @summary AttributeSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeSelection ::= SET {
 *   type   X413ATTRIBUTE.&id({AttributeTable}),
 *   from
 *     [0]  INTEGER(1..ub-attribute-values)
 *       OPTIONAL --used if type is multi valued--,
 *   count
 *     [1]  INTEGER(0..ub-attribute-values)
 *       OPTIONAL --used if type is multi valued--
 * }
 * ```
 *
 * @class
 */
export class AttributeSelection {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `from_`.
         * @public
         * @readonly
         */
        readonly from_: OPTIONAL<INTEGER>,
        /**
         * @summary `count`.
         * @public
         * @readonly
         */
        readonly count: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a AttributeSelection
     * @description
     *
     * This takes an `object` and converts it to a `AttributeSelection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeSelection`.
     * @returns {AttributeSelection}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeSelection]: AttributeSelection[_K] }
    ): AttributeSelection {
        return new AttributeSelection(_o.type_, _o.from_, _o.count);
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeSelection */
/**
 * @summary The Leading Root Component Types of AttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeSelection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'from',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'count',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeSelection */
/**
 * @summary The Trailing Root Component Types of AttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeSelection */
/**
 * @summary The Extension Addition Component Types of AttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeSelection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeSelection */
let _cached_decoder_for_AttributeSelection: $.ASN1Decoder<AttributeSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSelection} The decoded data structure.
 */
export function _decode_AttributeSelection(el: _Element) {
    if (!_cached_decoder_for_AttributeSelection) {
        _cached_decoder_for_AttributeSelection = function (
            el: _Element
        ): AttributeSelection {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let type_!: AttributeType;
            let from_: OPTIONAL<INTEGER>;
            let count: OPTIONAL<INTEGER>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = _decode_AttributeType(_el);
                },
                from: (_el: _Element): void => {
                    from_ = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                count: (_el: _Element): void => {
                    count = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeSelection,
                _extension_additions_list_spec_for_AttributeSelection,
                _root_component_type_list_2_spec_for_AttributeSelection,
                undefined
            );
            return new AttributeSelection /* SET_CONSTRUCTOR_CALL */(
                type_,
                from_,
                count
            );
        };
    }
    return _cached_decoder_for_AttributeSelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeSelection */
let _cached_encoder_for_AttributeSelection: $.ASN1Encoder<AttributeSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeSelection */
/**
 * @summary Encodes a(n) AttributeSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSelection(
    value: AttributeSelection,
    elGetter: $.ASN1Encoder<AttributeSelection>
) {
    if (!_cached_encoder_for_AttributeSelection) {
        _cached_encoder_for_AttributeSelection = function (
            value: AttributeSelection,
            elGetter: $.ASN1Encoder<AttributeSelection>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttributeType(
                            value.type_,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.from_ === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.from_, $.BER),
                        /* IF_ABSENT  */ value.count === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.count, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeSelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeSelection */

/* eslint-enable */
