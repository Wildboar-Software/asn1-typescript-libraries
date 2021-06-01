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
    BodyPartReferences,
    _decode_BodyPartReferences,
    _encode_BodyPartReferences,
} from '../IPMSInformationObjects/BodyPartReferences.ta';
export {
    BodyPartReferences,
    _decode_BodyPartReferences,
    _encode_BodyPartReferences,
} from '../IPMSInformationObjects/BodyPartReferences.ta';

/* START_OF_SYMBOL_DEFINITION IPMAssemblyInstructions */
/**
 * @summary IPMAssemblyInstructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAssemblyInstructions ::= SET {assembly-instructions  [0]  BodyPartReferences
 * }
 * ```
 *
 * @class
 */
export class IPMAssemblyInstructions {
    constructor(
        /**
         * @summary `assembly_instructions`.
         * @public
         * @readonly
         */
        readonly assembly_instructions: BodyPartReferences
    ) {}

    /**
     * @summary Restructures an object into a IPMAssemblyInstructions
     * @description
     *
     * This takes an `object` and converts it to a `IPMAssemblyInstructions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMAssemblyInstructions`.
     * @returns {IPMAssemblyInstructions}
     */
    public static _from_object(
        _o: {
            [_K in keyof IPMAssemblyInstructions]: IPMAssemblyInstructions[_K];
        }
    ): IPMAssemblyInstructions {
        return new IPMAssemblyInstructions(_o.assembly_instructions);
    }
}
/* END_OF_SYMBOL_DEFINITION IPMAssemblyInstructions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMAssemblyInstructions */
/**
 * @summary The Leading Root Component Types of IPMAssemblyInstructions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMAssemblyInstructions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'assembly-instructions',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMAssemblyInstructions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMAssemblyInstructions */
/**
 * @summary The Trailing Root Component Types of IPMAssemblyInstructions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMAssemblyInstructions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMAssemblyInstructions */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMAssemblyInstructions */
/**
 * @summary The Extension Addition Component Types of IPMAssemblyInstructions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMAssemblyInstructions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMAssemblyInstructions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMAssemblyInstructions */
let _cached_decoder_for_IPMAssemblyInstructions: $.ASN1Decoder<IPMAssemblyInstructions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMAssemblyInstructions */

/* START_OF_SYMBOL_DEFINITION _decode_IPMAssemblyInstructions */
/**
 * @summary Decodes an ASN.1 element into a(n) IPMAssemblyInstructions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMAssemblyInstructions} The decoded data structure.
 */
export function _decode_IPMAssemblyInstructions(el: _Element) {
    if (!_cached_decoder_for_IPMAssemblyInstructions) {
        _cached_decoder_for_IPMAssemblyInstructions = function (
            el: _Element
        ): IPMAssemblyInstructions {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let assembly_instructions!: BodyPartReferences;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'assembly-instructions': (_el: _Element): void => {
                    assembly_instructions = $._decode_implicit<BodyPartReferences>(
                        () => _decode_BodyPartReferences
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IPMAssemblyInstructions,
                _extension_additions_list_spec_for_IPMAssemblyInstructions,
                _root_component_type_list_2_spec_for_IPMAssemblyInstructions,
                undefined
            );
            return new IPMAssemblyInstructions /* SET_CONSTRUCTOR_CALL */(
                assembly_instructions
            );
        };
    }
    return _cached_decoder_for_IPMAssemblyInstructions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPMAssemblyInstructions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMAssemblyInstructions */
let _cached_encoder_for_IPMAssemblyInstructions: $.ASN1Encoder<IPMAssemblyInstructions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMAssemblyInstructions */

/* START_OF_SYMBOL_DEFINITION _encode_IPMAssemblyInstructions */
/**
 * @summary Encodes a(n) IPMAssemblyInstructions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMAssemblyInstructions, encoded as an ASN.1 Element.
 */
export function _encode_IPMAssemblyInstructions(
    value: IPMAssemblyInstructions,
    elGetter: $.ASN1Encoder<IPMAssemblyInstructions>
) {
    if (!_cached_encoder_for_IPMAssemblyInstructions) {
        _cached_encoder_for_IPMAssemblyInstructions = function (
            value: IPMAssemblyInstructions,
            elGetter: $.ASN1Encoder<IPMAssemblyInstructions>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_BodyPartReferences,
                            $.BER
                        )(value.assembly_instructions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IPMAssemblyInstructions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPMAssemblyInstructions */

/* eslint-enable */
