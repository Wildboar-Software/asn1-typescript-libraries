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
import { UDMDeregReason, _enum_for_UDMDeregReason, UDMDeregReason_uEInitialRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, uEInitialRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_uERegistrationAreaChange /* IMPORTED_LONG_ENUMERATION_ITEM */, uERegistrationAreaChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_subscriptionWithdrawn /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionWithdrawn /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_fiveGSToEPSMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGSToEPSMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_fiveGSToEPSMobilityUeInitialRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGSToEPSMobilityUeInitialRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_reregistrationRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, reregistrationRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_sMFContextTransferred /* IMPORTED_LONG_ENUMERATION_ITEM */, sMFContextTransferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_duplicatePDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicatePDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_fiveGSRVCCToUTRANMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGSRVCCToUTRANMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_pDUSessionReactivationRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionReactivationRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_disasterConditionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, disasterConditionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMDeregReason, _encode_UDMDeregReason } from "../TS33128Payloads/UDMDeregReason.ta.mjs";
// export { UDMDeregReason, _enum_for_UDMDeregReason, UDMDeregReason_uEInitialRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, uEInitialRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_uERegistrationAreaChange /* IMPORTED_LONG_ENUMERATION_ITEM */, uERegistrationAreaChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_subscriptionWithdrawn /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionWithdrawn /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_fiveGSToEPSMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGSToEPSMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_fiveGSToEPSMobilityUeInitialRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGSToEPSMobilityUeInitialRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_reregistrationRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, reregistrationRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_sMFContextTransferred /* IMPORTED_LONG_ENUMERATION_ITEM */, sMFContextTransferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_duplicatePDUSession /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicatePDUSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_fiveGSRVCCToUTRANMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGSRVCCToUTRANMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_pDUSessionReactivationRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionReactivationRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDeregReason_disasterConditionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, disasterConditionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMDeregReason, _encode_UDMDeregReason } from "../TS33128Payloads/UDMDeregReason.ta.mjs";
import { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";


/**
 * @summary UDMDeregistrationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDeregistrationData ::= SEQUENCE
 * {
 *     deregReason             [1] UDMDeregReason OPTIONAL,
 *     accessType              [2] AccessType OPTIONAL,
 *     pDUSessionID            [3] PDUSessionID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMDeregistrationData {
    constructor (
        /**
         * @summary `deregReason`.
         * @public
         * @readonly
         */
        readonly deregReason: OPTIONAL<UDMDeregReason>,
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: OPTIONAL<AccessType>,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: OPTIONAL<PDUSessionID>
    ) {}

    /**
     * @summary Restructures an object into a UDMDeregistrationData
     * @description
     * 
     * This takes an `object` and converts it to a `UDMDeregistrationData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMDeregistrationData`.
     * @returns {UDMDeregistrationData}
     */
    public static _from_object (_o: { [_K in keyof (UDMDeregistrationData)]: (UDMDeregistrationData)[_K] }): UDMDeregistrationData {
        return new UDMDeregistrationData(_o.deregReason, _o.accessType, _o.pDUSessionID);
    }

        /**
         * @summary The enum used as the type of the component `deregReason`
         * @public
         * @static
         */

    public static _enum_for_deregReason = _enum_for_UDMDeregReason;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of UDMDeregistrationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMDeregistrationData: $.ComponentSpec[] = [
    new $.ComponentSpec("deregReason", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDUSessionID", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UDMDeregistrationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMDeregistrationData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMDeregistrationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMDeregistrationData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMDeregistrationData: $.ASN1Decoder<UDMDeregistrationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMDeregistrationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMDeregistrationData (el: _Element): UDMDeregistrationData {
    if (!_cached_decoder_for_UDMDeregistrationData) { _cached_decoder_for_UDMDeregistrationData = function (el: _Element): UDMDeregistrationData {
    let deregReason: OPTIONAL<UDMDeregReason>;
    let accessType: OPTIONAL<AccessType>;
    let pDUSessionID: OPTIONAL<PDUSessionID>;
    const callbacks: $.DecodingMap = {
        "deregReason": (_el: _Element): void => { deregReason = $._decode_implicit<UDMDeregReason>(() => _decode_UDMDeregReason)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMDeregistrationData,
        _extension_additions_list_spec_for_UDMDeregistrationData,
        _root_component_type_list_2_spec_for_UDMDeregistrationData,
        undefined,
    );
    return new UDMDeregistrationData(
        deregReason,
        accessType,
        pDUSessionID
    );
}; }
    return _cached_decoder_for_UDMDeregistrationData(el);
}

let _cached_encoder_for_UDMDeregistrationData: $.ASN1Encoder<UDMDeregistrationData> | null = null;

/**
 * @summary Encodes a(n) UDMDeregistrationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMDeregistrationData, encoded as an ASN.1 Element.
 */
export
function _encode_UDMDeregistrationData (value: UDMDeregistrationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMDeregistrationData) { _cached_encoder_for_UDMDeregistrationData = function (value: UDMDeregistrationData, elGetter: $.ASN1Encoder<UDMDeregistrationData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.deregReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_UDMDeregReason, $.BER)(value.deregReason, $.BER)),
            /* IF_ABSENT  */ ((value.accessType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AccessType, $.BER)(value.accessType, $.BER)),
            /* IF_ABSENT  */ ((value.pDUSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMDeregistrationData(value, elGetter);
}


/* eslint-enable */
