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
    BodyPart,
    _decode_BodyPart,
    _encode_BodyPart,
} from '../IPMSInformationObjects/BodyPart.ta';
export {
    BodyPart,
    _decode_BodyPart,
    _encode_BodyPart,
} from '../IPMSInformationObjects/BodyPart.ta';
import {
    Time,
    _decode_Time,
    _encode_Time,
} from '../IPMSInformationObjects/Time.ta';
export {
    Time,
    _decode_Time,
    _encode_Time,
} from '../IPMSInformationObjects/Time.ta';

/* START_OF_SYMBOL_DEFINITION AbsenceAdvice */
/**
 * @summary AbsenceAdvice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbsenceAdvice ::= SEQUENCE {
 *   advice          BodyPart OPTIONAL,
 *   next-available  Time OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AbsenceAdvice {
    constructor(
        /**
         * @summary `advice`.
         * @public
         * @readonly
         */
        readonly advice: OPTIONAL<BodyPart>,
        /**
         * @summary `next_available`.
         * @public
         * @readonly
         */
        readonly next_available: OPTIONAL<Time>
    ) {}

    /**
     * @summary Restructures an object into a AbsenceAdvice
     * @description
     *
     * This takes an `object` and converts it to a `AbsenceAdvice`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AbsenceAdvice`.
     * @returns {AbsenceAdvice}
     */
    public static _from_object(
        _o: { [_K in keyof AbsenceAdvice]: AbsenceAdvice[_K] }
    ): AbsenceAdvice {
        return new AbsenceAdvice(_o.advice, _o.next_available);
    }
}
/* END_OF_SYMBOL_DEFINITION AbsenceAdvice */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AbsenceAdvice */
/**
 * @summary The Leading Root Component Types of AbsenceAdvice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AbsenceAdvice: $.ComponentSpec[] = [
    new $.ComponentSpec('advice', true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'next-available',
        true,
        $.hasTag(_TagClass.universal, 23),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AbsenceAdvice */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AbsenceAdvice */
/**
 * @summary The Trailing Root Component Types of AbsenceAdvice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AbsenceAdvice: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AbsenceAdvice */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AbsenceAdvice */
/**
 * @summary The Extension Addition Component Types of AbsenceAdvice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AbsenceAdvice: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AbsenceAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbsenceAdvice */
let _cached_decoder_for_AbsenceAdvice: $.ASN1Decoder<AbsenceAdvice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbsenceAdvice */

/* START_OF_SYMBOL_DEFINITION _decode_AbsenceAdvice */
/**
 * @summary Decodes an ASN.1 element into a(n) AbsenceAdvice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbsenceAdvice} The decoded data structure.
 */
export function _decode_AbsenceAdvice(el: _Element) {
    if (!_cached_decoder_for_AbsenceAdvice) {
        _cached_decoder_for_AbsenceAdvice = function (
            el: _Element
        ): AbsenceAdvice {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let advice: OPTIONAL<BodyPart>;
            let next_available: OPTIONAL<Time>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                advice: (_el: _Element): void => {
                    advice = _decode_BodyPart(_el);
                },
                'next-available': (_el: _Element): void => {
                    next_available = _decode_Time(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AbsenceAdvice,
                _extension_additions_list_spec_for_AbsenceAdvice,
                _root_component_type_list_2_spec_for_AbsenceAdvice,
                undefined
            );
            return new AbsenceAdvice /* SEQUENCE_CONSTRUCTOR_CALL */(
                advice,
                next_available
            );
        };
    }
    return _cached_decoder_for_AbsenceAdvice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbsenceAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbsenceAdvice */
let _cached_encoder_for_AbsenceAdvice: $.ASN1Encoder<AbsenceAdvice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbsenceAdvice */

/* START_OF_SYMBOL_DEFINITION _encode_AbsenceAdvice */
/**
 * @summary Encodes a(n) AbsenceAdvice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbsenceAdvice, encoded as an ASN.1 Element.
 */
export function _encode_AbsenceAdvice(
    value: AbsenceAdvice,
    elGetter: $.ASN1Encoder<AbsenceAdvice>
) {
    if (!_cached_encoder_for_AbsenceAdvice) {
        _cached_encoder_for_AbsenceAdvice = function (
            value: AbsenceAdvice,
            elGetter: $.ASN1Encoder<AbsenceAdvice>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.advice === undefined
                            ? undefined
                            : _encode_BodyPart(value.advice, $.BER),
                        /* IF_ABSENT  */ value.next_available === undefined
                            ? undefined
                            : _encode_Time(value.next_available, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AbsenceAdvice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbsenceAdvice */

/* eslint-enable */
