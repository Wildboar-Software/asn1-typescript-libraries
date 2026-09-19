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
import { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
// export { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { IMSRegistrationStatus, _enum_for_IMSRegistrationStatus, IMSRegistrationStatus_initialRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_reregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, reregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_timeoutDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, timeoutDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_userDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, userDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_administrativeDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, administrativeDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_authenticationFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_authenticationTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_unregisteredUser /* IMPORTED_LONG_ENUMERATION_ITEM */, unregisteredUser /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IMSRegistrationStatus, _encode_IMSRegistrationStatus } from "../TS33128Payloads/IMSRegistrationStatus.ta.mjs";
// export { IMSRegistrationStatus, _enum_for_IMSRegistrationStatus, IMSRegistrationStatus_initialRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, initialRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_reregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, reregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_timeoutDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, timeoutDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_userDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, userDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_administrativeDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, administrativeDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_authenticationFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_authenticationTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, authenticationTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, IMSRegistrationStatus_unregisteredUser /* IMPORTED_LONG_ENUMERATION_ITEM */, unregisteredUser /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IMSRegistrationStatus, _encode_IMSRegistrationStatus } from "../TS33128Payloads/IMSRegistrationStatus.ta.mjs";


/**
 * @summary IMSHSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSHSSStartOfInterceptionWithRegisteredTarget ::= SEQUENCE
 * {
 *     hSSIdentities          [1] SEQUENCE OF HSSIdentities,
 *     iMSProfileData         [2] SBIType OPTIONAL,
 *     iMSRegistrationStatus  [3] IMSRegistrationStatus
 * }
 * ```
 * 
 * @class
 */
export
class IMSHSSStartOfInterceptionWithRegisteredTarget {
    constructor (
        /**
         * @summary `hSSIdentities`.
         * @public
         * @readonly
         */
        readonly hSSIdentities: HSSIdentities[],
        /**
         * @summary `iMSProfileData`.
         * @public
         * @readonly
         */
        readonly iMSProfileData: OPTIONAL<SBIType>,
        /**
         * @summary `iMSRegistrationStatus`.
         * @public
         * @readonly
         */
        readonly iMSRegistrationStatus: IMSRegistrationStatus
    ) {}

    /**
     * @summary Restructures an object into a IMSHSSStartOfInterceptionWithRegisteredTarget
     * @description
     * 
     * This takes an `object` and converts it to a `IMSHSSStartOfInterceptionWithRegisteredTarget`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSHSSStartOfInterceptionWithRegisteredTarget`.
     * @returns {IMSHSSStartOfInterceptionWithRegisteredTarget}
     */
    public static _from_object (_o: { [_K in keyof (IMSHSSStartOfInterceptionWithRegisteredTarget)]: (IMSHSSStartOfInterceptionWithRegisteredTarget)[_K] }): IMSHSSStartOfInterceptionWithRegisteredTarget {
        return new IMSHSSStartOfInterceptionWithRegisteredTarget(_o.hSSIdentities, _o.iMSProfileData, _o.iMSRegistrationStatus);
    }

        /**
         * @summary The enum used as the type of the component `iMSRegistrationStatus`
         * @public
         * @static
         */

    public static _enum_for_iMSRegistrationStatus = _enum_for_IMSRegistrationStatus;
}

/**
 * @summary The Leading Root Component Types of IMSHSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSHSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    new $.ComponentSpec("hSSIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMSProfileData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMSRegistrationStatus", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IMSHSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSHSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSHSSStartOfInterceptionWithRegisteredTarget
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSHSSStartOfInterceptionWithRegisteredTarget: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSHSSStartOfInterceptionWithRegisteredTarget: $.ASN1Decoder<IMSHSSStartOfInterceptionWithRegisteredTarget> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSHSSStartOfInterceptionWithRegisteredTarget
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSHSSStartOfInterceptionWithRegisteredTarget (el: _Element): IMSHSSStartOfInterceptionWithRegisteredTarget {
    if (!_cached_decoder_for_IMSHSSStartOfInterceptionWithRegisteredTarget) { _cached_decoder_for_IMSHSSStartOfInterceptionWithRegisteredTarget = function (el: _Element): IMSHSSStartOfInterceptionWithRegisteredTarget {
    let hSSIdentities!: HSSIdentities[];
    let iMSProfileData: OPTIONAL<SBIType>;
    let iMSRegistrationStatus!: IMSRegistrationStatus;
    const callbacks: $.DecodingMap = {
        "hSSIdentities": (_el: _Element): void => { hSSIdentities = $._decode_implicit<HSSIdentities[]>(() => $._decodeSequenceOf<HSSIdentities>(() => _decode_HSSIdentities))(_el); },
        "iMSProfileData": (_el: _Element): void => { iMSProfileData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "iMSRegistrationStatus": (_el: _Element): void => { iMSRegistrationStatus = $._decode_implicit<IMSRegistrationStatus>(() => _decode_IMSRegistrationStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSHSSStartOfInterceptionWithRegisteredTarget,
        _extension_additions_list_spec_for_IMSHSSStartOfInterceptionWithRegisteredTarget,
        _root_component_type_list_2_spec_for_IMSHSSStartOfInterceptionWithRegisteredTarget,
        undefined,
    );
    return new IMSHSSStartOfInterceptionWithRegisteredTarget(
        hSSIdentities,
        iMSProfileData,
        iMSRegistrationStatus
    );
}; }
    return _cached_decoder_for_IMSHSSStartOfInterceptionWithRegisteredTarget(el);
}

let _cached_encoder_for_IMSHSSStartOfInterceptionWithRegisteredTarget: $.ASN1Encoder<IMSHSSStartOfInterceptionWithRegisteredTarget> | null = null;

/**
 * @summary Encodes a(n) IMSHSSStartOfInterceptionWithRegisteredTarget into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSHSSStartOfInterceptionWithRegisteredTarget, encoded as an ASN.1 Element.
 */
export
function _encode_IMSHSSStartOfInterceptionWithRegisteredTarget (value: IMSHSSStartOfInterceptionWithRegisteredTarget, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSHSSStartOfInterceptionWithRegisteredTarget) { _cached_encoder_for_IMSHSSStartOfInterceptionWithRegisteredTarget = function (value: IMSHSSStartOfInterceptionWithRegisteredTarget, elGetter: $.ASN1Encoder<IMSHSSStartOfInterceptionWithRegisteredTarget>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<HSSIdentities>(() => _encode_HSSIdentities, $.BER), $.BER)(value.hSSIdentities, $.BER),
            /* IF_ABSENT  */ ((value.iMSProfileData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.iMSProfileData, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_IMSRegistrationStatus, $.BER)(value.iMSRegistrationStatus, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSHSSStartOfInterceptionWithRegisteredTarget(value, elGetter);
}


/* eslint-enable */
