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
import {
    Document_Type_Name,
    _decode_Document_Type_Name,
    _encode_Document_Type_Name,
} from '../IPMSFileTransferBodyPartType/Document-Type-Name.ta';
export {
    Document_Type_Name,
    _decode_Document_Type_Name,
    _encode_Document_Type_Name,
} from '../IPMSFileTransferBodyPartType/Document-Type-Name.ta';
import { DOCUMENT_PARAMETER } from '../IPMSFileTransferBodyPartType/DOCUMENT-PARAMETER.oca';
export { DOCUMENT_PARAMETER } from '../IPMSFileTransferBodyPartType/DOCUMENT-PARAMETER.oca';

/* START_OF_SYMBOL_DEFINITION Contents_Type_Attribute_document_type */
/**
 * @summary Contents_Type_Attribute_document_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-Attribute-document-type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Contents_Type_Attribute_document_type {
    constructor(
        /**
         * @summary `document_type_name`.
         * @public
         * @readonly
         */
        readonly document_type_name: Document_Type_Name,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a Contents_Type_Attribute_document_type
     * @description
     *
     * This takes an `object` and converts it to a `Contents_Type_Attribute_document_type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Contents_Type_Attribute_document_type`.
     * @returns {Contents_Type_Attribute_document_type}
     */
    public static _from_object(
        _o: {
            [_K in keyof Contents_Type_Attribute_document_type]: Contents_Type_Attribute_document_type[_K];
        }
    ): Contents_Type_Attribute_document_type {
        return new Contents_Type_Attribute_document_type(
            _o.document_type_name,
            _o.parameter
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Contents_Type_Attribute_document_type */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Contents_Type_Attribute_document_type */
/**
 * @summary The Leading Root Component Types of Contents_Type_Attribute_document_type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Contents_Type_Attribute_document_type: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'document-type-name',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameter',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Contents_Type_Attribute_document_type */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Contents_Type_Attribute_document_type */
/**
 * @summary The Trailing Root Component Types of Contents_Type_Attribute_document_type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Contents_Type_Attribute_document_type: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Contents_Type_Attribute_document_type */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Contents_Type_Attribute_document_type */
/**
 * @summary The Extension Addition Component Types of Contents_Type_Attribute_document_type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Contents_Type_Attribute_document_type: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Contents_Type_Attribute_document_type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Attribute_document_type */
let _cached_decoder_for_Contents_Type_Attribute_document_type: $.ASN1Decoder<Contents_Type_Attribute_document_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Attribute_document_type */

/* START_OF_SYMBOL_DEFINITION _decode_Contents_Type_Attribute_document_type */
/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_Attribute_document_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_Attribute_document_type} The decoded data structure.
 */
export function _decode_Contents_Type_Attribute_document_type(el: _Element) {
    if (!_cached_decoder_for_Contents_Type_Attribute_document_type) {
        _cached_decoder_for_Contents_Type_Attribute_document_type = function (
            el: _Element
        ): Contents_Type_Attribute_document_type {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let document_type_name!: Document_Type_Name;
            let parameter: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'document-type-name': (_el: _Element): void => {
                    document_type_name = _decode_Document_Type_Name(_el);
                },
                parameter: (_el: _Element): void => {
                    parameter = $._decode_implicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Contents_Type_Attribute_document_type,
                _extension_additions_list_spec_for_Contents_Type_Attribute_document_type,
                _root_component_type_list_2_spec_for_Contents_Type_Attribute_document_type,
                undefined
            );
            return new Contents_Type_Attribute_document_type /* SEQUENCE_CONSTRUCTOR_CALL */(
                document_type_name,
                parameter
            );
        };
    }
    return _cached_decoder_for_Contents_Type_Attribute_document_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Contents_Type_Attribute_document_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Attribute_document_type */
let _cached_encoder_for_Contents_Type_Attribute_document_type: $.ASN1Encoder<Contents_Type_Attribute_document_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Attribute_document_type */

/* START_OF_SYMBOL_DEFINITION _encode_Contents_Type_Attribute_document_type */
/**
 * @summary Encodes a(n) Contents_Type_Attribute_document_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_Attribute_document_type, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_Attribute_document_type(
    value: Contents_Type_Attribute_document_type,
    elGetter: $.ASN1Encoder<Contents_Type_Attribute_document_type>
) {
    if (!_cached_encoder_for_Contents_Type_Attribute_document_type) {
        _cached_encoder_for_Contents_Type_Attribute_document_type = function (
            value: Contents_Type_Attribute_document_type,
            elGetter: $.ASN1Encoder<Contents_Type_Attribute_document_type>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Document_Type_Name(
                            value.document_type_name,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.parameter === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Contents_Type_Attribute_document_type(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Contents_Type_Attribute_document_type */

/* eslint-enable */
