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
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta';
export {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta';

/* START_OF_SYMBOL_DEFINITION ConversionStatistics */
/**
 * @summary ConversionStatistics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionStatistics ::= SEQUENCE {
 *   oldEit  EncodedInformationTypes,
 *   newEit  EncodedInformationTypes
 * }
 * ```
 *
 * @class
 */
export class ConversionStatistics {
    constructor(
        /**
         * @summary `oldEit`.
         * @public
         * @readonly
         */
        readonly oldEit: EncodedInformationTypes,
        /**
         * @summary `newEit`.
         * @public
         * @readonly
         */
        readonly newEit: EncodedInformationTypes
    ) {}

    /**
     * @summary Restructures an object into a ConversionStatistics
     * @description
     *
     * This takes an `object` and converts it to a `ConversionStatistics`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConversionStatistics`.
     * @returns {ConversionStatistics}
     */
    public static _from_object(
        _o: { [_K in keyof ConversionStatistics]: ConversionStatistics[_K] }
    ): ConversionStatistics {
        return new ConversionStatistics(_o.oldEit, _o.newEit);
    }
}
/* END_OF_SYMBOL_DEFINITION ConversionStatistics */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConversionStatistics */
/**
 * @summary The Leading Root Component Types of ConversionStatistics
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConversionStatistics: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'oldEit',
        false,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'newEit',
        false,
        $.hasTag(_TagClass.application, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConversionStatistics */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConversionStatistics */
/**
 * @summary The Trailing Root Component Types of ConversionStatistics
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConversionStatistics: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConversionStatistics */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConversionStatistics */
/**
 * @summary The Extension Addition Component Types of ConversionStatistics
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConversionStatistics: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConversionStatistics */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConversionStatistics */
let _cached_decoder_for_ConversionStatistics: $.ASN1Decoder<ConversionStatistics> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConversionStatistics */

/* START_OF_SYMBOL_DEFINITION _decode_ConversionStatistics */
/**
 * @summary Decodes an ASN.1 element into a(n) ConversionStatistics
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConversionStatistics} The decoded data structure.
 */
export function _decode_ConversionStatistics(el: _Element) {
    if (!_cached_decoder_for_ConversionStatistics) {
        _cached_decoder_for_ConversionStatistics = function (
            el: _Element
        ): ConversionStatistics {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ConversionStatistics contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'oldEit';
            sequence[1].name = 'newEit';
            let oldEit!: EncodedInformationTypes;
            let newEit!: EncodedInformationTypes;
            oldEit = _decode_EncodedInformationTypes(sequence[0]);
            newEit = _decode_EncodedInformationTypes(sequence[1]);
            return new ConversionStatistics(oldEit, newEit);
        };
    }
    return _cached_decoder_for_ConversionStatistics(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConversionStatistics */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConversionStatistics */
let _cached_encoder_for_ConversionStatistics: $.ASN1Encoder<ConversionStatistics> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConversionStatistics */

/* START_OF_SYMBOL_DEFINITION _encode_ConversionStatistics */
/**
 * @summary Encodes a(n) ConversionStatistics into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConversionStatistics, encoded as an ASN.1 Element.
 */
export function _encode_ConversionStatistics(
    value: ConversionStatistics,
    elGetter: $.ASN1Encoder<ConversionStatistics>
) {
    if (!_cached_encoder_for_ConversionStatistics) {
        _cached_encoder_for_ConversionStatistics = function (
            value: ConversionStatistics,
            elGetter: $.ASN1Encoder<ConversionStatistics>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EncodedInformationTypes(
                            value.oldEit,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncodedInformationTypes(
                            value.newEit,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConversionStatistics(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConversionStatistics */

/* eslint-enable */
