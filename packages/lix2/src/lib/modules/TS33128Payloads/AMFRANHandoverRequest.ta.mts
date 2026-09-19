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
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
// export { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { HandoverType, _enum_for_HandoverType, HandoverType_intra5GS /* IMPORTED_LONG_ENUMERATION_ITEM */, intra5GS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_fiveGStoEPS /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGStoEPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_ePSto5GS /* IMPORTED_LONG_ENUMERATION_ITEM */, ePSto5GS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_fiveGStoUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGStoUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverType, _encode_HandoverType } from "../TS33128Payloads/HandoverType.ta.mjs";
// export { HandoverType, _enum_for_HandoverType, HandoverType_intra5GS /* IMPORTED_LONG_ENUMERATION_ITEM */, intra5GS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_fiveGStoEPS /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGStoEPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_ePSto5GS /* IMPORTED_LONG_ENUMERATION_ITEM */, ePSto5GS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_fiveGStoUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGStoUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverType, _encode_HandoverType } from "../TS33128Payloads/HandoverType.ta.mjs";
import { HandoverCause, _decode_HandoverCause, _encode_HandoverCause } from "../TS33128Payloads/HandoverCause.ta.mjs";
// export { HandoverCause, _decode_HandoverCause, _encode_HandoverCause } from "../TS33128Payloads/HandoverCause.ta.mjs";
import { PDUSessionResourceInformation, _decode_PDUSessionResourceInformation, _encode_PDUSessionResourceInformation } from "../TS33128Payloads/PDUSessionResourceInformation.ta.mjs";
// export { PDUSessionResourceInformation, _decode_PDUSessionResourceInformation, _encode_PDUSessionResourceInformation } from "../TS33128Payloads/PDUSessionResourceInformation.ta.mjs";
import { MobilityRestrictionList, _decode_MobilityRestrictionList, _encode_MobilityRestrictionList } from "../TS33128Payloads/MobilityRestrictionList.ta.mjs";
// export { MobilityRestrictionList, _decode_MobilityRestrictionList, _encode_MobilityRestrictionList } from "../TS33128Payloads/MobilityRestrictionList.ta.mjs";
import { LocationReportingRequestType, _decode_LocationReportingRequestType, _encode_LocationReportingRequestType } from "../TS33128Payloads/LocationReportingRequestType.ta.mjs";
// export { LocationReportingRequestType, _decode_LocationReportingRequestType, _encode_LocationReportingRequestType } from "../TS33128Payloads/LocationReportingRequestType.ta.mjs";
import { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";
// export { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";
import { NPNAccessInformation, _decode_NPNAccessInformation, _encode_NPNAccessInformation } from "../TS33128Payloads/NPNAccessInformation.ta.mjs";
// export { NPNAccessInformation, _decode_NPNAccessInformation, _encode_NPNAccessInformation } from "../TS33128Payloads/NPNAccessInformation.ta.mjs";
import { RANSourceToTargetContainer, _decode_RANSourceToTargetContainer, _encode_RANSourceToTargetContainer } from "../TS33128Payloads/RANSourceToTargetContainer.ta.mjs";
// export { RANSourceToTargetContainer, _decode_RANSourceToTargetContainer, _encode_RANSourceToTargetContainer } from "../TS33128Payloads/RANSourceToTargetContainer.ta.mjs";


/**
 * @summary AMFRANHandoverRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRANHandoverRequest ::= SEQUENCE
 * {
 *     userIdentifiers                     [1] UserIdentifiers,
 *     aMFUENGAPID                         [2] AMFUENGAPID,
 *     rANUENGAPID                         [3] RANUENGAPID,
 *     handoverType                        [4] HandoverType,
 *     handoverCause                       [5] HandoverCause,
 *     pDUSessionResourceInformation       [6] PDUSessionResourceInformation,
 *     mobilityRestrictionList             [7] MobilityRestrictionList OPTIONAL,
 *     locationReportingRequestType        [8] LocationReportingRequestType OPTIONAL,
 *     targetToSourceContainer             [9] RANTargetToSourceContainer,
 *     nPNAccessInformation                [10] NPNAccessInformation OPTIONAL,
 *     sourceToTargetContainer             [11] RANSourceToTargetContainer
 * }
 * ```
 * 
 * @class
 */
export
class AMFRANHandoverRequest {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `aMFUENGAPID`.
         * @public
         * @readonly
         */
        readonly aMFUENGAPID: AMFUENGAPID,
        /**
         * @summary `rANUENGAPID`.
         * @public
         * @readonly
         */
        readonly rANUENGAPID: RANUENGAPID,
        /**
         * @summary `handoverType`.
         * @public
         * @readonly
         */
        readonly handoverType: HandoverType,
        /**
         * @summary `handoverCause`.
         * @public
         * @readonly
         */
        readonly handoverCause: HandoverCause,
        /**
         * @summary `pDUSessionResourceInformation`.
         * @public
         * @readonly
         */
        readonly pDUSessionResourceInformation: PDUSessionResourceInformation,
        /**
         * @summary `mobilityRestrictionList`.
         * @public
         * @readonly
         */
        readonly mobilityRestrictionList: OPTIONAL<MobilityRestrictionList>,
        /**
         * @summary `locationReportingRequestType`.
         * @public
         * @readonly
         */
        readonly locationReportingRequestType: OPTIONAL<LocationReportingRequestType>,
        /**
         * @summary `targetToSourceContainer`.
         * @public
         * @readonly
         */
        readonly targetToSourceContainer: RANTargetToSourceContainer,
        /**
         * @summary `nPNAccessInformation`.
         * @public
         * @readonly
         */
        readonly nPNAccessInformation: OPTIONAL<NPNAccessInformation>,
        /**
         * @summary `sourceToTargetContainer`.
         * @public
         * @readonly
         */
        readonly sourceToTargetContainer: RANSourceToTargetContainer
    ) {}

    /**
     * @summary Restructures an object into a AMFRANHandoverRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AMFRANHandoverRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFRANHandoverRequest`.
     * @returns {AMFRANHandoverRequest}
     */
    public static _from_object (_o: { [_K in keyof (AMFRANHandoverRequest)]: (AMFRANHandoverRequest)[_K] }): AMFRANHandoverRequest {
        return new AMFRANHandoverRequest(_o.userIdentifiers, _o.aMFUENGAPID, _o.rANUENGAPID, _o.handoverType, _o.handoverCause, _o.pDUSessionResourceInformation, _o.mobilityRestrictionList, _o.locationReportingRequestType, _o.targetToSourceContainer, _o.nPNAccessInformation, _o.sourceToTargetContainer);
    }

        /**
         * @summary The enum used as the type of the component `handoverType`
         * @public
         * @static
         */

    public static _enum_for_handoverType = _enum_for_HandoverType;
}

