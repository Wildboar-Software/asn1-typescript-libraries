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
    TypeOfAddress,
    _enum_for_TypeOfAddress,
    _decode_TypeOfAddress,
    _encode_TypeOfAddress,
} from '../TCAP-Examples/TypeOfAddress.ta.mjs';
import {
    TelephonyString,
    _decode_TelephonyString,
    _encode_TelephonyString,
} from '../TCAP-Examples/TelephonyString.ta.mjs';
export {
    TelephonyString,
    _decode_TelephonyString,
    _encode_TelephonyString,
} from '../TCAP-Examples/TelephonyString.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IsdnNumber */
/**
 * @summary IsdnNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IsdnNumber ::= SEQUENCE {
 *   typeOfAddress  TypeOfAddress,
 *   digits         TelephonyString
 * }
 * ```
 *
 * @class
 */
export class IsdnNumber {
    constructor(
        /**
         * @summary `typeOfAddress`.
         * @public
         * @readonly
         */
        readonly typeOfAddress: TypeOfAddress,
        /**
         * @summary `digits`.
         * @public
         * @readonly
         */
        readonly digits: TelephonyString
    ) {}

    /**
     * @summary Restructures an object into a IsdnNumber
     * @description
     *
     * This takes an `object` and converts it to a `IsdnNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IsdnNumber`.
     * @returns {IsdnNumber}
     */
    public static _from_object(
        _o: { [_K in keyof IsdnNumber]: IsdnNumber[_K] }
    ): IsdnNumber {
        return new IsdnNumber(_o.typeOfAddress, _o.digits);
    }

    /**
     * @summary The enum used as the type of the component `typeOfAddress`
     * @public
     * @static
     */

    public static _enum_for_typeOfAddress = _enum_for_TypeOfAddress;
}
/* END_OF_SYMBOL_DEFINITION IsdnNumber */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IsdnNumber */
/**
 * @summary The Leading Root Component Types of IsdnNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IsdnNumber: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'typeOfAddress',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'digits',
        false,
        $.hasTag(_TagClass.universal, 22),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IsdnNumber */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IsdnNumber */
/**
 * @summary The Trailing Root Component Types of IsdnNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IsdnNumber: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IsdnNumber */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IsdnNumber */
/**
 * @summary The Extension Addition Component Types of IsdnNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IsdnNumber: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IsdnNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IsdnNumber */
let _cached_decoder_for_IsdnNumber: $.ASN1Decoder<IsdnNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IsdnNumber */

/* START_OF_SYMBOL_DEFINITION _decode_IsdnNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) IsdnNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IsdnNumber} The decoded data structure.
 */
export function _decode_IsdnNumber(el: _Element) {
    if (!_cached_decoder_for_IsdnNumber) {
        _cached_decoder_for_IsdnNumber = function (el: _Element): IsdnNumber {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'IsdnNumber contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'typeOfAddress';
            sequence[1].name = 'digits';
            let typeOfAddress!: TypeOfAddress;
            let digits!: TelephonyString;
            typeOfAddress = _decode_TypeOfAddress(sequence[0]);
            digits = _decode_TelephonyString(sequence[1]);
            return new IsdnNumber(typeOfAddress, digits);
        };
    }
    return _cached_decoder_for_IsdnNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IsdnNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IsdnNumber */
let _cached_encoder_for_IsdnNumber: $.ASN1Encoder<IsdnNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IsdnNumber */

/* START_OF_SYMBOL_DEFINITION _encode_IsdnNumber */
/**
 * @summary Encodes a(n) IsdnNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IsdnNumber, encoded as an ASN.1 Element.
 */
export function _encode_IsdnNumber(
    value: IsdnNumber,
    elGetter: $.ASN1Encoder<IsdnNumber>
) {
    if (!_cached_encoder_for_IsdnNumber) {
        _cached_encoder_for_IsdnNumber = function (
            value: IsdnNumber,
            elGetter: $.ASN1Encoder<IsdnNumber>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TypeOfAddress(
                            value.typeOfAddress,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TelephonyString(
                            value.digits,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IsdnNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IsdnNumber */

/* eslint-enable */
