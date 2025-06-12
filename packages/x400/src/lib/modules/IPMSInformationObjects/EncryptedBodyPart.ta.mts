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
    EncryptedParameters,
    _decode_EncryptedParameters,
    _encode_EncryptedParameters,
} from '../IPMSInformationObjects/EncryptedParameters.ta.mjs';
export {
    EncryptedParameters,
    _decode_EncryptedParameters,
    _encode_EncryptedParameters,
} from '../IPMSInformationObjects/EncryptedParameters.ta.mjs';
import {
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from '../IPMSInformationObjects/EncryptedData.ta.mjs';
export {
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from '../IPMSInformationObjects/EncryptedData.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EncryptedBodyPart */
/**
 * @summary EncryptedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedBodyPart ::= SEQUENCE {
 *   parameters  EncryptedParameters,
 *   data        EncryptedData
 * }
 * ```
 *
 * @class
 */
export class EncryptedBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: EncryptedParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: EncryptedData
    ) {}

    /**
     * @summary Restructures an object into a EncryptedBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedBodyPart`.
     * @returns {EncryptedBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedBodyPart]: EncryptedBodyPart[_K] }
    ): EncryptedBodyPart {
        return new EncryptedBodyPart(_o.parameters, _o.data);
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedBodyPart */
/**
 * @summary The Leading Root Component Types of EncryptedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedBodyPart: $.ComponentSpec[] = [
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
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedBodyPart */
/**
 * @summary The Trailing Root Component Types of EncryptedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedBodyPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedBodyPart */
/**
 * @summary The Extension Addition Component Types of EncryptedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedBodyPart */
let _cached_decoder_for_EncryptedBodyPart: $.ASN1Decoder<EncryptedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedBodyPart} The decoded data structure.
 */
export function _decode_EncryptedBodyPart(el: _Element) {
    if (!_cached_decoder_for_EncryptedBodyPart) {
        _cached_decoder_for_EncryptedBodyPart = function (
            el: _Element
        ): EncryptedBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'EncryptedBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: EncryptedParameters;
            let data!: EncryptedData;
            parameters = _decode_EncryptedParameters(sequence[0]);
            data = _decode_EncryptedData(sequence[1]);
            return new EncryptedBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_EncryptedBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedBodyPart */
let _cached_encoder_for_EncryptedBodyPart: $.ASN1Encoder<EncryptedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedBodyPart */
/**
 * @summary Encodes a(n) EncryptedBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedBodyPart(
    value: EncryptedBodyPart,
    elGetter: $.ASN1Encoder<EncryptedBodyPart>
) {
    if (!_cached_encoder_for_EncryptedBodyPart) {
        _cached_encoder_for_EncryptedBodyPart = function (
            value: EncryptedBodyPart,
            elGetter: $.ASN1Encoder<EncryptedBodyPart>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EncryptedParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedData(
                            value.data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedBodyPart */

/* eslint-enable */
