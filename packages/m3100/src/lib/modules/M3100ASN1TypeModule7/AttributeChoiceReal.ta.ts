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

/* START_OF_SYMBOL_DEFINITION AttributeChoiceReal */
/**
 * @summary AttributeChoiceReal
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeChoiceReal ::= SEQUENCE {
 *   attributeName  GraphicString,
 *   minimumValue   REAL,
 *   maximumValue   REAL
 * }
 * ```
 *
 * @class
 */
export class AttributeChoiceReal {
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
        readonly minimumValue: REAL,
        /**
         * @summary `maximumValue`.
         * @public
         * @readonly
         */
        readonly maximumValue: REAL
    ) {}

    /**
     * @summary Restructures an object into a AttributeChoiceReal
     * @description
     *
     * This takes an `object` and converts it to a `AttributeChoiceReal`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeChoiceReal`.
     * @returns {AttributeChoiceReal}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeChoiceReal]: AttributeChoiceReal[_K] }
    ): AttributeChoiceReal {
        return new AttributeChoiceReal(
            _o.attributeName,
            _o.minimumValue,
            _o.maximumValue
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeChoiceReal */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeChoiceReal */
/**
 * @summary The Leading Root Component Types of AttributeChoiceReal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeChoiceReal: $.ComponentSpec[] = [
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
        $.hasTag(_TagClass.universal, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'maximumValue',
        false,
        $.hasTag(_TagClass.universal, 9),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeChoiceReal */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeChoiceReal */
/**
 * @summary The Trailing Root Component Types of AttributeChoiceReal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeChoiceReal: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeChoiceReal */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeChoiceReal */
/**
 * @summary The Extension Addition Component Types of AttributeChoiceReal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeChoiceReal: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeChoiceReal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeChoiceReal */
let _cached_decoder_for_AttributeChoiceReal: $.ASN1Decoder<AttributeChoiceReal> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeChoiceReal */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeChoiceReal */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeChoiceReal
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeChoiceReal} The decoded data structure.
 */
export function _decode_AttributeChoiceReal(el: _Element) {
    if (!_cached_decoder_for_AttributeChoiceReal) {
        _cached_decoder_for_AttributeChoiceReal = function (
            el: _Element
        ): AttributeChoiceReal {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'AttributeChoiceReal contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'attributeName';
            sequence[1].name = 'minimumValue';
            sequence[2].name = 'maximumValue';
            let attributeName!: GraphicString;
            let minimumValue!: REAL;
            let maximumValue!: REAL;
            attributeName = $._decodeGraphicString(sequence[0]);
            minimumValue = $._decodeReal(sequence[1]);
            maximumValue = $._decodeReal(sequence[2]);
            return new AttributeChoiceReal(
                attributeName,
                minimumValue,
                maximumValue
            );
        };
    }
    return _cached_decoder_for_AttributeChoiceReal(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeChoiceReal */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeChoiceReal */
let _cached_encoder_for_AttributeChoiceReal: $.ASN1Encoder<AttributeChoiceReal> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeChoiceReal */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeChoiceReal */
/**
 * @summary Encodes a(n) AttributeChoiceReal into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeChoiceReal, encoded as an ASN.1 Element.
 */
export function _encode_AttributeChoiceReal(
    value: AttributeChoiceReal,
    elGetter: $.ASN1Encoder<AttributeChoiceReal>
) {
    if (!_cached_encoder_for_AttributeChoiceReal) {
        _cached_encoder_for_AttributeChoiceReal = function (
            value: AttributeChoiceReal,
            elGetter: $.ASN1Encoder<AttributeChoiceReal>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeGraphicString(
                            value.attributeName,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeReal(
                            value.minimumValue,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeReal(
                            value.maximumValue,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeChoiceReal(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeChoiceReal */

/* eslint-enable */
