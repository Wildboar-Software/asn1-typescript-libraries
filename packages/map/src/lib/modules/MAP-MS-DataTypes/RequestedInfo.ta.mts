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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { DomainType, _enum_for_DomainType, DomainType_cs_Domain /* IMPORTED_LONG_ENUMERATION_ITEM */, cs_Domain /* IMPORTED_SHORT_ENUMERATION_ITEM */, DomainType_ps_Domain /* IMPORTED_LONG_ENUMERATION_ITEM */, ps_Domain /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DomainType, _encode_DomainType } from "../MAP-MS-DataTypes/DomainType.ta.mjs";
// export { DomainType, _enum_for_DomainType, DomainType_cs_Domain /* IMPORTED_LONG_ENUMERATION_ITEM */, cs_Domain /* IMPORTED_SHORT_ENUMERATION_ITEM */, DomainType_ps_Domain /* IMPORTED_LONG_ENUMERATION_ITEM */, ps_Domain /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DomainType, _encode_DomainType } from "../MAP-MS-DataTypes/DomainType.ta.mjs";
import { RequestedNodes, RequestedNodes_mme /* IMPORTED_LONG_NAMED_BIT */, mme /* IMPORTED_SHORT_NAMED_BIT */, RequestedNodes_sgsn /* IMPORTED_LONG_NAMED_BIT */, sgsn /* IMPORTED_SHORT_NAMED_BIT */, _decode_RequestedNodes, _encode_RequestedNodes } from "../MAP-MS-DataTypes/RequestedNodes.ta.mjs";
// export { RequestedNodes, RequestedNodes_mme /* IMPORTED_LONG_NAMED_BIT */, mme /* IMPORTED_SHORT_NAMED_BIT */, RequestedNodes_sgsn /* IMPORTED_LONG_NAMED_BIT */, sgsn /* IMPORTED_SHORT_NAMED_BIT */, _decode_RequestedNodes, _encode_RequestedNodes } from "../MAP-MS-DataTypes/RequestedNodes.ta.mjs";


/**
 * @summary RequestedInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInfo ::= SEQUENCE {
 *     locationInformation    [0] NULL    OPTIONAL,
 *     subscriberState    [1] NULL    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ..., 
 *     currentLocation    [3] NULL    OPTIONAL,
 *     requestedDomain    [4] DomainType    OPTIONAL,
 *     imei    [6] NULL    OPTIONAL,
 *     ms-classmark    [5] NULL    OPTIONAL,
 *     mnpRequestedInfo    [7] NULL    OPTIONAL,
 *     locationInformationEPS-Supported    [11] NULL    OPTIONAL,
 *     t-adsData    [8] NULL    OPTIONAL,
 *     requestedNodes    [9] RequestedNodes    OPTIONAL,
 *     servingNodeIndication    [10] NULL    OPTIONAL,
 *     localTimeZoneRequest    [12] NULL    OPTIONAL
 *  }
 * ```
 * 
 * @class
 */
