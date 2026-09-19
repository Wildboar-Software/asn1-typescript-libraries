/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMS_report_sMS_Contents_enhancedContent_character_encoding, _decode_SMS_report_sMS_Contents_enhancedContent_character_encoding, _encode_SMS_report_sMS_Contents_enhancedContent_character_encoding, _enum_for_SMS_report_sMS_Contents_enhancedContent_character_encoding } from "../HI2Operations/SMS-report-sMS-Contents-enhancedContent-character-encoding.ta.mjs";
// export { SMS_report_sMS_Contents_enhancedContent_character_encoding, _enum_for_SMS_report_sMS_Contents_enhancedContent_character_encoding, SMS_report_sMS_Contents_enhancedContent_character_encoding_gsm_7_bit_ascii /* IMPORTED_LONG_ENUMERATION_ITEM */, gsm_7_bit_ascii /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_enhancedContent_character_encoding_eight_bit_ascii /* IMPORTED_LONG_ENUMERATION_ITEM */, eight_bit_ascii /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_enhancedContent_character_encoding_eight_bit_binary /* IMPORTED_LONG_ENUMERATION_ITEM */, eight_bit_binary /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_enhancedContent_character_encoding_ucs_2 /* IMPORTED_LONG_ENUMERATION_ITEM */, ucs_2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_enhancedContent_character_encoding_utf_8 /* IMPORTED_LONG_ENUMERATION_ITEM */, utf_8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_enhancedContent_character_encoding_utf_16 /* IMPORTED_LONG_ENUMERATION_ITEM */, utf_16 /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_enhancedContent_character_encoding_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_enhancedContent_character_encoding, _encode_SMS_report_sMS_Contents_enhancedContent_character_encoding } from "../HI2Operations/SMS-report-sMS-Contents-enhancedContent-character-encoding.ta.mjs";


/**
 * @summary SMS_report_sMS_Contents_enhancedContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents-enhancedContent ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SMS_report_sMS_Contents_enhancedContent {
    constructor (
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: OCTET_STRING,
        /**
         * @summary `character_encoding`.
         * @public
         * @readonly
         */
        readonly character_encoding: SMS_report_sMS_Contents_enhancedContent_character_encoding
    ) {}

    /**
     * @summary Restructures an object into a SMS_report_sMS_Contents_enhancedContent
     * @description
     * 
     * This takes an `object` and converts it to a `SMS_report_sMS_Contents_enhancedContent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMS_report_sMS_Contents_enhancedContent`.
     * @returns {SMS_report_sMS_Contents_enhancedContent}
     */
    public static _from_object (_o: { [_K in keyof (SMS_report_sMS_Contents_enhancedContent)]: (SMS_report_sMS_Contents_enhancedContent)[_K] }): SMS_report_sMS_Contents_enhancedContent {
        return new SMS_report_sMS_Contents_enhancedContent(_o.content, _o.character_encoding);
    }

        /**
         * @summary The enum used as the type of the component `character_encoding`
         * @public
         * @static
         */

    public static _enum_for_character_encoding = _enum_for_SMS_report_sMS_Contents_enhancedContent_character_encoding;
}

/**
 * @summary The Leading Root Component Types of SMS_report_sMS_Contents_enhancedContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMS_report_sMS_Contents_enhancedContent: $.ComponentSpec[] = [
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("character-encoding", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SMS_report_sMS_Contents_enhancedContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMS_report_sMS_Contents_enhancedContent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMS_report_sMS_Contents_enhancedContent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMS_report_sMS_Contents_enhancedContent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMS_report_sMS_Contents_enhancedContent: $.ASN1Decoder<SMS_report_sMS_Contents_enhancedContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report_sMS_Contents_enhancedContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report_sMS_Contents_enhancedContent (el: _Element): SMS_report_sMS_Contents_enhancedContent {
    if (!_cached_decoder_for_SMS_report_sMS_Contents_enhancedContent) { _cached_decoder_for_SMS_report_sMS_Contents_enhancedContent = function (el: _Element): SMS_report_sMS_Contents_enhancedContent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SMS-report-sMS-Contents-enhancedContent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "content";
    sequence[1].name = "character-encoding";
    let content!: OCTET_STRING;
    let character_encoding!: SMS_report_sMS_Contents_enhancedContent_character_encoding;
    content = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    character_encoding = $._decode_implicit<SMS_report_sMS_Contents_enhancedContent_character_encoding>(() => _decode_SMS_report_sMS_Contents_enhancedContent_character_encoding)(sequence[1]);
    return new SMS_report_sMS_Contents_enhancedContent(
        content,
        character_encoding,

    );
}; }
    return _cached_decoder_for_SMS_report_sMS_Contents_enhancedContent(el);
}

let _cached_encoder_for_SMS_report_sMS_Contents_enhancedContent: $.ASN1Encoder<SMS_report_sMS_Contents_enhancedContent> | null = null;

/**
 * @summary Encodes a(n) SMS_report_sMS_Contents_enhancedContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report_sMS_Contents_enhancedContent, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report_sMS_Contents_enhancedContent (value: SMS_report_sMS_Contents_enhancedContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report_sMS_Contents_enhancedContent) { _cached_encoder_for_SMS_report_sMS_Contents_enhancedContent = function (value: SMS_report_sMS_Contents_enhancedContent, elGetter: $.ASN1Encoder<SMS_report_sMS_Contents_enhancedContent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.content, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMS_report_sMS_Contents_enhancedContent_character_encoding, $.BER)(value.character_encoding, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMS_report_sMS_Contents_enhancedContent(value, elGetter);
}


/* eslint-enable */
