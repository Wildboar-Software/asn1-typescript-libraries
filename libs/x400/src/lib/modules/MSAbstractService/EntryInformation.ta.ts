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
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '../MSAbstractService/Attribute.ta';
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '../MSAbstractService/Attribute.ta';
import {
    AttributeValueCount,
    _decode_AttributeValueCount,
    _encode_AttributeValueCount,
} from '../MSAbstractService/AttributeValueCount.ta';
export {
    AttributeValueCount,
    _decode_AttributeValueCount,
    _encode_AttributeValueCount,
} from '../MSAbstractService/AttributeValueCount.ta';

/* START_OF_SYMBOL_DEFINITION EntryInformation */
/**
 * @summary EntryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformation ::= SEQUENCE {
 *   sequence-number       SequenceNumber,
 *   attributes            SET SIZE (1..ub-per-entry) OF Attribute OPTIONAL,
 *   -- 1994 extension
 *   value-count-exceeded
 *     [0]  SET SIZE (1..ub-per-entry) OF AttributeValueCount OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EntryInformation {
    constructor(
        /**
         * @summary `sequence_number`.
         * @public
         * @readonly
         */
        readonly sequence_number: SequenceNumber,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<Attribute[]>,
        /**
         * @summary `value_count_exceeded`.
         * @public
         * @readonly
         */
        readonly value_count_exceeded: OPTIONAL<AttributeValueCount[]>
    ) {}

    /**
     * @summary Restructures an object into a EntryInformation
     * @description
     *
     * This takes an `object` and converts it to a `EntryInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryInformation`.
     * @returns {EntryInformation}
     */
    public static _from_object(
        _o: { [_K in keyof EntryInformation]: EntryInformation[_K] }
    ): EntryInformation {
        return new EntryInformation(
            _o.sequence_number,
            _o.attributes,
            _o.value_count_exceeded
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EntryInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntryInformation */
/**
 * @summary The Leading Root Component Types of EntryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntryInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'sequence-number',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributes',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'value-count-exceeded',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EntryInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntryInformation */
/**
 * @summary The Trailing Root Component Types of EntryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntryInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EntryInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntryInformation */
/**
 * @summary The Extension Addition Component Types of EntryInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntryInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EntryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformation */
let _cached_decoder_for_EntryInformation: $.ASN1Decoder<EntryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformation */

/* START_OF_SYMBOL_DEFINITION _decode_EntryInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformation} The decoded data structure.
 */
export function _decode_EntryInformation(el: _Element) {
    if (!_cached_decoder_for_EntryInformation) {
        _cached_decoder_for_EntryInformation = function (
            el: _Element
        ): EntryInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sequence_number!: SequenceNumber;
            let attributes: OPTIONAL<Attribute[]>;
            let value_count_exceeded: OPTIONAL<AttributeValueCount[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'sequence-number': (_el: _Element): void => {
                    sequence_number = _decode_SequenceNumber(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = $._decodeSetOf<Attribute>(
                        () => _decode_Attribute
                    )(_el);
                },
                'value-count-exceeded': (_el: _Element): void => {
                    value_count_exceeded = $._decode_explicit<
                        AttributeValueCount[]
                    >(() =>
                        $._decodeSetOf<AttributeValueCount>(
                            () => _decode_AttributeValueCount
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntryInformation,
                _extension_additions_list_spec_for_EntryInformation,
                _root_component_type_list_2_spec_for_EntryInformation,
                undefined
            );
            return new EntryInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                sequence_number,
                attributes,
                value_count_exceeded
            );
        };
    }
    return _cached_decoder_for_EntryInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformation */
let _cached_encoder_for_EntryInformation: $.ASN1Encoder<EntryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformation */

/* START_OF_SYMBOL_DEFINITION _encode_EntryInformation */
/**
 * @summary Encodes a(n) EntryInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformation, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformation(
    value: EntryInformation,
    elGetter: $.ASN1Encoder<EntryInformation>
) {
    if (!_cached_encoder_for_EntryInformation) {
        _cached_encoder_for_EntryInformation = function (
            value: EntryInformation,
            elGetter: $.ASN1Encoder<EntryInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SequenceNumber(
                            value.sequence_number,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.attributes === undefined
                            ? undefined
                            : $._encodeSetOf<Attribute>(
                                  () => _encode_Attribute,
                                  $.BER
                              )(value.attributes, $.BER),
                        /* IF_ABSENT  */ value.value_count_exceeded ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<AttributeValueCount>(
                                          () => _encode_AttributeValueCount,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.value_count_exceeded, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EntryInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryInformation */

/* eslint-enable */
