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
    ObjectIdentifier,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    RelatedStoredFile,
    _decode_RelatedStoredFile,
    _encode_RelatedStoredFile,
} from '../IPMSFileTransferBodyPartType/RelatedStoredFile.ta';
export {
    RelatedStoredFile,
    _decode_RelatedStoredFile,
    _encode_RelatedStoredFile,
} from '../IPMSFileTransferBodyPartType/RelatedStoredFile.ta';
import {
    ContentsTypeParameter,
    _decode_ContentsTypeParameter,
    _encode_ContentsTypeParameter,
} from '../IPMSFileTransferBodyPartType/ContentsTypeParameter.ta';
export {
    ContentsTypeParameter,
    _decode_ContentsTypeParameter,
    _encode_ContentsTypeParameter,
} from '../IPMSFileTransferBodyPartType/ContentsTypeParameter.ta';
import {
    EnvironmentParameter,
    _decode_EnvironmentParameter,
    _encode_EnvironmentParameter,
} from '../IPMSFileTransferBodyPartType/EnvironmentParameter.ta';
export {
    EnvironmentParameter,
    _decode_EnvironmentParameter,
    _encode_EnvironmentParameter,
} from '../IPMSFileTransferBodyPartType/EnvironmentParameter.ta';
import {
    CompressionParameter,
    _decode_CompressionParameter,
    _encode_CompressionParameter,
} from '../IPMSFileTransferBodyPartType/CompressionParameter.ta';
export {
    CompressionParameter,
    _decode_CompressionParameter,
    _encode_CompressionParameter,
} from '../IPMSFileTransferBodyPartType/CompressionParameter.ta';
import {
    FileAttributes,
    _decode_FileAttributes,
    _encode_FileAttributes,
} from '../IPMSFileTransferBodyPartType/FileAttributes.ta';
export {
    FileAttributes,
    _decode_FileAttributes,
    _encode_FileAttributes,
} from '../IPMSFileTransferBodyPartType/FileAttributes.ta';
import {
    ExtensionsField,
    _decode_ExtensionsField,
    _encode_ExtensionsField,
} from '../IPMSInformationObjects/ExtensionsField.ta';
export {
    ExtensionsField,
    _decode_ExtensionsField,
    _encode_ExtensionsField,
} from '../IPMSInformationObjects/ExtensionsField.ta';
import { Contents_Type_Attribute_document_type } from './Contents-Type-Attribute-document-type.ta';

