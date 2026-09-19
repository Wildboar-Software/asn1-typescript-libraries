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
import { AMFDirection, _enum_for_AMFDirection, AMFDirection_networkInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFDirection_uEInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, uEInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFDirection, _encode_AMFDirection } from "../TS33128Payloads/AMFDirection.ta.mjs";
// export { AMFDirection, _enum_for_AMFDirection, AMFDirection_networkInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFDirection_uEInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, uEInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFDirection, _encode_AMFDirection } from "../TS33128Payloads/AMFDirection.ta.mjs";
import { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { FiveGMMCause, _decode_FiveGMMCause, _encode_FiveGMMCause } from "../TS33128Payloads/FiveGMMCause.ta.mjs";
// export { FiveGMMCause, _decode_FiveGMMCause, _encode_FiveGMMCause } from "../TS33128Payloads/FiveGMMCause.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SwitchOffIndicator, _enum_for_SwitchOffIndicator, SwitchOffIndicator_normalDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, normalDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, SwitchOffIndicator_switchOff /* IMPORTED_LONG_ENUMERATION_ITEM */, switchOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SwitchOffIndicator, _encode_SwitchOffIndicator } from "../TS33128Payloads/SwitchOffIndicator.ta.mjs";
// export { SwitchOffIndicator, _enum_for_SwitchOffIndicator, SwitchOffIndicator_normalDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, normalDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, SwitchOffIndicator_switchOff /* IMPORTED_LONG_ENUMERATION_ITEM */, switchOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SwitchOffIndicator, _encode_SwitchOffIndicator } from "../TS33128Payloads/SwitchOffIndicator.ta.mjs";
import { ReRegRequiredIndicator, _enum_for_ReRegRequiredIndicator, ReRegRequiredIndicator_reRegistrationRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, reRegistrationRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReRegRequiredIndicator_reRegistrationNotRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, reRegistrationNotRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReRegRequiredIndicator, _encode_ReRegRequiredIndicator } from "../TS33128Payloads/ReRegRequiredIndicator.ta.mjs";
// export { ReRegRequiredIndicator, _enum_for_ReRegRequiredIndicator, ReRegRequiredIndicator_reRegistrationRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, reRegistrationRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReRegRequiredIndicator_reRegistrationNotRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, reRegistrationNotRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReRegRequiredIndicator, _encode_ReRegRequiredIndicator } from "../TS33128Payloads/ReRegRequiredIndicator.ta.mjs";
import { UnavailabilityPeriodDuration, _decode_UnavailabilityPeriodDuration, _encode_UnavailabilityPeriodDuration } from "../TS33128Payloads/UnavailabilityPeriodDuration.ta.mjs";
// export { UnavailabilityPeriodDuration, _decode_UnavailabilityPeriodDuration, _encode_UnavailabilityPeriodDuration } from "../TS33128Payloads/UnavailabilityPeriodDuration.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFDeregistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFDeregistration ::= SEQUENCE
 * {
 *     deregistrationDirection       [1] AMFDirection,
 *     accessType                    [2] AccessType,
 *     sUPI                          [3] SUPI OPTIONAL,
 *     sUCI                          [4] SUCI OPTIONAL,
 *     pEI                           [5] PEI OPTIONAL,
 *     gPSI                          [6] GPSI OPTIONAL,
 *     gUTI                          [7] FiveGGUTI OPTIONAL,
 *     cause                         [8] FiveGMMCause OPTIONAL,
 *     location                      [9] Location OPTIONAL,
 *     switchOffIndicator            [10] SwitchOffIndicator OPTIONAL,
 *     reRegRequiredIndicator        [11] ReRegRequiredIndicator OPTIONAL,
 *     unavailabilityPeriodDuration  [12] UnavailabilityPeriodDuration OPTIONAL,
 *     additionalUserIdentifiers     [13] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFDeregistration {
    constructor (
        /**
         * @summary `deregistrationDirection`.
         * @public
         * @readonly
         */
        readonly deregistrationDirection: AMFDirection,
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: AccessType,
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: OPTIONAL<SUPI>,
        /**
         * @summary `sUCI`.
         * @public
         * @readonly
         */
        readonly sUCI: OPTIONAL<SUCI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: OPTIONAL<FiveGGUTI>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<FiveGMMCause>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `switchOffIndicator`.
         * @public
         * @readonly
         */
        readonly switchOffIndicator: OPTIONAL<SwitchOffIndicator>,
        /**
         * @summary `reRegRequiredIndicator`.
         * @public
         * @readonly
         */
        readonly reRegRequiredIndicator: OPTIONAL<ReRegRequiredIndicator>,
        /**
         * @summary `unavailabilityPeriodDuration`.
         * @public
         * @readonly
         */
        readonly unavailabilityPeriodDuration: OPTIONAL<UnavailabilityPeriodDuration>,
        /**
         * @summary `additionalUserIdentifiers`.
         * @public
         * @readonly
         */
        readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>
    ) {}

    /**
     * @summary Restructures an object into a AMFDeregistration
     * @description
     * 
     * This takes an `object` and converts it to a `AMFDeregistration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFDeregistration`.
     * @returns {AMFDeregistration}
     */
    public static _from_object (_o: { [_K in keyof (AMFDeregistration)]: (AMFDeregistration)[_K] }): AMFDeregistration {
        return new AMFDeregistration(_o.deregistrationDirection, _o.accessType, _o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.cause, _o.location, _o.switchOffIndicator, _o.reRegRequiredIndicator, _o.unavailabilityPeriodDuration, _o.additionalUserIdentifiers);
    }

        /**
         * @summary The enum used as the type of the component `deregistrationDirection`
         * @public
         * @static
         */

    public static _enum_for_deregistrationDirection = _enum_for_AMFDirection;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;        /**
         * @summary The enum used as the type of the component `switchOffIndicator`
         * @public
         * @static
         */

    public static _enum_for_switchOffIndicator = _enum_for_SwitchOffIndicator;        /**
         * @summary The enum used as the type of the component `reRegRequiredIndicator`
         * @public
         * @static
         */

    public static _enum_for_reRegRequiredIndicator = _enum_for_ReRegRequiredIndicator;
}

/**
 * @summary The Leading Root Component Types of AMFDeregistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFDeregistration: $.ComponentSpec[] = [
    new $.ComponentSpec("deregistrationDirection", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("switchOffIndicator", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("reRegRequiredIndicator", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("unavailabilityPeriodDuration", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of AMFDeregistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFDeregistration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFDeregistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFDeregistration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFDeregistration: $.ASN1Decoder<AMFDeregistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFDeregistration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFDeregistration (el: _Element): AMFDeregistration {
    if (!_cached_decoder_for_AMFDeregistration) { _cached_decoder_for_AMFDeregistration = function (el: _Element): AMFDeregistration {
    let deregistrationDirection!: AMFDirection;
    let accessType!: AccessType;
    let sUPI: OPTIONAL<SUPI>;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI: OPTIONAL<FiveGGUTI>;
    let cause: OPTIONAL<FiveGMMCause>;
    let location: OPTIONAL<Location>;
    let switchOffIndicator: OPTIONAL<SwitchOffIndicator>;
    let reRegRequiredIndicator: OPTIONAL<ReRegRequiredIndicator>;
    let unavailabilityPeriodDuration: OPTIONAL<UnavailabilityPeriodDuration>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const callbacks: $.DecodingMap = {
        "deregistrationDirection": (_el: _Element): void => { deregistrationDirection = $._decode_implicit<AMFDirection>(() => _decode_AMFDirection)(_el); },
        "accessType": (_el: _Element): void => { accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<FiveGMMCause>(() => _decode_FiveGMMCause)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "switchOffIndicator": (_el: _Element): void => { switchOffIndicator = $._decode_implicit<SwitchOffIndicator>(() => _decode_SwitchOffIndicator)(_el); },
        "reRegRequiredIndicator": (_el: _Element): void => { reRegRequiredIndicator = $._decode_implicit<ReRegRequiredIndicator>(() => _decode_ReRegRequiredIndicator)(_el); },
        "unavailabilityPeriodDuration": (_el: _Element): void => { unavailabilityPeriodDuration = $._decode_implicit<UnavailabilityPeriodDuration>(() => _decode_UnavailabilityPeriodDuration)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFDeregistration,
        _extension_additions_list_spec_for_AMFDeregistration,
        _root_component_type_list_2_spec_for_AMFDeregistration,
        undefined,
    );
    return new AMFDeregistration(
        deregistrationDirection,
        accessType,
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        cause,
        location,
        switchOffIndicator,
        reRegRequiredIndicator,
        unavailabilityPeriodDuration,
        additionalUserIdentifiers
    );
}; }
    return _cached_decoder_for_AMFDeregistration(el);
}

let _cached_encoder_for_AMFDeregistration: $.ASN1Encoder<AMFDeregistration> | null = null;

/**
 * @summary Encodes a(n) AMFDeregistration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFDeregistration, encoded as an ASN.1 Element.
 */
export
function _encode_AMFDeregistration (value: AMFDeregistration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFDeregistration) { _cached_encoder_for_AMFDeregistration = function (value: AMFDeregistration, elGetter: $.ASN1Encoder<AMFDeregistration>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFDirection, $.BER)(value.deregistrationDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AccessType, $.BER)(value.accessType, $.BER),
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.sUCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.gUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_FiveGMMCause, $.BER)(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.switchOffIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SwitchOffIndicator, $.BER)(value.switchOffIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.reRegRequiredIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ReRegRequiredIndicator, $.BER)(value.reRegRequiredIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.unavailabilityPeriodDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_UnavailabilityPeriodDuration, $.BER)(value.unavailabilityPeriodDuration, $.BER)),
            /* IF_ABSENT  */ ((value.additionalUserIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFDeregistration(value, elGetter);
}


/* eslint-enable */
