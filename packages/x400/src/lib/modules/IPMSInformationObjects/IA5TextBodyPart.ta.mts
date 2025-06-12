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
    IA5TextParameters,
    _decode_IA5TextParameters,
    _encode_IA5TextParameters,
} from '../IPMSInformationObjects/IA5TextParameters.ta.mjs';
export {
    IA5TextParameters,
    _decode_IA5TextParameters,
    _encode_IA5TextParameters,
} from '../IPMSInformationObjects/IA5TextParameters.ta.mjs';
import {
    IA5TextData,
    _decode_IA5TextData,
    _encode_IA5TextData,
} from '../IPMSInformationObjects/IA5TextData.ta.mjs';
export {
    IA5TextData,
    _decode_IA5TextData,
    _encode_IA5TextData,
} from '../IPMSInformationObjects/IA5TextData.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IA5TextBodyPart */
/**
 * @summary IA5TextBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IA5TextBodyPart ::= SEQUENCE {
 *   parameters  IA5TextParameters,
 *   data        IA5TextData
 * }
 * ```
 *
 * @class
 */
export class IA5TextBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: IA5TextParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: IA5TextData
    ) {}

    /**
     * @summary Restructures an object into a IA5TextBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `IA5TextBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IA5TextBodyPart`.
     * @returns {IA5TextBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof IA5TextBodyPart]: IA5TextBodyPart[_K] }
    ): IA5TextBodyPart {
        return new IA5TextBodyPart(_o.parameters, _o.data);
    }
}
/* END_OF_SYMBOL_DEFINITION IA5TextBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IA5TextBodyPart */
/**
 * @summary The Leading Root Component Types of IA5TextBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IA5TextBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parameters',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.universal, 22),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IA5TextBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IA5TextBodyPart */
/**
 * @summary The Trailing Root Component Types of IA5TextBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IA5TextBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IA5TextBodyPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IA5TextBodyPart */
/**
 * @summary The Extension Addition Component Types of IA5TextBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IA5TextBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IA5TextBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IA5TextBodyPart */
let _cached_decoder_for_IA5TextBodyPart: $.ASN1Decoder<IA5TextBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IA5TextBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_IA5TextBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) IA5TextBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IA5TextBodyPart} The decoded data structure.
 */
export function _decode_IA5TextBodyPart(el: _Element) {
    if (!_cached_decoder_for_IA5TextBodyPart) {
        _cached_decoder_for_IA5TextBodyPart = function (
            el: _Element
        ): IA5TextBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'IA5TextBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: IA5TextParameters;
            let data!: IA5TextData;
            parameters = _decode_IA5TextParameters(sequence[0]);
            data = _decode_IA5TextData(sequence[1]);
            return new IA5TextBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_IA5TextBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IA5TextBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IA5TextBodyPart */
let _cached_encoder_for_IA5TextBodyPart: $.ASN1Encoder<IA5TextBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IA5TextBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_IA5TextBodyPart */
/**
 * @summary Encodes a(n) IA5TextBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IA5TextBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_IA5TextBodyPart(
    value: IA5TextBodyPart,
    elGetter: $.ASN1Encoder<IA5TextBodyPart>
) {
    if (!_cached_encoder_for_IA5TextBodyPart) {
        _cached_encoder_for_IA5TextBodyPart = function (
            value: IA5TextBodyPart,
            elGetter: $.ASN1Encoder<IA5TextBodyPart>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IA5TextParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_IA5TextData(value.data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IA5TextBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IA5TextBodyPart */

/* eslint-enable */
