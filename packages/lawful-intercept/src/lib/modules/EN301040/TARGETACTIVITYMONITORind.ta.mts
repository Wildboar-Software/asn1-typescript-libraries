/* eslint-disable */
import {
    OPTIONAL,
    UTCTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
import { LocationType, _decode_LocationType, _encode_LocationType } from "../EN301040/LocationType.ta.mjs";
// export { LocationType, _decode_LocationType, _encode_LocationType } from "../EN301040/LocationType.ta.mjs";
import { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";
// export { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";
import { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
// export { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";


/**
 * @summary TARGETACTIVITYMONITORind
 * @description
 * 
 * `TARGET_ACTIVITY_MONITOR_ind` summarizes target activity on the SwMI for the
 * mediation function. The header is who (`tLIInstanceid`), when (`timestamp`),
 * and where (`targetLocation`). The body is what (`targetAction`). No response
 * is expected. The flow is carried in the body of an IRI-Record across HI2.
 *
 * Clause 5.2.2.2.1 also shows an optional `tSignallingPacket`. That component
 * is absent from the collated module in annex E, which this type follows.
 *
 * The result of interception covers calls the target originates, calls
 * addressed to the target, multi-party calls in which the operator believes the
 * target is taking part, and broadcast calls to a population of which the
 * operator believes the target is a member. It also covers attempted parties,
 * identities associated with the target, service parameters, signals that
 * invoke or modify services, time-stamps, diverted directory numbers, location,
 * and advice of charge (clause 4.3.4). For a group call the GTSI is tied to the
 * target ITSI when the operator believes the target is in the group, from
 * ATTACH/DETACH GROUP IDENTITY or from a permanent attachment. With no required
 * dynamic attachment, there is no ITSI-to-GTSI association for that group.
 *
 * Annex E requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; interceptVersion in the
 * module object identifier is incremented when the published module changes.
 * Clause 1 leaves encoding towards the LEMF to the handover interface that is
 * adopted.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.1, clause 6.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TARGETACTIVITYMONITORind ::= SEQUENCE {
 *         tLIInstanceid                TLIIdType, -- header, who
 *         timestamp                    UTCTime, -- header, when
 *         targetLocation                LocationType, -- header, where
 *         targetAction                   ActivityType,
 *         supplementaryTargetaddress     AddressType OPTIONAL,
 *         cotargetaddress              SEQUENCE OF AddressType OPTIONAL,
 *         cotargetlocation              SEQUENCE OF LocationType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TARGETACTIVITYMONITORind {
    /**
     * @summary `tLIInstanceid`.
     * @description
     *
     * Header: who. The interception this activity belongs to. The monitored
     * target is the one correlated by this tag, which is how clause 6.6
     * distinguishes that target from an address the SwMI is using towards it.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.1, clause 6.1,
     * clause 6.6.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly tLIInstanceid: TLIIdType;
    /**
     * @summary `timestamp`.
     * @description
     *
     * Header: when. Mandatory UTC time for the beginning, end, and duration of
     * the connection (clause 6.5). Clause 3.1 defines Coordinated Universal
     * Time from ITU-R Recommendation TF.460-6. EN 300 392-2, table 254, zeros
     * the TETRA network time element at 00:00 on 1 January each year and
     * increments it every 2 s (clause 6.5, notes 2 and 3).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.5.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `targetLocation`.
     * @description
     *
     * Header: where. Supplied on every activity indication (clause 6.8).
     * `mSLoc` is a mobile station (TETRA cell global identity). `lSLoc` is a
     * fixed line station. Clause 4.4 asks for the current location area, or the
     * base station when known; the line identity of a registered target; or the
     * line or service identity to which calls are redirected. Location is
     * delivered with registration and with the result of interception. On
     * migration or roaming the new location is this header field (clause 6.4.5,
     * clause 6.4.6).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8, clause 4.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly targetLocation: LocationType;
    /**
     * @summary `targetAction`.
     * @description
     *
     * Body: what the target did. Services and their parameters use clause 6.3.
     * Signals that invoke or modify a non-call service (authentication, OTAR,
     * enable or disable, registration, migration, roaming, supplementary
     * services) use the same element under clause 6.4.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.3, clause 6.4.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly targetAction: ActivityType;
    /**
     * @summary `supplementaryTargetaddress`.
     * @description
     *
     * Address the SwMI uses when communicating with the target (clause 6.2.1).
     * When an ITSI attaches to a group with ATTACH DETACH GROUP IDENTITY, that
     * group identity is placed here. For IP, the target's IP address is placed
     * in the supplementary address (clause 6.3.2.5). Clause 6.6 uses this
     * address for the actual destination, including a diverted number, and
     * distinguishes it from the monitored target, which is found from
     * `tLIInstanceid`. A line station is normally addressed by its ITSI; where
     * that ITSI is mapped to an ISDN or PSTN line, clause 6.8.2 puts the line
     * address in this element.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2.1, clause 6.6.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly supplementaryTargetaddress: OPTIONAL<AddressType>;
    /**
     * @summary `cotargetaddress`.
     * @description
     *
     * Identities of co-targets, one `AddressType` each. A co-target is the
     * individual or group address with whom the target is communicating
     * (clause 3.1). Several co-targets produce several entries (clause 6.2.2).
     * For IP, the correspondent IP address is placed on the co-target
     * (clause 6.3.2.5). Every such address is bound to the (co)target TSI that
     * is the principal monitoring key (clause 6.2).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly cotargetaddress: OPTIONAL<AddressType[]>;
    /**
     * @summary `cotargetlocation`.
     * @description
     *
     * Optional list of co-target locations. Clause 6.8 requires the target
     * location in the header and does not further define this component.
     * Annex A.3 notes that a SwMI intercepting a target on its own system can
     * report that the correspondent is on another SwMI and still lack that
     * correspondent's location area.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.1, annex A.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly cotargetlocation: OPTIONAL<LocationType[]>;

    constructor (
        tLIInstanceid: TLIIdType,
        timestamp: UTCTime,
        targetLocation: LocationType,
        targetAction: ActivityType,
        supplementaryTargetaddress: OPTIONAL<AddressType>,
        cotargetaddress: OPTIONAL<AddressType[]>,
        cotargetlocation: OPTIONAL<LocationType[]>
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.timestamp = timestamp;
        this.targetLocation = targetLocation;
        this.targetAction = targetAction;
        this.supplementaryTargetaddress = supplementaryTargetaddress;
        this.cotargetaddress = cotargetaddress;
        this.cotargetlocation = cotargetlocation;
    }

    /**
     * @summary Restructures an object into a TARGETACTIVITYMONITORind
     * @description
     * 
     * This takes an `object` and converts it to a `TARGETACTIVITYMONITORind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TARGETACTIVITYMONITORind`.
     * @returns {TARGETACTIVITYMONITORind}
     */
    public static _from_object (_o: { [_K in keyof (TARGETACTIVITYMONITORind)]: (TARGETACTIVITYMONITORind)[_K] }): TARGETACTIVITYMONITORind {
        return new TARGETACTIVITYMONITORind(_o.tLIInstanceid, _o.timestamp, _o.targetLocation, _o.targetAction, _o.supplementaryTargetaddress, _o.cotargetaddress, _o.cotargetlocation);
    }


}

/**
 * @summary The Leading Root Component Types of TARGETACTIVITYMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TARGETACTIVITYMONITORind: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetLocation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetAction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("supplementaryTargetaddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cotargetaddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cotargetlocation", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TARGETACTIVITYMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TARGETACTIVITYMONITORind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TARGETACTIVITYMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TARGETACTIVITYMONITORind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TARGETACTIVITYMONITORind: $.ASN1Decoder<TARGETACTIVITYMONITORind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TARGETACTIVITYMONITORind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TARGETACTIVITYMONITORind (el: _Element): TARGETACTIVITYMONITORind {
    if (!_cached_decoder_for_TARGETACTIVITYMONITORind) { _cached_decoder_for_TARGETACTIVITYMONITORind = function (el: _Element): TARGETACTIVITYMONITORind {
    let tLIInstanceid!: TLIIdType;
    let timestamp!: UTCTime;
    let targetLocation!: LocationType;
    let targetAction!: ActivityType;
    let supplementaryTargetaddress: OPTIONAL<AddressType>;
    let cotargetaddress: OPTIONAL<AddressType[]>;
    let cotargetlocation: OPTIONAL<LocationType[]>;
    const callbacks: $.DecodingMap = {
        "tLIInstanceid": (_el: _Element): void => { tLIInstanceid = _decode_TLIIdType(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decodeUTCTime(_el); },
        "targetLocation": (_el: _Element): void => { targetLocation = _decode_LocationType(_el); },
        "targetAction": (_el: _Element): void => { targetAction = _decode_ActivityType(_el); },
        "supplementaryTargetaddress": (_el: _Element): void => { supplementaryTargetaddress = _decode_AddressType(_el); },
        "cotargetaddress": (_el: _Element): void => { cotargetaddress = $._decodeSequenceOf<AddressType>(() => _decode_AddressType)(_el); },
        "cotargetlocation": (_el: _Element): void => { cotargetlocation = $._decodeSequenceOf<LocationType>(() => _decode_LocationType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TARGETACTIVITYMONITORind,
        _extension_additions_list_spec_for_TARGETACTIVITYMONITORind,
        _root_component_type_list_2_spec_for_TARGETACTIVITYMONITORind,
        undefined,
    );
    return new TARGETACTIVITYMONITORind(
        tLIInstanceid,
        timestamp,
        targetLocation,
        targetAction,
        supplementaryTargetaddress,
        cotargetaddress,
        cotargetlocation
    );
}; }
    return _cached_decoder_for_TARGETACTIVITYMONITORind(el);
}

let _cached_encoder_for_TARGETACTIVITYMONITORind: $.ASN1Encoder<TARGETACTIVITYMONITORind> | null = null;

/**
 * @summary Encodes a(n) TARGETACTIVITYMONITORind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TARGETACTIVITYMONITORind, encoded as an ASN.1 Element.
 */
export
function _encode_TARGETACTIVITYMONITORind (value: TARGETACTIVITYMONITORind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TARGETACTIVITYMONITORind) { _cached_encoder_for_TARGETACTIVITYMONITORind = function (value: TARGETACTIVITYMONITORind, elGetter: $.ASN1Encoder<TARGETACTIVITYMONITORind>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_LocationType, $.BER)(value.targetLocation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ActivityType, $.BER)(value.targetAction, $.BER);
    if (value.supplementaryTargetaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_AddressType, $.BER)(value.supplementaryTargetaddress, $.BER);
    }
    if (value.cotargetaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<AddressType>(() => _encode_AddressType, $.BER), $.BER)(value.cotargetaddress, $.BER);
    }
    if (value.cotargetlocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<LocationType>(() => _encode_LocationType, $.BER), $.BER)(value.cotargetlocation, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TARGETACTIVITYMONITORind(value, elGetter);
}


/* eslint-enable */
