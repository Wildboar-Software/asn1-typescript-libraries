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
import { SM_RP_DA, _decode_SM_RP_DA, _encode_SM_RP_DA } from "../MAP-SM-DataTypes/SM-RP-DA.ta.mjs";
import { SM_RP_OA, _decode_SM_RP_OA, _encode_SM_RP_OA } from "../MAP-SM-DataTypes/SM-RP-OA.ta.mjs";
import { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { SM_DeliveryTimerValue, _decode_SM_DeliveryTimerValue, _encode_SM_DeliveryTimerValue } from "../MAP-SM-DataTypes/SM-DeliveryTimerValue.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../MAP-SM-DataTypes/CorrelationID.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";


/**
 * @summary MT_ForwardSM_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MT-ForwardSM-Arg ::= SEQUENCE {
 *     sm-RP-DA    SM-RP-DA,
 *     sm-RP-OA    SM-RP-OA,
 *     sm-RP-UI    SignalInfo,
 *     moreMessagesToSend    NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     smDeliveryTimer    SM-DeliveryTimerValue    OPTIONAL,
 *     smDeliveryStartTime    Time    OPTIONAL,
 *     smsOverIP-OnlyIndicator    [0] NULL    OPTIONAL,
 *     correlationID    [1] CorrelationID    OPTIONAL,
 *     maximumRetransmissionTime    [2] Time    OPTIONAL,
 *     smsGmscAddress    [3] ISDN-AddressString    OPTIONAL,
 *     smsGmscDiameterAddress    [4] NetworkNodeDiameterAddress    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MT_ForwardSM_Arg {
    constructor (
        /**
         * @summary `sm_RP_DA`.
         * @public
         * @readonly
         */
        readonly sm_RP_DA: SM_RP_DA,
        /**
         * @summary `sm_RP_OA`.
         * @public
         * @readonly
         */
        readonly sm_RP_OA: SM_RP_OA,
        /**
         * @summary `sm_RP_UI`.
         * @public
         * @readonly
         */
        readonly sm_RP_UI: SignalInfo,
        /**
         * @summary `moreMessagesToSend`.
         * @public
         * @readonly
         */
        readonly moreMessagesToSend: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `smDeliveryTimer`.
         * @public
         * @readonly
         */
        readonly smDeliveryTimer: OPTIONAL<SM_DeliveryTimerValue>,
        /**
         * @summary `smDeliveryStartTime`.
         * @public
         * @readonly
         */
        readonly smDeliveryStartTime: OPTIONAL<Time>,
        /**
         * @summary `smsOverIP_OnlyIndicator`.
         * @public
         * @readonly
         */
        readonly smsOverIP_OnlyIndicator: OPTIONAL<NULL>,
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `maximumRetransmissionTime`.
         * @public
         * @readonly
         */
        readonly maximumRetransmissionTime: OPTIONAL<Time>,
        /**
         * @summary `smsGmscAddress`.
         * @public
         * @readonly
         */
        readonly smsGmscAddress: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `smsGmscDiameterAddress`.
         * @public
         * @readonly
         */
        readonly smsGmscDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MT_ForwardSM_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `MT_ForwardSM_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MT_ForwardSM_Arg`.
     * @returns {MT_ForwardSM_Arg}
     */
    public static _from_object (_o: { [_K in keyof (MT_ForwardSM_Arg)]: (MT_ForwardSM_Arg)[_K] }): MT_ForwardSM_Arg {
        return new MT_ForwardSM_Arg(_o.sm_RP_DA, _o.sm_RP_OA, _o.sm_RP_UI, _o.moreMessagesToSend, _o.extensionContainer, _o.smDeliveryTimer, _o.smDeliveryStartTime, _o.smsOverIP_OnlyIndicator, _o.correlationID, _o.maximumRetransmissionTime, _o.smsGmscAddress, _o.smsGmscDiameterAddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MT_ForwardSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MT_ForwardSM_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("sm-RP-DA", false, $.hasAnyTag),
    new $.ComponentSpec("sm-RP-OA", false, $.hasAnyTag),
    new $.ComponentSpec("sm-RP-UI", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("moreMessagesToSend", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of MT_ForwardSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MT_ForwardSM_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MT_ForwardSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MT_ForwardSM_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("smDeliveryTimer", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("smDeliveryStartTime", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("smsOverIP-OnlyIndicator", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maximumRetransmissionTime", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("smsGmscAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("smsGmscDiameterAddress", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_MT_ForwardSM_Arg: $.ASN1Decoder<MT_ForwardSM_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MT_ForwardSM_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MT_ForwardSM_Arg (el: _Element): MT_ForwardSM_Arg {
    if (!_cached_decoder_for_MT_ForwardSM_Arg) { _cached_decoder_for_MT_ForwardSM_Arg = function (el: _Element): MT_ForwardSM_Arg {
    let sm_RP_DA!: SM_RP_DA;
    let sm_RP_OA!: SM_RP_OA;
    let sm_RP_UI!: SignalInfo;
    let moreMessagesToSend: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let smDeliveryTimer: OPTIONAL<SM_DeliveryTimerValue> = undefined;
    let smDeliveryStartTime: OPTIONAL<Time> = undefined;
    let smsOverIP_OnlyIndicator: OPTIONAL<NULL> = undefined;
    let correlationID: OPTIONAL<CorrelationID> = undefined;
    let maximumRetransmissionTime: OPTIONAL<Time> = undefined;
    let smsGmscAddress: OPTIONAL<ISDN_AddressString> = undefined;
    let smsGmscDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sm-RP-DA": (_el: _Element): void => { sm_RP_DA = _decode_SM_RP_DA(_el); },
        "sm-RP-OA": (_el: _Element): void => { sm_RP_OA = _decode_SM_RP_OA(_el); },
        "sm-RP-UI": (_el: _Element): void => { sm_RP_UI = _decode_SignalInfo(_el); },
        "moreMessagesToSend": (_el: _Element): void => { moreMessagesToSend = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "smDeliveryTimer": (_el: _Element): void => { smDeliveryTimer = _decode_SM_DeliveryTimerValue(_el); },
        "smDeliveryStartTime": (_el: _Element): void => { smDeliveryStartTime = _decode_Time(_el); },
        "smsOverIP-OnlyIndicator": (_el: _Element): void => { smsOverIP_OnlyIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "maximumRetransmissionTime": (_el: _Element): void => { maximumRetransmissionTime = $._decode_implicit<Time>(() => _decode_Time)(_el); },
        "smsGmscAddress": (_el: _Element): void => { smsGmscAddress = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "smsGmscDiameterAddress": (_el: _Element): void => { smsGmscDiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MT_ForwardSM_Arg,
        _extension_additions_list_spec_for_MT_ForwardSM_Arg,
        _root_component_type_list_2_spec_for_MT_ForwardSM_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MT_ForwardSM_Arg(
        sm_RP_DA,
        sm_RP_OA,
        sm_RP_UI,
        moreMessagesToSend,
        extensionContainer,
        smDeliveryTimer,
        smDeliveryStartTime,
        smsOverIP_OnlyIndicator,
        correlationID,
        maximumRetransmissionTime,
        smsGmscAddress,
        smsGmscDiameterAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MT_ForwardSM_Arg(el);
}

let _cached_encoder_for_MT_ForwardSM_Arg: $.ASN1Encoder<MT_ForwardSM_Arg> | null = null;

/**
 * @summary Encodes a(n) MT_ForwardSM_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MT_ForwardSM_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_MT_ForwardSM_Arg (value: MT_ForwardSM_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MT_ForwardSM_Arg) { _cached_encoder_for_MT_ForwardSM_Arg = function (value: MT_ForwardSM_Arg, elGetter: $.ASN1Encoder<MT_ForwardSM_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SM_RP_DA(value.sm_RP_DA, $.BER),
            /* REQUIRED   */ _encode_SM_RP_OA(value.sm_RP_OA, $.BER),
            /* REQUIRED   */ _encode_SignalInfo(value.sm_RP_UI, $.BER),
            /* IF_ABSENT  */ ((value.moreMessagesToSend === undefined) ? undefined : $._encodeNull(value.moreMessagesToSend, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.smDeliveryTimer === undefined) ? undefined : _encode_SM_DeliveryTimerValue(value.smDeliveryTimer, $.BER)),
            /* IF_ABSENT  */ ((value.smDeliveryStartTime === undefined) ? undefined : _encode_Time(value.smDeliveryStartTime, $.BER)),
            /* IF_ABSENT  */ ((value.smsOverIP_OnlyIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.smsOverIP_OnlyIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.maximumRetransmissionTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Time, $.BER)(value.maximumRetransmissionTime, $.BER)),
            /* IF_ABSENT  */ ((value.smsGmscAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.smsGmscAddress, $.BER)),
            /* IF_ABSENT  */ ((value.smsGmscDiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.smsGmscDiameterAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MT_ForwardSM_Arg(value, elGetter);
}


/* eslint-enable */
