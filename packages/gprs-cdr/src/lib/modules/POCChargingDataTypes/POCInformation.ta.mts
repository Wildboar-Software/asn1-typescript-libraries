/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { POCSessionType, _decode_POCSessionType, _encode_POCSessionType, _enum_for_POCSessionType } from "../POCChargingDataTypes/POCSessionType.ta.mjs";
import { POCParticipant, _decode_POCParticipant, _encode_POCParticipant } from "../POCChargingDataTypes/POCParticipant.ta.mjs";
import { ListofTalkBurstExchange, _decode_ListofTalkBurstExchange, _encode_ListofTalkBurstExchange } from "../POCChargingDataTypes/ListofTalkBurstExchange.ta.mjs";
import { POCSessionInitType, _decode_POCSessionInitType, _encode_POCSessionInitType, _enum_for_POCSessionInitType } from "../POCChargingDataTypes/POCSessionInitType.ta.mjs";
import { POCEventType, _decode_POCEventType, _encode_POCEventType, _enum_for_POCEventType } from "../POCChargingDataTypes/POCEventType.ta.mjs";


/**
 * @summary POCInformation
 * @description
 *
 * PoC-specific charging parameters. They are carried in Service
 * Information and stored in the PoC Information field of the CDR.
 *
 * On a participating CDR this is the session type and the
 * participant's accumulated sent and received talk bursts. On a
 * controlling CDR it is the session type, the number and list of
 * participants, and the talk bursts accumulated for the session.
 *
 * TS 32.272 also defines PoC Server Role (participating or
 * controlling) and PoC User Role inside this structure. Neither
 * is a field here. The server role is which `POCRecord`
 * alternative carries the CDR. PoC User Role is only described
 * as a list of role information, with the details left to
 * OMA-AD-POC.
 *
 * Field categories are those of TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.3 and 6.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCInformation ::= SET {
 *    pOCSessionType             [1] IMPLICIT POCSessionType OPTIONAL,
 *    numberofParticipants       [2] IMPLICIT INTEGER OPTIONAL,
 *    listofParticipants         [3] IMPLICIT SEQUENCE  OF
 *       POCParticipant OPTIONAL,
 *    listofTalkBurstExchange    [4] IMPLICIT SEQUENCE  OF
 *       ListofTalkBurstExchange OPTIONAL,
 *    pOCControllingAddress      [5] IMPLICIT UTF8String OPTIONAL,
 *    pOCGroupName               [6] IMPLICIT UTF8String OPTIONAL,
 *    pOCSessionId               [7] IMPLICIT UTF8String OPTIONAL,
 *    pOCSessionInitiationType   [8] IMPLICIT POCSessionInitType OPTIONAL,
 *    pOCEventType               [9] IMPLICIT POCEventType OPTIONAL}
 * ```
 * 
 * @class
 */