/* START_OF_SYMBOL_DEFINITION FileTransferParameters */
/**
 * @summary FileTransferParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FileTransferParameters ::= SEQUENCE {
 *   related-stored-file  [0]  RelatedStoredFile OPTIONAL,
 *   contents-type
 *     [1]  ContentsTypeParameter
 *       DEFAULT
 *         document-type:
 *           {document-type-name
 *            {iso standard 8571 document-type(5) unstructured-binary(3)}},
 *   environment          [2]  EnvironmentParameter OPTIONAL,
 *   compression          [3]  CompressionParameter OPTIONAL,
 *   file-attributes      [4]  FileAttributes OPTIONAL,
 *   extensions           [5]  ExtensionsField OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class FileTransferParameters {
    constructor(
        /**
         * @summary `related_stored_file`.
         * @public
         * @readonly
         */
        readonly related_stored_file: OPTIONAL<RelatedStoredFile>,
        /**
         * @summary `contents_type`.
         * @public
         * @readonly
         */
        readonly contents_type: OPTIONAL<ContentsTypeParameter>,
        /**
         * @summary `environment`.
         * @public
         * @readonly
         */
        readonly environment: OPTIONAL<EnvironmentParameter>,
        /**
         * @summary `compression`.
         * @public
         * @readonly
         */
        readonly compression: OPTIONAL<CompressionParameter>,
        /**
         * @summary `file_attributes`.
         * @public
         * @readonly
         */
        readonly file_attributes: OPTIONAL<FileAttributes>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a FileTransferParameters
     * @description
     *
     * This takes an `object` and converts it to a `FileTransferParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileTransferParameters`.
     * @returns {FileTransferParameters}
     */
    public static _from_object(
        _o: { [_K in keyof FileTransferParameters]: FileTransferParameters[_K] }
    ): FileTransferParameters {
        return new FileTransferParameters(
            _o.related_stored_file,
            _o.contents_type,
            _o.environment,
            _o.compression,
            _o.file_attributes,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `contents_type`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_contents_type(): ContentsTypeParameter {
        return {
            document_type: new Contents_Type_Attribute_document_type(
                new ObjectIdentifier([
                    1,
                    0,
                    8571,
                    5,
                    3,
                ]),
                undefined,
            ),
        };
    }
}
/* END_OF_SYMBOL_DEFINITION FileTransferParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FileTransferParameters */
/**
 * @summary The Leading Root Component Types of FileTransferParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FileTransferParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'related-stored-file',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'contents-type',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'environment',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'compression',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'file-attributes',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FileTransferParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FileTransferParameters */
/**
 * @summary The Trailing Root Component Types of FileTransferParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FileTransferParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FileTransferParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FileTransferParameters */
/**
 * @summary The Extension Addition Component Types of FileTransferParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FileTransferParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FileTransferParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FileTransferParameters */
let _cached_decoder_for_FileTransferParameters: $.ASN1Decoder<FileTransferParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FileTransferParameters */

/* START_OF_SYMBOL_DEFINITION _decode_FileTransferParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) FileTransferParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FileTransferParameters} The decoded data structure.
 */
export function _decode_FileTransferParameters(el: _Element) {
    if (!_cached_decoder_for_FileTransferParameters) {
        _cached_decoder_for_FileTransferParameters = function (
            el: _Element
        ): FileTransferParameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let related_stored_file: OPTIONAL<RelatedStoredFile>;
            let contents_type: OPTIONAL<ContentsTypeParameter> =
                FileTransferParameters._default_value_for_contents_type;
            let environment: OPTIONAL<EnvironmentParameter>;
            let compression: OPTIONAL<CompressionParameter>;
            let file_attributes: OPTIONAL<FileAttributes>;
            let extensions: OPTIONAL<ExtensionsField>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'related-stored-file': (_el: _Element): void => {
                    related_stored_file = $._decode_implicit<RelatedStoredFile>(
                        () => _decode_RelatedStoredFile
                    )(_el);
                },
                'contents-type': (_el: _Element): void => {
                    contents_type = $._decode_explicit<ContentsTypeParameter>(
                        () => _decode_ContentsTypeParameter
                    )(_el);
                },
                environment: (_el: _Element): void => {
                    environment = $._decode_implicit<EnvironmentParameter>(
                        () => _decode_EnvironmentParameter
                    )(_el);
                },
                compression: (_el: _Element): void => {
                    compression = $._decode_implicit<CompressionParameter>(
                        () => _decode_CompressionParameter
                    )(_el);
                },
                'file-attributes': (_el: _Element): void => {
                    file_attributes = $._decode_implicit<FileAttributes>(
                        () => _decode_FileAttributes
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionsField>(
                        () => _decode_ExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FileTransferParameters,
                _extension_additions_list_spec_for_FileTransferParameters,
                _root_component_type_list_2_spec_for_FileTransferParameters,
                undefined
            );
            return new FileTransferParameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                related_stored_file,
                contents_type,
                environment,
                compression,
                file_attributes,
                extensions
            );
        };
    }
    return _cached_decoder_for_FileTransferParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FileTransferParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FileTransferParameters */
let _cached_encoder_for_FileTransferParameters: $.ASN1Encoder<FileTransferParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FileTransferParameters */

/* START_OF_SYMBOL_DEFINITION _encode_FileTransferParameters */
/**
 * @summary Encodes a(n) FileTransferParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileTransferParameters, encoded as an ASN.1 Element.
 */
export function _encode_FileTransferParameters(
    value: FileTransferParameters,
    elGetter: $.ASN1Encoder<FileTransferParameters>
) {
    if (!_cached_encoder_for_FileTransferParameters) {
        _cached_encoder_for_FileTransferParameters = function (
            value: FileTransferParameters,
            elGetter: $.ASN1Encoder<FileTransferParameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.related_stored_file === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_RelatedStoredFile,
                                  $.BER
                              )(value.related_stored_file, $.BER),
                        /* IF_DEFAULT */ value.contents_type === undefined ||
                        $.deepEq(
                            value.contents_type,
                            FileTransferParameters._default_value_for_contents_type
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ContentsTypeParameter,
                                  $.BER
                              )(value.contents_type, $.BER),
                        /* IF_ABSENT  */ value.environment === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EnvironmentParameter,
                                  $.BER
                              )(value.environment, $.BER),
                        /* IF_ABSENT  */ value.compression === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_CompressionParameter,
                                  $.BER
                              )(value.compression, $.BER),
                        /* IF_ABSENT  */ value.file_attributes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_FileAttributes,
                                  $.BER
                              )(value.file_attributes, $.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_ExtensionsField,
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FileTransferParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FileTransferParameters */

/* eslint-enable */
