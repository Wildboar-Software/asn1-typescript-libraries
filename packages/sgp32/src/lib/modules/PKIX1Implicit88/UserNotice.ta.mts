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
import { NoticeReference, _decode_NoticeReference, _encode_NoticeReference } from "../PKIX1Implicit88/NoticeReference.ta.mjs";
// export { NoticeReference, _decode_NoticeReference, _encode_NoticeReference } from "../PKIX1Implicit88/NoticeReference.ta.mjs";
import { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../PKIX1Implicit88/DisplayText.ta.mjs";
// export { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../PKIX1Implicit88/DisplayText.ta.mjs";


/**
 * @summary UserNotice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserNotice ::= SEQUENCE {
 *      noticeRef        NoticeReference OPTIONAL,
 *      explicitText     DisplayText OPTIONAL}
 * ```
 * 
 * @class
 */
export
class UserNotice {
    constructor (
        /**
         * @summary `noticeRef`.
         * @public
         * @readonly
         */
        readonly noticeRef: OPTIONAL<NoticeReference>,
        /**
         * @summary `explicitText`.
         * @public
         * @readonly
         */
        readonly explicitText: OPTIONAL<DisplayText>
    ) {}

    /**
     * @summary Restructures an object into a UserNotice
     * @description
     * 
     * This takes an `object` and converts it to a `UserNotice`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserNotice`.
     * @returns {UserNotice}
     */
    public static _from_object (_o: { [_K in keyof (UserNotice)]: (UserNotice)[_K] }): UserNotice {
        return new UserNotice(_o.noticeRef, _o.explicitText);
    }


}

/**
 * @summary The Leading Root Component Types of UserNotice
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserNotice: $.ComponentSpec[] = [
    new $.ComponentSpec("noticeRef", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("explicitText", true, $.or($.hasTag(_TagClass.universal, 22), $.hasTag(_TagClass.universal, 26), $.hasTag(_TagClass.universal, 30), $.hasTag(_TagClass.universal, 12)))
];

/**
 * @summary The Trailing Root Component Types of UserNotice
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserNotice: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserNotice
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserNotice: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserNotice: $.ASN1Decoder<UserNotice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserNotice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserNotice (el: _Element): UserNotice {
    if (!_cached_decoder_for_UserNotice) { _cached_decoder_for_UserNotice = function (el: _Element): UserNotice {
    let noticeRef: OPTIONAL<NoticeReference>;
    let explicitText: OPTIONAL<DisplayText>;
    const callbacks: $.DecodingMap = {
        "noticeRef": (_el: _Element): void => { noticeRef = _decode_NoticeReference(_el); },
        "explicitText": (_el: _Element): void => { explicitText = _decode_DisplayText(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserNotice,
        _extension_additions_list_spec_for_UserNotice,
        _root_component_type_list_2_spec_for_UserNotice,
        undefined,
    );
    return new UserNotice(
        noticeRef,
        explicitText
    );
}; }
    return _cached_decoder_for_UserNotice(el);
}

let _cached_encoder_for_UserNotice: $.ASN1Encoder<UserNotice> | null = null;

/**
 * @summary Encodes a(n) UserNotice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserNotice, encoded as an ASN.1 Element.
 */
export
function _encode_UserNotice (value: UserNotice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserNotice) { _cached_encoder_for_UserNotice = function (value: UserNotice, elGetter: $.ASN1Encoder<UserNotice>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.noticeRef === undefined) ? undefined : _encode_NoticeReference(value.noticeRef, $.BER)),
            /* IF_ABSENT  */ ((value.explicitText === undefined) ? undefined : _encode_DisplayText(value.explicitText, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UserNotice(value, elGetter);
}


/* eslint-enable */
