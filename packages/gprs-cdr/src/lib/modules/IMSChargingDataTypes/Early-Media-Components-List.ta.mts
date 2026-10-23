/* eslint-disable */
import {
    GraphicString,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SDP_Media_Component, _decode_SDP_Media_Component, _encode_SDP_Media_Component } from "../IMSChargingDataTypes/SDP-Media-Component.ta.mjs";
import { SDP_Type, _decode_SDP_Type, _encode_SDP_Type, _enum_for_SDP_Type } from "../IMSChargingDataTypes/SDP-Type.ta.mjs";


/**
 * @summary Early_Media_Components_List
 * @description
 *
 * SDP for media set active before the final answer to the initial INVITE
 * (clause 6.3.1.2). Do not include this field when no media was set active
 * before that answer. It may appear on a session CDR or on an event CDR.
 * Once a component is active, later status changes are recorded here too.
 * The offer/answer rules of clause 5.1.3 still apply.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.3.
 *
 * This is a grouped field which may occur several times in one CDR. This
 * field describes session, media parameters and timestamps related to media
 * components set to active according to SDP signalling exchanged during a
 * SIP session establishment and before the final successful or unsuccessful
 * SIP ANSWER to the initial SIP INVITE message is received. Once a media
 * component has been set to active, subsequent status changes shall also be
 * registered. This field applies only to SIP session related cases, but it
 * may be present both in event CDRs (unsuccessful session establishment) and
 * session CDRs (successful session establishment). The List of Early SDP
 * Media Components contains the following elements: SDP Offer Timestamp; SDP
 * Answer Timestamp; SDP Media Components; Media Initiator flag; SDP Session
 * Description. These fields are described in the appropriate subclause.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.25.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Early-Media-Components-List ::= SEQUENCE {
 *    sDP-Offer-Timestamp       [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sDP-Answer-Timestamp      [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sDP-Media-Components      [2] IMPLICIT SEQUENCE  OF
 *       SDP-Media-Component OPTIONAL,
 *    mediaInitiatorFlag        [3] IMPLICIT NULL OPTIONAL,
 *    sDP-Session-Description   [4] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    sDP-Type                  [5] IMPLICIT SDP-Type OPTIONAL}
 * ```
 * 
 * @class
 */
export
class Early_Media_Components_List {
    /**
     * @summary `sDP_Offer_Timestamp`.
     * @description
     *
     * This parameter contains the time of the SIP request which conveys the
     * SDP offer.
     *
     * @public
     * @readonly
     */
    readonly sDP_Offer_Timestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sDP_Answer_Timestamp`.
     * @description
     *
     * This parameter contains the time of the response to the SIP request
     * which conveys the SDP answer.
     *
     * @public
     * @readonly
     */
    readonly sDP_Answer_Timestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sDP_Media_Components`.
     * @description
     *
     * This is a grouped field comprising several sub-fields associated with
     * one media component. Since several media components may exist for a
     * session in parallel these sub-fields may occur several times..
     *
     * @public
     * @readonly
     */
    readonly sDP_Media_Components: OPTIONAL<SDP_Media_Component[]>;
    /**
     * @summary `mediaInitiatorFlag`.
     * @description
     *
     * This field indicates if the called party has requested the session
     * modification and it is present only if the initiator was the called
     * party.
     *
     * @public
     * @readonly
     */
    readonly mediaInitiatorFlag: OPTIONAL<NULL>;
    /**
     * @summary `sDP_Session_Description`.
     * @description
     *
     * Session-level SDP lines (i=, c=, b=, k=, a=, and similar) for media set
     * active before the final answer to the initial INVITE (clause 6.3.1.2).
     * Absent when no media was set active before that answer..
     *
     * @public
     * @readonly
     */
    readonly sDP_Session_Description: OPTIONAL<GraphicString[]>;
    /**
     * @summary `sDP_Type`.
     * @description
     *
     * This parameter indicates if the SDP media component is an SDP offer or
     * SDP answer.
     *
     * @public
     * @readonly
     */
    readonly sDP_Type: OPTIONAL<SDP_Type>;

