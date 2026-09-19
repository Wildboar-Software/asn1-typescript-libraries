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
import { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../HI2Operations/GSMLocation.ta.mjs";
// export { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../HI2Operations/GSMLocation.ta.mjs";
import { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../HI2Operations/UMTSLocation.ta.mjs";
// export { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../HI2Operations/UMTSLocation.ta.mjs";
import { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../UmtsHI2Operations/CivicAddress.ta.mjs";
// export { CivicAddress, _decode_CivicAddress, _encode_CivicAddress } from "../UmtsHI2Operations/CivicAddress.ta.mjs";
import { EPSLocation_uELocationTimestamp, _decode_EPSLocation_uELocationTimestamp, _encode_EPSLocation_uELocationTimestamp } from "../EpsHI2Operations/EPSLocation-uELocationTimestamp.ta.mjs";
// export { EPSLocation_uELocationTimestamp, _decode_EPSLocation_uELocationTimestamp, _encode_EPSLocation_uELocationTimestamp } from "../EpsHI2Operations/EPSLocation-uELocationTimestamp.ta.mjs";


/**
 * @summary EPSLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSLocation ::= SEQUENCE
 * {
 * 
 *  userLocationInfo [1] OCTET STRING (SIZE (1..39)) OPTIONAL,
 *  -- see 3GPP TS 29.274 [46] parameters coding rules defined for EPS-GTPV2-SpecificParameters.
 *  gsmLocation [2] GSMLocation OPTIONAL,
 *  umtsLocation [3] UMTSLocation OPTIONAL,
 *  olduserLocationInfo [4] OCTET STRING (SIZE (1..39)) OPTIONAL,
 *  -- coded in the same way as userLocationInfo
 *  lastVisitedTAI [5] OCTET STRING (SIZE (1..5)) OPTIONAL,
 *  -- the Tracking Area Identity is coded in accordance with the TAI field in 3GPP TS 29.274
 *  -- [46].
 *  tAIlist [6] OCTET STRING (SIZE (7..97)) OPTIONAL,
 *  -- the TAI List is coded acording to 3GPP TS 24.301 [47], without the TAI list IEI
 *  ...,
 *  threeGPP2Bsid [7] OCTET STRING (SIZE (1..12)) OPTIONAL,
 *  -- contains only the payload from the 3GPP2-BSID AVP described in the 3GPP TS 29.212 [56].
 *  civicAddress [8] CivicAddress OPTIONAL,
 *  operatorSpecificInfo [9] OCTET STRING OPTIONAL,
 *  -- other CSP specific information.
 *  uELocationTimestamp [10] CHOICE
 *  {
 *  timestamp [0] TimeStamp,
 *  timestampUnknown [1] NULL,
 *  ...
 *  } OPTIONAL
 *  -- Date/time of the UE location
 * }
 * ```
 * 
 * @class
 */
export
class EPSLocation {
    constructor (
        /**
         * @summary `userLocationInfo`.
         * @public
         * @readonly
         */
        readonly userLocationInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `gsmLocation`.
         * @public
         * @readonly
         */
        readonly gsmLocation: OPTIONAL<GSMLocation>,
        /**
         * @summary `umtsLocation`.
         * @public
         * @readonly
         */
        readonly umtsLocation: OPTIONAL<UMTSLocation>,
        /**
         * @summary `olduserLocationInfo`.
         * @public
         * @readonly
         */
        readonly olduserLocationInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `lastVisitedTAI`.
         * @public
         * @readonly
         */
        readonly lastVisitedTAI: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tAIlist`.
         * @public
         * @readonly
         */
        readonly tAIlist: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `threeGPP2Bsid`.
         * @public
         * @readonly
         */
        readonly threeGPP2Bsid: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `civicAddress`.
         * @public
         * @readonly
         */
        readonly civicAddress: OPTIONAL<CivicAddress>,
        /**
         * @summary `operatorSpecificInfo`.
         * @public
         * @readonly
         */
        readonly operatorSpecificInfo: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uELocationTimestamp`.
         * @public
         * @readonly
         */
        readonly uELocationTimestamp: OPTIONAL<EPSLocation_uELocationTimestamp>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EPSLocation
     * @description
     * 
     * This takes an `object` and converts it to a `EPSLocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSLocation`.
     * @returns {EPSLocation}
     */
    public static _from_object (_o: { [_K in keyof (EPSLocation)]: (EPSLocation)[_K] }): EPSLocation {
        return new EPSLocation(_o.userLocationInfo, _o.gsmLocation, _o.umtsLocation, _o.olduserLocationInfo, _o.lastVisitedTAI, _o.tAIlist, _o.threeGPP2Bsid, _o.civicAddress, _o.operatorSpecificInfo, _o.uELocationTimestamp, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("userLocationInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gsmLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("umtsLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("olduserLocationInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("lastVisitedTAI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("tAIlist", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EPSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSLocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSLocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSLocation: $.ComponentSpec[] = [
    new $.ComponentSpec("threeGPP2Bsid", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("civicAddress", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("operatorSpecificInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("uELocationTimestamp", true, $.hasTag(_TagClass.context, 10))
];

let _cached_decoder_for_EPSLocation: $.ASN1Decoder<EPSLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSLocation (el: _Element): EPSLocation {
    if (!_cached_decoder_for_EPSLocation) { _cached_decoder_for_EPSLocation = function (el: _Element): EPSLocation {
    let userLocationInfo: OPTIONAL<OCTET_STRING>;
    let gsmLocation: OPTIONAL<GSMLocation>;
    let umtsLocation: OPTIONAL<UMTSLocation>;
    let olduserLocationInfo: OPTIONAL<OCTET_STRING>;
    let lastVisitedTAI: OPTIONAL<OCTET_STRING>;
    let tAIlist: OPTIONAL<OCTET_STRING>;
    let threeGPP2Bsid: OPTIONAL<OCTET_STRING>;
    let civicAddress: OPTIONAL<CivicAddress>;
    let operatorSpecificInfo: OPTIONAL<OCTET_STRING>;
    let uELocationTimestamp: OPTIONAL<EPSLocation_uELocationTimestamp>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userLocationInfo": (_el: _Element): void => { userLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "gsmLocation": (_el: _Element): void => { gsmLocation = $._decode_explicit<GSMLocation>(() => _decode_GSMLocation)(_el); },
        "umtsLocation": (_el: _Element): void => { umtsLocation = $._decode_explicit<UMTSLocation>(() => _decode_UMTSLocation)(_el); },
        "olduserLocationInfo": (_el: _Element): void => { olduserLocationInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lastVisitedTAI": (_el: _Element): void => { lastVisitedTAI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tAIlist": (_el: _Element): void => { tAIlist = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "threeGPP2Bsid": (_el: _Element): void => { threeGPP2Bsid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "civicAddress": (_el: _Element): void => { civicAddress = $._decode_explicit<CivicAddress>(() => _decode_CivicAddress)(_el); },
        "operatorSpecificInfo": (_el: _Element): void => { operatorSpecificInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uELocationTimestamp": (_el: _Element): void => { uELocationTimestamp = $._decode_explicit<EPSLocation_uELocationTimestamp>(() => _decode_EPSLocation_uELocationTimestamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSLocation,
        _extension_additions_list_spec_for_EPSLocation,
        _root_component_type_list_2_spec_for_EPSLocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSLocation(
        userLocationInfo,
        gsmLocation,
        umtsLocation,
        olduserLocationInfo,
        lastVisitedTAI,
        tAIlist,
        threeGPP2Bsid,
        civicAddress,
        operatorSpecificInfo,
        uELocationTimestamp,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSLocation(el);
}

let _cached_encoder_for_EPSLocation: $.ASN1Encoder<EPSLocation> | null = null;

/**
 * @summary Encodes a(n) EPSLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSLocation, encoded as an ASN.1 Element.
 */
export
function _encode_EPSLocation (value: EPSLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSLocation) { _cached_encoder_for_EPSLocation = function (value: EPSLocation, elGetter: $.ASN1Encoder<EPSLocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.userLocationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.userLocationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.gsmLocation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GSMLocation, $.BER)(value.gsmLocation, $.BER)),
            /* IF_ABSENT  */ ((value.umtsLocation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_UMTSLocation, $.BER)(value.umtsLocation, $.BER)),
            /* IF_ABSENT  */ ((value.olduserLocationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.olduserLocationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.lastVisitedTAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.lastVisitedTAI, $.BER)),
            /* IF_ABSENT  */ ((value.tAIlist === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.tAIlist, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.threeGPP2Bsid === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.threeGPP2Bsid, $.BER)),
            /* IF_ABSENT  */ ((value.civicAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_CivicAddress, $.BER)(value.civicAddress, $.BER)),
            /* IF_ABSENT  */ ((value.operatorSpecificInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.operatorSpecificInfo, $.BER)),
            /* IF_ABSENT  */ ((value.uELocationTimestamp === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_EPSLocation_uELocationTimestamp, $.BER)(value.uELocationTimestamp, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSLocation(value, elGetter);
}


/* eslint-enable */
