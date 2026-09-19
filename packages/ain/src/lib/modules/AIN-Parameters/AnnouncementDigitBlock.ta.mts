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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MaximumDigits, _decode_MaximumDigits, _encode_MaximumDigits } from "../AIN-Parameters/MaximumDigits.ta.mjs";
// export { MaximumDigits, _decode_MaximumDigits, _encode_MaximumDigits } from "../AIN-Parameters/MaximumDigits.ta.mjs";
import { UninterAnnounceBlock, _decode_UninterAnnounceBlock, _encode_UninterAnnounceBlock } from "../AIN-Parameters/UninterAnnounceBlock.ta.mjs";
// export { UninterAnnounceBlock, _decode_UninterAnnounceBlock, _encode_UninterAnnounceBlock } from "../AIN-Parameters/UninterAnnounceBlock.ta.mjs";
import { InterAnnounceBlock, _decode_InterAnnounceBlock, _encode_InterAnnounceBlock } from "../AIN-Parameters/InterAnnounceBlock.ta.mjs";
// export { InterAnnounceBlock, _decode_InterAnnounceBlock, _encode_InterAnnounceBlock } from "../AIN-Parameters/InterAnnounceBlock.ta.mjs";


/**
 * @summary AnnouncementDigitBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnnouncementDigitBlock ::= SEQUENCE{
 *         maximumDigits           [0] IMPLICIT MaximumDigits,
 *         uninterAnnounceBlock    [1] IMPLICIT UninterAnnounceBlock OPTIONAL,
 *         interAnnounceBlock      [2] IMPLICIT InterAnnounceBlock OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class AnnouncementDigitBlock {
    constructor (
        /**
         * @summary `maximumDigits`.
         * @public
         * @readonly
         */
        readonly maximumDigits: MaximumDigits,
        /**
         * @summary `uninterAnnounceBlock`.
         * @public
         * @readonly
         */
        readonly uninterAnnounceBlock: OPTIONAL<UninterAnnounceBlock>,
        /**
         * @summary `interAnnounceBlock`.
         * @public
         * @readonly
         */
        readonly interAnnounceBlock: OPTIONAL<InterAnnounceBlock>
    ) {}

    /**
     * @summary Restructures an object into a AnnouncementDigitBlock
     * @description
     * 
     * This takes an `object` and converts it to a `AnnouncementDigitBlock`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnnouncementDigitBlock`.
     * @returns {AnnouncementDigitBlock}
     */
    public static _from_object (_o: { [_K in keyof (AnnouncementDigitBlock)]: (AnnouncementDigitBlock)[_K] }): AnnouncementDigitBlock {
        return new AnnouncementDigitBlock(_o.maximumDigits, _o.uninterAnnounceBlock, _o.interAnnounceBlock);
    }


}

/**
 * @summary The Leading Root Component Types of AnnouncementDigitBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnnouncementDigitBlock: $.ComponentSpec[] = [
    new $.ComponentSpec("maximumDigits", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uninterAnnounceBlock", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("interAnnounceBlock", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AnnouncementDigitBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnnouncementDigitBlock: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnnouncementDigitBlock
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnnouncementDigitBlock: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AnnouncementDigitBlock: $.ASN1Decoder<AnnouncementDigitBlock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnnouncementDigitBlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnnouncementDigitBlock (el: _Element): AnnouncementDigitBlock {
    if (!_cached_decoder_for_AnnouncementDigitBlock) { _cached_decoder_for_AnnouncementDigitBlock = function (el: _Element): AnnouncementDigitBlock {
    let maximumDigits!: MaximumDigits;
    let uninterAnnounceBlock: OPTIONAL<UninterAnnounceBlock>;
    let interAnnounceBlock: OPTIONAL<InterAnnounceBlock>;
    const callbacks: $.DecodingMap = {
        "maximumDigits": (_el: _Element): void => { maximumDigits = $._decode_implicit<MaximumDigits>(() => _decode_MaximumDigits)(_el); },
        "uninterAnnounceBlock": (_el: _Element): void => { uninterAnnounceBlock = $._decode_implicit<UninterAnnounceBlock>(() => _decode_UninterAnnounceBlock)(_el); },
        "interAnnounceBlock": (_el: _Element): void => { interAnnounceBlock = $._decode_implicit<InterAnnounceBlock>(() => _decode_InterAnnounceBlock)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AnnouncementDigitBlock,
        _extension_additions_list_spec_for_AnnouncementDigitBlock,
        _root_component_type_list_2_spec_for_AnnouncementDigitBlock,
        undefined,
    );
    return new AnnouncementDigitBlock(
        maximumDigits,
        uninterAnnounceBlock,
        interAnnounceBlock
    );
}; }
    return _cached_decoder_for_AnnouncementDigitBlock(el);
}

let _cached_encoder_for_AnnouncementDigitBlock: $.ASN1Encoder<AnnouncementDigitBlock> | null = null;

/**
 * @summary Encodes a(n) AnnouncementDigitBlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnnouncementDigitBlock, encoded as an ASN.1 Element.
 */
export
function _encode_AnnouncementDigitBlock (value: AnnouncementDigitBlock, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnnouncementDigitBlock) { _cached_encoder_for_AnnouncementDigitBlock = function (value: AnnouncementDigitBlock, elGetter: $.ASN1Encoder<AnnouncementDigitBlock>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MaximumDigits, $.BER)(value.maximumDigits, $.BER),
            /* IF_ABSENT  */ ((value.uninterAnnounceBlock === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_UninterAnnounceBlock, $.BER)(value.uninterAnnounceBlock, $.BER)),
            /* IF_ABSENT  */ ((value.interAnnounceBlock === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InterAnnounceBlock, $.BER)(value.interAnnounceBlock, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AnnouncementDigitBlock(value, elGetter);
}


/* eslint-enable */