export
class POCInformation {
    /**
     * @summary `pOCSessionType`.
     * @description
     *
     * Category OM. Type of PoC session. TS 32.272 points at
     * appendix C.5.1 of OMA-CP-POC for the type, and requires
     * charging to distinguish 1-1, ad-hoc group, pre-arranged
     * group, and chat group. See `POCSessionType`.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 5.1.1 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly pOCSessionType: OPTIONAL<POCSessionType>;
    /**
     * @summary `numberofParticipants`.
     * @description
     *
     * Category OM. In the initial charging request, the number of
     * invited parties. In an interim or update request, the number
     * of parties attached to the session when that request is sent.
     * TS 32.298 also describes it as the number of active
     * participants in the PoC session.
     *
     * Both the controlling and the participating server can charge
     * on this count when the controlling server provides it, as
     * defined by OMA PoC User Plane. Online, the OCS may arm
     * `CHANGE_IN_PARTICIPANTS_NMB` or
     * `CHANGE_IN_THRSHLD_OF_PARTICIPANTS_NMB`. The initial unit
     * reservation uses the pre-defined group size, or, for an
     * ad-hoc session, the number of parties invited at the start.
     *
     * The per-container count on `ListofTalkBurstExchange` is the
     * number of attached participants in that talk-burst
     * container, which is not this field.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 5.1.3, 5.3.2.5, and 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.4.
     *
     * @public
     * @readonly
     */
    readonly numberofParticipants: OPTIONAL<INTEGER>;
    /**
     * @summary `listofParticipants`.
     * @description
     *
     * Category OC. In the initial charging request, the invited
     * parties: address, access priority, and participating type.
     * In an interim or update request, the parties attached at
     * that time: address and access priority. TS 32.272 does not
     * mention participating type on the interim or update list.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.6.
     *
     * @public
     * @readonly
     */
    readonly listofParticipants: OPTIONAL<POCParticipant[]>;
    /**
     * @summary `listofTalkBurstExchange`.
     * @description
     *
     * Category OC. Offline charging only. Each entry is one
     * time-stamped change of charging condition, with the sent
     * and received talk-burst count, bearer volume, and summed
     * duration. See `ListofTalkBurstExchange`.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly listofTalkBurstExchange: OPTIONAL<ListofTalkBurstExchange[]>;
    /**
     * @summary `pOCControllingAddress`.
     * @description
     *
     * Category OC. PoC Server performing the controlling function.
     * Included only when this report is from a participating PoC
     * Server. It may be taken from the Contact header of the SIP
     * message received from the controlling function.
     *
     * 3GPP TS 32.272 V19.0.0 clause 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.7.
     *
     * @public
     * @readonly
     */
    readonly pOCControllingAddress: OPTIONAL<UTF8String>;
    /**
     * @summary `pOCGroupName`.
     * @description
     *
     * Category OC. Pre-arranged group. Included when the session
     * is a pre-arranged group session. A PoC group is a predefined
     * set of PoC users identified by a SIP URI.
     *
     * The value may be taken from the P-Asserted-Identity header
     * of the SIP message received from the controlling function,
     * or from the Request-URI sent by the PoC user.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 3.1 and 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.9.
     *
     * @public
     * @readonly
     */
    readonly pOCGroupName: OPTIONAL<UTF8String>;
    /**
     * @summary `pOCSessionId`.
     * @description
     *
     * Category OC. End-to-end PoC session identity. It may be
     * absent from the initial charging interactions for the
     * session.
     *
     * Clause 3.1 defines it as the SIP URI the PoC Client receives
     * during session establishment, in the Contact header, or in
     * the TBCP connect message when a pre-established session is
     * used, or in both.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 3.1 and 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly pOCSessionId: OPTIONAL<UTF8String>;
    /**
     * @summary `pOCSessionInitiationType`.
     * @description
     *
     * Category OC. How the PoC session was initiated. Used only
     * for the served parties. Charging distinguishes on-demand
     * establishment from a pre-established session, for both 1-1
     * and group sessions. See `POCSessionInitType`.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 5.1.1 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly pOCSessionInitiationType: OPTIONAL<POCSessionInitType>;
    /**
     * @summary `pOCEventType`.
     * @description
     *
     * Category OC. Session-unrelated PoC charging event. See
     * `POCEventType` and clause 5.1.2. Event CDRs are generated
     * for early session establishment and for instant personal
     * alert delivery.
     *
     * 3GPP TS 32.272 V19.0.0 clauses 5.2.1 and 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.8.
     *
     * @public
     * @readonly
     */
    readonly pOCEventType: OPTIONAL<POCEventType>;

    constructor (
        pOCSessionType?: OPTIONAL<POCSessionType>,
        numberofParticipants?: OPTIONAL<INTEGER>,
        listofParticipants?: OPTIONAL<POCParticipant[]>,
        listofTalkBurstExchange?: OPTIONAL<ListofTalkBurstExchange[]>,
        pOCControllingAddress?: OPTIONAL<UTF8String>,
        pOCGroupName?: OPTIONAL<UTF8String>,
        pOCSessionId?: OPTIONAL<UTF8String>,
        pOCSessionInitiationType?: OPTIONAL<POCSessionInitType>,
        pOCEventType?: OPTIONAL<POCEventType>
    ) {
        this.pOCSessionType = pOCSessionType;
        this.numberofParticipants = numberofParticipants;
        this.listofParticipants = listofParticipants;
        this.listofTalkBurstExchange = listofTalkBurstExchange;
        this.pOCControllingAddress = pOCControllingAddress;
        this.pOCGroupName = pOCGroupName;
        this.pOCSessionId = pOCSessionId;
        this.pOCSessionInitiationType = pOCSessionInitiationType;
        this.pOCEventType = pOCEventType;
    }

    /**
     * @summary Restructures an object into a POCInformation
     * @description
     * 
     * This takes an `object` and converts it to a `POCInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `POCInformation`.
     * @returns {POCInformation}
     */
    public static _from_object (_o: { [_K in keyof (POCInformation)]: (POCInformation)[_K] }): POCInformation {
        return new POCInformation(_o.pOCSessionType, _o.numberofParticipants, _o.listofParticipants, _o.listofTalkBurstExchange, _o.pOCControllingAddress, _o.pOCGroupName, _o.pOCSessionId, _o.pOCSessionInitiationType, _o.pOCEventType);
    }

        /**
         * @summary The enum used as the type of the component `pOCSessionType`
         * @public
         * @static
         */

    public static _enum_for_pOCSessionType = _enum_for_POCSessionType;        /**
         * @summary The enum used as the type of the component `pOCSessionInitiationType`
         * @public
         * @static
         */

