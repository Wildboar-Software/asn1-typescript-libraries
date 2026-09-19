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
import { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
// export { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
// export { RATFrequencySelectionPriority, _decode_RATFrequencySelectionPriority, _encode_RATFrequencySelectionPriority } from "../TS33128Payloads/RATFrequencySelectionPriority.ta.mjs";
import { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
// export { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
import { IABAuthorizedIndicator, _enum_for_IABAuthorizedIndicator, IABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, IABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_IABAuthorizedIndicator, _encode_IABAuthorizedIndicator } from "../TS33128Payloads/IABAuthorizedIndicator.ta.mjs";
// export { IABAuthorizedIndicator, _enum_for_IABAuthorizedIndicator, IABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, IABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_IABAuthorizedIndicator, _encode_IABAuthorizedIndicator } from "../TS33128Payloads/IABAuthorizedIndicator.ta.mjs";
import { NRV2XServicesAuthorization, _decode_NRV2XServicesAuthorization, _encode_NRV2XServicesAuthorization } from "../TS33128Payloads/NRV2XServicesAuthorization.ta.mjs";
// export { NRV2XServicesAuthorization, _decode_NRV2XServicesAuthorization, _encode_NRV2XServicesAuthorization } from "../TS33128Payloads/NRV2XServicesAuthorization.ta.mjs";
import { LTEV2XServiceAuthorization, _decode_LTEV2XServiceAuthorization, _encode_LTEV2XServiceAuthorization } from "../TS33128Payloads/LTEV2XServiceAuthorization.ta.mjs";
// export { LTEV2XServiceAuthorization, _decode_LTEV2XServiceAuthorization, _encode_LTEV2XServiceAuthorization } from "../TS33128Payloads/LTEV2XServiceAuthorization.ta.mjs";
import { FiveGProSeAuthorizationIndication, _decode_FiveGProSeAuthorizationIndication, _encode_FiveGProSeAuthorizationIndication } from "../TS33128Payloads/FiveGProSeAuthorizationIndication.ta.mjs";
// export { FiveGProSeAuthorizationIndication, _decode_FiveGProSeAuthorizationIndication, _encode_FiveGProSeAuthorizationIndication } from "../TS33128Payloads/FiveGProSeAuthorizationIndication.ta.mjs";
import { MobileIABAuthorizedIndicator, _enum_for_MobileIABAuthorizedIndicator, MobileIABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, MobileIABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_MobileIABAuthorizedIndicator, _encode_MobileIABAuthorizedIndicator } from "../TS33128Payloads/MobileIABAuthorizedIndicator.ta.mjs";
// export { MobileIABAuthorizedIndicator, _enum_for_MobileIABAuthorizedIndicator, MobileIABAuthorizedIndicator_authorized /* IMPORTED_LONG_ENUMERATION_ITEM */, MobileIABAuthorizedIndicator_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_MobileIABAuthorizedIndicator, _encode_MobileIABAuthorizedIndicator } from "../TS33128Payloads/MobileIABAuthorizedIndicator.ta.mjs";


/**
 * @summary RANUEContextModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUEContextModification ::= SEQUENCE
 * {
 *     aMFUENGAPID                          [1] AMFUENGAPID,
 *     rANUENGAPID                          [2] RANUENGAPID,
 *     rATFrequencySelectionPriority        [3] RATFrequencySelectionPriority OPTIONAL,
 *     newAMFUENGAPID                       [4] AMFUENGAPID OPTIONAL,
 *     newGUAMI                             [5] GUAMI OPTIONAL,
 *     iABAuthorizedIndicator               [6] IABAuthorizedIndicator OPTIONAL,
 *     nRV2XServicesAuthorization           [7] NRV2XServicesAuthorization OPTIONAL,
 *     lTEV2XServiceAuthorization           [8] LTEV2XServiceAuthorization OPTIONAL,
 *     rGLevelWirelineAccessCharacteristics [9] OCTET STRING OPTIONAL,
 *     uERadioCapabilityID                  [10] OCTET STRING OPTIONAL,
 *     fiveGProSeAuthorizationIndication    [11] FiveGProSeAuthorizationIndication OPTIONAL,
 *     mobileIABAuthorizedIndicator         [12] MobileIABAuthorizedIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RANUEContextModification {
    constructor (
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
         * @summary `rATFrequencySelectionPriority`.
         * @public
         * @readonly
         */
        readonly rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>,
        /**
         * @summary `newAMFUENGAPID`.
         * @public
         * @readonly
         */
        readonly newAMFUENGAPID: OPTIONAL<AMFUENGAPID>,
        /**
         * @summary `newGUAMI`.
         * @public
         * @readonly
         */
        readonly newGUAMI: OPTIONAL<GUAMI>,
        /**
         * @summary `iABAuthorizedIndicator`.
         * @public
         * @readonly
         */
        readonly iABAuthorizedIndicator: OPTIONAL<IABAuthorizedIndicator>,
        /**
         * @summary `nRV2XServicesAuthorization`.
         * @public
         * @readonly
         */
        readonly nRV2XServicesAuthorization: OPTIONAL<NRV2XServicesAuthorization>,
        /**
         * @summary `lTEV2XServiceAuthorization`.
         * @public
         * @readonly
         */
        readonly lTEV2XServiceAuthorization: OPTIONAL<LTEV2XServiceAuthorization>,
        /**
         * @summary `rGLevelWirelineAccessCharacteristics`.
         * @public
         * @readonly
         */
        readonly rGLevelWirelineAccessCharacteristics: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uERadioCapabilityID`.
         * @public
         * @readonly
         */
        readonly uERadioCapabilityID: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `fiveGProSeAuthorizationIndication`.
         * @public
         * @readonly
         */
        readonly fiveGProSeAuthorizationIndication: OPTIONAL<FiveGProSeAuthorizationIndication>,
        /**
         * @summary `mobileIABAuthorizedIndicator`.
         * @public
         * @readonly
         */
        readonly mobileIABAuthorizedIndicator: OPTIONAL<MobileIABAuthorizedIndicator>
    ) {}

    /**
     * @summary Restructures an object into a RANUEContextModification
     * @description
     * 
     * This takes an `object` and converts it to a `RANUEContextModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RANUEContextModification`.
     * @returns {RANUEContextModification}
     */
    public static _from_object (_o: { [_K in keyof (RANUEContextModification)]: (RANUEContextModification)[_K] }): RANUEContextModification {
        return new RANUEContextModification(_o.aMFUENGAPID, _o.rANUENGAPID, _o.rATFrequencySelectionPriority, _o.newAMFUENGAPID, _o.newGUAMI, _o.iABAuthorizedIndicator, _o.nRV2XServicesAuthorization, _o.lTEV2XServiceAuthorization, _o.rGLevelWirelineAccessCharacteristics, _o.uERadioCapabilityID, _o.fiveGProSeAuthorizationIndication, _o.mobileIABAuthorizedIndicator);
    }

        /**
         * @summary The enum used as the type of the component `iABAuthorizedIndicator`
         * @public
         * @static
         */

    public static _enum_for_iABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;        /**
         * @summary The enum used as the type of the component `mobileIABAuthorizedIndicator`
         * @public
         * @static
         */

    public static _enum_for_mobileIABAuthorizedIndicator = _enum_for_MobileIABAuthorizedIndicator;
}

/**
 * @summary The Leading Root Component Types of RANUEContextModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RANUEContextModification: $.ComponentSpec[] = [
    new $.ComponentSpec("aMFUENGAPID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rATFrequencySelectionPriority", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("newAMFUENGAPID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("newGUAMI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iABAuthorizedIndicator", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("nRV2XServicesAuthorization", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("lTEV2XServiceAuthorization", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("rGLevelWirelineAccessCharacteristics", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("uERadioCapabilityID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("fiveGProSeAuthorizationIndication", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("mobileIABAuthorizedIndicator", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of RANUEContextModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RANUEContextModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RANUEContextModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RANUEContextModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RANUEContextModification: $.ASN1Decoder<RANUEContextModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANUEContextModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANUEContextModification (el: _Element): RANUEContextModification {
    if (!_cached_decoder_for_RANUEContextModification) { _cached_decoder_for_RANUEContextModification = function (el: _Element): RANUEContextModification {
    let aMFUENGAPID!: AMFUENGAPID;
    let rANUENGAPID!: RANUENGAPID;
    let rATFrequencySelectionPriority: OPTIONAL<RATFrequencySelectionPriority>;
    let newAMFUENGAPID: OPTIONAL<AMFUENGAPID>;
    let newGUAMI: OPTIONAL<GUAMI>;
    let iABAuthorizedIndicator: OPTIONAL<IABAuthorizedIndicator>;
    let nRV2XServicesAuthorization: OPTIONAL<NRV2XServicesAuthorization>;
    let lTEV2XServiceAuthorization: OPTIONAL<LTEV2XServiceAuthorization>;
    let rGLevelWirelineAccessCharacteristics: OPTIONAL<OCTET_STRING>;
    let uERadioCapabilityID: OPTIONAL<OCTET_STRING>;
    let fiveGProSeAuthorizationIndication: OPTIONAL<FiveGProSeAuthorizationIndication>;
    let mobileIABAuthorizedIndicator: OPTIONAL<MobileIABAuthorizedIndicator>;
    const callbacks: $.DecodingMap = {
        "aMFUENGAPID": (_el: _Element): void => { aMFUENGAPID = $._decode_implicit<AMFUENGAPID>(() => _decode_AMFUENGAPID)(_el); },
        "rANUENGAPID": (_el: _Element): void => { rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(_el); },
        "rATFrequencySelectionPriority": (_el: _Element): void => { rATFrequencySelectionPriority = $._decode_implicit<RATFrequencySelectionPriority>(() => _decode_RATFrequencySelectionPriority)(_el); },
        "newAMFUENGAPID": (_el: _Element): void => { newAMFUENGAPID = $._decode_implicit<AMFUENGAPID>(() => _decode_AMFUENGAPID)(_el); },
        "newGUAMI": (_el: _Element): void => { newGUAMI = $._decode_implicit<GUAMI>(() => _decode_GUAMI)(_el); },
        "iABAuthorizedIndicator": (_el: _Element): void => { iABAuthorizedIndicator = $._decode_implicit<IABAuthorizedIndicator>(() => _decode_IABAuthorizedIndicator)(_el); },
        "nRV2XServicesAuthorization": (_el: _Element): void => { nRV2XServicesAuthorization = $._decode_implicit<NRV2XServicesAuthorization>(() => _decode_NRV2XServicesAuthorization)(_el); },
        "lTEV2XServiceAuthorization": (_el: _Element): void => { lTEV2XServiceAuthorization = $._decode_implicit<LTEV2XServiceAuthorization>(() => _decode_LTEV2XServiceAuthorization)(_el); },
        "rGLevelWirelineAccessCharacteristics": (_el: _Element): void => { rGLevelWirelineAccessCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uERadioCapabilityID": (_el: _Element): void => { uERadioCapabilityID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fiveGProSeAuthorizationIndication": (_el: _Element): void => { fiveGProSeAuthorizationIndication = $._decode_implicit<FiveGProSeAuthorizationIndication>(() => _decode_FiveGProSeAuthorizationIndication)(_el); },
        "mobileIABAuthorizedIndicator": (_el: _Element): void => { mobileIABAuthorizedIndicator = $._decode_implicit<MobileIABAuthorizedIndicator>(() => _decode_MobileIABAuthorizedIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RANUEContextModification,
        _extension_additions_list_spec_for_RANUEContextModification,
        _root_component_type_list_2_spec_for_RANUEContextModification,
        undefined,
    );
    return new RANUEContextModification(
        aMFUENGAPID,
        rANUENGAPID,
        rATFrequencySelectionPriority,
        newAMFUENGAPID,
        newGUAMI,
        iABAuthorizedIndicator,
        nRV2XServicesAuthorization,
        lTEV2XServiceAuthorization,
        rGLevelWirelineAccessCharacteristics,
        uERadioCapabilityID,
        fiveGProSeAuthorizationIndication,
        mobileIABAuthorizedIndicator
    );
}; }
    return _cached_decoder_for_RANUEContextModification(el);
}

let _cached_encoder_for_RANUEContextModification: $.ASN1Encoder<RANUEContextModification> | null = null;

/**
 * @summary Encodes a(n) RANUEContextModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANUEContextModification, encoded as an ASN.1 Element.
 */
export
function _encode_RANUEContextModification (value: RANUEContextModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANUEContextModification) { _cached_encoder_for_RANUEContextModification = function (value: RANUEContextModification, elGetter: $.ASN1Encoder<RANUEContextModification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFUENGAPID, $.BER)(value.aMFUENGAPID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER),
            /* IF_ABSENT  */ ((value.rATFrequencySelectionPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_RATFrequencySelectionPriority, $.BER)(value.rATFrequencySelectionPriority, $.BER)),
            /* IF_ABSENT  */ ((value.newAMFUENGAPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AMFUENGAPID, $.BER)(value.newAMFUENGAPID, $.BER)),
            /* IF_ABSENT  */ ((value.newGUAMI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GUAMI, $.BER)(value.newGUAMI, $.BER)),
            /* IF_ABSENT  */ ((value.iABAuthorizedIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_IABAuthorizedIndicator, $.BER)(value.iABAuthorizedIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.nRV2XServicesAuthorization === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_NRV2XServicesAuthorization, $.BER)(value.nRV2XServicesAuthorization, $.BER)),
            /* IF_ABSENT  */ ((value.lTEV2XServiceAuthorization === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_LTEV2XServiceAuthorization, $.BER)(value.lTEV2XServiceAuthorization, $.BER)),
            /* IF_ABSENT  */ ((value.rGLevelWirelineAccessCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.rGLevelWirelineAccessCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.uERadioCapabilityID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityID, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGProSeAuthorizationIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_FiveGProSeAuthorizationIndication, $.BER)(value.fiveGProSeAuthorizationIndication, $.BER)),
            /* IF_ABSENT  */ ((value.mobileIABAuthorizedIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_MobileIABAuthorizedIndicator, $.BER)(value.mobileIABAuthorizedIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RANUEContextModification(value, elGetter);
}


/* eslint-enable */
