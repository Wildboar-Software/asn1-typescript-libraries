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
import { MMEFailedProcedureType, _enum_for_MMEFailedProcedureType, MMEFailedProcedureType_attachReject /* IMPORTED_LONG_ENUMERATION_ITEM */, attachReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_authenticationReject /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_securityModeReject /* IMPORTED_LONG_ENUMERATION_ITEM */, securityModeReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_serviceReject /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_trackingAreaUpdateReject /* IMPORTED_LONG_ENUMERATION_ITEM */, trackingAreaUpdateReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_activateDedicatedEPSBearerContextReject /* IMPORTED_LONG_ENUMERATION_ITEM */, activateDedicatedEPSBearerContextReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_activateDefaultEPSBearerContextReject /* IMPORTED_LONG_ENUMERATION_ITEM */, activateDefaultEPSBearerContextReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_bearerResourceAllocationReject /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerResourceAllocationReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_bearerResourceModificationReject /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerResourceModificationReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_modifyEPSBearerContectReject /* IMPORTED_LONG_ENUMERATION_ITEM */, modifyEPSBearerContectReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_pDNConnectivityReject /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNConnectivityReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_pDNDisconnectReject /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNDisconnectReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMEFailedProcedureType, _encode_MMEFailedProcedureType } from "../TS33128Payloads/MMEFailedProcedureType.ta.mjs";
// export { MMEFailedProcedureType, _enum_for_MMEFailedProcedureType, MMEFailedProcedureType_attachReject /* IMPORTED_LONG_ENUMERATION_ITEM */, attachReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_authenticationReject /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_securityModeReject /* IMPORTED_LONG_ENUMERATION_ITEM */, securityModeReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_serviceReject /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_trackingAreaUpdateReject /* IMPORTED_LONG_ENUMERATION_ITEM */, trackingAreaUpdateReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_activateDedicatedEPSBearerContextReject /* IMPORTED_LONG_ENUMERATION_ITEM */, activateDedicatedEPSBearerContextReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_activateDefaultEPSBearerContextReject /* IMPORTED_LONG_ENUMERATION_ITEM */, activateDefaultEPSBearerContextReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_bearerResourceAllocationReject /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerResourceAllocationReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_bearerResourceModificationReject /* IMPORTED_LONG_ENUMERATION_ITEM */, bearerResourceModificationReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_modifyEPSBearerContectReject /* IMPORTED_LONG_ENUMERATION_ITEM */, modifyEPSBearerContectReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_pDNConnectivityReject /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNConnectivityReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMEFailedProcedureType_pDNDisconnectReject /* IMPORTED_LONG_ENUMERATION_ITEM */, pDNDisconnectReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMEFailedProcedureType, _encode_MMEFailedProcedureType } from "../TS33128Payloads/MMEFailedProcedureType.ta.mjs";
import { MMEFailureCause, _decode_MMEFailureCause, _encode_MMEFailureCause } from "../TS33128Payloads/MMEFailureCause.ta.mjs";
// export { MMEFailureCause, _decode_MMEFailureCause, _encode_MMEFailureCause } from "../TS33128Payloads/MMEFailureCause.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary MMEUnsuccessfulProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failedProcedureType [1] MMEFailedProcedureType,
 *     failureCause        [2] MMEFailureCause,
 *     iMSI                [3] IMSI OPTIONAL,
 *     iMEI                [4] IMEI OPTIONAL,
 *     mSISDN              [5] MSISDN OPTIONAL,
 *     gUTI                [6] GUTI OPTIONAL,
 *     location            [7] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMEUnsuccessfulProcedure {
    constructor (
        /**
         * @summary `failedProcedureType`.
         * @public
         * @readonly
         */
        readonly failedProcedureType: MMEFailedProcedureType,
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: MMEFailureCause,
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: OPTIONAL<GUTI>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>
    ) {}

    /**
     * @summary Restructures an object into a MMEUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `MMEUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEUnsuccessfulProcedure`.
     * @returns {MMEUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (MMEUnsuccessfulProcedure)]: (MMEUnsuccessfulProcedure)[_K] }): MMEUnsuccessfulProcedure {
        return new MMEUnsuccessfulProcedure(_o.failedProcedureType, _o.failureCause, _o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.location);
    }

        /**
         * @summary The enum used as the type of the component `failedProcedureType`
         * @public
         * @static
         */

    public static _enum_for_failedProcedureType = _enum_for_MMEFailedProcedureType;
}

/**
 * @summary The Leading Root Component Types of MMEUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failedProcedureType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MMEUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEUnsuccessfulProcedure: $.ASN1Decoder<MMEUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEUnsuccessfulProcedure (el: _Element): MMEUnsuccessfulProcedure {
    if (!_cached_decoder_for_MMEUnsuccessfulProcedure) { _cached_decoder_for_MMEUnsuccessfulProcedure = function (el: _Element): MMEUnsuccessfulProcedure {
    let failedProcedureType!: MMEFailedProcedureType;
    let failureCause!: MMEFailureCause;
    let iMSI: OPTIONAL<IMSI>;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI: OPTIONAL<GUTI>;
    let location: OPTIONAL<Location>;
    const callbacks: $.DecodingMap = {
        "failedProcedureType": (_el: _Element): void => { failedProcedureType = $._decode_implicit<MMEFailedProcedureType>(() => _decode_MMEFailedProcedureType)(_el); },
        "failureCause": (_el: _Element): void => { failureCause = $._decode_explicit<MMEFailureCause>(() => _decode_MMEFailureCause)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEUnsuccessfulProcedure,
        _extension_additions_list_spec_for_MMEUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_MMEUnsuccessfulProcedure,
        undefined,
    );
    return new MMEUnsuccessfulProcedure(
        failedProcedureType,
        failureCause,
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        location
    );
}; }
    return _cached_decoder_for_MMEUnsuccessfulProcedure(el);
}

let _cached_encoder_for_MMEUnsuccessfulProcedure: $.ASN1Encoder<MMEUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) MMEUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_MMEUnsuccessfulProcedure (value: MMEUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEUnsuccessfulProcedure) { _cached_encoder_for_MMEUnsuccessfulProcedure = function (value: MMEUnsuccessfulProcedure, elGetter: $.ASN1Encoder<MMEUnsuccessfulProcedure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMEFailedProcedureType, $.BER)(value.failedProcedureType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_MMEFailureCause, $.BER)(value.failureCause, $.BER),
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.gUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GUTI, $.BER)(value.gUTI, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMEUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
