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
    PrimaryBodyPart,
    _decode_PrimaryBodyPart,
    _encode_PrimaryBodyPart,
} from '../EDIMSInformationObjects/PrimaryBodyPart.ta';
export {
    PrimaryBodyPart,
    _decode_PrimaryBodyPart,
    _encode_PrimaryBodyPart,
} from '../EDIMSInformationObjects/PrimaryBodyPart.ta';
import {
    OtherBodyParts,
    _decode_OtherBodyParts,
    _encode_OtherBodyParts,
} from '../EDIMSInformationObjects/OtherBodyParts.ta';
export {
    OtherBodyParts,
    _decode_OtherBodyParts,
    _encode_OtherBodyParts,
} from '../EDIMSInformationObjects/OtherBodyParts.ta';

/* START_OF_SYMBOL_DEFINITION Body */
/**
 * @summary Body
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Body ::= SEQUENCE {
 *   primary-body-part      PrimaryBodyPart,
 *   additional-body-parts  OtherBodyParts OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Body {
    constructor(
        /**
         * @summary `primary_body_part`.
         * @public
         * @readonly
         */
        readonly primary_body_part: PrimaryBodyPart,
        /**
         * @summary `additional_body_parts`.
         * @public
         * @readonly
         */
        readonly additional_body_parts: OPTIONAL<OtherBodyParts>
    ) {}

    /**
     * @summary Restructures an object into a Body
     * @description
     *
     * This takes an `object` and converts it to a `Body`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Body`.
     * @returns {Body}
     */
    public static _from_object(_o: { [_K in keyof Body]: Body[_K] }): Body {
        return new Body(_o.primary_body_part, _o.additional_body_parts);
    }
}
/* END_OF_SYMBOL_DEFINITION Body */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Body */
/**
 * @summary The Leading Root Component Types of Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Body: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'primary-body-part',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additional-body-parts',
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Body */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Body */
/**
 * @summary The Trailing Root Component Types of Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Body: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Body */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Body */
/**
 * @summary The Extension Addition Component Types of Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Body: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Body */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Body */
let _cached_decoder_for_Body: $.ASN1Decoder<Body> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Body */

/* START_OF_SYMBOL_DEFINITION _decode_Body */
/**
 * @summary Decodes an ASN.1 element into a(n) Body
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Body} The decoded data structure.
 */
export function _decode_Body(el: _Element) {
    if (!_cached_decoder_for_Body) {
        _cached_decoder_for_Body = function (el: _Element): Body {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let primary_body_part!: PrimaryBodyPart;
            let additional_body_parts: OPTIONAL<OtherBodyParts>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'primary-body-part': (_el: _Element): void => {
                    primary_body_part = _decode_PrimaryBodyPart(_el);
                },
                'additional-body-parts': (_el: _Element): void => {
                    additional_body_parts = _decode_OtherBodyParts(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Body,
                _extension_additions_list_spec_for_Body,
                _root_component_type_list_2_spec_for_Body,
                undefined
            );
            return new Body /* SEQUENCE_CONSTRUCTOR_CALL */(
                primary_body_part,
                additional_body_parts
            );
        };
    }
    return _cached_decoder_for_Body(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Body */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Body */
let _cached_encoder_for_Body: $.ASN1Encoder<Body> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Body */

/* START_OF_SYMBOL_DEFINITION _encode_Body */
/**
 * @summary Encodes a(n) Body into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Body, encoded as an ASN.1 Element.
 */
export function _encode_Body(value: Body, elGetter: $.ASN1Encoder<Body>) {
    if (!_cached_encoder_for_Body) {
        _cached_encoder_for_Body = function (
            value: Body,
            elGetter: $.ASN1Encoder<Body>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PrimaryBodyPart(
                            value.primary_body_part,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.additional_body_parts ===
                        undefined
                            ? undefined
                            : _encode_OtherBodyParts(
                                  value.additional_body_parts,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Body(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Body */

/* eslint-enable */
