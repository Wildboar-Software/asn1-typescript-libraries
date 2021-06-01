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

/* START_OF_SYMBOL_DEFINITION GenericName */
/**
 * @summary GenericName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericName ::= SEQUENCE {displayFormat  IA5String,
 *                           typedFormat    EXTERNAL
 * }
 * ```
 *
 * @class
 */
export class GenericName {
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
     * @summary Restructures an object into a GenericName
     * @description
     *
     * This takes an `object` and converts it to a `GenericName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericName`.
     * @returns {GenericName}
     */
    public static _from_object(
        _o: { [_K in keyof GenericName]: GenericName[_K] }
    ): GenericName {
        return new GenericName(_o.displayFormat, _o.typedFormat);
    }
}
/* END_OF_SYMBOL_DEFINITION GenericName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GenericName */
/**
 * @summary The Leading Root Component Types of GenericName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GenericName: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GenericName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GenericName */
/**
 * @summary The Trailing Root Component Types of GenericName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GenericName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GenericName */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GenericName */
/**
 * @summary The Extension Addition Component Types of GenericName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GenericName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GenericName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericName */
let _cached_decoder_for_GenericName: $.ASN1Decoder<GenericName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericName */

/* START_OF_SYMBOL_DEFINITION _decode_GenericName */
/**
 * @summary Decodes an ASN.1 element into a(n) GenericName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenericName} The decoded data structure.
 */
export function _decode_GenericName(el: _Element) {
    if (!_cached_decoder_for_GenericName) {
        _cached_decoder_for_GenericName = function (el: _Element): GenericName {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'GenericName contained only ' +
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
            return new GenericName(displayFormat, typedFormat);
        };
    }
    return _cached_decoder_for_GenericName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GenericName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericName */
let _cached_encoder_for_GenericName: $.ASN1Encoder<GenericName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericName */

/* START_OF_SYMBOL_DEFINITION _encode_GenericName */
/**
 * @summary Encodes a(n) GenericName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericName, encoded as an ASN.1 Element.
 */
export function _encode_GenericName(
    value: GenericName,
    elGetter: $.ASN1Encoder<GenericName>
) {
    if (!_cached_encoder_for_GenericName) {
        _cached_encoder_for_GenericName = function (
            value: GenericName,
            elGetter: $.ASN1Encoder<GenericName>
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
    return _cached_encoder_for_GenericName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GenericName */

/* eslint-enable */
