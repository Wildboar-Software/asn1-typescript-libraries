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
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../Core-INAP-CS1-DataTypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../Core-INAP-CS1-DataTypes/RedirectionInformation.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
// export { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
import { SuppressionOfAnnouncement, _decode_SuppressionOfAnnouncement, _encode_SuppressionOfAnnouncement } from "../MAP-CH-DataTypes/SuppressionOfAnnouncement.ta.mjs";
// export { SuppressionOfAnnouncement, _decode_SuppressionOfAnnouncement, _encode_SuppressionOfAnnouncement } from "../MAP-CH-DataTypes/SuppressionOfAnnouncement.ta.mjs";


/**
 * @summary ConnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     destinationRoutingAddress        [0] DestinationRoutingAddress {bound},
 *     alertingPattern            [1] AlertingPattern                OPTIONAL,
 *     originalCalledPartyID        [6] OriginalCalledPartyID {bound}        OPTIONAL,
 *     extensions                [10] Extensions {bound}            OPTIONAL,
 *     carrier                [11] Carrier {bound}            OPTIONAL,
 *     callingPartysCategory        [28] CallingPartysCategory            OPTIONAL,
 *     redirectingPartyID            [29] RedirectingPartyID {bound}        OPTIONAL,
 *     redirectionInformation        [30] RedirectionInformation            OPTIONAL,
 *     genericNumbers            [14] GenericNumbers {bound}            OPTIONAL,
 *     serviceInteractionIndicatorsTwo    [15] ServiceInteractionIndicatorsTwo    OPTIONAL,
 *     chargeNumber            [19] ChargeNumber {bound}            OPTIONAL,
 *     legToBeConnected            [21] LegID                    OPTIONAL,
 *     cug-Interlock            [31] CUG-Interlock                OPTIONAL,
 *     cug-OutgoingAccess            [32] NULL                    OPTIONAL,
 *     suppressionOfAnnouncement        [55] SuppressionOfAnnouncement        OPTIONAL,
 *     oCSIApplicable            [56] OCSIApplicable                OPTIONAL,
 *     naOliInfo                [57] NAOliInfo                OPTIONAL,
 *     bor-InterrogationRequested        [58] NULL                    OPTIONAL,
 *     ... ,
 *     suppress-N-CSI            [59] NULL                    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ConnectArg {
    constructor (
        /**
         * @summary `destinationRoutingAddress`.
         * @public
         * @readonly
         */
        readonly destinationRoutingAddress: DestinationRoutingAddress,
        /**
         * @summary `alertingPattern`.
         * @public
         * @readonly
         */
        readonly alertingPattern: OPTIONAL<AlertingPattern>,
        /**
         * @summary `originalCalledPartyID`.
         * @public
         * @readonly
         */
        readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `callingPartysCategory`.
         * @public
         * @readonly
         */
        readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>,
        /**
         * @summary `redirectingPartyID`.
         * @public
         * @readonly
         */
        readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        /**
         * @summary `redirectionInformation`.
         * @public
         * @readonly
         */
        readonly redirectionInformation: OPTIONAL<RedirectionInformation>,
        /**
         * @summary `genericNumbers`.
         * @public
         * @readonly
         */
        readonly genericNumbers: OPTIONAL<GenericNumbers>,
        /**
         * @summary `serviceInteractionIndicatorsTwo`.
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        /**
         * @summary `chargeNumber`.
         * @public
         * @readonly
         */
        readonly chargeNumber: OPTIONAL<ChargeNumber>,
        /**
         * @summary `legToBeConnected`.
         * @public
         * @readonly
         */
        readonly legToBeConnected: OPTIONAL<LegID>,
        /**
         * @summary `cug_Interlock`.
         * @public
         * @readonly
         */
        readonly cug_Interlock: OPTIONAL<CUG_Interlock>,
        /**
         * @summary `cug_OutgoingAccess`.
         * @public
         * @readonly
         */
        readonly cug_OutgoingAccess: OPTIONAL<NULL>,
        /**
         * @summary `suppressionOfAnnouncement`.
         * @public
         * @readonly
         */
        readonly suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement>,
        /**
         * @summary `oCSIApplicable`.
         * @public
         * @readonly
         */
        readonly oCSIApplicable: OPTIONAL<OCSIApplicable>,
        /**
         * @summary `naOliInfo`.
         * @public
         * @readonly
         */
        readonly naOliInfo: OPTIONAL<NAOliInfo>,
        /**
         * @summary `bor_InterrogationRequested`.
         * @public
         * @readonly
         */
        readonly bor_InterrogationRequested: OPTIONAL<NULL>,
        /**
         * @summary `suppress_N_CSI`.
         * @public
         * @readonly
         */
        readonly suppress_N_CSI: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ConnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectArg`.
     * @returns {ConnectArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectArg)]: (ConnectArg)[_K] }): ConnectArg {
        return new ConnectArg(_o.destinationRoutingAddress, _o.alertingPattern, _o.originalCalledPartyID, _o.extensions, _o.carrier, _o.callingPartysCategory, _o.redirectingPartyID, _o.redirectionInformation, _o.genericNumbers, _o.serviceInteractionIndicatorsTwo, _o.chargeNumber, _o.legToBeConnected, _o.cug_Interlock, _o.cug_OutgoingAccess, _o.suppressionOfAnnouncement, _o.oCSIApplicable, _o.naOliInfo, _o.bor_InterrogationRequested, _o.suppress_N_CSI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectArg: $.ComponentSpec[] = [
    /* FIXME: destinationRoutingAddress COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: alertingPattern COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: originalCalledPartyID COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: extensions COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: carrier COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 28), undefined, undefined),
    /* FIXME: redirectingPartyID COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 30), undefined, undefined),
    /* FIXME: genericNumbers COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: serviceInteractionIndicatorsTwo COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: chargeNumber COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("legToBeConnected", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("cug-Interlock", true, $.hasTag(_TagClass.context, 31), undefined, undefined),
    new $.ComponentSpec("cug-OutgoingAccess", true, $.hasTag(_TagClass.context, 32), undefined, undefined),
    new $.ComponentSpec("suppressionOfAnnouncement", true, $.hasTag(_TagClass.context, 55), undefined, undefined),
    /* FIXME: oCSIApplicable COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: naOliInfo COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("bor-InterrogationRequested", true, $.hasTag(_TagClass.context, 58), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("suppress-N-CSI", true, $.hasTag(_TagClass.context, 59), undefined, undefined)
];

let _cached_decoder_for_ConnectArg: $.ASN1Decoder<ConnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectArg (el: _Element): ConnectArg {
    if (!_cached_decoder_for_ConnectArg) { _cached_decoder_for_ConnectArg = function (el: _Element): ConnectArg {
    let destinationRoutingAddress!: DestinationRoutingAddress;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let extensions: OPTIONAL<Extensions>;
    let carrier: OPTIONAL<Carrier>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let legToBeConnected: OPTIONAL<LegID>;
    let cug_Interlock: OPTIONAL<CUG_Interlock>;
    let cug_OutgoingAccess: OPTIONAL<NULL>;
    let suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement>;
    let oCSIApplicable: OPTIONAL<OCSIApplicable>;
    let naOliInfo: OPTIONAL<NAOliInfo>;
    let bor_InterrogationRequested: OPTIONAL<NULL>;
    let suppress_N_CSI: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = $._decode_implicit<ChargeNumber>(() => _decode_ChargeNumber)(_el); },
        "legToBeConnected": (_el: _Element): void => { legToBeConnected = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "cug-Interlock": (_el: _Element): void => { cug_Interlock = $._decode_implicit<CUG_Interlock>(() => _decode_CUG_Interlock)(_el); },
        "cug-OutgoingAccess": (_el: _Element): void => { cug_OutgoingAccess = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppressionOfAnnouncement": (_el: _Element): void => { suppressionOfAnnouncement = $._decode_implicit<SuppressionOfAnnouncement>(() => _decode_SuppressionOfAnnouncement)(_el); },
        "oCSIApplicable": (_el: _Element): void => { oCSIApplicable = $._decode_implicit<OCSIApplicable>(() => _decode_OCSIApplicable)(_el); },
        "naOliInfo": (_el: _Element): void => { naOliInfo = $._decode_implicit<NAOliInfo>(() => _decode_NAOliInfo)(_el); },
        "bor-InterrogationRequested": (_el: _Element): void => { bor_InterrogationRequested = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppress-N-CSI": (_el: _Element): void => { suppress_N_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectArg,
        _extension_additions_list_spec_for_ConnectArg,
        _root_component_type_list_2_spec_for_ConnectArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConnectArg(
        destinationRoutingAddress,
        alertingPattern,
        originalCalledPartyID,
        extensions,
        carrier,
        callingPartysCategory,
        redirectingPartyID,
        redirectionInformation,
        genericNumbers,
        serviceInteractionIndicatorsTwo,
        chargeNumber,
        legToBeConnected,
        cug_Interlock,
        cug_OutgoingAccess,
        suppressionOfAnnouncement,
        oCSIApplicable,
        naOliInfo,
        bor_InterrogationRequested,
        suppress_N_CSI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConnectArg(el);
}

let _cached_encoder_for_ConnectArg: $.ASN1Encoder<ConnectArg> | null = null;

/**
 * @summary Encodes a(n) ConnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectArg (value: ConnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectArg) { _cached_encoder_for_ConnectArg = function (value: ConnectArg, elGetter: $.ASN1Encoder<ConnectArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.destinationRoutingAddress, $.BER),
            /* IF_ABSENT  */ ((value.alertingPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER)),
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Carrier, $.BER)(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartysCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER)),
            /* IF_ABSENT  */ ((value.redirectingPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.genericNumbers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicatorsTwo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_ChargeNumber, $.BER)(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.legToBeConnected === undefined) ? undefined : $._encode_explicit(_TagClass.context, 21, () => _encode_LegID, $.BER)(value.legToBeConnected, $.BER)),
            /* IF_ABSENT  */ ((value.cug_Interlock === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => _encode_CUG_Interlock, $.BER)(value.cug_Interlock, $.BER)),
            /* IF_ABSENT  */ ((value.cug_OutgoingAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 32, () => $._encodeNull, $.BER)(value.cug_OutgoingAccess, $.BER)),
            /* IF_ABSENT  */ ((value.suppressionOfAnnouncement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 55, () => _encode_SuppressionOfAnnouncement, $.BER)(value.suppressionOfAnnouncement, $.BER)),
            /* IF_ABSENT  */ ((value.oCSIApplicable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 56, () => _encode_OCSIApplicable, $.BER)(value.oCSIApplicable, $.BER)),
            /* IF_ABSENT  */ ((value.naOliInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 57, () => _encode_NAOliInfo, $.BER)(value.naOliInfo, $.BER)),
            /* IF_ABSENT  */ ((value.bor_InterrogationRequested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 58, () => $._encodeNull, $.BER)(value.bor_InterrogationRequested, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.suppress_N_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 59, () => $._encodeNull, $.BER)(value.suppress_N_CSI, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectArg(value, elGetter);
}


/* eslint-enable */
