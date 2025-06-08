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
import { COMPRESSION_ALGORITHM } from '../IPMSFileTransferBodyPartType/COMPRESSION-ALGORITHM.oca';
export { COMPRESSION_ALGORITHM } from '../IPMSFileTransferBodyPartType/COMPRESSION-ALGORITHM.oca';
import { CompressionAlgorithmTable } from '../IPMSFileTransferBodyPartType/CompressionAlgorithmTable.osa';
export { CompressionAlgorithmTable } from '../IPMSFileTransferBodyPartType/CompressionAlgorithmTable.osa';

/* START_OF_SYMBOL_DEFINITION CompressionParameter */
/**
 * @summary CompressionParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompressionParameter ::= SEQUENCE {
 *   compression-algorithm-id
 *     [0]  COMPRESSION-ALGORITHM.&id({CompressionAlgorithmTable}),
 *   compression-algorithm-param
 *     [1]  COMPRESSION-ALGORITHM.&Type
 *            ({CompressionAlgorithmTable}{@compression-algorithm-id})
 * }
 * ```
 *
 * @class
 */
export class CompressionParameter {
    constructor(
        /**
         * @summary `compression_algorithm_id`.
         * @public
         * @readonly
         */
        readonly compression_algorithm_id: OBJECT_IDENTIFIER,
        /**
         * @summary `compression_algorithm_param`.
         * @public
         * @readonly
         */
        readonly compression_algorithm_param: _Element
    ) {}

    /**
     * @summary Restructures an object into a CompressionParameter
     * @description
     *
     * This takes an `object` and converts it to a `CompressionParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompressionParameter`.
     * @returns {CompressionParameter}
     */
    public static _from_object(
        _o: { [_K in keyof CompressionParameter]: CompressionParameter[_K] }
    ): CompressionParameter {
        return new CompressionParameter(
            _o.compression_algorithm_id,
            _o.compression_algorithm_param
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CompressionParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CompressionParameter */
/**
 * @summary The Leading Root Component Types of CompressionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CompressionParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'compression-algorithm-id',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'compression-algorithm-param',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CompressionParameter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CompressionParameter */
/**
 * @summary The Trailing Root Component Types of CompressionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CompressionParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CompressionParameter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CompressionParameter */
/**
 * @summary The Extension Addition Component Types of CompressionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CompressionParameter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CompressionParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompressionParameter */
let _cached_decoder_for_CompressionParameter: $.ASN1Decoder<CompressionParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompressionParameter */

/* START_OF_SYMBOL_DEFINITION _decode_CompressionParameter */
/**
 * @summary Decodes an ASN.1 element into a(n) CompressionParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompressionParameter} The decoded data structure.
 */
export function _decode_CompressionParameter(el: _Element) {
    if (!_cached_decoder_for_CompressionParameter) {
        _cached_decoder_for_CompressionParameter = function (
            el: _Element
        ): CompressionParameter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'CompressionParameter contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'compression-algorithm-id';
            sequence[1].name = 'compression-algorithm-param';
            let compression_algorithm_id!: OBJECT_IDENTIFIER;
            let compression_algorithm_param!: _Element;
            compression_algorithm_id = $._decode_implicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[0]);
            compression_algorithm_param = $._decode_implicit<_Element>(
                () => $._decodeAny
            )(sequence[1]);
            return new CompressionParameter(
                compression_algorithm_id,
                compression_algorithm_param
            );
        };
    }
    return _cached_decoder_for_CompressionParameter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompressionParameter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompressionParameter */
let _cached_encoder_for_CompressionParameter: $.ASN1Encoder<CompressionParameter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompressionParameter */

/* START_OF_SYMBOL_DEFINITION _encode_CompressionParameter */
/**
 * @summary Encodes a(n) CompressionParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressionParameter, encoded as an ASN.1 Element.
 */
export function _encode_CompressionParameter(
    value: CompressionParameter,
    elGetter: $.ASN1Encoder<CompressionParameter>
) {
    if (!_cached_encoder_for_CompressionParameter) {
        _cached_encoder_for_CompressionParameter = function (
            value: CompressionParameter,
            elGetter: $.ASN1Encoder<CompressionParameter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.compression_algorithm_id, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeAny,
                            $.BER
                        )(value.compression_algorithm_param, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CompressionParameter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompressionParameter */

/* eslint-enable */
