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
import { GPRS_CSI, _decode_GPRS_CSI, _encode_GPRS_CSI } from "../MAP-MS-DataTypes/GPRS-CSI.ta.mjs";
import { SMS_CSI, _decode_SMS_CSI, _encode_SMS_CSI } from "../MAP-MS-DataTypes/SMS-CSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { MT_smsCAMELTDP_CriteriaList, _decode_MT_smsCAMELTDP_CriteriaList, _encode_MT_smsCAMELTDP_CriteriaList } from "../MAP-MS-DataTypes/MT-smsCAMELTDP-CriteriaList.ta.mjs";
import { MG_CSI, _decode_MG_CSI, _encode_MG_CSI } from "../MAP-MS-DataTypes/MG-CSI.ta.mjs";


/**
 * @summary SGSN_CAMEL_SubscriptionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSN-CAMEL-SubscriptionInfo ::= SEQUENCE {
 *     gprs-CSI    [0]    GPRS-CSI    OPTIONAL,
 *     mo-sms-CSI    [1]    SMS-CSI    OPTIONAL,
 *     extensionContainer    [2]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     mt-sms-CSI    [3]    SMS-CSI    OPTIONAL,
 *     mt-smsCAMELTDP-CriteriaList    [4]    MT-smsCAMELTDP-CriteriaList    OPTIONAL,
 *     mg-csi    [5]    MG-CSI    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SGSN_CAMEL_SubscriptionInfo {
    constructor (
        /**
         * @summary `gprs_CSI`.
         * @public
         * @readonly
         */
        readonly gprs_CSI: OPTIONAL<GPRS_CSI>,
        /**
         * @summary `mo_sms_CSI`.
         * @public
         * @readonly
         */
        readonly mo_sms_CSI: OPTIONAL<SMS_CSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `mt_sms_CSI`.
         * @public
         * @readonly
         */
        readonly mt_sms_CSI: OPTIONAL<SMS_CSI>,
        /**
         * @summary `mt_smsCAMELTDP_CriteriaList`.
         * @public
         * @readonly
         */
        readonly mt_smsCAMELTDP_CriteriaList: OPTIONAL<MT_smsCAMELTDP_CriteriaList>,
        /**
         * @summary `mg_csi`.
         * @public
         * @readonly
         */
        readonly mg_csi: OPTIONAL<MG_CSI>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SGSN_CAMEL_SubscriptionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SGSN_CAMEL_SubscriptionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSN_CAMEL_SubscriptionInfo`.
     * @returns {SGSN_CAMEL_SubscriptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (SGSN_CAMEL_SubscriptionInfo)]: (SGSN_CAMEL_SubscriptionInfo)[_K] }): SGSN_CAMEL_SubscriptionInfo {
        return new SGSN_CAMEL_SubscriptionInfo(_o.gprs_CSI, _o.mo_sms_CSI, _o.extensionContainer, _o.mt_sms_CSI, _o.mt_smsCAMELTDP_CriteriaList, _o.mg_csi, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SGSN_CAMEL_SubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSN_CAMEL_SubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("gprs-CSI", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mo-sms-CSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SGSN_CAMEL_SubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSN_CAMEL_SubscriptionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSN_CAMEL_SubscriptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSN_CAMEL_SubscriptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("mt-sms-CSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mt-smsCAMELTDP-CriteriaList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mg-csi", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_SGSN_CAMEL_SubscriptionInfo: $.ASN1Decoder<SGSN_CAMEL_SubscriptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSN_CAMEL_SubscriptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSN_CAMEL_SubscriptionInfo (el: _Element): SGSN_CAMEL_SubscriptionInfo {
    if (!_cached_decoder_for_SGSN_CAMEL_SubscriptionInfo) { _cached_decoder_for_SGSN_CAMEL_SubscriptionInfo = function (el: _Element): SGSN_CAMEL_SubscriptionInfo {
    let gprs_CSI: OPTIONAL<GPRS_CSI> = undefined;
    let mo_sms_CSI: OPTIONAL<SMS_CSI> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let mt_sms_CSI: OPTIONAL<SMS_CSI> = undefined;
    let mt_smsCAMELTDP_CriteriaList: OPTIONAL<MT_smsCAMELTDP_CriteriaList> = undefined;
    let mg_csi: OPTIONAL<MG_CSI> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gprs-CSI": (_el: _Element): void => { gprs_CSI = $._decode_implicit<GPRS_CSI>(() => _decode_GPRS_CSI)(_el); },
        "mo-sms-CSI": (_el: _Element): void => { mo_sms_CSI = $._decode_implicit<SMS_CSI>(() => _decode_SMS_CSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "mt-sms-CSI": (_el: _Element): void => { mt_sms_CSI = $._decode_implicit<SMS_CSI>(() => _decode_SMS_CSI)(_el); },
        "mt-smsCAMELTDP-CriteriaList": (_el: _Element): void => { mt_smsCAMELTDP_CriteriaList = $._decode_implicit<MT_smsCAMELTDP_CriteriaList>(() => _decode_MT_smsCAMELTDP_CriteriaList)(_el); },
        "mg-csi": (_el: _Element): void => { mg_csi = $._decode_implicit<MG_CSI>(() => _decode_MG_CSI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SGSN_CAMEL_SubscriptionInfo,
        _extension_additions_list_spec_for_SGSN_CAMEL_SubscriptionInfo,
        _root_component_type_list_2_spec_for_SGSN_CAMEL_SubscriptionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SGSN_CAMEL_SubscriptionInfo(
        gprs_CSI,
        mo_sms_CSI,
        extensionContainer,
        mt_sms_CSI,
        mt_smsCAMELTDP_CriteriaList,
        mg_csi,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SGSN_CAMEL_SubscriptionInfo(el);
}

let _cached_encoder_for_SGSN_CAMEL_SubscriptionInfo: $.ASN1Encoder<SGSN_CAMEL_SubscriptionInfo> | null = null;

/**
 * @summary Encodes a(n) SGSN_CAMEL_SubscriptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSN_CAMEL_SubscriptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SGSN_CAMEL_SubscriptionInfo (value: SGSN_CAMEL_SubscriptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSN_CAMEL_SubscriptionInfo) { _cached_encoder_for_SGSN_CAMEL_SubscriptionInfo = function (value: SGSN_CAMEL_SubscriptionInfo, elGetter: $.ASN1Encoder<SGSN_CAMEL_SubscriptionInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.gprs_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GPRS_CSI, $.BER)(value.gprs_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.mo_sms_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SMS_CSI, $.BER)(value.mo_sms_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.mt_sms_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SMS_CSI, $.BER)(value.mt_sms_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.mt_smsCAMELTDP_CriteriaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MT_smsCAMELTDP_CriteriaList, $.BER)(value.mt_smsCAMELTDP_CriteriaList, $.BER)),
            /* IF_ABSENT  */ ((value.mg_csi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MG_CSI, $.BER)(value.mg_csi, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SGSN_CAMEL_SubscriptionInfo(value, elGetter);
}


/* eslint-enable */
