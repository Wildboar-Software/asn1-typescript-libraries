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
    G3FacsimileParameters,
    _decode_G3FacsimileParameters,
    _encode_G3FacsimileParameters,
} from '../IPMSInformationObjects/G3FacsimileParameters.ta.js';
export {
    G3FacsimileParameters,
    _decode_G3FacsimileParameters,
    _encode_G3FacsimileParameters,
} from '../IPMSInformationObjects/G3FacsimileParameters.ta.js';
import {
    G3FacsimileData,
    _decode_G3FacsimileData,
    _encode_G3FacsimileData,
} from '../IPMSInformationObjects/G3FacsimileData.ta.js';
export {
    G3FacsimileData,
    _decode_G3FacsimileData,
    _encode_G3FacsimileData,
} from '../IPMSInformationObjects/G3FacsimileData.ta.js';

/* START_OF_SYMBOL_DEFINITION G3FacsimileBodyPart */
/**
 * @summary G3FacsimileBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G3FacsimileBodyPart ::= SEQUENCE {
 *   parameters  G3FacsimileParameters,
 *   data        G3FacsimileData
 * }
 * ```
 *
 * @class
 */
export class G3FacsimileBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: G3FacsimileParameters,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: G3FacsimileData
    ) {}

    /**
     * @summary Restructures an object into a G3FacsimileBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `G3FacsimileBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `G3FacsimileBodyPart`.
     * @returns {G3FacsimileBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof G3FacsimileBodyPart]: G3FacsimileBodyPart[_K] }
    ): G3FacsimileBodyPart {
        return new G3FacsimileBodyPart(_o.parameters, _o.data);
    }
}
/* END_OF_SYMBOL_DEFINITION G3FacsimileBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_G3FacsimileBodyPart */
/**
 * @summary The Leading Root Component Types of G3FacsimileBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_G3FacsimileBodyPart: $.ComponentSpec[] = [
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
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_G3FacsimileBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_G3FacsimileBodyPart */
/**
 * @summary The Trailing Root Component Types of G3FacsimileBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_G3FacsimileBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_G3FacsimileBodyPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_G3FacsimileBodyPart */
/**
 * @summary The Extension Addition Component Types of G3FacsimileBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_G3FacsimileBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_G3FacsimileBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_G3FacsimileBodyPart */
let _cached_decoder_for_G3FacsimileBodyPart: $.ASN1Decoder<G3FacsimileBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_G3FacsimileBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_G3FacsimileBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) G3FacsimileBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G3FacsimileBodyPart} The decoded data structure.
 */
export function _decode_G3FacsimileBodyPart(el: _Element) {
    if (!_cached_decoder_for_G3FacsimileBodyPart) {
        _cached_decoder_for_G3FacsimileBodyPart = function (
            el: _Element
        ): G3FacsimileBodyPart {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'G3FacsimileBodyPart contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'parameters';
            sequence[1].name = 'data';
            let parameters!: G3FacsimileParameters;
            let data!: G3FacsimileData;
            parameters = _decode_G3FacsimileParameters(sequence[0]);
            data = _decode_G3FacsimileData(sequence[1]);
            return new G3FacsimileBodyPart(parameters, data);
        };
    }
    return _cached_decoder_for_G3FacsimileBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_G3FacsimileBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_G3FacsimileBodyPart */
let _cached_encoder_for_G3FacsimileBodyPart: $.ASN1Encoder<G3FacsimileBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_G3FacsimileBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_G3FacsimileBodyPart */
/**
 * @summary Encodes a(n) G3FacsimileBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G3FacsimileBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_G3FacsimileBodyPart(
    value: G3FacsimileBodyPart,
    elGetter: $.ASN1Encoder<G3FacsimileBodyPart>
) {
    if (!_cached_encoder_for_G3FacsimileBodyPart) {
        _cached_encoder_for_G3FacsimileBodyPart = function (
            value: G3FacsimileBodyPart,
            elGetter: $.ASN1Encoder<G3FacsimileBodyPart>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_G3FacsimileParameters(
                            value.parameters,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_G3FacsimileData(
                            value.data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_G3FacsimileBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_G3FacsimileBodyPart */

/* eslint-enable */
