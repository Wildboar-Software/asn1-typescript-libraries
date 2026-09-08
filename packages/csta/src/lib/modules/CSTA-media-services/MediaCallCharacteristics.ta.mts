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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MediaClass, MediaClass_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_data /* IMPORTED_LONG_NAMED_BIT */, data /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_image /* IMPORTED_LONG_NAMED_BIT */, image /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_audio /* IMPORTED_LONG_NAMED_BIT */, audio /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_other /* IMPORTED_LONG_NAMED_BIT */, MediaClass_notKnown /* IMPORTED_LONG_NAMED_BIT */, notKnown /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_chat /* IMPORTED_LONG_NAMED_BIT */, chat /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_email /* IMPORTED_LONG_NAMED_BIT */, email /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_message /* IMPORTED_LONG_NAMED_BIT */, message /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_im /* IMPORTED_LONG_NAMED_BIT */, im /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_sms /* IMPORTED_LONG_NAMED_BIT */, sms /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_mms /* IMPORTED_LONG_NAMED_BIT */, mms /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaClass, _encode_MediaClass } from "../CSTA-media-services/MediaClass.ta.mjs";
// export { MediaClass, MediaClass_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_data /* IMPORTED_LONG_NAMED_BIT */, data /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_image /* IMPORTED_LONG_NAMED_BIT */, image /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_audio /* IMPORTED_LONG_NAMED_BIT */, audio /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_other /* IMPORTED_LONG_NAMED_BIT */, MediaClass_notKnown /* IMPORTED_LONG_NAMED_BIT */, notKnown /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_chat /* IMPORTED_LONG_NAMED_BIT */, chat /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_email /* IMPORTED_LONG_NAMED_BIT */, email /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_message /* IMPORTED_LONG_NAMED_BIT */, message /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_im /* IMPORTED_LONG_NAMED_BIT */, im /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_sms /* IMPORTED_LONG_NAMED_BIT */, sms /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_mms /* IMPORTED_LONG_NAMED_BIT */, mms /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaClass, _encode_MediaClass } from "../CSTA-media-services/MediaClass.ta.mjs";
import { MediaCallCharacteristics_bitRate, _enum_for_MediaCallCharacteristics_bitRate, MediaCallCharacteristics_bitRate_constant /* IMPORTED_LONG_ENUMERATION_ITEM */, constant /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_bitRate_variable /* IMPORTED_LONG_ENUMERATION_ITEM */, variable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaCallCharacteristics_bitRate, _encode_MediaCallCharacteristics_bitRate } from "../CSTA-media-services/MediaCallCharacteristics-bitRate.ta.mjs";
// export { MediaCallCharacteristics_bitRate, _enum_for_MediaCallCharacteristics_bitRate, MediaCallCharacteristics_bitRate_constant /* IMPORTED_LONG_ENUMERATION_ITEM */, constant /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_bitRate_variable /* IMPORTED_LONG_ENUMERATION_ITEM */, variable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaCallCharacteristics_bitRate, _encode_MediaCallCharacteristics_bitRate } from "../CSTA-media-services/MediaCallCharacteristics-bitRate.ta.mjs";
import { MediaCallCharacteristics_switchingSubDomainCCIEType, _enum_for_MediaCallCharacteristics_switchingSubDomainCCIEType, MediaCallCharacteristics_switchingSubDomainCCIEType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_atm /* IMPORTED_LONG_ENUMERATION_ITEM */, atm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_isoEthernet /* IMPORTED_LONG_ENUMERATION_ITEM */, isoEthernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_rsvp /* IMPORTED_LONG_ENUMERATION_ITEM */, rsvp /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_other /* IMPORTED_LONG_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_sip /* IMPORTED_LONG_ENUMERATION_ITEM */, sip /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaCallCharacteristics_switchingSubDomainCCIEType, _encode_MediaCallCharacteristics_switchingSubDomainCCIEType } from "../CSTA-media-services/MediaCallCharacteristics-switchingSubDomainCCIEType.ta.mjs";
// export { MediaCallCharacteristics_switchingSubDomainCCIEType, _enum_for_MediaCallCharacteristics_switchingSubDomainCCIEType, MediaCallCharacteristics_switchingSubDomainCCIEType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_atm /* IMPORTED_LONG_ENUMERATION_ITEM */, atm /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_isoEthernet /* IMPORTED_LONG_ENUMERATION_ITEM */, isoEthernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_rsvp /* IMPORTED_LONG_ENUMERATION_ITEM */, rsvp /* IMPORTED_SHORT_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_other /* IMPORTED_LONG_ENUMERATION_ITEM */, MediaCallCharacteristics_switchingSubDomainCCIEType_sip /* IMPORTED_LONG_ENUMERATION_ITEM */, sip /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MediaCallCharacteristics_switchingSubDomainCCIEType, _encode_MediaCallCharacteristics_switchingSubDomainCCIEType } from "../CSTA-media-services/MediaCallCharacteristics-switchingSubDomainCCIEType.ta.mjs";