export
class RequestedInfo {
    constructor (
        /**
         * @summary `locationInformation`.
         * @public
         * @readonly
         */
        readonly locationInformation: OPTIONAL<NULL>,
        /**
         * @summary `subscriberState`.
         * @public
         * @readonly
         */
        readonly subscriberState: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `currentLocation`.
         * @public
         * @readonly
         */
        readonly currentLocation: OPTIONAL<NULL>,
        /**
         * @summary `requestedDomain`.
         * @public
         * @readonly
         */
        readonly requestedDomain: OPTIONAL<DomainType>,
        /**
         * @summary `imei`.
         * @public
         * @readonly
         */
        readonly imei: OPTIONAL<NULL>,
        /**
         * @summary `ms_classmark`.
         * @public
         * @readonly
         */
        readonly ms_classmark: OPTIONAL<NULL>,
        /**
         * @summary `mnpRequestedInfo`.
         * @public
         * @readonly
         */
        readonly mnpRequestedInfo: OPTIONAL<NULL>,
        /**
         * @summary `locationInformationEPS_Supported`.
         * @public
         * @readonly
         */
        readonly locationInformationEPS_Supported: OPTIONAL<NULL>,
        /**
         * @summary `t_adsData`.
         * @public
         * @readonly
         */
        readonly t_adsData: OPTIONAL<NULL>,
        /**
         * @summary `requestedNodes`.
         * @public
         * @readonly
         */
        readonly requestedNodes: OPTIONAL<RequestedNodes>,
        /**
         * @summary `servingNodeIndication`.
         * @public
         * @readonly
         */
        readonly servingNodeIndication: OPTIONAL<NULL>,
        /**
         * @summary `localTimeZoneRequest`.
         * @public
         * @readonly
         */
        readonly localTimeZoneRequest: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestedInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RequestedInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestedInfo`.
     * @returns {RequestedInfo}
     */
    public static _from_object (_o: { [_K in keyof (RequestedInfo)]: (RequestedInfo)[_K] }): RequestedInfo {
        return new RequestedInfo(_o.locationInformation, _o.subscriberState, _o.extensionContainer, _o.currentLocation, _o.requestedDomain, _o.imei, _o.ms_classmark, _o.mnpRequestedInfo, _o.locationInformationEPS_Supported, _o.t_adsData, _o.requestedNodes, _o.servingNodeIndication, _o.localTimeZoneRequest, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `requestedDomain`
         * @public
         * @static
         */

    public static _enum_for_requestedDomain = _enum_for_DomainType;
}

/**
 * @summary The Leading Root Component Types of RequestedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("subscriberState", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RequestedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestedInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("currentLocation", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("requestedDomain", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("ms-classmark", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("mnpRequestedInfo", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("locationInformationEPS-Supported", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("t-adsData", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("requestedNodes", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("servingNodeIndication", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("localTimeZoneRequest", true, $.hasTag(_TagClass.context, 12), undefined, undefined)
];

let _cached_decoder_for_RequestedInfo: $.ASN1Decoder<RequestedInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedInfo (el: _Element): RequestedInfo {
    if (!_cached_decoder_for_RequestedInfo) { _cached_decoder_for_RequestedInfo = function (el: _Element): RequestedInfo {
    let locationInformation: OPTIONAL<NULL>;
    let subscriberState: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let currentLocation: OPTIONAL<NULL>;
    let requestedDomain: OPTIONAL<DomainType>;
    let imei: OPTIONAL<NULL>;
    let ms_classmark: OPTIONAL<NULL>;
    let mnpRequestedInfo: OPTIONAL<NULL>;
    let locationInformationEPS_Supported: OPTIONAL<NULL>;
    let t_adsData: OPTIONAL<NULL>;
    let requestedNodes: OPTIONAL<RequestedNodes>;
    let servingNodeIndication: OPTIONAL<NULL>;
    let localTimeZoneRequest: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "subscriberState": (_el: _Element): void => { subscriberState = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "currentLocation": (_el: _Element): void => { currentLocation = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "requestedDomain": (_el: _Element): void => { requestedDomain = $._decode_implicit<DomainType>(() => _decode_DomainType)(_el); },
        "imei": (_el: _Element): void => { imei = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ms-classmark": (_el: _Element): void => { ms_classmark = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "mnpRequestedInfo": (_el: _Element): void => { mnpRequestedInfo = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "locationInformationEPS-Supported": (_el: _Element): void => { locationInformationEPS_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "t-adsData": (_el: _Element): void => { t_adsData = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "requestedNodes": (_el: _Element): void => { requestedNodes = $._decode_implicit<RequestedNodes>(() => _decode_RequestedNodes)(_el); },
        "servingNodeIndication": (_el: _Element): void => { servingNodeIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "localTimeZoneRequest": (_el: _Element): void => { localTimeZoneRequest = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestedInfo,
        _extension_additions_list_spec_for_RequestedInfo,
        _root_component_type_list_2_spec_for_RequestedInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestedInfo(
        locationInformation,
        subscriberState,
        extensionContainer,
        currentLocation,
        requestedDomain,
        imei,
        ms_classmark,
        mnpRequestedInfo,
        locationInformationEPS_Supported,
        t_adsData,
        requestedNodes,
        servingNodeIndication,
        localTimeZoneRequest,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestedInfo(el);
}

let _cached_encoder_for_RequestedInfo: $.ASN1Encoder<RequestedInfo> | null = null;

/**
 * @summary Encodes a(n) RequestedInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedInfo (value: RequestedInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedInfo) { _cached_encoder_for_RequestedInfo = function (value: RequestedInfo, elGetter: $.ASN1Encoder<RequestedInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.locationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.subscriberState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.subscriberState, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.currentLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.currentLocation, $.BER)),
            /* IF_ABSENT  */ ((value.requestedDomain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_DomainType, $.BER)(value.requestedDomain, $.BER)),
            /* IF_ABSENT  */ ((value.imei === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.imei, $.BER)),
            /* IF_ABSENT  */ ((value.ms_classmark === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.ms_classmark, $.BER)),
            /* IF_ABSENT  */ ((value.mnpRequestedInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.mnpRequestedInfo, $.BER)),
            /* IF_ABSENT  */ ((value.locationInformationEPS_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.locationInformationEPS_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.t_adsData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.t_adsData, $.BER)),
            /* IF_ABSENT  */ ((value.requestedNodes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_RequestedNodes, $.BER)(value.requestedNodes, $.BER)),
            /* IF_ABSENT  */ ((value.servingNodeIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.servingNodeIndication, $.BER)),
            /* IF_ABSENT  */ ((value.localTimeZoneRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.localTimeZoneRequest, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestedInfo(value, elGetter);
}


/* eslint-enable */
