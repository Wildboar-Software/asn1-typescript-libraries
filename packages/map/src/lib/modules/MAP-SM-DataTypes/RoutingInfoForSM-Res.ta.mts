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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { LocationInfoWithLMSI, _decode_LocationInfoWithLMSI, _encode_LocationInfoWithLMSI } from "../MAP-SM-DataTypes/LocationInfoWithLMSI.ta.mjs";
// export { LocationInfoWithLMSI, _decode_LocationInfoWithLMSI, _encode_LocationInfoWithLMSI } from "../MAP-SM-DataTypes/LocationInfoWithLMSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { IP_SM_GW_Guidance, _decode_IP_SM_GW_Guidance, _encode_IP_SM_GW_Guidance } from "../MAP-SM-DataTypes/IP-SM-GW-Guidance.ta.mjs";
// export { IP_SM_GW_Guidance, _decode_IP_SM_GW_Guidance, _encode_IP_SM_GW_Guidance } from "../MAP-SM-DataTypes/IP-SM-GW-Guidance.ta.mjs";


/**
 * @summary RoutingInfoForSM_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingInfoForSM-Res ::= SEQUENCE {
 *     imsi    IMSI,
 *     locationInfoWithLMSI    [0] LocationInfoWithLMSI,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ...,
 *     ip-sm-gwGuidance    [5] IP-SM-GW-Guidance    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RoutingInfoForSM_Res {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `locationInfoWithLMSI`.
         * @public
         * @readonly
         */
        readonly locationInfoWithLMSI: LocationInfoWithLMSI,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `ip_sm_gwGuidance`.
         * @public
         * @readonly
         */
        readonly ip_sm_gwGuidance: OPTIONAL<IP_SM_GW_Guidance>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoutingInfoForSM_Res
     * @description
     * 
     * This takes an `object` and converts it to a `RoutingInfoForSM_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoutingInfoForSM_Res`.
     * @returns {RoutingInfoForSM_Res}
     */
    public static _from_object (_o: { [_K in keyof (RoutingInfoForSM_Res)]: (RoutingInfoForSM_Res)[_K] }): RoutingInfoForSM_Res {
        return new RoutingInfoForSM_Res(_o.imsi, _o.locationInfoWithLMSI, _o.extensionContainer, _o.ip_sm_gwGuidance, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RoutingInfoForSM_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoutingInfoForSM_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("locationInfoWithLMSI", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RoutingInfoForSM_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoutingInfoForSM_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoutingInfoForSM_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoutingInfoForSM_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("ip-sm-gwGuidance", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

let _cached_decoder_for_RoutingInfoForSM_Res: $.ASN1Decoder<RoutingInfoForSM_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingInfoForSM_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingInfoForSM_Res (el: _Element): RoutingInfoForSM_Res {
    if (!_cached_decoder_for_RoutingInfoForSM_Res) { _cached_decoder_for_RoutingInfoForSM_Res = function (el: _Element): RoutingInfoForSM_Res {
    let imsi!: IMSI;
    let locationInfoWithLMSI!: LocationInfoWithLMSI;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let ip_sm_gwGuidance: OPTIONAL<IP_SM_GW_Guidance>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "locationInfoWithLMSI": (_el: _Element): void => { locationInfoWithLMSI = $._decode_implicit<LocationInfoWithLMSI>(() => _decode_LocationInfoWithLMSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "ip-sm-gwGuidance": (_el: _Element): void => { ip_sm_gwGuidance = $._decode_implicit<IP_SM_GW_Guidance>(() => _decode_IP_SM_GW_Guidance)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoutingInfoForSM_Res,
        _extension_additions_list_spec_for_RoutingInfoForSM_Res,
        _root_component_type_list_2_spec_for_RoutingInfoForSM_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoutingInfoForSM_Res(
        imsi,
        locationInfoWithLMSI,
        extensionContainer,
        ip_sm_gwGuidance,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RoutingInfoForSM_Res(el);
}

let _cached_encoder_for_RoutingInfoForSM_Res: $.ASN1Encoder<RoutingInfoForSM_Res> | null = null;

/**
 * @summary Encodes a(n) RoutingInfoForSM_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingInfoForSM_Res, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingInfoForSM_Res (value: RoutingInfoForSM_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingInfoForSM_Res) { _cached_encoder_for_RoutingInfoForSM_Res = function (value: RoutingInfoForSM_Res, elGetter: $.ASN1Encoder<RoutingInfoForSM_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_LocationInfoWithLMSI, $.BER)(value.locationInfoWithLMSI, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.ip_sm_gwGuidance === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_IP_SM_GW_Guidance, $.BER)(value.ip_sm_gwGuidance, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RoutingInfoForSM_Res(value, elGetter);
}


/* eslint-enable */
