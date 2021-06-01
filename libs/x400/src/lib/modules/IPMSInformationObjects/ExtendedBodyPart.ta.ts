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

/* START_OF_SYMBOL_DEFINITION ExtendedBodyPart */
/**
 * @summary ExtendedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedBodyPart{EXTENDED-BODY-PART-TYPE:IPMBodyPartTable} ::= SEQUENCE {
 *   parameters  [0]  INSTANCE OF TYPE-IDENTIFIER OPTIONAL,
 *   data        INSTANCE OF TYPE-IDENTIFIER
 * }
 * (CONSTRAINED BY { -- must correspond to the &parameters field and &data field of a member of --
 *    IPMBodyPartTable})
 * ```
 *
 * @class
 */
export class ExtendedBodyPart {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<INSTANCE_OF>,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: INSTANCE_OF
    ) {}

    /**
     * @summary Restructures an object into a ExtendedBodyPart
     * @description
     *
     * This takes an `object` and converts it to a `ExtendedBodyPart`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedBodyPart`.
     * @returns {ExtendedBodyPart}
     */
    public static _from_object(
        _o: { [_K in keyof ExtendedBodyPart]: ExtendedBodyPart[_K] }
    ): ExtendedBodyPart {
        return new ExtendedBodyPart(_o.parameters, _o.data);
    }
}
/* END_OF_SYMBOL_DEFINITION ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtendedBodyPart */
/**
 * @summary The Leading Root Component Types of ExtendedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedBodyPart: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.universal, 8),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtendedBodyPart */
/**
 * @summary The Trailing Root Component Types of ExtendedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtendedBodyPart */
/**
 * @summary The Extension Addition Component Types of ExtendedBodyPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedBodyPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedBodyPart */
let _cached_decoder_for_ExtendedBodyPart: $.ASN1Decoder<ExtendedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedBodyPart} The decoded data structure.
 */
export function _decode_ExtendedBodyPart(el: _Element) {
    if (!_cached_decoder_for_ExtendedBodyPart) {
        _cached_decoder_for_ExtendedBodyPart = function (
            el: _Element
        ): ExtendedBodyPart {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let parameters: OPTIONAL<INSTANCE_OF>;
            let data!: INSTANCE_OF;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                parameters: (_el: _Element): void => {
                    parameters = $._decode_implicit<INSTANCE_OF>(
                        () => $._decodeInstanceOf
                    )(_el);
                },
                data: (_el: _Element): void => {
                    data = $._decodeInstanceOf(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExtendedBodyPart,
                _extension_additions_list_spec_for_ExtendedBodyPart,
                _root_component_type_list_2_spec_for_ExtendedBodyPart,
                undefined
            );
            return new ExtendedBodyPart /* SEQUENCE_CONSTRUCTOR_CALL */(
                parameters,
                data
            );
        };
    }
    return _cached_decoder_for_ExtendedBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedBodyPart */
let _cached_encoder_for_ExtendedBodyPart: $.ASN1Encoder<ExtendedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedBodyPart */
/**
 * @summary Encodes a(n) ExtendedBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedBodyPart(
    value: ExtendedBodyPart,
    elGetter: $.ASN1Encoder<ExtendedBodyPart>
) {
    if (!_cached_encoder_for_ExtendedBodyPart) {
        _cached_encoder_for_ExtendedBodyPart = function (
            value: ExtendedBodyPart,
            elGetter: $.ASN1Encoder<ExtendedBodyPart>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInstanceOf,
                                  $.BER
                              )(value.parameters, $.BER),
                        /* REQUIRED   */ $._encodeInstanceOf(value.data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExtendedBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedBodyPart */

/* eslint-enable */
