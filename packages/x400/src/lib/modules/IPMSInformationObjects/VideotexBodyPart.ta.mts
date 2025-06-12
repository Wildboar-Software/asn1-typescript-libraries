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
    VideotexParameters,
    _decode_VideotexParameters,
    _encode_VideotexParameters,
} from '../IPMSInformationObjects/VideotexParameters.ta.mjs';
export {
    VideotexParameters,
    _decode_VideotexParameters,
    _encode_VideotexParameters,
} from '../IPMSInformationObjects/VideotexParameters.ta.mjs';
import {
    VideotexData,
    _decode_VideotexData,
    _encode_VideotexData,
} from '../IPMSInformationObjects/VideotexData.ta.mjs';
export {
    VideotexData,
    _decode_VideotexData,
    _encode_VideotexData,
} from '../IPMSInformationObjects/VideotexData.ta.mjs';

/* START_OF_SYMBOL_DEFINITION VideotexBodyPart */
/**
 * @summary VideotexBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexBodyPart ::= SEQUENCE {
 *   parameters  VideotexParameters,
 *   data        VideotexData
 * }
 * ```
 *
 * @class
 */
export class VideotexBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: VideotexParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: VideotexData
    ) {}

    /**
     * @summary Restructures an object into a VideotexBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `VideotexBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VideotexBodyPart`.
     * @returns {VideotexBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof VideotexBodyPart]: VideotexBodyPart[_K] }
    ): VideotexBodyPart {
        return new VideotexBodyPart(_o.parameters, _o.data);
    }
}
/* END_OF_SYMBOL_DEFINITION VideotexBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VideotexBodyPart */
/**
 * @summary The Leading Root Component Types of VideotexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VideotexBodyPart: $.ComponentSpec[] = [
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
        $.hasTag(_TagClass.universal, 21),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_VideotexBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VideotexBodyPart */
/**
 * @summary The Trailing Root Component Types of VideotexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VideotexBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_VideotexBodyPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VideotexBodyPart */
/**
 * @summary The Extension Addition Component Types of VideotexBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VideotexBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_VideotexBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexBodyPart */
let _cached_decoder_for_VideotexBodyPart: $.ASN1Decoder<VideotexBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_VideotexBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) VideotexBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VideotexBodyPart} The decoded data structure.
 */
export function _decode_VideotexBodyPart(el: _Element) {
    if (!_cached_decoder_for_VideotexBodyPart) {
        _cached_decoder_for_VideotexBodyPart = function (
            el: _Element
        ): VideotexBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'VideotexBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: VideotexParameters;
            let data!: VideotexData;
            parameters = _decode_VideotexParameters(sequence[0]);
            data = _decode_VideotexData(sequence[1]);
            return new VideotexBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_VideotexBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VideotexBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexBodyPart */
let _cached_encoder_for_VideotexBodyPart: $.ASN1Encoder<VideotexBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_VideotexBodyPart */
/**
 * @summary Encodes a(n) VideotexBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VideotexBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_VideotexBodyPart(
    value: VideotexBodyPart,
    elGetter: $.ASN1Encoder<VideotexBodyPart>
) {
    if (!_cached_encoder_for_VideotexBodyPart) {
        _cached_encoder_for_VideotexBodyPart = function (
            value: VideotexBodyPart,
            elGetter: $.ASN1Encoder<VideotexBodyPart>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_VideotexParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_VideotexData(
                            value.data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_VideotexBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VideotexBodyPart */

/* eslint-enable */
