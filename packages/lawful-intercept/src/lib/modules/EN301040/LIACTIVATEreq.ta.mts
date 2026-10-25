/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type UTCTime,
    type VisibleString,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
// export { AddressType, _decode_AddressType, _encode_AddressType } from "../EN301040/AddressType.ta.mjs";
import { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";
// export { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";


/**
 * @summary LIACTIVATEreq
 * @description
 * 
 * `LI_ACTIVATE_req` is sent from the mediation function to the SwMI. It asks
 * the SwMI to redirect the target's traffic (`TTRAFFICind`, `CTTRAFFICind`) and
 * signalling (`TARGETACTIVITYMONITORind`, `TARGETCOMMSMONITORind`). The flow
 * carries what the SwMI needs in order to validate the request and to make that
 * activity available to the mediation function. Nothing precedes it.
 * `LIACTIVATEconf` is the expected response. No protocol timer is defined;
 * clause 4.5 still requires the instance to be established as quickly as
 * possible and results to be delivered in real time or near real time, for
 * calls that start no earlier than receipt of the interception request.
 *
 * Clause 4.8 requires the LEMF to learn of activation, deactivation, any
 * change, and temporary unavailability. HI1 may carry those events. This flow
 * is the internal activation. The interface stays up for the life of the
 * warrant and, after expiry, until remaining results have been delivered. Those
 * results may include an advice of charge for the resources used to provide the
 * interception. This module has no component for that charge.
 *
 * Annex E requires ITU-T Recommendation X.680 and the Basic Encoding Rules
 * (ITU-T Recommendation X.690), plus the data-definition rules in annex D of
 * TS 101 671. The module has no extension markers; interceptVersion in the
 * module object identifier is incremented when the published module changes.
 * Clause 1 leaves encoding towards the LEMF to the handover interface that is
 * adopted.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1, clause 5.2.2.1.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIACTIVATEreq ::= SEQUENCE {
 *     timeStamp                UTCTime,
 *     invokeId                INTEGER,
 *     targetAddress           AddressType,
 *     expiryDateTime            UTCTime,
 *     -- This module uses AUTOMATIC TAGS: the two adjacent VisibleStrings will have different tags.
 *     targetname               VisibleString OPTIONAL,
 *     additionaltargetdata    VisibleString OPTIONAL,
 *     monitorServiceList       SEQUENCE OF ActivityType
 * }
 * ```
 * 
 * @class
 */
export
class LIACTIVATEreq {
    /**
     * @summary `timeStamp`.
     * @description
     *
     * UTC time on this information flow. Coordinated Universal Time is defined
     * in clause 3.1. EN 301 040 does not name the event this component
     * timestamps.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStamp: UTCTime;
    /**
     * @summary `invokeId`.
     * @description
     *
     * Integer carried on this request and on `LIACTIVATEconf`, which is the
     * response to this request. EN 301 040 does not state a rule for matching
     * the two values.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.1, clause 5.2.2.1.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly invokeId: INTEGER;
    /**
     * @summary `targetAddress`.
     * @description
     *
     * Identity to be intercepted. Clause 4.2 allows any valid TETRA Subscriber
     * Identity: an individual ITSI or a group GTSI. The address space is flat,
     * with no reserved range for either. Clause 4.2 says a multi-user gateway
     * should not be a target (an address used only as an intermediate port, for
     * example an ISDN gateway). Where the warrant names a Terminal Equipment
     * Identity, the operator uses best endeavours to find a TSI, which may use
     * the Mobility Management TEI PROVIDE exchange. Clause 4.2 does not mandate
     * that exchange; clause 6.2 requires it when the (co)target is identified
     * by TEI. See EN 300 392-7, clause 4.
     *
     * If the operator cannot map the warrant to a single address, the LI
     * interface is not invoked (clause 4.2). A home SwMI provides results only
     * for targets operating in its own network (clause 4.3.1).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 4.2, clause 6.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly targetAddress: AddressType;
    /**
     * @summary `expiryDateTime`.
     * @description
     *
     * UTC expiry carried on the activation. Clause 4.5 makes the result of
     * interception available during the period given in the interception order.
     * Clause 4.8 keeps the interface active after expiry until remaining
     * results for the target have been delivered. The same provision can later
     * be replaced through `LIMODIFYreq`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 4.5, clause 4.8,
     * clause 5.2.2.1.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly expiryDateTime: UTCTime;
    /**
     * @summary `targetname`.
     * @description
     *
     * Optional visible string on the activation. The same provision can be
     * replaced through `LIMODIFYreq`. EN 301 040 does not define the contents.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly targetname: OPTIONAL<VisibleString>;
    /**
     * @summary `additionaltargetdata`.
     * @description
     *
     * Optional visible string on the activation. The same provision can be
     * replaced through `LIMODIFYreq`. EN 301 040 does not define the contents.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly additionaltargetdata: OPTIONAL<VisibleString>;
    /**
     * @summary `monitorServiceList`.
     * @description
     *
     * Services to monitor, each one an `ActivityType` (the class, its relation
     * to the call, and any direction, scope, C-plane data, or
     * supplementary-service selector). The same list can be replaced through
     * `LIMODIFYreq`.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 5.2.2.1.1, clause 6.3.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly monitorServiceList: ActivityType[];

    constructor (
        timeStamp: UTCTime,
        invokeId: INTEGER,
        targetAddress: AddressType,
        expiryDateTime: UTCTime,
        targetname: OPTIONAL<VisibleString>,
        additionaltargetdata: OPTIONAL<VisibleString>,
        monitorServiceList: ActivityType[]
    ) {
        this.timeStamp = timeStamp;
        this.invokeId = invokeId;
        this.targetAddress = targetAddress;
        this.expiryDateTime = expiryDateTime;
        this.targetname = targetname;
        this.additionaltargetdata = additionaltargetdata;
        this.monitorServiceList = monitorServiceList;
    }

    /**
     * @summary Restructures an object into a LIACTIVATEreq
     * @description
     * 
     * This takes an `object` and converts it to a `LIACTIVATEreq`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LIACTIVATEreq`.
     * @returns {LIACTIVATEreq}
     */
    public static _from_object (_o: { [_K in keyof (LIACTIVATEreq)]: (LIACTIVATEreq)[_K] }): LIACTIVATEreq {
        return new LIACTIVATEreq(_o.timeStamp, _o.invokeId, _o.targetAddress, _o.expiryDateTime, _o.targetname, _o.additionaltargetdata, _o.monitorServiceList);
    }


}

/**
 * @summary The Leading Root Component Types of LIACTIVATEreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LIACTIVATEreq: $.ComponentSpec[] = [
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("targetAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("expiryDateTime", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetname", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionaltargetdata", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("monitorServiceList", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of LIACTIVATEreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LIACTIVATEreq: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LIACTIVATEreq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LIACTIVATEreq: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LIACTIVATEreq: $.ASN1Decoder<LIACTIVATEreq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIACTIVATEreq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIACTIVATEreq (el: _Element): LIACTIVATEreq {
    if (!_cached_decoder_for_LIACTIVATEreq) { _cached_decoder_for_LIACTIVATEreq = function (el: _Element): LIACTIVATEreq {
    let timeStamp!: UTCTime;
    let invokeId!: INTEGER;
    let targetAddress!: AddressType;
    let expiryDateTime!: UTCTime;
    let targetname: OPTIONAL<VisibleString>;
    let additionaltargetdata: OPTIONAL<VisibleString>;
    let monitorServiceList!: ActivityType[];
    const callbacks: $.DecodingMap = {
        "timeStamp": (_el: _Element): void => { timeStamp = $._decodeUTCTime(_el); },
        "invokeId": (_el: _Element): void => { invokeId = $._decodeInteger(_el); },
        "targetAddress": (_el: _Element): void => { targetAddress = _decode_AddressType(_el); },
        "expiryDateTime": (_el: _Element): void => { expiryDateTime = $._decodeUTCTime(_el); },
        "targetname": (_el: _Element): void => { targetname = $._decodeVisibleString(_el); },
        "additionaltargetdata": (_el: _Element): void => { additionaltargetdata = $._decodeVisibleString(_el); },
        "monitorServiceList": (_el: _Element): void => { monitorServiceList = $._decodeSequenceOf<ActivityType>(() => _decode_ActivityType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LIACTIVATEreq,
        _extension_additions_list_spec_for_LIACTIVATEreq,
        _root_component_type_list_2_spec_for_LIACTIVATEreq,
        undefined,
    );
    return new LIACTIVATEreq(
        timeStamp,
        invokeId,
        targetAddress,
        expiryDateTime,
        targetname,
        additionaltargetdata,
        monitorServiceList
    );
}; }
    return _cached_decoder_for_LIACTIVATEreq(el);
}

let _cached_encoder_for_LIACTIVATEreq: $.ASN1Encoder<LIACTIVATEreq> | null = null;

/**
 * @summary Encodes a(n) LIACTIVATEreq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIACTIVATEreq, encoded as an ASN.1 Element.
 */
export
function _encode_LIACTIVATEreq (value: LIACTIVATEreq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIACTIVATEreq) { _cached_encoder_for_LIACTIVATEreq = function (value: LIACTIVATEreq, elGetter: $.ASN1Encoder<LIACTIVATEreq>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTCTime, $.BER)(value.timeStamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.invokeId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AddressType, $.BER)(value.targetAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTCTime, $.BER)(value.expiryDateTime, $.BER);
    if (value.targetname !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER)(value.targetname, $.BER);
    }
    if (value.additionaltargetdata !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeVisibleString, $.BER)(value.additionaltargetdata, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ActivityType>(() => _encode_ActivityType, $.BER), $.BER)(value.monitorServiceList, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LIACTIVATEreq(value, elGetter);
}


/* eslint-enable */
