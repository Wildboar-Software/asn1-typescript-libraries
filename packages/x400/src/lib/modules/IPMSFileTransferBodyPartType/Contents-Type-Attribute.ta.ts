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
    Contents_Type_Attribute_document_type,
    _decode_Contents_Type_Attribute_document_type,
    _encode_Contents_Type_Attribute_document_type,
} from '../IPMSFileTransferBodyPartType/Contents-Type-Attribute-document-type.ta.js';
export {
    Contents_Type_Attribute_document_type,
    _decode_Contents_Type_Attribute_document_type,
    _encode_Contents_Type_Attribute_document_type,
} from '../IPMSFileTransferBodyPartType/Contents-Type-Attribute-document-type.ta.js';
import {
    Contents_Type_Attribute_constraint_set_and_abstract_syntax,
    _decode_Contents_Type_Attribute_constraint_set_and_abstract_syntax,
    _encode_Contents_Type_Attribute_constraint_set_and_abstract_syntax,
} from '../IPMSFileTransferBodyPartType/Contents-Type-Attribute-constraint-set-and-abstract-syntax.ta.js';
export {
    Contents_Type_Attribute_constraint_set_and_abstract_syntax,
    _decode_Contents_Type_Attribute_constraint_set_and_abstract_syntax,
    _encode_Contents_Type_Attribute_constraint_set_and_abstract_syntax,
} from '../IPMSFileTransferBodyPartType/Contents-Type-Attribute-constraint-set-and-abstract-syntax.ta.js';

/* START_OF_SYMBOL_DEFINITION Contents_Type_Attribute */
/**
 * @summary Contents_Type_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-Attribute  ::=  CHOICE {
 *   document-type
 *     [0]  SEQUENCE {document-type-name  Document-Type-Name,
 *                    parameter
 *                      [0]  DOCUMENT-PARAMETER.&Type OPTIONAL},
 *   -- The actual types to be used for values of the parameter field
 *   -- are defined in the named document type.
 *   constraint-set-and-abstract-syntax
 *     [1]  SEQUENCE {constraint-set-name   Constraint-Set-Name,
 *                    abstract-syntax-name  Abstract-Syntax-Name}
 * }
 * ```
 */
export type Contents_Type_Attribute =
    | {
          document_type: Contents_Type_Attribute_document_type;
      } /* CHOICE_ALT_ROOT */
    | {
          constraint_set_and_abstract_syntax: Contents_Type_Attribute_constraint_set_and_abstract_syntax;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Contents_Type_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Attribute */
let _cached_decoder_for_Contents_Type_Attribute: $.ASN1Decoder<Contents_Type_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Contents_Type_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_Attribute} The decoded data structure.
 */
export function _decode_Contents_Type_Attribute(el: _Element) {
    if (!_cached_decoder_for_Contents_Type_Attribute) {
        _cached_decoder_for_Contents_Type_Attribute = $._decode_inextensible_choice<Contents_Type_Attribute>(
            {
                'CONTEXT 0': [
                    'document_type',
                    $._decode_implicit<Contents_Type_Attribute_document_type>(
                        () => _decode_Contents_Type_Attribute_document_type
                    ),
                ],
                'CONTEXT 1': [
                    'constraint_set_and_abstract_syntax',
                    $._decode_implicit<Contents_Type_Attribute_constraint_set_and_abstract_syntax>(
                        () =>
                            _decode_Contents_Type_Attribute_constraint_set_and_abstract_syntax
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Contents_Type_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Contents_Type_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Attribute */
let _cached_encoder_for_Contents_Type_Attribute: $.ASN1Encoder<Contents_Type_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Contents_Type_Attribute */
/**
 * @summary Encodes a(n) Contents_Type_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_Attribute(
    value: Contents_Type_Attribute,
    elGetter: $.ASN1Encoder<Contents_Type_Attribute>
) {
    if (!_cached_encoder_for_Contents_Type_Attribute) {
        _cached_encoder_for_Contents_Type_Attribute = $._encode_choice<Contents_Type_Attribute>(
            {
                document_type: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Contents_Type_Attribute_document_type,
                    $.BER
                ),
                constraint_set_and_abstract_syntax: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _encode_Contents_Type_Attribute_constraint_set_and_abstract_syntax,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Contents_Type_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Contents_Type_Attribute */

/* eslint-enable */
