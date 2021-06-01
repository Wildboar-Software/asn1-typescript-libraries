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
    Constraint_Set_Name,
    _decode_Constraint_Set_Name,
    _encode_Constraint_Set_Name,
} from '../IPMSFileTransferBodyPartType/Constraint-Set-Name.ta';
export {
    Constraint_Set_Name,
    _decode_Constraint_Set_Name,
    _encode_Constraint_Set_Name,
} from '../IPMSFileTransferBodyPartType/Constraint-Set-Name.ta';
import {
    Abstract_Syntax_Name,
    _decode_Abstract_Syntax_Name,
    _encode_Abstract_Syntax_Name,
} from '../IPMSFileTransferBodyPartType/Abstract-Syntax-Name.ta';
export {
    Abstract_Syntax_Name,
    _decode_Abstract_Syntax_Name,
    _encode_Abstract_Syntax_Name,
} from '../IPMSFileTransferBodyPartType/Abstract-Syntax-Name.ta';

/* START_OF_SYMBOL_DEFINITION Contents_Type_Attribute_constraint_set_and_abstract_syntax */
/**
 * @summary Contents_Type_Attribute_constraint_set_and_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-Attribute-constraint-set-and-abstract-syntax ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Contents_Type_Attribute_constraint_set_and_abstract_syntax {
    constructor(
        /**
         * @summary `constraint_set_name`.
         * @public
         * @readonly
         */
        readonly constraint_set_name: Constraint_Set_Name,
        /**
         * @summary `abstract_syntax_name`.
         * @public
         * @readonly
         */
        readonly abstract_syntax_name: Abstract_Syntax_Name
    ) {}

    /**
     * @summary Restructures an object into a Contents_Type_Attribute_constraint_set_and_abstract_syntax
     * @description
     *
     * This takes an `object` and converts it to a `Contents_Type_Attribute_constraint_set_and_abstract_syntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Contents_Type_Attribute_constraint_set_and_abstract_syntax`.
     * @returns {Contents_Type_Attribute_constraint_set_and_abstract_syntax}
     */
    public static _from_object(
        _o: {
            [_K in keyof Contents_Type_Attribute_constraint_set_and_abstract_syntax]: Contents_Type_Attribute_constraint_set_and_abstract_syntax[_K];
        }
    ): Contents_Type_Attribute_constraint_set_and_abstract_syntax {
        return new Contents_Type_Attribute_constraint_set_and_abstract_syntax(
            _o.constraint_set_name,
            _o.abstract_syntax_name
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Contents_Type_Attribute_constraint_set_and_abstract_syntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */
/**
 * @summary The Leading Root Component Types of Contents_Type_Attribute_constraint_set_and_abstract_syntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'constraint-set-name',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'abstract-syntax-name',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */
/**
 * @summary The Trailing Root Component Types of Contents_Type_Attribute_constraint_set_and_abstract_syntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */
/**
 * @summary The Extension Addition Component Types of Contents_Type_Attribute_constraint_set_and_abstract_syntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */
let _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ASN1Decoder<Contents_Type_Attribute_constraint_set_and_abstract_syntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */

/* START_OF_SYMBOL_DEFINITION _decode_Contents_Type_Attribute_constraint_set_and_abstract_syntax */
/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_Attribute_constraint_set_and_abstract_syntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_Attribute_constraint_set_and_abstract_syntax} The decoded data structure.
 */
export function _decode_Contents_Type_Attribute_constraint_set_and_abstract_syntax(
    el: _Element
) {
    if (
        !_cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax
    ) {
        _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax = function (
            el: _Element
        ): Contents_Type_Attribute_constraint_set_and_abstract_syntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Contents-Type-Attribute-constraint-set-and-abstract-syntax contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'constraint-set-name';
            sequence[1].name = 'abstract-syntax-name';
            let constraint_set_name!: Constraint_Set_Name;
            let abstract_syntax_name!: Abstract_Syntax_Name;
            constraint_set_name = _decode_Constraint_Set_Name(sequence[0]);
            abstract_syntax_name = _decode_Abstract_Syntax_Name(sequence[1]);
            return new Contents_Type_Attribute_constraint_set_and_abstract_syntax(
                constraint_set_name,
                abstract_syntax_name
            );
        };
    }
    return _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_Contents_Type_Attribute_constraint_set_and_abstract_syntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */
let _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ASN1Encoder<Contents_Type_Attribute_constraint_set_and_abstract_syntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax */

/* START_OF_SYMBOL_DEFINITION _encode_Contents_Type_Attribute_constraint_set_and_abstract_syntax */
/**
 * @summary Encodes a(n) Contents_Type_Attribute_constraint_set_and_abstract_syntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_Attribute_constraint_set_and_abstract_syntax, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_Attribute_constraint_set_and_abstract_syntax(
    value: Contents_Type_Attribute_constraint_set_and_abstract_syntax,
    elGetter: $.ASN1Encoder<Contents_Type_Attribute_constraint_set_and_abstract_syntax>
) {
    if (
        !_cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax
    ) {
        _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax = function (
            value: Contents_Type_Attribute_constraint_set_and_abstract_syntax,
            elGetter: $.ASN1Encoder<Contents_Type_Attribute_constraint_set_and_abstract_syntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Constraint_Set_Name(
                            value.constraint_set_name,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Abstract_Syntax_Name(
                            value.abstract_syntax_name,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Contents_Type_Attribute_constraint_set_and_abstract_syntax */

/* eslint-enable */
