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

/* START_OF_SYMBOL_DEFINITION GenericAddress */
/**
 * @summary GenericAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericAddress ::= SEQUENCE {displayFormat  IA5String,
 *                              typedFormat    EXTERNAL
 * }
 * ```
 *
 * @class
 */
export class GenericAddress {
    constructor(
        /**
         * @summary `displayFormat`.
         * @public
         * @readonly
         */
        readonly displayFormat: IA5String,
        /**
         * @summary `typedFormat`.
         * @public
         * @readonly
         */
        readonly typedFormat: EXTERNAL
    ) {}

    /**
     * @summary Restructures an object into a GenericAddress
     * @description
     *
     * This takes an `object` and converts it to a `GenericAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericAddress`.
     * @returns {GenericAddress}
     */
    public static _from_object(
        _o: { [_K in keyof GenericAddress]: GenericAddress[_K] }
    ): GenericAddress {
        return new GenericAddress(_o.displayFormat, _o.typedFormat);
    }
}
/* END_OF_SYMBOL_DEFINITION GenericAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GenericAddress */
/**
 * @summary The Leading Root Component Types of GenericAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GenericAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'displayFormat',
        false,
        $.hasTag(_TagClass.universal, 22),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'typedFormat',
        false,
        $.hasTag(_TagClass.universal, 8),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GenericAddress */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GenericAddress */
/**
 * @summary The Trailing Root Component Types of GenericAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GenericAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GenericAddress */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GenericAddress */
/**
 * @summary The Extension Addition Component Types of GenericAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GenericAddress: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GenericAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericAddress */
let _cached_decoder_for_GenericAddress: $.ASN1Decoder<GenericAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericAddress */

/* START_OF_SYMBOL_DEFINITION _decode_GenericAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) GenericAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenericAddress} The decoded data structure.
 */
export function _decode_GenericAddress(el: _Element) {
    if (!_cached_decoder_for_GenericAddress) {
        _cached_decoder_for_GenericAddress = function (
            el: _Element
        ): GenericAddress {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'GenericAddress contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'displayFormat';
            sequence[1].name = 'typedFormat';
            let displayFormat!: IA5String;
            let typedFormat!: EXTERNAL;
            displayFormat = $._decodeIA5String(sequence[0]);
            typedFormat = $._decodeExternal(sequence[1]);
            return new GenericAddress(displayFormat, typedFormat);
        };
    }
    return _cached_decoder_for_GenericAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GenericAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericAddress */
let _cached_encoder_for_GenericAddress: $.ASN1Encoder<GenericAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericAddress */

/* START_OF_SYMBOL_DEFINITION _encode_GenericAddress */
/**
 * @summary Encodes a(n) GenericAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericAddress, encoded as an ASN.1 Element.
 */
export function _encode_GenericAddress(
    value: GenericAddress,
    elGetter: $.ASN1Encoder<GenericAddress>
) {
    if (!_cached_encoder_for_GenericAddress) {
        _cached_encoder_for_GenericAddress = function (
            value: GenericAddress,
            elGetter: $.ASN1Encoder<GenericAddress>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeIA5String(
                            value.displayFormat,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeExternal(
                            value.typedFormat,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_GenericAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GenericAddress */

/* eslint-enable */
