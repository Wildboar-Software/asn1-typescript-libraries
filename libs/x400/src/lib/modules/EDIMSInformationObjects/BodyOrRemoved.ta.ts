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
    PrimaryOrRemoved,
    _decode_PrimaryOrRemoved,
    _encode_PrimaryOrRemoved,
} from '../EDIMSInformationObjects/PrimaryOrRemoved.ta';
export {
    PrimaryOrRemoved,
    _decode_PrimaryOrRemoved,
    _encode_PrimaryOrRemoved,
} from '../EDIMSInformationObjects/PrimaryOrRemoved.ta';
import {
    AdditionalBodyParts,
    _decode_AdditionalBodyParts,
    _encode_AdditionalBodyParts,
} from '../EDIMSInformationObjects/AdditionalBodyParts.ta';
export {
    AdditionalBodyParts,
    _decode_AdditionalBodyParts,
    _encode_AdditionalBodyParts,
} from '../EDIMSInformationObjects/AdditionalBodyParts.ta';

/* START_OF_SYMBOL_DEFINITION BodyOrRemoved */
/**
 * @summary BodyOrRemoved
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyOrRemoved ::= SEQUENCE {
 *   primary-or-removed     PrimaryOrRemoved,
 *   additional-body-parts  AdditionalBodyParts OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BodyOrRemoved {
    constructor(
        /**
         * @summary `primary_or_removed`.
         * @public
         * @readonly
         */
        readonly primary_or_removed: PrimaryOrRemoved,
        /**
         * @summary `additional_body_parts`.
         * @public
         * @readonly
         */
        readonly additional_body_parts: OPTIONAL<AdditionalBodyParts>
    ) {}

    /**
     * @summary Restructures an object into a BodyOrRemoved
     * @description
     *
     * This takes an `object` and converts it to a `BodyOrRemoved`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BodyOrRemoved`.
     * @returns {BodyOrRemoved}
     */
    public static _from_object(
        _o: { [_K in keyof BodyOrRemoved]: BodyOrRemoved[_K] }
    ): BodyOrRemoved {
        return new BodyOrRemoved(
            _o.primary_or_removed,
            _o.additional_body_parts
        );
    }
}
/* END_OF_SYMBOL_DEFINITION BodyOrRemoved */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BodyOrRemoved */
/**
 * @summary The Leading Root Component Types of BodyOrRemoved
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BodyOrRemoved: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'primary-or-removed',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BodyOrRemoved */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BodyOrRemoved */
/**
 * @summary The Trailing Root Component Types of BodyOrRemoved
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BodyOrRemoved: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BodyOrRemoved */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BodyOrRemoved */
/**
 * @summary The Extension Addition Component Types of BodyOrRemoved
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BodyOrRemoved: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BodyOrRemoved */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyOrRemoved */
let _cached_decoder_for_BodyOrRemoved: $.ASN1Decoder<BodyOrRemoved> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyOrRemoved */

/* START_OF_SYMBOL_DEFINITION _decode_BodyOrRemoved */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyOrRemoved
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyOrRemoved} The decoded data structure.
 */
export function _decode_BodyOrRemoved(el: _Element) {
    if (!_cached_decoder_for_BodyOrRemoved) {
        _cached_decoder_for_BodyOrRemoved = function (
            el: _Element
        ): BodyOrRemoved {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let primary_or_removed!: PrimaryOrRemoved;
            let additional_body_parts: OPTIONAL<AdditionalBodyParts>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'primary-or-removed': (_el: _Element): void => {
                    primary_or_removed = _decode_PrimaryOrRemoved(_el);
                },
                'additional-body-parts': (_el: _Element): void => {
                    additional_body_parts = _decode_AdditionalBodyParts(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BodyOrRemoved,
                _extension_additions_list_spec_for_BodyOrRemoved,
                _root_component_type_list_2_spec_for_BodyOrRemoved,
                undefined
            );
            return new BodyOrRemoved /* SEQUENCE_CONSTRUCTOR_CALL */(
                primary_or_removed,
                additional_body_parts
            );
        };
    }
    return _cached_decoder_for_BodyOrRemoved(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyOrRemoved */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyOrRemoved */
let _cached_encoder_for_BodyOrRemoved: $.ASN1Encoder<BodyOrRemoved> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyOrRemoved */

/* START_OF_SYMBOL_DEFINITION _encode_BodyOrRemoved */
/**
 * @summary Encodes a(n) BodyOrRemoved into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyOrRemoved, encoded as an ASN.1 Element.
 */
export function _encode_BodyOrRemoved(
    value: BodyOrRemoved,
    elGetter: $.ASN1Encoder<BodyOrRemoved>
) {
    if (!_cached_encoder_for_BodyOrRemoved) {
        _cached_encoder_for_BodyOrRemoved = function (
            value: BodyOrRemoved,
            elGetter: $.ASN1Encoder<BodyOrRemoved>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PrimaryOrRemoved(
                            value.primary_or_removed,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.additional_body_parts ===
                        undefined
                            ? undefined
                            : _encode_AdditionalBodyParts(
                                  value.additional_body_parts,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BodyOrRemoved(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyOrRemoved */

/* eslint-enable */