/**
 * @summary MediaCallCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaCallCharacteristics ::= SEQUENCE
 * {     mediaClass                 MediaClass,
 *     connectionRate                 [0] IMPLICIT INTEGER             OPTIONAL,
 *                                                 -- value 0 indicates that
 *                                                 -- the connection rate is
 *                                                 -- unknown
 *     bitRate                 [1] IMPLICIT ENUMERATED
 *                         {     constant     (0),
 *                             variable     (1) }         DEFAULT constant,
 *     delayTolerance                 [2] IMPLICIT INTEGER             OPTIONAL,
 *     switchingSubDomainCCIEType         [3] IMPLICIT ENUMERATED 
 *                         {    isdn         (0),
 *                             atm         (1),
 *                             isoEthernet     (2),
 *                             rsvp         (3),
 *                             other         (4),
 *                             sip        (5) }        OPTIONAL,
 *     switchingSubDomainInformationElements     OCTET STRING                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MediaCallCharacteristics {
    constructor (
        /**
         * @summary `mediaClass`.
         * @public
         * @readonly
         */
        readonly mediaClass: MediaClass,
        /**
         * @summary `connectionRate`.
         * @public
         * @readonly
         */
        readonly connectionRate: OPTIONAL<INTEGER>,
        /**
         * @summary `bitRate`.
         * @public
         * @readonly
         */
        readonly bitRate: OPTIONAL<MediaCallCharacteristics_bitRate>,
        /**
         * @summary `delayTolerance`.
         * @public
         * @readonly
         */
        readonly delayTolerance: OPTIONAL<INTEGER>,
        /**
         * @summary `switchingSubDomainCCIEType`.
         * @public
         * @readonly
         */
        readonly switchingSubDomainCCIEType: OPTIONAL<MediaCallCharacteristics_switchingSubDomainCCIEType>,
        /**
         * @summary `switchingSubDomainInformationElements`.
         * @public
         * @readonly
         */
        readonly switchingSubDomainInformationElements: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a MediaCallCharacteristics
     * @description
     * 
     * This takes an `object` and converts it to a `MediaCallCharacteristics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaCallCharacteristics`.
     * @returns {MediaCallCharacteristics}
     */
    public static _from_object (_o: { [_K in keyof (MediaCallCharacteristics)]: (MediaCallCharacteristics)[_K] }): MediaCallCharacteristics {
        return new MediaCallCharacteristics(_o.mediaClass, _o.connectionRate, _o.bitRate, _o.delayTolerance, _o.switchingSubDomainCCIEType, _o.switchingSubDomainInformationElements);
    }

    /**
     * @summary Getter that returns the default value for `bitRate`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bitRate () { return MediaCallCharacteristics_bitRate_constant; }        /**
         * @summary The enum used as the type of the component `bitRate`
         * @public
         * @static
         */

    public static _enum_for_bitRate = _enum_for_MediaCallCharacteristics_bitRate;        /**
         * @summary The enum used as the type of the component `switchingSubDomainCCIEType`
         * @public
         * @static
         */

    public static _enum_for_switchingSubDomainCCIEType = _enum_for_MediaCallCharacteristics_switchingSubDomainCCIEType;
}

