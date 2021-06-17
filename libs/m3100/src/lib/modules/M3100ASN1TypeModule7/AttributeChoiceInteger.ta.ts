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

/* START_OF_SYMBOL_DEFINITION AttributeChoiceInteger */
/**
 * @summary AttributeChoiceInteger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeChoiceInteger ::= SEQUENCE {
 *   attributeName  GraphicString,
 *   minimumValue   INTEGER,
 *   maximumValue   INTEGER,
 *   granularity    INTEGER
 * }
 * ```
 *
 * @class
 */
export class AttributeChoiceInteger {
    constructor(
        /**
         * @summary `attributeName`.
         * @public
         * @readonly
         */
        readonly attributeName: GraphicString,
        /**
         * @summary `minimumValue`.
         * @public
         * @readonly
         */
        readonly minimumValue: INTEGER,
        /**
         * @summary `maximumValue`.
         * @public
         * @readonly
         */
        readonly maximumValue: INTEGER,
        /**
         * @summary `granularity`.
         * @public
         * @readonly
         */
        readonly granularity: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a AttributeChoiceInteger
     * @description
     *
     * This takes an `object` and converts it to a `AttributeChoiceInteger`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeChoiceInteger`.
     * @returns {AttributeChoiceInteger}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeChoiceInteger]: AttributeChoiceInteger[_K] }
    ): AttributeChoiceInteger {
        return new AttributeChoiceInteger(
            _o.attributeName,
            _o.minimumValue,
            _o.maximumValue,
            _o.granularity
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeChoiceInteger */
/**
 * @summary The Leading Root Component Types of AttributeChoiceInteger
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeChoiceInteger: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attributeName',
        false,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'minimumValue',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'maximumValue',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'granularity',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeChoiceInteger */
/**
 * @summary The Trailing Root Component Types of AttributeChoiceInteger
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeChoiceInteger: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeChoiceInteger */
/**
 * @summary The Extension Addition Component Types of AttributeChoiceInteger
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeChoiceInteger: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeChoiceInteger */
let _cached_decoder_for_AttributeChoiceInteger: $.ASN1Decoder<AttributeChoiceInteger> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeChoiceInteger */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeChoiceInteger
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeChoiceInteger} The decoded data structure.
 */
export function _decode_AttributeChoiceInteger(el: _Element) {
    if (!_cached_decoder_for_AttributeChoiceInteger) {
        _cached_decoder_for_AttributeChoiceInteger = function (
            el: _Element
        ): AttributeChoiceInteger {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    'AttributeChoiceInteger contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attributeName';
            sequence[1].name = 'minimumValue';
            sequence[2].name = 'maximumValue';
            sequence[3].name = 'granularity';
            let attributeName!: GraphicString;
            let minimumValue!: INTEGER;
            let maximumValue!: INTEGER;
            let granularity!: INTEGER;
            attributeName = $._decodeGraphicString(sequence[0]);
            minimumValue = $._decodeInteger(sequence[1]);
            maximumValue = $._decodeInteger(sequence[2]);
            granularity = $._decodeInteger(sequence[3]);
            return new AttributeChoiceInteger(
                attributeName,
                minimumValue,
                maximumValue,
                granularity
            );
        };
    }
    return _cached_decoder_for_AttributeChoiceInteger(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeChoiceInteger */
let _cached_encoder_for_AttributeChoiceInteger: $.ASN1Encoder<AttributeChoiceInteger> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeChoiceInteger */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeChoiceInteger */
/**
 * @summary Encodes a(n) AttributeChoiceInteger into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeChoiceInteger, encoded as an ASN.1 Element.
 */
export function _encode_AttributeChoiceInteger(
    value: AttributeChoiceInteger,
    elGetter: $.ASN1Encoder<AttributeChoiceInteger>
) {
    if (!_cached_encoder_for_AttributeChoiceInteger) {
        _cached_encoder_for_AttributeChoiceInteger = function (
            value: AttributeChoiceInteger,
            elGetter: $.ASN1Encoder<AttributeChoiceInteger>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeGraphicString(
                            value.attributeName,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.minimumValue,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.maximumValue,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.granularity,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeChoiceInteger(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeChoiceInteger */

/* eslint-enable */