/**
 * @summary The Leading Root Component Types of AMFRANHandoverRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFRANHandoverRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aMFUENGAPID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("handoverType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("handoverCause", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pDUSessionResourceInformation", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mobilityRestrictionList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("locationReportingRequestType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("targetToSourceContainer", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("nPNAccessInformation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("sourceToTargetContainer", false, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of AMFRANHandoverRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFRANHandoverRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFRANHandoverRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFRANHandoverRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFRANHandoverRequest: $.ASN1Decoder<AMFRANHandoverRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFRANHandoverRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFRANHandoverRequest (el: _Element): AMFRANHandoverRequest {
    if (!_cached_decoder_for_AMFRANHandoverRequest) { _cached_decoder_for_AMFRANHandoverRequest = function (el: _Element): AMFRANHandoverRequest {
    let userIdentifiers!: UserIdentifiers;
    let aMFUENGAPID!: AMFUENGAPID;
    let rANUENGAPID!: RANUENGAPID;
    let handoverType!: HandoverType;
    let handoverCause!: HandoverCause;
    let pDUSessionResourceInformation!: PDUSessionResourceInformation;
    let mobilityRestrictionList: OPTIONAL<MobilityRestrictionList>;
    let locationReportingRequestType: OPTIONAL<LocationReportingRequestType>;
    let targetToSourceContainer!: RANTargetToSourceContainer;
    let nPNAccessInformation: OPTIONAL<NPNAccessInformation>;
    let sourceToTargetContainer!: RANSourceToTargetContainer;
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "aMFUENGAPID": (_el: _Element): void => { aMFUENGAPID = $._decode_implicit<AMFUENGAPID>(() => _decode_AMFUENGAPID)(_el); },
        "rANUENGAPID": (_el: _Element): void => { rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(_el); },
        "handoverType": (_el: _Element): void => { handoverType = $._decode_implicit<HandoverType>(() => _decode_HandoverType)(_el); },
        "handoverCause": (_el: _Element): void => { handoverCause = $._decode_explicit<HandoverCause>(() => _decode_HandoverCause)(_el); },
        "pDUSessionResourceInformation": (_el: _Element): void => { pDUSessionResourceInformation = $._decode_implicit<PDUSessionResourceInformation>(() => _decode_PDUSessionResourceInformation)(_el); },
        "mobilityRestrictionList": (_el: _Element): void => { mobilityRestrictionList = $._decode_implicit<MobilityRestrictionList>(() => _decode_MobilityRestrictionList)(_el); },
        "locationReportingRequestType": (_el: _Element): void => { locationReportingRequestType = $._decode_implicit<LocationReportingRequestType>(() => _decode_LocationReportingRequestType)(_el); },
        "targetToSourceContainer": (_el: _Element): void => { targetToSourceContainer = $._decode_implicit<RANTargetToSourceContainer>(() => _decode_RANTargetToSourceContainer)(_el); },
        "nPNAccessInformation": (_el: _Element): void => { nPNAccessInformation = $._decode_explicit<NPNAccessInformation>(() => _decode_NPNAccessInformation)(_el); },
        "sourceToTargetContainer": (_el: _Element): void => { sourceToTargetContainer = $._decode_implicit<RANSourceToTargetContainer>(() => _decode_RANSourceToTargetContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFRANHandoverRequest,
        _extension_additions_list_spec_for_AMFRANHandoverRequest,
        _root_component_type_list_2_spec_for_AMFRANHandoverRequest,
        undefined,
    );
    return new AMFRANHandoverRequest(
        userIdentifiers,
        aMFUENGAPID,
        rANUENGAPID,
        handoverType,
        handoverCause,
        pDUSessionResourceInformation,
        mobilityRestrictionList,
        locationReportingRequestType,
        targetToSourceContainer,
        nPNAccessInformation,
        sourceToTargetContainer
    );
}; }
    return _cached_decoder_for_AMFRANHandoverRequest(el);
}

let _cached_encoder_for_AMFRANHandoverRequest: $.ASN1Encoder<AMFRANHandoverRequest> | null = null;

/**
 * @summary Encodes a(n) AMFRANHandoverRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFRANHandoverRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AMFRANHandoverRequest (value: AMFRANHandoverRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFRANHandoverRequest) { _cached_encoder_for_AMFRANHandoverRequest = function (value: AMFRANHandoverRequest, elGetter: $.ASN1Encoder<AMFRANHandoverRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AMFUENGAPID, $.BER)(value.aMFUENGAPID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_HandoverType, $.BER)(value.handoverType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_HandoverCause, $.BER)(value.handoverCause, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_PDUSessionResourceInformation, $.BER)(value.pDUSessionResourceInformation, $.BER),
            /* IF_ABSENT  */ ((value.mobilityRestrictionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MobilityRestrictionList, $.BER)(value.mobilityRestrictionList, $.BER)),
            /* IF_ABSENT  */ ((value.locationReportingRequestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_LocationReportingRequestType, $.BER)(value.locationReportingRequestType, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_RANTargetToSourceContainer, $.BER)(value.targetToSourceContainer, $.BER),
            /* IF_ABSENT  */ ((value.nPNAccessInformation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_NPNAccessInformation, $.BER)(value.nPNAccessInformation, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_RANSourceToTargetContainer, $.BER)(value.sourceToTargetContainer, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFRANHandoverRequest(value, elGetter);
}


/* eslint-enable */
