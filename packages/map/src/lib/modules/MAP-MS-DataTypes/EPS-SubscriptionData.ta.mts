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
import { APN_OI_Replacement, _decode_APN_OI_Replacement, _encode_APN_OI_Replacement } from "../MAP-MS-DataTypes/APN-OI-Replacement.ta.mjs";
import { RFSP_ID, _decode_RFSP_ID, _encode_RFSP_ID } from "../MAP-MS-DataTypes/RFSP-ID.ta.mjs";
import { AMBR, _decode_AMBR, _encode_AMBR } from "../MAP-MS-DataTypes/AMBR.ta.mjs";
import { APN_ConfigurationProfile, _decode_APN_ConfigurationProfile, _encode_APN_ConfigurationProfile } from "../MAP-MS-DataTypes/APN-ConfigurationProfile.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary EPS_SubscriptionData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-SubscriptionData ::= SEQUENCE {
 *     apn-oi-Replacement    [0]    APN-OI-Replacement    OPTIONAL,
 *     -- this apn-oi-Replacement refers to the UE level apn-oi-Replacement.
 *     rfsp-id    [2]    RFSP-ID    OPTIONAL,
 *     ambr    [3]    AMBR    OPTIONAL,
 *     apn-ConfigurationProfile    [4]    APN-ConfigurationProfile    OPTIONAL,
 *     stn-sr    [6]    ISDN-AddressString    OPTIONAL,
 *     extensionContainer    [5]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     mps-CSPriority    [7]    NULL    OPTIONAL,
 *     mps-EPSPriority    [8]    NULL    OPTIONAL,
 *     subscribed-vsrvcc    [9]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class EPS_SubscriptionData {
    constructor (
        /**
         * @summary `apn_oi_Replacement`.
         * @public
         * @readonly
         */
        readonly apn_oi_Replacement: OPTIONAL<APN_OI_Replacement>,
        /**
         * @summary `rfsp_id`.
         * @public
         * @readonly
         */
        readonly rfsp_id: OPTIONAL<RFSP_ID>,
        /**
         * @summary `ambr`.
         * @public
         * @readonly
         */
        readonly ambr: OPTIONAL<AMBR>,
        /**
         * @summary `apn_ConfigurationProfile`.
         * @public
         * @readonly
         */
        readonly apn_ConfigurationProfile: OPTIONAL<APN_ConfigurationProfile>,
        /**
         * @summary `stn_sr`.
         * @public
         * @readonly
         */
        readonly stn_sr: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `mps_CSPriority`.
         * @public
         * @readonly
         */
        readonly mps_CSPriority: OPTIONAL<NULL>,
        /**
         * @summary `mps_EPSPriority`.
         * @public
         * @readonly
         */
        readonly mps_EPSPriority: OPTIONAL<NULL>,
        /**
         * @summary `subscribed_vsrvcc`.
         * @public
         * @readonly
         */
        readonly subscribed_vsrvcc: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EPS_SubscriptionData
     * @description
     * 
     * This takes an `object` and converts it to a `EPS_SubscriptionData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPS_SubscriptionData`.
     * @returns {EPS_SubscriptionData}
     */
    public static _from_object (_o: { [_K in keyof (EPS_SubscriptionData)]: (EPS_SubscriptionData)[_K] }): EPS_SubscriptionData {
        return new EPS_SubscriptionData(_o.apn_oi_Replacement, _o.rfsp_id, _o.ambr, _o.apn_ConfigurationProfile, _o.stn_sr, _o.extensionContainer, _o.mps_CSPriority, _o.mps_EPSPriority, _o.subscribed_vsrvcc, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPS_SubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPS_SubscriptionData: $.ComponentSpec[] = [
    new $.ComponentSpec("apn-oi-Replacement", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rfsp-id", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ambr", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("apn-ConfigurationProfile", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("stn-sr", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EPS_SubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPS_SubscriptionData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPS_SubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPS_SubscriptionData: $.ComponentSpec[] = [
    new $.ComponentSpec("mps-CSPriority", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mps-EPSPriority", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("subscribed-vsrvcc", true, $.hasTag(_TagClass.context, 9))
];

let _cached_decoder_for_EPS_SubscriptionData: $.ASN1Decoder<EPS_SubscriptionData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_SubscriptionData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_SubscriptionData (el: _Element): EPS_SubscriptionData {
    if (!_cached_decoder_for_EPS_SubscriptionData) { _cached_decoder_for_EPS_SubscriptionData = function (el: _Element): EPS_SubscriptionData {
    let apn_oi_Replacement: OPTIONAL<APN_OI_Replacement> = undefined;
    let rfsp_id: OPTIONAL<RFSP_ID> = undefined;
    let ambr: OPTIONAL<AMBR> = undefined;
    let apn_ConfigurationProfile: OPTIONAL<APN_ConfigurationProfile> = undefined;
    let stn_sr: OPTIONAL<ISDN_AddressString> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let mps_CSPriority: OPTIONAL<NULL> = undefined;
    let mps_EPSPriority: OPTIONAL<NULL> = undefined;
    let subscribed_vsrvcc: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "apn-oi-Replacement": (_el: _Element): void => { apn_oi_Replacement = $._decode_implicit<APN_OI_Replacement>(() => _decode_APN_OI_Replacement)(_el); },
        "rfsp-id": (_el: _Element): void => { rfsp_id = $._decode_implicit<RFSP_ID>(() => _decode_RFSP_ID)(_el); },
        "ambr": (_el: _Element): void => { ambr = $._decode_implicit<AMBR>(() => _decode_AMBR)(_el); },
        "apn-ConfigurationProfile": (_el: _Element): void => { apn_ConfigurationProfile = $._decode_implicit<APN_ConfigurationProfile>(() => _decode_APN_ConfigurationProfile)(_el); },
        "stn-sr": (_el: _Element): void => { stn_sr = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "mps-CSPriority": (_el: _Element): void => { mps_CSPriority = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "mps-EPSPriority": (_el: _Element): void => { mps_EPSPriority = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "subscribed-vsrvcc": (_el: _Element): void => { subscribed_vsrvcc = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPS_SubscriptionData,
        _extension_additions_list_spec_for_EPS_SubscriptionData,
        _root_component_type_list_2_spec_for_EPS_SubscriptionData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPS_SubscriptionData(
        apn_oi_Replacement,
        rfsp_id,
        ambr,
        apn_ConfigurationProfile,
        stn_sr,
        extensionContainer,
        mps_CSPriority,
        mps_EPSPriority,
        subscribed_vsrvcc,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPS_SubscriptionData(el);
}

let _cached_encoder_for_EPS_SubscriptionData: $.ASN1Encoder<EPS_SubscriptionData> | null = null;

/**
 * @summary Encodes a(n) EPS_SubscriptionData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_SubscriptionData, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_SubscriptionData (value: EPS_SubscriptionData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_SubscriptionData) { _cached_encoder_for_EPS_SubscriptionData = function (value: EPS_SubscriptionData, elGetter: $.ASN1Encoder<EPS_SubscriptionData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.apn_oi_Replacement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_APN_OI_Replacement, $.BER)(value.apn_oi_Replacement, $.BER)),
            /* IF_ABSENT  */ ((value.rfsp_id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RFSP_ID, $.BER)(value.rfsp_id, $.BER)),
            /* IF_ABSENT  */ ((value.ambr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AMBR, $.BER)(value.ambr, $.BER)),
            /* IF_ABSENT  */ ((value.apn_ConfigurationProfile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_APN_ConfigurationProfile, $.BER)(value.apn_ConfigurationProfile, $.BER)),
            /* IF_ABSENT  */ ((value.stn_sr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ISDN_AddressString, $.BER)(value.stn_sr, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.mps_CSPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.mps_CSPriority, $.BER)),
            /* IF_ABSENT  */ ((value.mps_EPSPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.mps_EPSPriority, $.BER)),
            /* IF_ABSENT  */ ((value.subscribed_vsrvcc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.subscribed_vsrvcc, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPS_SubscriptionData(value, elGetter);
}


/* eslint-enable */
