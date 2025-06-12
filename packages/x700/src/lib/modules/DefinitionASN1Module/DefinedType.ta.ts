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
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.js';
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.js';

/* START_OF_SYMBOL_DEFINITION DefinedType */
/**
 * @summary DefinedType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefinedType ::= SEQUENCE {
 *   module     [0]  Identifier OPTIONAL,
 *   reference  [1]  Identifier
 * }
 * ```
 *
 * @class
 */
export class DefinedType {
    constructor(
        /**
         * @summary `module_`.
         * @public
         * @readonly
         */
        readonly module_: OPTIONAL<Identifier>,
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: Identifier
    ) {}

    /**
     * @summary Restructures an object into a DefinedType
     * @description
     *
     * This takes an `object` and converts it to a `DefinedType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefinedType`.
     * @returns {DefinedType}
     */
    public static _from_object(
        _o: { [_K in keyof DefinedType]: DefinedType[_K] }
    ): DefinedType {
        return new DefinedType(_o.module_, _o.reference);
    }
}
/* END_OF_SYMBOL_DEFINITION DefinedType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DefinedType */
/**
 * @summary The Leading Root Component Types of DefinedType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DefinedType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'module',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reference',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DefinedType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DefinedType */
/**
 * @summary The Trailing Root Component Types of DefinedType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DefinedType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DefinedType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DefinedType */
/**
 * @summary The Extension Addition Component Types of DefinedType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DefinedType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DefinedType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DefinedType */
let _cached_decoder_for_DefinedType: $.ASN1Decoder<DefinedType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DefinedType */

/* START_OF_SYMBOL_DEFINITION _decode_DefinedType */
/**
 * @summary Decodes an ASN.1 element into a(n) DefinedType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefinedType} The decoded data structure.
 */
export function _decode_DefinedType(el: _Element) {
    if (!_cached_decoder_for_DefinedType) {
        _cached_decoder_for_DefinedType = function (el: _Element): DefinedType {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let module_: OPTIONAL<Identifier>;
            let reference!: Identifier;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                module: (_el: _Element): void => {
                    module_ = $._decode_implicit<Identifier>(
                        () => _decode_Identifier
                    )(_el);
                },
                reference: (_el: _Element): void => {
                    reference = $._decode_implicit<Identifier>(
                        () => _decode_Identifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DefinedType,
                _extension_additions_list_spec_for_DefinedType,
                _root_component_type_list_2_spec_for_DefinedType,
                undefined
            );
            return new DefinedType /* SEQUENCE_CONSTRUCTOR_CALL */(
                module_,
                reference
            );
        };
    }
    return _cached_decoder_for_DefinedType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DefinedType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DefinedType */
let _cached_encoder_for_DefinedType: $.ASN1Encoder<DefinedType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DefinedType */

/* START_OF_SYMBOL_DEFINITION _encode_DefinedType */
/**
 * @summary Encodes a(n) DefinedType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefinedType, encoded as an ASN.1 Element.
 */
export function _encode_DefinedType(
    value: DefinedType,
    elGetter: $.ASN1Encoder<DefinedType>
) {
    if (!_cached_encoder_for_DefinedType) {
        _cached_encoder_for_DefinedType = function (
            value: DefinedType,
            elGetter: $.ASN1Encoder<DefinedType>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.module_ === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Identifier,
                                  $.BER
                              )(value.module_, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_Identifier,
                            $.BER
                        )(value.reference, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DefinedType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DefinedType */

/* eslint-enable */
