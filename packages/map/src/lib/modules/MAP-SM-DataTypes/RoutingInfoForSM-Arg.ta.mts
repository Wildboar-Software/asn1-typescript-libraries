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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
// export { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { SM_RP_MTI, _decode_SM_RP_MTI, _encode_SM_RP_MTI } from "../MAP-SM-DataTypes/SM-RP-MTI.ta.mjs";
// export { SM_RP_MTI, _decode_SM_RP_MTI, _encode_SM_RP_MTI } from "../MAP-SM-DataTypes/SM-RP-MTI.ta.mjs";
import { SM_RP_SMEA, _decode_SM_RP_SMEA, _encode_SM_RP_SMEA } from "../MAP-SM-DataTypes/SM-RP-SMEA.ta.mjs";
// export { SM_RP_SMEA, _decode_SM_RP_SMEA, _encode_SM_RP_SMEA } from "../MAP-SM-DataTypes/SM-RP-SMEA.ta.mjs";
import { SM_DeliveryNotIntended, _enum_for_SM_DeliveryNotIntended, SM_DeliveryNotIntended_onlyIMSI_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, onlyIMSI_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryNotIntended_onlyMCC_MNC_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, onlyMCC_MNC_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SM_DeliveryNotIntended, _encode_SM_DeliveryNotIntended } from "../MAP-SM-DataTypes/SM-DeliveryNotIntended.ta.mjs";
// export { SM_DeliveryNotIntended, _enum_for_SM_DeliveryNotIntended, SM_DeliveryNotIntended_onlyIMSI_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, onlyIMSI_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryNotIntended_onlyMCC_MNC_requested /* IMPORTED_LONG_ENUMERATION_ITEM */, onlyMCC_MNC_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SM_DeliveryNotIntended, _encode_SM_DeliveryNotIntended } from "../MAP-SM-DataTypes/SM-DeliveryNotIntended.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../MAP-SM-DataTypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../MAP-SM-DataTypes/CorrelationID.ta.mjs";