    constructor (
        sDP_Offer_Timestamp: OPTIONAL<OCTET_STRING>,
        sDP_Answer_Timestamp: OPTIONAL<OCTET_STRING>,
        sDP_Media_Components: OPTIONAL<SDP_Media_Component[]>,
        mediaInitiatorFlag: OPTIONAL<NULL>,
        sDP_Session_Description: OPTIONAL<GraphicString[]>,
        sDP_Type: OPTIONAL<SDP_Type>
    ) {
        this.sDP_Offer_Timestamp = sDP_Offer_Timestamp;
        this.sDP_Answer_Timestamp = sDP_Answer_Timestamp;
        this.sDP_Media_Components = sDP_Media_Components;
        this.mediaInitiatorFlag = mediaInitiatorFlag;
        this.sDP_Session_Description = sDP_Session_Description;
        this.sDP_Type = sDP_Type;
    
        if (this.sDP_Offer_Timestamp !== undefined && (this.sDP_Offer_Timestamp.length !== 9)) {
            throw new ASN1SizeError("Early_Media_Components_List.sDP_Offer_Timestamp violates SIZE constraint");
        }
        if (this.sDP_Answer_Timestamp !== undefined && (this.sDP_Answer_Timestamp.length !== 9)) {
            throw new ASN1SizeError("Early_Media_Components_List.sDP_Answer_Timestamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a Early_Media_Components_List
     * @description
     * 
     * This takes an `object` and converts it to a `Early_Media_Components_List`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Early_Media_Components_List`.
     * @returns {Early_Media_Components_List}
     */
    public static _from_object (_o: { [_K in keyof (Early_Media_Components_List)]: (Early_Media_Components_List)[_K] }): Early_Media_Components_List {
        return new Early_Media_Components_List(_o.sDP_Offer_Timestamp, _o.sDP_Answer_Timestamp, _o.sDP_Media_Components, _o.mediaInitiatorFlag, _o.sDP_Session_Description, _o.sDP_Type);
    }

        /**
         * @summary The enum used as the type of the component `sDP_Type`
         * @public
         * @static
         */

    public static _enum_for_sDP_Type = _enum_for_SDP_Type;
}

/**
 * @summary The Leading Root Component Types of Early_Media_Components_List
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Early_Media_Components_List: $.ComponentSpec[] = [
    new $.ComponentSpec("sDP-Offer-Timestamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sDP-Answer-Timestamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sDP-Media-Components", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mediaInitiatorFlag", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sDP-Session-Description", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sDP-Type", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of Early_Media_Components_List
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Early_Media_Components_List: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Early_Media_Components_List
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Early_Media_Components_List: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Early_Media_Components_List: $.ASN1Decoder<Early_Media_Components_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Early_Media_Components_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Early_Media_Components_List (el: _Element): Early_Media_Components_List {
    if (!_cached_decoder_for_Early_Media_Components_List) { _cached_decoder_for_Early_Media_Components_List = function (el: _Element): Early_Media_Components_List {
    let sDP_Offer_Timestamp: OPTIONAL<OCTET_STRING>;
    let sDP_Answer_Timestamp: OPTIONAL<OCTET_STRING>;
    let sDP_Media_Components: OPTIONAL<SDP_Media_Component[]>;
    let mediaInitiatorFlag: OPTIONAL<NULL>;
    let sDP_Session_Description: OPTIONAL<GraphicString[]>;
    let sDP_Type: OPTIONAL<SDP_Type>;
    const callbacks: $.DecodingMap = {
        "sDP-Offer-Timestamp": (_el: _Element): void => { sDP_Offer_Timestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sDP-Answer-Timestamp": (_el: _Element): void => { sDP_Answer_Timestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sDP-Media-Components": (_el: _Element): void => { sDP_Media_Components = $._decode_implicit<SDP_Media_Component[]>(() => $._decodeSequenceOf<SDP_Media_Component>(() => _decode_SDP_Media_Component))(_el); },
        "mediaInitiatorFlag": (_el: _Element): void => { mediaInitiatorFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sDP-Session-Description": (_el: _Element): void => { sDP_Session_Description = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "sDP-Type": (_el: _Element): void => { sDP_Type = $._decode_implicit<SDP_Type>(() => _decode_SDP_Type)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Early_Media_Components_List,
        _extension_additions_list_spec_for_Early_Media_Components_List,
        _root_component_type_list_2_spec_for_Early_Media_Components_List,
        undefined,
    );
    return new Early_Media_Components_List(
        sDP_Offer_Timestamp,
        sDP_Answer_Timestamp,
        sDP_Media_Components,
        mediaInitiatorFlag,
        sDP_Session_Description,
        sDP_Type
    );
}; }
    return _cached_decoder_for_Early_Media_Components_List(el);
}

let _cached_encoder_for_Early_Media_Components_List: $.ASN1Encoder<Early_Media_Components_List> | null = null;

/**
 * @summary Encodes a(n) Early_Media_Components_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Early_Media_Components_List, encoded as an ASN.1 Element.
 */
export
function _encode_Early_Media_Components_List (value: Early_Media_Components_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Early_Media_Components_List) { _cached_encoder_for_Early_Media_Components_List = function (value: Early_Media_Components_List, _elGetter: $.ASN1Encoder<Early_Media_Components_List>): _Element {
    const _components: _Element[] = [];
    if (value.sDP_Offer_Timestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sDP_Offer_Timestamp, $.BER));
    }
    if (value.sDP_Answer_Timestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sDP_Answer_Timestamp, $.BER));
    }
    if (value.sDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SDP_Media_Component>(() => _encode_SDP_Media_Component, $.BER), $.BER)(value.sDP_Media_Components, $.BER));
    }
    if (value.mediaInitiatorFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.mediaInitiatorFlag, $.BER));
    }
    if (value.sDP_Session_Description !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.sDP_Session_Description, $.BER));
    }
    if (value.sDP_Type !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SDP_Type, $.BER)(value.sDP_Type, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Early_Media_Components_List(value, elGetter);
}


/* eslint-enable */
