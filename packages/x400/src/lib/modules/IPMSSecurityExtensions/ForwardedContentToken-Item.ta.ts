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
    BodyPartNumber,
    _decode_BodyPartNumber,
    _encode_BodyPartNumber,
} from '../IPMSHeadingExtensions/BodyPartNumber.ta.js';
export {
    BodyPartNumber,
    _decode_BodyPartNumber,
    _encode_BodyPartNumber,
} from '../IPMSHeadingExtensions/BodyPartNumber.ta.js';
import {
    ForwardedContentToken_Item_body_part_choice,
    _decode_ForwardedContentToken_Item_body_part_choice,
    _encode_ForwardedContentToken_Item_body_part_choice,
} from '../IPMSSecurityExtensions/ForwardedContentToken-Item-body-part-choice.ta.js';
export {
    ForwardedContentToken_Item_body_part_choice,
    _decode_ForwardedContentToken_Item_body_part_choice,
    _encode_ForwardedContentToken_Item_body_part_choice,
} from '../IPMSSecurityExtensions/ForwardedContentToken-Item-body-part-choice.ta.js';

/* START_OF_SYMBOL_DEFINITION ForwardedContentToken_Item */
/**
 * @summary ForwardedContentToken_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardedContentToken-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ForwardedContentToken_Item {
    constructor(
        /**
         * @summary `body_part_number`.
         * @public
         * @readonly
         */
        readonly body_part_number: BodyPartNumber,
        /**
         * @summary `body_part_choice`.
         * @public
         * @readonly
         */
        readonly body_part_choice: ForwardedContentToken_Item_body_part_choice
    ) {}

    /**
     * @summary Restructures an object into a ForwardedContentToken_Item
     * @description
     *
     * This takes an `object` and converts it to a `ForwardedContentToken_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardedContentToken_Item`.
     * @returns {ForwardedContentToken_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof ForwardedContentToken_Item]: ForwardedContentToken_Item[_K];
        }
    ): ForwardedContentToken_Item {
        return new ForwardedContentToken_Item(
            _o.body_part_number,
            _o.body_part_choice
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ForwardedContentToken_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ForwardedContentToken_Item */
/**
 * @summary The Leading Root Component Types of ForwardedContentToken_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ForwardedContentToken_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'body-part-number',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'body-part-choice',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ForwardedContentToken_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ForwardedContentToken_Item */
/**
 * @summary The Trailing Root Component Types of ForwardedContentToken_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ForwardedContentToken_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ForwardedContentToken_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ForwardedContentToken_Item */
/**
 * @summary The Extension Addition Component Types of ForwardedContentToken_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ForwardedContentToken_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ForwardedContentToken_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardedContentToken_Item */
let _cached_decoder_for_ForwardedContentToken_Item: $.ASN1Decoder<ForwardedContentToken_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardedContentToken_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ForwardedContentToken_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedContentToken_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardedContentToken_Item} The decoded data structure.
 */
export function _decode_ForwardedContentToken_Item(el: _Element) {
    if (!_cached_decoder_for_ForwardedContentToken_Item) {
        _cached_decoder_for_ForwardedContentToken_Item = function (
            el: _Element
        ): ForwardedContentToken_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let body_part_number!: BodyPartNumber;
            let body_part_choice!: ForwardedContentToken_Item_body_part_choice;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'body-part-number': (_el: _Element): void => {
                    body_part_number = _decode_BodyPartNumber(_el);
                },
                'body-part-choice': (_el: _Element): void => {
                    body_part_choice = _decode_ForwardedContentToken_Item_body_part_choice(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ForwardedContentToken_Item,
                _extension_additions_list_spec_for_ForwardedContentToken_Item,
                _root_component_type_list_2_spec_for_ForwardedContentToken_Item,
                undefined
            );
            return new ForwardedContentToken_Item /* SET_CONSTRUCTOR_CALL */(
                body_part_number,
                body_part_choice
            );
        };
    }
    return _cached_decoder_for_ForwardedContentToken_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ForwardedContentToken_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardedContentToken_Item */
let _cached_encoder_for_ForwardedContentToken_Item: $.ASN1Encoder<ForwardedContentToken_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardedContentToken_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ForwardedContentToken_Item */
/**
 * @summary Encodes a(n) ForwardedContentToken_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedContentToken_Item, encoded as an ASN.1 Element.
 */
export function _encode_ForwardedContentToken_Item(
    value: ForwardedContentToken_Item,
    elGetter: $.ASN1Encoder<ForwardedContentToken_Item>
) {
    if (!_cached_encoder_for_ForwardedContentToken_Item) {
        _cached_encoder_for_ForwardedContentToken_Item = function (
            value: ForwardedContentToken_Item,
            elGetter: $.ASN1Encoder<ForwardedContentToken_Item>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_BodyPartNumber(
                            value.body_part_number,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ForwardedContentToken_Item_body_part_choice(
                            value.body_part_choice,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ForwardedContentToken_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ForwardedContentToken_Item */

/* eslint-enable */
