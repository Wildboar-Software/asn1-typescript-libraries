/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Constraint_Set_Name,
    _decode_Constraint_Set_Name,
    _encode_Constraint_Set_Name,
} from '../IPMSFileTransferBodyPartType/Constraint-Set-Name.ta.mjs';
import {
    Abstract_Syntax_Name,
    _decode_Abstract_Syntax_Name,
    _encode_Abstract_Syntax_Name,
} from '../IPMSFileTransferBodyPartType/Abstract-Syntax-Name.ta.mjs';
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
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'abstract-syntax-name',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of Contents_Type_Attribute_constraint_set_and_abstract_syntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Contents_Type_Attribute_constraint_set_and_abstract_syntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ComponentSpec[] = [];

let _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ASN1Decoder<Contents_Type_Attribute_constraint_set_and_abstract_syntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_Attribute_constraint_set_and_abstract_syntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_Attribute_constraint_set_and_abstract_syntax} The decoded data structure.
 */
export function _decode_Contents_Type_Attribute_constraint_set_and_abstract_syntax(
    el: _Element
): Contents_Type_Attribute_constraint_set_and_abstract_syntax {
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

let _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax: $.ASN1Encoder<Contents_Type_Attribute_constraint_set_and_abstract_syntax> | null = null;

/**
 * @summary Encodes a(n) Contents_Type_Attribute_constraint_set_and_abstract_syntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_Attribute_constraint_set_and_abstract_syntax, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_Attribute_constraint_set_and_abstract_syntax(
    value: Contents_Type_Attribute_constraint_set_and_abstract_syntax,
    elGetter: $.ASN1Encoder<Contents_Type_Attribute_constraint_set_and_abstract_syntax>
): _Element {
    if (
        !_cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax
    ) {
        _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_syntax = function (
            value: Contents_Type_Attribute_constraint_set_and_abstract_syntax        ): _Element {
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


/* eslint-enable */
