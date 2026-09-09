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
import { MiscCallInfo_messageType, _enum_for_MiscCallInfo_messageType, MiscCallInfo_messageType_request /* IMPORTED_LONG_ENUMERATION_ITEM */, request /* IMPORTED_SHORT_ENUMERATION_ITEM */, MiscCallInfo_messageType_notification /* IMPORTED_LONG_ENUMERATION_ITEM */, notification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MiscCallInfo_messageType, _encode_MiscCallInfo_messageType } from "../Core-INAP-CS1-DataTypes/MiscCallInfo-messageType.ta.mjs";
// export { MiscCallInfo_messageType, _enum_for_MiscCallInfo_messageType, MiscCallInfo_messageType_request /* IMPORTED_LONG_ENUMERATION_ITEM */, request /* IMPORTED_SHORT_ENUMERATION_ITEM */, MiscCallInfo_messageType_notification /* IMPORTED_LONG_ENUMERATION_ITEM */, notification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MiscCallInfo_messageType, _encode_MiscCallInfo_messageType } from "../Core-INAP-CS1-DataTypes/MiscCallInfo-messageType.ta.mjs";


/**
 * @summary MiscCallInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo ::= SEQUENCE {
 *      messageType      [0] ENUMERATED {
 *           request(0),
 *           notification(1)
 *           }
 *      }
 * ```
 * 
 * @class
 */
export
class MiscCallInfo {
    constructor (
        /**
         * @summary `messageType`.
         * @public
         * @readonly
         */
        readonly messageType: MiscCallInfo_messageType
    ) {}

    /**
     * @summary Restructures an object into a MiscCallInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MiscCallInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MiscCallInfo`.
     * @returns {MiscCallInfo}
     */
    public static _from_object (_o: { [_K in keyof (MiscCallInfo)]: (MiscCallInfo)[_K] }): MiscCallInfo {
        return new MiscCallInfo(_o.messageType);
    }

        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_MiscCallInfo_messageType;
}

/**
 * @summary The Leading Root Component Types of MiscCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MiscCallInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("messageType", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MiscCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MiscCallInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MiscCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MiscCallInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MiscCallInfo: $.ASN1Decoder<MiscCallInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MiscCallInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MiscCallInfo (el: _Element): MiscCallInfo {
    if (!_cached_decoder_for_MiscCallInfo) { _cached_decoder_for_MiscCallInfo = function (el: _Element): MiscCallInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MiscCallInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "messageType";
    let messageType!: MiscCallInfo_messageType;
    messageType = $._decode_implicit<MiscCallInfo_messageType>(() => _decode_MiscCallInfo_messageType)(sequence[0]);
    return new MiscCallInfo(
        messageType,

    );
}; }
    return _cached_decoder_for_MiscCallInfo(el);
}

let _cached_encoder_for_MiscCallInfo: $.ASN1Encoder<MiscCallInfo> | null = null;

/**
 * @summary Encodes a(n) MiscCallInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MiscCallInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MiscCallInfo (value: MiscCallInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MiscCallInfo) { _cached_encoder_for_MiscCallInfo = function (value: MiscCallInfo, elGetter: $.ASN1Encoder<MiscCallInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MiscCallInfo_messageType, $.BER)(value.messageType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MiscCallInfo(value, elGetter);
}


/* eslint-enable */