/**
 * @summary RoutingInfoForSM_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingInfoForSM-Arg ::= SEQUENCE {
 *     msisdn    [0] ISDN-AddressString,
 *     sm-RP-PRI    [1] BOOLEAN,
 *     serviceCentreAddress    [2] AddressString,
 *     extensionContainer    [6] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     gprsSupportIndicator    [7]    NULL    OPTIONAL,
 *     -- gprsSupportIndicator is set only if the SMS-GMSC supports
 *     -- receiving of two numbers from the HLR
 *     sm-RP-MTI    [8] SM-RP-MTI    OPTIONAL,
 *     sm-RP-SMEA    [9] SM-RP-SMEA    OPTIONAL,
 *     sm-deliveryNotIntended    [10] SM-DeliveryNotIntended    OPTIONAL,
 *     ip-sm-gwGuidanceIndicator    [11] NULL    OPTIONAL,
 *     imsi    [12] IMSI    OPTIONAL,
 *     t4-Trigger-Indicator    [14] NULL    OPTIONAL,
 *     singleAttemptDelivery    [13]    NULL    OPTIONAL,
 *     correlationID    [15] CorrelationID    OPTIONAL,
 *     smsf-supportIndicator    [16] NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RoutingInfoForSM_Arg {
    constructor (
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: ISDN_AddressString,
        /**
         * @summary `sm_RP_PRI`.
         * @public
         * @readonly
         */
        readonly sm_RP_PRI: BOOLEAN,
        /**
         * @summary `serviceCentreAddress`.
         * @public
         * @readonly
         */
        readonly serviceCentreAddress: AddressString,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `gprsSupportIndicator`.
         * @public
         * @readonly
         */
        readonly gprsSupportIndicator: OPTIONAL<NULL>,
        /**
         * @summary `sm_RP_MTI`.
         * @public
         * @readonly
         */
        readonly sm_RP_MTI: OPTIONAL<SM_RP_MTI>,
        /**
         * @summary `sm_RP_SMEA`.
         * @public
         * @readonly
         */
        readonly sm_RP_SMEA: OPTIONAL<SM_RP_SMEA>,
        /**
         * @summary `sm_deliveryNotIntended`.
         * @public
         * @readonly
         */
        readonly sm_deliveryNotIntended: OPTIONAL<SM_DeliveryNotIntended>,
        /**
         * @summary `ip_sm_gwGuidanceIndicator`.
         * @public
         * @readonly
         */
        readonly ip_sm_gwGuidanceIndicator: OPTIONAL<NULL>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `t4_Trigger_Indicator`.
         * @public
         * @readonly
         */
        readonly t4_Trigger_Indicator: OPTIONAL<NULL>,
        /**
         * @summary `singleAttemptDelivery`.
         * @public
         * @readonly
         */
        readonly singleAttemptDelivery: OPTIONAL<NULL>,
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `smsf_supportIndicator`.
         * @public
         * @readonly
         */
        readonly smsf_supportIndicator: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoutingInfoForSM_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `RoutingInfoForSM_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoutingInfoForSM_Arg`.
     * @returns {RoutingInfoForSM_Arg}
     */
    public static _from_object (_o: { [_K in keyof (RoutingInfoForSM_Arg)]: (RoutingInfoForSM_Arg)[_K] }): RoutingInfoForSM_Arg {
        return new RoutingInfoForSM_Arg(_o.msisdn, _o.sm_RP_PRI, _o.serviceCentreAddress, _o.extensionContainer, _o.gprsSupportIndicator, _o.sm_RP_MTI, _o.sm_RP_SMEA, _o.sm_deliveryNotIntended, _o.ip_sm_gwGuidanceIndicator, _o.imsi, _o.t4_Trigger_Indicator, _o.singleAttemptDelivery, _o.correlationID, _o.smsf_supportIndicator, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sm_deliveryNotIntended`
         * @public
         * @static
         */

    public static _enum_for_sm_deliveryNotIntended = _enum_for_SM_DeliveryNotIntended;
}

/**
 * @summary The Leading Root Component Types of RoutingInfoForSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoutingInfoForSM_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("msisdn", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sm-RP-PRI", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("serviceCentreAddress", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RoutingInfoForSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoutingInfoForSM_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoutingInfoForSM_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoutingInfoForSM_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("gprsSupportIndicator", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("sm-RP-MTI", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("sm-RP-SMEA", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("sm-deliveryNotIntended", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("ip-sm-gwGuidanceIndicator", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("t4-Trigger-Indicator", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("singleAttemptDelivery", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("smsf-supportIndicator", true, $.hasTag(_TagClass.context, 16), undefined, undefined)
];

let _cached_decoder_for_RoutingInfoForSM_Arg: $.ASN1Decoder<RoutingInfoForSM_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingInfoForSM_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingInfoForSM_Arg (el: _Element): RoutingInfoForSM_Arg {
    if (!_cached_decoder_for_RoutingInfoForSM_Arg) { _cached_decoder_for_RoutingInfoForSM_Arg = function (el: _Element): RoutingInfoForSM_Arg {
    let msisdn!: ISDN_AddressString;
    let sm_RP_PRI!: BOOLEAN;
    let serviceCentreAddress!: AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let gprsSupportIndicator: OPTIONAL<NULL>;
    let sm_RP_MTI: OPTIONAL<SM_RP_MTI>;
    let sm_RP_SMEA: OPTIONAL<SM_RP_SMEA>;
    let sm_deliveryNotIntended: OPTIONAL<SM_DeliveryNotIntended>;
    let ip_sm_gwGuidanceIndicator: OPTIONAL<NULL>;
    let imsi: OPTIONAL<IMSI>;
    let t4_Trigger_Indicator: OPTIONAL<NULL>;
    let singleAttemptDelivery: OPTIONAL<NULL>;
    let correlationID: OPTIONAL<CorrelationID>;
    let smsf_supportIndicator: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "sm-RP-PRI": (_el: _Element): void => { sm_RP_PRI = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "serviceCentreAddress": (_el: _Element): void => { serviceCentreAddress = $._decode_implicit<AddressString>(() => _decode_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "gprsSupportIndicator": (_el: _Element): void => { gprsSupportIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sm-RP-MTI": (_el: _Element): void => { sm_RP_MTI = $._decode_implicit<SM_RP_MTI>(() => _decode_SM_RP_MTI)(_el); },
        "sm-RP-SMEA": (_el: _Element): void => { sm_RP_SMEA = $._decode_implicit<SM_RP_SMEA>(() => _decode_SM_RP_SMEA)(_el); },
        "sm-deliveryNotIntended": (_el: _Element): void => { sm_deliveryNotIntended = $._decode_implicit<SM_DeliveryNotIntended>(() => _decode_SM_DeliveryNotIntended)(_el); },
        "ip-sm-gwGuidanceIndicator": (_el: _Element): void => { ip_sm_gwGuidanceIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "t4-Trigger-Indicator": (_el: _Element): void => { t4_Trigger_Indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "singleAttemptDelivery": (_el: _Element): void => { singleAttemptDelivery = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "smsf-supportIndicator": (_el: _Element): void => { smsf_supportIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoutingInfoForSM_Arg,
        _extension_additions_list_spec_for_RoutingInfoForSM_Arg,
        _root_component_type_list_2_spec_for_RoutingInfoForSM_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoutingInfoForSM_Arg(
        msisdn,
        sm_RP_PRI,
        serviceCentreAddress,
        extensionContainer,
        gprsSupportIndicator,
        sm_RP_MTI,
        sm_RP_SMEA,
        sm_deliveryNotIntended,
        ip_sm_gwGuidanceIndicator,
        imsi,
        t4_Trigger_Indicator,
        singleAttemptDelivery,
        correlationID,
        smsf_supportIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RoutingInfoForSM_Arg(el);
}

let _cached_encoder_for_RoutingInfoForSM_Arg: $.ASN1Encoder<RoutingInfoForSM_Arg> | null = null;

/**
 * @summary Encodes a(n) RoutingInfoForSM_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingInfoForSM_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingInfoForSM_Arg (value: RoutingInfoForSM_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingInfoForSM_Arg) { _cached_encoder_for_RoutingInfoForSM_Arg = function (value: RoutingInfoForSM_Arg, elGetter: $.ASN1Encoder<RoutingInfoForSM_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.sm_RP_PRI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AddressString, $.BER)(value.serviceCentreAddress, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.gprsSupportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.gprsSupportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.sm_RP_MTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SM_RP_MTI, $.BER)(value.sm_RP_MTI, $.BER)),
            /* IF_ABSENT  */ ((value.sm_RP_SMEA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SM_RP_SMEA, $.BER)(value.sm_RP_SMEA, $.BER)),
            /* IF_ABSENT  */ ((value.sm_deliveryNotIntended === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SM_DeliveryNotIntended, $.BER)(value.sm_deliveryNotIntended, $.BER)),
            /* IF_ABSENT  */ ((value.ip_sm_gwGuidanceIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.ip_sm_gwGuidanceIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.t4_Trigger_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.t4_Trigger_Indicator, $.BER)),
            /* IF_ABSENT  */ ((value.singleAttemptDelivery === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.singleAttemptDelivery, $.BER)),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_supportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.smsf_supportIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RoutingInfoForSM_Arg(value, elGetter);
}


/* eslint-enable */
