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
    ExtendedContentType,
    _decode_ExtendedContentType,
    _encode_ExtendedContentType,
} from '../MTSAbstractService/ExtendedContentType.ta.mjs';
export {
    ExtendedContentType,
    _decode_ExtendedContentType,
    _encode_ExtendedContentType,
} from '../MTSAbstractService/ExtendedContentType.ta.mjs';
import {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.mjs';
export {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.mjs';
import {
    EncodedInformationTypesConstraints,
    _decode_EncodedInformationTypesConstraints,
    _encode_EncodedInformationTypesConstraints,
} from '../MTSAbstractService/EncodedInformationTypesConstraints.ta.mjs';
export {
    EncodedInformationTypesConstraints,
    _decode_EncodedInformationTypesConstraints,
    _encode_EncodedInformationTypesConstraints,
} from '../MTSAbstractService/EncodedInformationTypesConstraints.ta.mjs';
import {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta.mjs';
export {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Capability */
/**
 * @summary Capability
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Capability ::= SET {
 *   content-types
 *     [0]  SET OF ExtendedContentType OPTIONAL,
 *   maximum-content-length                 [1]  ContentLength OPTIONAL,
 *   encoded-information-types-constraints
 *     [2]  EncodedInformationTypesConstraints OPTIONAL,
 *   security-labels                        [3]  SecurityContext OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class Capability {
    constructor(
        /**
         * @summary `content_types`.
         * @public
         * @readonly
         */
        readonly content_types: OPTIONAL<ExtendedContentType[]>,
        /**
         * @summary `maximum_content_length`.
         * @public
         * @readonly
         */
        readonly maximum_content_length: OPTIONAL<ContentLength>,
        /**
         * @summary `encoded_information_types_constraints`.
         * @public
         * @readonly
         */
        readonly encoded_information_types_constraints: OPTIONAL<EncodedInformationTypesConstraints>,
        /**
         * @summary `security_labels`.
         * @public
         * @readonly
         */
        readonly security_labels: OPTIONAL<SecurityContext>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Capability
     * @description
     *
     * This takes an `object` and converts it to a `Capability`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Capability`.
     * @returns {Capability}
     */
    public static _from_object(
        _o: { [_K in keyof Capability]: Capability[_K] }
    ): Capability {
        return new Capability(
            _o.content_types,
            _o.maximum_content_length,
            _o.encoded_information_types_constraints,
            _o.security_labels,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Capability */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Capability */
/**
 * @summary The Leading Root Component Types of Capability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Capability: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'content-types',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'maximum-content-length',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'encoded-information-types-constraints',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'security-labels',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Capability */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Capability */
/**
 * @summary The Trailing Root Component Types of Capability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Capability: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Capability */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Capability */
/**
 * @summary The Extension Addition Component Types of Capability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Capability: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Capability */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Capability */
let _cached_decoder_for_Capability: $.ASN1Decoder<Capability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Capability */

/* START_OF_SYMBOL_DEFINITION _decode_Capability */
/**
 * @summary Decodes an ASN.1 element into a(n) Capability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Capability} The decoded data structure.
 */
export function _decode_Capability(el: _Element) {
    if (!_cached_decoder_for_Capability) {
        _cached_decoder_for_Capability = function (el: _Element): Capability {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let content_types: OPTIONAL<ExtendedContentType[]>;
            let maximum_content_length: OPTIONAL<ContentLength>;
            let encoded_information_types_constraints: OPTIONAL<EncodedInformationTypesConstraints>;
            let security_labels: OPTIONAL<SecurityContext>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'content-types': (_el: _Element): void => {
                    content_types = $._decode_implicit<ExtendedContentType[]>(
                        () =>
                            $._decodeSetOf<ExtendedContentType>(
                                () => _decode_ExtendedContentType
                            )
                    )(_el);
                },
                'maximum-content-length': (_el: _Element): void => {
                    maximum_content_length = $._decode_implicit<ContentLength>(
                        () => _decode_ContentLength
                    )(_el);
                },
                'encoded-information-types-constraints': (
                    _el: _Element
                ): void => {
                    encoded_information_types_constraints = $._decode_implicit<EncodedInformationTypesConstraints>(
                        () => _decode_EncodedInformationTypesConstraints
                    )(_el);
                },
                'security-labels': (_el: _Element): void => {
                    security_labels = $._decode_implicit<SecurityContext>(
                        () => _decode_SecurityContext
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Capability,
                _extension_additions_list_spec_for_Capability,
                _root_component_type_list_2_spec_for_Capability,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Capability /* SET_CONSTRUCTOR_CALL */(
                content_types,
                maximum_content_length,
                encoded_information_types_constraints,
                security_labels,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Capability(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Capability */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Capability */
let _cached_encoder_for_Capability: $.ASN1Encoder<Capability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Capability */

/* START_OF_SYMBOL_DEFINITION _encode_Capability */
/**
 * @summary Encodes a(n) Capability into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Capability, encoded as an ASN.1 Element.
 */
export function _encode_Capability(
    value: Capability,
    elGetter: $.ASN1Encoder<Capability>
) {
    if (!_cached_encoder_for_Capability) {
        _cached_encoder_for_Capability = function (
            value: Capability,
            elGetter: $.ASN1Encoder<Capability>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.content_types === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSetOf<ExtendedContentType>(
                                              () => _encode_ExtendedContentType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.content_types, $.BER),
                            /* IF_ABSENT  */ value.maximum_content_length ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ContentLength,
                                      $.BER
                                  )(value.maximum_content_length, $.BER),
                            /* IF_ABSENT  */ value.encoded_information_types_constraints ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          _encode_EncodedInformationTypesConstraints,
                                      $.BER
                                  )(
                                      value.encoded_information_types_constraints,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.security_labels === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_SecurityContext,
                                      $.BER
                                  )(value.security_labels, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Capability(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Capability */

/* eslint-enable */
