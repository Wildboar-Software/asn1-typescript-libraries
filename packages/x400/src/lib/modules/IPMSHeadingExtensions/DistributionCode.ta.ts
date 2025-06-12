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
    AlphaCode,
    _decode_AlphaCode,
    _encode_AlphaCode,
} from '../IPMSHeadingExtensions/AlphaCode.ta.js';
export {
    AlphaCode,
    _decode_AlphaCode,
    _encode_AlphaCode,
} from '../IPMSHeadingExtensions/AlphaCode.ta.js';
import {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.js';
export {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.js';

/* START_OF_SYMBOL_DEFINITION DistributionCode */
/**
 * @summary DistributionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistributionCode ::= SEQUENCE {
 *   oid-code           OBJECT IDENTIFIER OPTIONAL,
 *   alphanumeric-code  AlphaCode OPTIONAL,
 *   or-descriptor      [0]  ORDescriptor OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DistributionCode {
    constructor(
        /**
         * @summary `oid_code`.
         * @public
         * @readonly
         */
        readonly oid_code: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `alphanumeric_code`.
         * @public
         * @readonly
         */
        readonly alphanumeric_code: OPTIONAL<AlphaCode>,
        /**
         * @summary `or_descriptor`.
         * @public
         * @readonly
         */
        readonly or_descriptor: OPTIONAL<ORDescriptor>
    ) {}

    /**
     * @summary Restructures an object into a DistributionCode
     * @description
     *
     * This takes an `object` and converts it to a `DistributionCode`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DistributionCode`.
     * @returns {DistributionCode}
     */
    public static _from_object(
        _o: { [_K in keyof DistributionCode]: DistributionCode[_K] }
    ): DistributionCode {
        return new DistributionCode(
            _o.oid_code,
            _o.alphanumeric_code,
            _o.or_descriptor
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DistributionCode */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DistributionCode */
/**
 * @summary The Leading Root Component Types of DistributionCode
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DistributionCode: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'oid-code',
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'alphanumeric-code',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'or-descriptor',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DistributionCode */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DistributionCode */
/**
 * @summary The Trailing Root Component Types of DistributionCode
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DistributionCode: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DistributionCode */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DistributionCode */
/**
 * @summary The Extension Addition Component Types of DistributionCode
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DistributionCode: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DistributionCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DistributionCode */
let _cached_decoder_for_DistributionCode: $.ASN1Decoder<DistributionCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DistributionCode */

/* START_OF_SYMBOL_DEFINITION _decode_DistributionCode */
/**
 * @summary Decodes an ASN.1 element into a(n) DistributionCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistributionCode} The decoded data structure.
 */
export function _decode_DistributionCode(el: _Element) {
    if (!_cached_decoder_for_DistributionCode) {
        _cached_decoder_for_DistributionCode = function (
            el: _Element
        ): DistributionCode {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let oid_code: OPTIONAL<OBJECT_IDENTIFIER>;
            let alphanumeric_code: OPTIONAL<AlphaCode>;
            let or_descriptor: OPTIONAL<ORDescriptor>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'oid-code': (_el: _Element): void => {
                    oid_code = $._decodeObjectIdentifier(_el);
                },
                'alphanumeric-code': (_el: _Element): void => {
                    alphanumeric_code = _decode_AlphaCode(_el);
                },
                'or-descriptor': (_el: _Element): void => {
                    or_descriptor = $._decode_implicit<ORDescriptor>(
                        () => _decode_ORDescriptor
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DistributionCode,
                _extension_additions_list_spec_for_DistributionCode,
                _root_component_type_list_2_spec_for_DistributionCode,
                undefined
            );
            return new DistributionCode /* SEQUENCE_CONSTRUCTOR_CALL */(
                oid_code,
                alphanumeric_code,
                or_descriptor
            );
        };
    }
    return _cached_decoder_for_DistributionCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DistributionCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DistributionCode */
let _cached_encoder_for_DistributionCode: $.ASN1Encoder<DistributionCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DistributionCode */

/* START_OF_SYMBOL_DEFINITION _encode_DistributionCode */
/**
 * @summary Encodes a(n) DistributionCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionCode, encoded as an ASN.1 Element.
 */
export function _encode_DistributionCode(
    value: DistributionCode,
    elGetter: $.ASN1Encoder<DistributionCode>
) {
    if (!_cached_encoder_for_DistributionCode) {
        _cached_encoder_for_DistributionCode = function (
            value: DistributionCode,
            elGetter: $.ASN1Encoder<DistributionCode>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.oid_code === undefined
                            ? undefined
                            : $._encodeObjectIdentifier(value.oid_code, $.BER),
                        /* IF_ABSENT  */ value.alphanumeric_code === undefined
                            ? undefined
                            : _encode_AlphaCode(value.alphanumeric_code, $.BER),
                        /* IF_ABSENT  */ value.or_descriptor === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ORDescriptor,
                                  $.BER
                              )(value.or_descriptor, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DistributionCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DistributionCode */

/* eslint-enable */
