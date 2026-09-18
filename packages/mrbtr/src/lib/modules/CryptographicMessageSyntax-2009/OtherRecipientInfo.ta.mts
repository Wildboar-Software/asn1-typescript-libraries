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
import { OTHER_RECIPIENT } from "../CryptographicMessageSyntax-2009/OTHER-RECIPIENT.oca.mjs";
// export { OTHER_RECIPIENT } from "../CryptographicMessageSyntax-2009/OTHER-RECIPIENT.oca.mjs";
import { SupportedOtherRecipInfo } from "../CryptographicMessageSyntax-2009/SupportedOtherRecipInfo.osa.mjs";
// export { SupportedOtherRecipInfo } from "../CryptographicMessageSyntax-2009/SupportedOtherRecipInfo.osa.mjs";


/**
 * @summary OtherRecipientInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherRecipientInfo ::= SEQUENCE {
 *     oriType    OTHER-RECIPIENT.
 *             &id({SupportedOtherRecipInfo}),
 *     oriValue   OTHER-RECIPIENT.
 *             &Type({SupportedOtherRecipInfo}{@oriType})}
 * ```
 * 
 * @class
 */
export
class OtherRecipientInfo {
    constructor (
        /**
         * @summary `oriType`.
         * @public
         * @readonly
         */
        readonly oriType: OBJECT_IDENTIFIER,
        /**
         * @summary `oriValue`.
         * @public
         * @readonly
         */
        readonly oriValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a OtherRecipientInfo
     * @description
     * 
     * This takes an `object` and converts it to a `OtherRecipientInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherRecipientInfo`.
     * @returns {OtherRecipientInfo}
     */
    public static _from_object (_o: { [_K in keyof (OtherRecipientInfo)]: (OtherRecipientInfo)[_K] }): OtherRecipientInfo {
        return new OtherRecipientInfo(_o.oriType, _o.oriValue);
    }


}

/**
 * @summary The Leading Root Component Types of OtherRecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("oriType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("oriValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of OtherRecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherRecipientInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OtherRecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherRecipientInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OtherRecipientInfo: $.ASN1Decoder<OtherRecipientInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherRecipientInfo (el: _Element): OtherRecipientInfo {
    if (!_cached_decoder_for_OtherRecipientInfo) { _cached_decoder_for_OtherRecipientInfo = function (el: _Element): OtherRecipientInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OtherRecipientInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "oriType";
    sequence[1].name = "oriValue";
    let oriType!: OBJECT_IDENTIFIER;
    let oriValue!: _Element;
    oriType = $._decodeObjectIdentifier(sequence[0]);
    oriValue = $._decodeAny(sequence[1]);
    return new OtherRecipientInfo(
        oriType,
        oriValue,

    );
}; }
    return _cached_decoder_for_OtherRecipientInfo(el);
}

let _cached_encoder_for_OtherRecipientInfo: $.ASN1Encoder<OtherRecipientInfo> | null = null;

/**
 * @summary Encodes a(n) OtherRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientInfo, encoded as an ASN.1 Element.
 */
export
function _encode_OtherRecipientInfo (value: OtherRecipientInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherRecipientInfo) { _cached_encoder_for_OtherRecipientInfo = function (value: OtherRecipientInfo, elGetter: $.ASN1Encoder<OtherRecipientInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.oriType, $.BER),
            /* REQUIRED   */ $._encodeAny(value.oriValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherRecipientInfo(value, elGetter);
}


/* eslint-enable */
