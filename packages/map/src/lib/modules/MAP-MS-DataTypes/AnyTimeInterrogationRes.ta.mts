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
import { SubscriberInfo, _decode_SubscriberInfo, _encode_SubscriberInfo } from "../MAP-MS-DataTypes/SubscriberInfo.ta.mjs";
// export { SubscriberInfo, _decode_SubscriberInfo, _encode_SubscriberInfo } from "../MAP-MS-DataTypes/SubscriberInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary AnyTimeInterrogationRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyTimeInterrogationRes ::= SEQUENCE {
 *     subscriberInfo    SubscriberInfo,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AnyTimeInterrogationRes {
    constructor (
        /**
         * @summary `subscriberInfo`.
         * @public
         * @readonly
         */
        readonly subscriberInfo: SubscriberInfo,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AnyTimeInterrogationRes
     * @description
     * 
     * This takes an `object` and converts it to a `AnyTimeInterrogationRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnyTimeInterrogationRes`.
     * @returns {AnyTimeInterrogationRes}
     */
    public static _from_object (_o: { [_K in keyof (AnyTimeInterrogationRes)]: (AnyTimeInterrogationRes)[_K] }): AnyTimeInterrogationRes {
        return new AnyTimeInterrogationRes(_o.subscriberInfo, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AnyTimeInterrogationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnyTimeInterrogationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriberInfo", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AnyTimeInterrogationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnyTimeInterrogationRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnyTimeInterrogationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnyTimeInterrogationRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AnyTimeInterrogationRes: $.ASN1Decoder<AnyTimeInterrogationRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnyTimeInterrogationRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnyTimeInterrogationRes (el: _Element): AnyTimeInterrogationRes {
    if (!_cached_decoder_for_AnyTimeInterrogationRes) { _cached_decoder_for_AnyTimeInterrogationRes = function (el: _Element): AnyTimeInterrogationRes {
    let subscriberInfo!: SubscriberInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "subscriberInfo": (_el: _Element): void => { subscriberInfo = _decode_SubscriberInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AnyTimeInterrogationRes,
        _extension_additions_list_spec_for_AnyTimeInterrogationRes,
        _root_component_type_list_2_spec_for_AnyTimeInterrogationRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AnyTimeInterrogationRes(
        subscriberInfo,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AnyTimeInterrogationRes(el);
}

let _cached_encoder_for_AnyTimeInterrogationRes: $.ASN1Encoder<AnyTimeInterrogationRes> | null = null;

/**
 * @summary Encodes a(n) AnyTimeInterrogationRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyTimeInterrogationRes, encoded as an ASN.1 Element.
 */
export
function _encode_AnyTimeInterrogationRes (value: AnyTimeInterrogationRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnyTimeInterrogationRes) { _cached_encoder_for_AnyTimeInterrogationRes = function (value: AnyTimeInterrogationRes, elGetter: $.ASN1Encoder<AnyTimeInterrogationRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubscriberInfo(value.subscriberInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AnyTimeInterrogationRes(value, elGetter);
}


/* eslint-enable */
