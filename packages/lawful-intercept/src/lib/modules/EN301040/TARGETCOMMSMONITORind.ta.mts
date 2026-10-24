/* eslint-disable */
import {
    type OPTIONAL,
    type UTCTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
import { type LocationType, _decode_LocationType, _encode_LocationType } from "../EN301040/LocationType.ta.mjs";
// export { LocationType, _decode_LocationType, _encode_LocationType } from "../EN301040/LocationType.ta.mjs";
import { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
// export { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
import { type CircuitIdType, _decode_CircuitIdType, _encode_CircuitIdType } from "../EN301040/CircuitIdType.ta.mjs";
// export { CircuitIdType, _decode_CircuitIdType, _encode_CircuitIdType } from "../EN301040/CircuitIdType.ta.mjs";


/**
 * @summary TARGETCOMMSMONITORind
 * @description
 * 
 * `TARGET_COMMS_MONITOR_ind` marks the change from signalling or packet-mode
 * data to circuit-mode activity, and it identifies the logical place of the
 * following `TTRAFFICind` and `CTTRAFFICind` flows. No response is expected.
 * The flow is carried in the body of an IRI-Record across HI2.
 *
 * Annex E requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; interceptVersion in the
 * module object identifier is incremented when the published module changes.
 * Clause 1 leaves encoding towards the LEMF to the handover interface that is
 * adopted.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TARGETCOMMSMONITORind ::= SEQUENCE {
 *         tLIInstanceid                TLIIdType,
 *         timestamp                    UTCTime,
 *         targetlocation               LocationType,
 *         supplementaryTargetaddress    AddressType OPTIONAL,
 *         targetcommsid               CircuitIdType,
 *         cotargetaddress               SEQUENCE OF AddressType OPTIONAL,
 *         cotargetcommsid              SEQUENCE OF CircuitIdType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TARGETCOMMSMONITORind {
    /**
     * @summary `tLIInstanceid`.
     * @description
     *
     * 16-bit interception tag. It identifies the LEA, the target, the network
     * operator or service provider, and the warrant reference. It is allocated
     * in `LIACTIVATEconf` when activation succeeds and then copied onto later
     * flows so those flows correlate with that provision (clause 4.3.2,
     * clause 6.1). One LI interface instance serves one target (clause 4.7).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2, clause 6.1.
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
     * UTC time on this information flow. Coordinated Universal Time is defined
     * in clause 3.1. EN 301 040 does not name the event this component
     * timestamps.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly timestamp: UTCTime;
    /**
     * @summary `targetlocation`.
     * @description
     *
     * Location of the target on this circuit-mode indication.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2, clause 6.8.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly targetlocation: LocationType;
    /**
     * @summary `supplementaryTargetaddress`.
     * @description
     *
     * Optional supplementary address of the target on this circuit-mode
     * indication. Clause 6.2.1 assigns the supplementary target address on
     * `TARGETACTIVITYMONITORind`; this component is the same-named optional
     * field of the circuit-mode indication.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly supplementaryTargetaddress: OPTIONAL<AddressType>;
    /**
     * @summary `targetcommsid`.
     * @description
     *
     * Logical identity of the circuit that will carry the target's
     * `TTRAFFICind` packets. A numeric string of 20 digits. EN 301 040 does not
     * define the numbering plan.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly targetcommsid: CircuitIdType;
    /**
     * @summary `cotargetaddress`.
     * @description
     *
     * Optional co-target addresses for the circuit-mode call. A co-target is
     * the correspondent of the target (clause 3.1).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2, clause 6.2.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly cotargetaddress: OPTIONAL<AddressType[]>;
    /**
     * @summary `cotargetcommsid`.
     * @description
     *
     * Optional circuit identities for co-target `CTTRAFFICind` packets.
     * Clause 6.7 sends target content and co-target content to the mediation
     * function on separate links.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.2.2, clause 6.7.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly cotargetcommsid: OPTIONAL<CircuitIdType[]>;

    constructor (
        tLIInstanceid: TLIIdType,
        timestamp: UTCTime,
        targetlocation: LocationType,
        supplementaryTargetaddress: OPTIONAL<AddressType>,
        targetcommsid: CircuitIdType,
        cotargetaddress?: OPTIONAL<AddressType[]>,
        cotargetcommsid?: OPTIONAL<CircuitIdType[]>
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.timestamp = timestamp;
        this.targetlocation = targetlocation;
        this.supplementaryTargetaddress = supplementaryTargetaddress;
        this.targetcommsid = targetcommsid;
        this.cotargetaddress = cotargetaddress;
        this.cotargetcommsid = cotargetcommsid;
    }

    /**
     * @summary Restructures an object into a TARGETCOMMSMONITORind
     * @description
     * 
     * This takes an `object` and converts it to a `TARGETCOMMSMONITORind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TARGETCOMMSMONITORind`.
     * @returns {TARGETCOMMSMONITORind}
     */
    public static _from_object (_o: { [_K in keyof (TARGETCOMMSMONITORind)]: (TARGETCOMMSMONITORind)[_K] }): TARGETCOMMSMONITORind {
        return new TARGETCOMMSMONITORind(_o.tLIInstanceid, _o.timestamp, _o.targetlocation, _o.supplementaryTargetaddress, _o.targetcommsid, _o.cotargetaddress, _o.cotargetcommsid);
    }


}

/**
 * @summary The Leading Root Component Types of TARGETCOMMSMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TARGETCOMMSMONITORind: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetlocation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("supplementaryTargetaddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetcommsid", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cotargetaddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cotargetcommsid", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TARGETCOMMSMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TARGETCOMMSMONITORind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TARGETCOMMSMONITORind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TARGETCOMMSMONITORind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TARGETCOMMSMONITORind: $.ASN1Decoder<TARGETCOMMSMONITORind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TARGETCOMMSMONITORind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TARGETCOMMSMONITORind (el: _Element): TARGETCOMMSMONITORind {
    if (!_cached_decoder_for_TARGETCOMMSMONITORind) { _cached_decoder_for_TARGETCOMMSMONITORind = function (el: _Element): TARGETCOMMSMONITORind {
    let tLIInstanceid!: TLIIdType;
    let timestamp!: UTCTime;
    let targetlocation!: LocationType;
    let supplementaryTargetaddress: OPTIONAL<AddressType>;
    let targetcommsid!: CircuitIdType;
    let cotargetaddress: OPTIONAL<AddressType[]>;
    let cotargetcommsid: OPTIONAL<CircuitIdType[]>;
    const callbacks: $.DecodingMap = {
        "tLIInstanceid": (_el: _Element): void => { tLIInstanceid = _decode_TLIIdType(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decodeUTCTime(_el); },
        "targetlocation": (_el: _Element): void => { targetlocation = _decode_LocationType(_el); },
        "supplementaryTargetaddress": (_el: _Element): void => { supplementaryTargetaddress = _decode_AddressType(_el); },
        "targetcommsid": (_el: _Element): void => { targetcommsid = _decode_CircuitIdType(_el); },
        "cotargetaddress": (_el: _Element): void => { cotargetaddress = $._decodeSequenceOf<AddressType>(() => _decode_AddressType)(_el); },
        "cotargetcommsid": (_el: _Element): void => { cotargetcommsid = $._decodeSequenceOf<CircuitIdType>(() => _decode_CircuitIdType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TARGETCOMMSMONITORind,
        _extension_additions_list_spec_for_TARGETCOMMSMONITORind,
        _root_component_type_list_2_spec_for_TARGETCOMMSMONITORind,
        undefined,
    );
    return new TARGETCOMMSMONITORind(
        tLIInstanceid,
        timestamp,
        targetlocation,
        supplementaryTargetaddress,
        targetcommsid,
        cotargetaddress,
        cotargetcommsid
    );
}; }
    return _cached_decoder_for_TARGETCOMMSMONITORind(el);
}

let _cached_encoder_for_TARGETCOMMSMONITORind: $.ASN1Encoder<TARGETCOMMSMONITORind> | null = null;

/**
 * @summary Encodes a(n) TARGETCOMMSMONITORind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TARGETCOMMSMONITORind, encoded as an ASN.1 Element.
 */
export
function _encode_TARGETCOMMSMONITORind (value: TARGETCOMMSMONITORind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TARGETCOMMSMONITORind) { _cached_encoder_for_TARGETCOMMSMONITORind = function (value: TARGETCOMMSMONITORind, elGetter: $.ASN1Encoder<TARGETCOMMSMONITORind>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTCTime, $.BER)(value.timestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_LocationType, $.BER)(value.targetlocation, $.BER);
    if (value.supplementaryTargetaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AddressType, $.BER)(value.supplementaryTargetaddress, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_CircuitIdType, $.BER)(value.targetcommsid, $.BER);
    if (value.cotargetaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<AddressType>(() => _encode_AddressType, $.BER), $.BER)(value.cotargetaddress, $.BER);
    }
    if (value.cotargetcommsid !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<CircuitIdType>(() => _encode_CircuitIdType, $.BER), $.BER)(value.cotargetcommsid, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TARGETCOMMSMONITORind(value, elGetter);
}


/* eslint-enable */
