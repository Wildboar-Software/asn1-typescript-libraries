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

/* START_OF_SYMBOL_DEFINITION AdditionalInformation */
/**
 * @summary AdditionalInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalInformation ::= SEQUENCE {
 *   creationDate  GeneralizedTime OPTIONAL,
 *   comment       GraphicString OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AdditionalInformation {
    constructor(
        /**
         * @summary `creationDate`.
         * @public
         * @readonly
         */
        readonly creationDate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `comment`.
         * @public
         * @readonly
         */
        readonly comment: OPTIONAL<GraphicString>
    ) {}

    /**
     * @summary Restructures an object into a AdditionalInformation
     * @description
     *
     * This takes an `object` and converts it to a `AdditionalInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalInformation`.
     * @returns {AdditionalInformation}
     */
    public static _from_object(_o: {
        [_K in keyof AdditionalInformation]: AdditionalInformation[_K];
    }): AdditionalInformation {
        return new AdditionalInformation(_o.creationDate, _o.comment);
    }
}
/* END_OF_SYMBOL_DEFINITION AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AdditionalInformation */
/**
 * @summary The Leading Root Component Types of AdditionalInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AdditionalInformation: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            'creationDate',
            true,
            $.hasTag(_TagClass.universal, 24),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            'comment',
            true,
            $.hasTag(_TagClass.universal, 25),
            undefined,
            undefined
        ),
    ];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AdditionalInformation */
/**
 * @summary The Trailing Root Component Types of AdditionalInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AdditionalInformation: $.ComponentSpec[] =
    [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AdditionalInformation */
/**
 * @summary The Extension Addition Component Types of AdditionalInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AdditionalInformation: $.ComponentSpec[] =
    [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalInformation */
let _cached_decoder_for_AdditionalInformation: $.ASN1Decoder<AdditionalInformation> | null =
    null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AdditionalInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalInformation} The decoded data structure.
 */
export function _decode_AdditionalInformation(el: _Element) {
    if (!_cached_decoder_for_AdditionalInformation) {
        _cached_decoder_for_AdditionalInformation = function (
            el: _Element
        ): AdditionalInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let creationDate: OPTIONAL<GeneralizedTime>;
            let comment: OPTIONAL<GraphicString>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                creationDate: (_el: _Element): void => {
                    creationDate = $._decodeGeneralizedTime(_el);
                },
                comment: (_el: _Element): void => {
                    comment = $._decodeGraphicString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AdditionalInformation,
                _extension_additions_list_spec_for_AdditionalInformation,
                _root_component_type_list_2_spec_for_AdditionalInformation,
                undefined
            );
            return new AdditionalInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                creationDate,
                comment
            );
        };
    }
    return _cached_decoder_for_AdditionalInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalInformation */
let _cached_encoder_for_AdditionalInformation: $.ASN1Encoder<AdditionalInformation> | null =
    null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AdditionalInformation */
/**
 * @summary Encodes a(n) AdditionalInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalInformation, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalInformation(
    value: AdditionalInformation,
    elGetter: $.ASN1Encoder<AdditionalInformation>
) {
    if (!_cached_encoder_for_AdditionalInformation) {
        _cached_encoder_for_AdditionalInformation = function (
            value: AdditionalInformation,
            elGetter: $.ASN1Encoder<AdditionalInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.creationDate === undefined
                            ? undefined
                            : $._encodeGeneralizedTime(
                                  value.creationDate,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.comment === undefined
                            ? undefined
                            : $._encodeGraphicString(value.comment, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AdditionalInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdditionalInformation */

/* eslint-enable */