/**
 * @summary The Leading Root Component Types of MediaCallCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaCallCharacteristics: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaClass", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("connectionRate", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("bitRate", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("delayTolerance", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("switchingSubDomainCCIEType", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("switchingSubDomainInformationElements", true, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MediaCallCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaCallCharacteristics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaCallCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaCallCharacteristics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaCallCharacteristics: $.ASN1Decoder<MediaCallCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaCallCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaCallCharacteristics (el: _Element): MediaCallCharacteristics {
    if (!_cached_decoder_for_MediaCallCharacteristics) { _cached_decoder_for_MediaCallCharacteristics = function (el: _Element): MediaCallCharacteristics {
    let mediaClass!: MediaClass;
    let connectionRate: OPTIONAL<INTEGER>;
    let bitRate: OPTIONAL<MediaCallCharacteristics_bitRate> = MediaCallCharacteristics._default_value_for_bitRate;
    let delayTolerance: OPTIONAL<INTEGER>;
    let switchingSubDomainCCIEType: OPTIONAL<MediaCallCharacteristics_switchingSubDomainCCIEType>;
    let switchingSubDomainInformationElements: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "mediaClass": (_el: _Element): void => { mediaClass = _decode_MediaClass(_el); },
        "connectionRate": (_el: _Element): void => { connectionRate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "bitRate": (_el: _Element): void => { bitRate = $._decode_implicit<MediaCallCharacteristics_bitRate>(() => _decode_MediaCallCharacteristics_bitRate)(_el); },
        "delayTolerance": (_el: _Element): void => { delayTolerance = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "switchingSubDomainCCIEType": (_el: _Element): void => { switchingSubDomainCCIEType = $._decode_implicit<MediaCallCharacteristics_switchingSubDomainCCIEType>(() => _decode_MediaCallCharacteristics_switchingSubDomainCCIEType)(_el); },
        "switchingSubDomainInformationElements": (_el: _Element): void => { switchingSubDomainInformationElements = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaCallCharacteristics,
        _extension_additions_list_spec_for_MediaCallCharacteristics,
        _root_component_type_list_2_spec_for_MediaCallCharacteristics,
        undefined,
    );
    return new MediaCallCharacteristics(
        mediaClass,
        connectionRate,
        bitRate,
        delayTolerance,
        switchingSubDomainCCIEType,
        switchingSubDomainInformationElements
    );
}; }
    return _cached_decoder_for_MediaCallCharacteristics(el);
}

let _cached_encoder_for_MediaCallCharacteristics: $.ASN1Encoder<MediaCallCharacteristics> | null = null;

/**
 * @summary Encodes a(n) MediaCallCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaCallCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_MediaCallCharacteristics (value: MediaCallCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaCallCharacteristics) { _cached_encoder_for_MediaCallCharacteristics = function (value: MediaCallCharacteristics, elGetter: $.ASN1Encoder<MediaCallCharacteristics>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MediaClass(value.mediaClass, $.BER),
            /* IF_ABSENT  */ ((value.connectionRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.connectionRate, $.BER)),
            /* IF_DEFAULT */ (value.bitRate === undefined || $.deepEq(value.bitRate, MediaCallCharacteristics._default_value_for_bitRate) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MediaCallCharacteristics_bitRate, $.BER)(value.bitRate, $.BER)),
            /* IF_ABSENT  */ ((value.delayTolerance === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.delayTolerance, $.BER)),
            /* IF_ABSENT  */ ((value.switchingSubDomainCCIEType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaCallCharacteristics_switchingSubDomainCCIEType, $.BER)(value.switchingSubDomainCCIEType, $.BER)),
            /* IF_ABSENT  */ ((value.switchingSubDomainInformationElements === undefined) ? undefined : $._encodeOctetString(value.switchingSubDomainInformationElements, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaCallCharacteristics(value, elGetter);
}


/* eslint-enable */