    public static _enum_for_pOCSessionInitiationType = _enum_for_POCSessionInitType;        /**
         * @summary The enum used as the type of the component `pOCEventType`
         * @public
         * @static
         */

    public static _enum_for_pOCEventType = _enum_for_POCEventType;
}

/**
 * @summary The Leading Root Component Types of POCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_POCInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("pOCSessionType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberofParticipants", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("listofParticipants", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("listofTalkBurstExchange", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pOCControllingAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pOCGroupName", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pOCSessionId", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pOCSessionInitiationType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pOCEventType", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of POCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_POCInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of POCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_POCInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_POCInformation: $.ASN1Decoder<POCInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) POCInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_POCInformation (el: _Element): POCInformation {
    if (!_cached_decoder_for_POCInformation) { _cached_decoder_for_POCInformation = function (el: _Element): POCInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let pOCSessionType: OPTIONAL<POCSessionType>;
    let numberofParticipants: OPTIONAL<INTEGER>;
    let listofParticipants: OPTIONAL<POCParticipant[]>;
    let listofTalkBurstExchange: OPTIONAL<ListofTalkBurstExchange[]>;
    let pOCControllingAddress: OPTIONAL<UTF8String>;
    let pOCGroupName: OPTIONAL<UTF8String>;
    let pOCSessionId: OPTIONAL<UTF8String>;
    let pOCSessionInitiationType: OPTIONAL<POCSessionInitType>;
    let pOCEventType: OPTIONAL<POCEventType>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "pOCSessionType": (_el: _Element): void => { pOCSessionType = $._decode_implicit<POCSessionType>(() => _decode_POCSessionType)(_el); },
        "numberofParticipants": (_el: _Element): void => { numberofParticipants = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "listofParticipants": (_el: _Element): void => { listofParticipants = $._decode_implicit<POCParticipant[]>(() => $._decodeSequenceOf<POCParticipant>(() => _decode_POCParticipant))(_el); },
        "listofTalkBurstExchange": (_el: _Element): void => { listofTalkBurstExchange = $._decode_implicit<ListofTalkBurstExchange[]>(() => $._decodeSequenceOf<ListofTalkBurstExchange>(() => _decode_ListofTalkBurstExchange))(_el); },
        "pOCControllingAddress": (_el: _Element): void => { pOCControllingAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pOCGroupName": (_el: _Element): void => { pOCGroupName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pOCSessionId": (_el: _Element): void => { pOCSessionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pOCSessionInitiationType": (_el: _Element): void => { pOCSessionInitiationType = $._decode_implicit<POCSessionInitType>(() => _decode_POCSessionInitType)(_el); },
        "pOCEventType": (_el: _Element): void => { pOCEventType = $._decode_implicit<POCEventType>(() => _decode_POCEventType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_POCInformation,
        _extension_additions_list_spec_for_POCInformation,
        _root_component_type_list_2_spec_for_POCInformation,
        undefined,
    );
    return new POCInformation( /* SET_CONSTRUCTOR_CALL */
        pOCSessionType,
        numberofParticipants,
        listofParticipants,
        listofTalkBurstExchange,
        pOCControllingAddress,
        pOCGroupName,
        pOCSessionId,
        pOCSessionInitiationType,
        pOCEventType
    );
}; }
    return _cached_decoder_for_POCInformation(el);
}

let _cached_encoder_for_POCInformation: $.ASN1Encoder<POCInformation> | null = null;

/**
 * @summary Encodes a(n) POCInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POCInformation, encoded as an ASN.1 Element.
 */
export
function _encode_POCInformation (value: POCInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_POCInformation) { _cached_encoder_for_POCInformation = function (value: POCInformation, _elGetter: $.ASN1Encoder<POCInformation>): _Element {
    const _components: _Element[] = [];
    if (value.pOCSessionType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_POCSessionType, $.BER)(value.pOCSessionType, $.BER));
    }
    if (value.numberofParticipants !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numberofParticipants, $.BER));
    }
    if (value.listofParticipants !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<POCParticipant>(() => _encode_POCParticipant, $.BER), $.BER)(value.listofParticipants, $.BER));
    }
    if (value.listofTalkBurstExchange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ListofTalkBurstExchange>(() => _encode_ListofTalkBurstExchange, $.BER), $.BER)(value.listofTalkBurstExchange, $.BER));
    }
    if (value.pOCControllingAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.pOCControllingAddress, $.BER));
    }
    if (value.pOCGroupName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.pOCGroupName, $.BER));
    }
    if (value.pOCSessionId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.pOCSessionId, $.BER));
    }
    if (value.pOCSessionInitiationType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_POCSessionInitType, $.BER)(value.pOCSessionInitiationType, $.BER));
    }
    if (value.pOCEventType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_POCEventType, $.BER)(value.pOCEventType, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_POCInformation(value, elGetter);
}


/* eslint-enable */
