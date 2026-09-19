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
import { FacilityStatus, _decode_FacilityStatus, _encode_FacilityStatus } from "../AIN-Parameters/FacilityStatus.ta.mjs";
// export { FacilityStatus, _decode_FacilityStatus, _encode_FacilityStatus } from "../AIN-Parameters/FacilityStatus.ta.mjs";
import { MonitorTime, _decode_MonitorTime, _encode_MonitorTime } from "../AIN-Parameters/MonitorTime.ta.mjs";
// export { MonitorTime, _decode_MonitorTime, _encode_MonitorTime } from "../AIN-Parameters/MonitorTime.ta.mjs";
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
import { FacilityGID, _decode_FacilityGID, _encode_FacilityGID } from "../AIN-Parameters/FacilityGID.ta.mjs";
// export { FacilityGID, _decode_FacilityGID, _encode_FacilityGID } from "../AIN-Parameters/FacilityGID.ta.mjs";
import { FacilityMemberID, _decode_FacilityMemberID, _encode_FacilityMemberID } from "../AIN-Parameters/FacilityMemberID.ta.mjs";
// export { FacilityMemberID, _decode_FacilityMemberID, _encode_FacilityMemberID } from "../AIN-Parameters/FacilityMemberID.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
// export { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";


/**
 * @summary MonitorForChangeArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorForChangeArg ::= SEQUENCE{
 *             facilityStatus                 FacilityStatus,
 *             monitorTime                    MonitorTime,
 *             calledPartyID                  CalledPartyID  OPTIONAL,
 *             facilityGID                    FacilityGID OPTIONAL,
 *             facilityMemberID               FacilityMemberID OPTIONAL,
 *             bearerCapability               BearerCapability OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             controlEncountered             ControlEncountered OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class MonitorForChangeArg {
    constructor (
        /**
         * @summary `facilityStatus`.
         * @public
         * @readonly
         */
        readonly facilityStatus: FacilityStatus,
        /**
         * @summary `monitorTime`.
         * @public
         * @readonly
         */
        readonly monitorTime: MonitorTime,
        /**
         * @summary `calledPartyID`.
         * @public
         * @readonly
         */
        readonly calledPartyID: OPTIONAL<CalledPartyID>,
        /**
         * @summary `facilityGID`.
         * @public
         * @readonly
         */
        readonly facilityGID: OPTIONAL<FacilityGID>,
        /**
         * @summary `facilityMemberID`.
         * @public
         * @readonly
         */
        readonly facilityMemberID: OPTIONAL<FacilityMemberID>,
        /**
         * @summary `bearerCapability`.
         * @public
         * @readonly
         */
        readonly bearerCapability: OPTIONAL<BearerCapability>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `controlEncountered`.
         * @public
         * @readonly
         */
        readonly controlEncountered: OPTIONAL<ControlEncountered>
    ) {}

    /**
     * @summary Restructures an object into a MonitorForChangeArg
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorForChangeArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorForChangeArg`.
     * @returns {MonitorForChangeArg}
     */
    public static _from_object (_o: { [_K in keyof (MonitorForChangeArg)]: (MonitorForChangeArg)[_K] }): MonitorForChangeArg {
        return new MonitorForChangeArg(_o.facilityStatus, _o.monitorTime, _o.calledPartyID, _o.facilityGID, _o.facilityMemberID, _o.bearerCapability, _o.amp1, _o.amp2, _o.extensionParameter, _o.controlEncountered);
    }


}

/**
 * @summary The Leading Root Component Types of MonitorForChangeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorForChangeArg: $.ComponentSpec[] = [
    new $.ComponentSpec("facilityStatus", false, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("monitorTime", false, $.hasTag(_TagClass.context, 65)),
    new $.ComponentSpec("calledPartyID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("facilityGID", true, $.or($.hasTag(_TagClass.context, 29))),
    new $.ComponentSpec("facilityMemberID", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("controlEncountered", true, $.hasTag(_TagClass.context, 127))
];

/**
 * @summary The Trailing Root Component Types of MonitorForChangeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorForChangeArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorForChangeArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorForChangeArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorForChangeArg: $.ASN1Decoder<MonitorForChangeArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorForChangeArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorForChangeArg (el: _Element): MonitorForChangeArg {
    if (!_cached_decoder_for_MonitorForChangeArg) { _cached_decoder_for_MonitorForChangeArg = function (el: _Element): MonitorForChangeArg {
    let facilityStatus!: FacilityStatus;
    let monitorTime!: MonitorTime;
    let calledPartyID: OPTIONAL<CalledPartyID>;
    let facilityGID: OPTIONAL<FacilityGID>;
    let facilityMemberID: OPTIONAL<FacilityMemberID>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let controlEncountered: OPTIONAL<ControlEncountered>;
    const callbacks: $.DecodingMap = {
        "facilityStatus": (_el: _Element): void => { facilityStatus = _decode_FacilityStatus(_el); },
        "monitorTime": (_el: _Element): void => { monitorTime = _decode_MonitorTime(_el); },
        "calledPartyID": (_el: _Element): void => { calledPartyID = _decode_CalledPartyID(_el); },
        "facilityGID": (_el: _Element): void => { facilityGID = _decode_FacilityGID(_el); },
        "facilityMemberID": (_el: _Element): void => { facilityMemberID = _decode_FacilityMemberID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "controlEncountered": (_el: _Element): void => { controlEncountered = _decode_ControlEncountered(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorForChangeArg,
        _extension_additions_list_spec_for_MonitorForChangeArg,
        _root_component_type_list_2_spec_for_MonitorForChangeArg,
        undefined,
    );
    return new MonitorForChangeArg(
        facilityStatus,
        monitorTime,
        calledPartyID,
        facilityGID,
        facilityMemberID,
        bearerCapability,
        amp1,
        amp2,
        extensionParameter,
        controlEncountered
    );
}; }
    return _cached_decoder_for_MonitorForChangeArg(el);
}

let _cached_encoder_for_MonitorForChangeArg: $.ASN1Encoder<MonitorForChangeArg> | null = null;

/**
 * @summary Encodes a(n) MonitorForChangeArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorForChangeArg, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorForChangeArg (value: MonitorForChangeArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorForChangeArg) { _cached_encoder_for_MonitorForChangeArg = function (value: MonitorForChangeArg, elGetter: $.ASN1Encoder<MonitorForChangeArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_FacilityStatus(value.facilityStatus, $.BER),
            /* REQUIRED   */ _encode_MonitorTime(value.monitorTime, $.BER),
            /* IF_ABSENT  */ ((value.calledPartyID === undefined) ? undefined : _encode_CalledPartyID(value.calledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.facilityGID === undefined) ? undefined : _encode_FacilityGID(value.facilityGID, $.BER)),
            /* IF_ABSENT  */ ((value.facilityMemberID === undefined) ? undefined : _encode_FacilityMemberID(value.facilityMemberID, $.BER)),
            /* IF_ABSENT  */ ((value.bearerCapability === undefined) ? undefined : _encode_BearerCapability(value.bearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.controlEncountered === undefined) ? undefined : _encode_ControlEncountered(value.controlEncountered, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorForChangeArg(value, elGetter);
}


/* eslint-enable */
