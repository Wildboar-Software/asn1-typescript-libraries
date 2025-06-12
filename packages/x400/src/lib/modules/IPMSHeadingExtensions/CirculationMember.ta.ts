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
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.js';
export {
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.js';
import {
    Checkmark,
    _decode_Checkmark,
    _encode_Checkmark,
} from '../IPMSHeadingExtensions/Checkmark.ta.js';
export {
    Checkmark,
    _decode_Checkmark,
    _encode_Checkmark,
} from '../IPMSHeadingExtensions/Checkmark.ta.js';

/* START_OF_SYMBOL_DEFINITION CirculationMember */
/**
 * @summary CirculationMember
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationMember ::= SET {
 *   circulation-recipient
 *     RecipientSpecifier
 *       (WITH COMPONENTS {
 *          ...,
 *          recipient  (WITH COMPONENTS {
 *                        ...,
 *                        formal-name  PRESENT
 *                      })
 *        }),
 *   checked                Checkmark OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CirculationMember {
    constructor(
        /**
         * @summary `circulation_recipient`.
         * @public
         * @readonly
         */
        readonly circulation_recipient: RecipientSpecifier,
        /**
         * @summary `checked`.
         * @public
         * @readonly
         */
        readonly checked: OPTIONAL<Checkmark>
    ) {}

    /**
     * @summary Restructures an object into a CirculationMember
     * @description
     *
     * This takes an `object` and converts it to a `CirculationMember`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CirculationMember`.
     * @returns {CirculationMember}
     */
    public static _from_object(
        _o: { [_K in keyof CirculationMember]: CirculationMember[_K] }
    ): CirculationMember {
        return new CirculationMember(_o.circulation_recipient, _o.checked);
    }
}
/* END_OF_SYMBOL_DEFINITION CirculationMember */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CirculationMember */
/**
 * @summary The Leading Root Component Types of CirculationMember
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CirculationMember: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'circulation-recipient',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec('checked', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CirculationMember */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CirculationMember */
/**
 * @summary The Trailing Root Component Types of CirculationMember
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CirculationMember: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CirculationMember */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CirculationMember */
/**
 * @summary The Extension Addition Component Types of CirculationMember
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CirculationMember: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CirculationMember */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationMember */
let _cached_decoder_for_CirculationMember: $.ASN1Decoder<CirculationMember> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationMember */

/* START_OF_SYMBOL_DEFINITION _decode_CirculationMember */
/**
 * @summary Decodes an ASN.1 element into a(n) CirculationMember
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationMember} The decoded data structure.
 */
export function _decode_CirculationMember(el: _Element) {
    if (!_cached_decoder_for_CirculationMember) {
        _cached_decoder_for_CirculationMember = function (
            el: _Element
        ): CirculationMember {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let circulation_recipient!: RecipientSpecifier;
            let checked: OPTIONAL<Checkmark>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'circulation-recipient': (_el: _Element): void => {
                    circulation_recipient = _decode_RecipientSpecifier(_el);
                },
                checked: (_el: _Element): void => {
                    checked = _decode_Checkmark(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CirculationMember,
                _extension_additions_list_spec_for_CirculationMember,
                _root_component_type_list_2_spec_for_CirculationMember,
                undefined
            );
            return new CirculationMember /* SET_CONSTRUCTOR_CALL */(
                circulation_recipient,
                checked
            );
        };
    }
    return _cached_decoder_for_CirculationMember(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CirculationMember */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationMember */
let _cached_encoder_for_CirculationMember: $.ASN1Encoder<CirculationMember> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationMember */

/* START_OF_SYMBOL_DEFINITION _encode_CirculationMember */
/**
 * @summary Encodes a(n) CirculationMember into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationMember, encoded as an ASN.1 Element.
 */
export function _encode_CirculationMember(
    value: CirculationMember,
    elGetter: $.ASN1Encoder<CirculationMember>
) {
    if (!_cached_encoder_for_CirculationMember) {
        _cached_encoder_for_CirculationMember = function (
            value: CirculationMember,
            elGetter: $.ASN1Encoder<CirculationMember>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RecipientSpecifier(
                            value.circulation_recipient,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.checked === undefined
                            ? undefined
                            : _encode_Checkmark(value.checked, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CirculationMember(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CirculationMember */

/* eslint-enable */
