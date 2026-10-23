/* eslint-disable */
import {
    GraphicString,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SDP_Media_Components, _decode_SDP_Media_Components, _encode_SDP_Media_Components } from "../MMTelChargingDataTypes/SDP-Media-Components.ta.mjs";
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../MMTelChargingDataTypes/InvolvedParty.ta.mjs";
import { SDP_Type, _decode_SDP_Type, _encode_SDP_Type, _enum_for_SDP_Type } from "../MMTelChargingDataTypes/SDP-Type.ta.mjs";


/**
 * @summary List_Of_SDP_Media_Components
 * @description
 *
 * This is a grouped field which may occur several times in one CDR and the
 * content should be filled as described in TS 32.260 [20] clause 5.1.3. The
 * field is present only in a SIP session related case. The List of SDP Media
 * Components contains the following elements: SIP Request Timestamp; SIP
 * Response Timestamp; SDP Media Components; Media Initiator flag; SDP
 * Session Description. Media Initiator Party. The Media Initiator Party is
 * only used for PoC charging. These field elements are described in the
 * appropriate subclause.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.28.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * List-Of-SDP-Media-Components ::= SEQUENCE {
 *    sIP-Request-Timestamp             [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sIP-Response-Timestamp            [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    sDP-Media-Components              [2] IMPLICIT SEQUENCE  OF
 *       SDP-Media-Components OPTIONAL,
 *    mediaInitiatorFlag                [3] IMPLICIT NULL OPTIONAL,
 *    sDP-Session-Description           [4] IMPLICIT SEQUENCE  OF
 *       GraphicString OPTIONAL,
 *    mediaInitiatorParty               [5] InvolvedParty OPTIONAL,
 *    sIP-Request-Timestamp-Fraction    [6] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    sIP-Response-Timestamp-Fraction   [7] IMPLICIT INTEGER ( 0 .. 999 ) OPTIONAL,
 *    sDP-Type                          [8] IMPLICIT SDP-Type OPTIONAL}
 * ```
 * 
 * @class
 */
export
class List_Of_SDP_Media_Components {
    /**
     * @summary `sIP_Request_Timestamp`.
     * @description
     *
     * SIP Request Timestamp;
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.28.
     *
     * @public
     * @readonly
     */
    readonly sIP_Request_Timestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sIP_Response_Timestamp`.
     * @description
     *
     * SIP Response Timestamp;
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.28.
     *
     * @public
     * @readonly
     */
    readonly sIP_Response_Timestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sDP_Media_Components`.
     * @public
     * @readonly
     */
    readonly sDP_Media_Components: OPTIONAL<SDP_Media_Components[]>;
    /**
     * @summary `mediaInitiatorFlag`.
     * @description
     *
     * This field indicates if the called party has requested the session
     * modification and it is present only if the initiator was the called party.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.30.
     *
     * @public
     * @readonly
     */
    readonly mediaInitiatorFlag: OPTIONAL<NULL>;
    /**
     * @summary `sDP_Session_Description`.
     * @public
     * @readonly
     */
    readonly sDP_Session_Description: OPTIONAL<GraphicString[]>;
    /**
     * @summary `mediaInitiatorParty`.
     * @description
     *
     * This field indicates initiating party who has requested the session
     * modification in PoC charging.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.31.
     *
     * @public
     * @readonly
     */
    readonly mediaInitiatorParty: OPTIONAL<InvolvedParty>;
    /**
     * @summary `sIP_Request_Timestamp_Fraction`.
     * @description
     *
     * This parameter contains the milliseconds fraction in relation to the SIP
     * Request Timestamp.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.63.
     *
     * @public
     * @readonly
     */
    readonly sIP_Request_Timestamp_Fraction: OPTIONAL<INTEGER>;
    /**
     * @summary `sIP_Response_Timestamp_Fraction`.
     * @description
     *
     * This parameter contains the milliseconds fraction in relation to the SIP
     * Response Timestamp.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.65.
     *
     * @public
     * @readonly
     */
    readonly sIP_Response_Timestamp_Fraction: OPTIONAL<INTEGER>;
    /**
     * @summary `sDP_Type`.
     * @public
     * @readonly
     */
    readonly sDP_Type: OPTIONAL<SDP_Type>;

    constructor (
        sIP_Request_Timestamp?: OPTIONAL<OCTET_STRING>,
        sIP_Response_Timestamp?: OPTIONAL<OCTET_STRING>,
        sDP_Media_Components?: OPTIONAL<SDP_Media_Components[]>,
        mediaInitiatorFlag?: OPTIONAL<NULL>,
        sDP_Session_Description?: OPTIONAL<GraphicString[]>,
        mediaInitiatorParty?: OPTIONAL<InvolvedParty>,
        sIP_Request_Timestamp_Fraction?: OPTIONAL<INTEGER>,
        sIP_Response_Timestamp_Fraction?: OPTIONAL<INTEGER>,
        sDP_Type?: OPTIONAL<SDP_Type>
    ) {
        this.sIP_Request_Timestamp = sIP_Request_Timestamp;
        this.sIP_Response_Timestamp = sIP_Response_Timestamp;
        this.sDP_Media_Components = sDP_Media_Components;
        this.mediaInitiatorFlag = mediaInitiatorFlag;
        this.sDP_Session_Description = sDP_Session_Description;
        this.mediaInitiatorParty = mediaInitiatorParty;
        this.sIP_Request_Timestamp_Fraction = sIP_Request_Timestamp_Fraction;
        this.sIP_Response_Timestamp_Fraction = sIP_Response_Timestamp_Fraction;
        this.sDP_Type = sDP_Type;
    
        if (this.sIP_Request_Timestamp !== undefined && (this.sIP_Request_Timestamp.length !== 9)) {
            throw new ASN1SizeError("List_Of_SDP_Media_Components.sIP_Request_Timestamp violates SIZE constraint");
        }
        if (this.sIP_Response_Timestamp !== undefined && (this.sIP_Response_Timestamp.length !== 9)) {
            throw new ASN1SizeError("List_Of_SDP_Media_Components.sIP_Response_Timestamp violates SIZE constraint");
        }
        if (this.sIP_Request_Timestamp_Fraction !== undefined && (this.sIP_Request_Timestamp_Fraction < 0 || this.sIP_Request_Timestamp_Fraction > 999)) {
            throw new ASN1OverflowError("List_Of_SDP_Media_Components.sIP_Request_Timestamp_Fraction violates INTEGER range");
        }
        if (this.sIP_Response_Timestamp_Fraction !== undefined && (this.sIP_Response_Timestamp_Fraction < 0 || this.sIP_Response_Timestamp_Fraction > 999)) {
            throw new ASN1OverflowError("List_Of_SDP_Media_Components.sIP_Response_Timestamp_Fraction violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a List_Of_SDP_Media_Components
     * @description
     * 
     * This takes an `object` and converts it to a `List_Of_SDP_Media_Components`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `List_Of_SDP_Media_Components`.
     * @returns {List_Of_SDP_Media_Components}
     */
    public static _from_object (_o: { [_K in keyof (List_Of_SDP_Media_Components)]: (List_Of_SDP_Media_Components)[_K] }): List_Of_SDP_Media_Components {
        return new List_Of_SDP_Media_Components(_o.sIP_Request_Timestamp, _o.sIP_Response_Timestamp, _o.sDP_Media_Components, _o.mediaInitiatorFlag, _o.sDP_Session_Description, _o.mediaInitiatorParty, _o.sIP_Request_Timestamp_Fraction, _o.sIP_Response_Timestamp_Fraction, _o.sDP_Type);
    }

        /**
         * @summary The enum used as the type of the component `sDP_Type`
         * @public
         * @static
         */

    public static _enum_for_sDP_Type = _enum_for_SDP_Type;
}

/**
 * @summary The Leading Root Component Types of List_Of_SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_List_Of_SDP_Media_Components: $.ComponentSpec[] = [
    new $.ComponentSpec("sIP-Request-Timestamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sIP-Response-Timestamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sDP-Media-Components", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mediaInitiatorFlag", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sDP-Session-Description", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mediaInitiatorParty", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sIP-Request-Timestamp-Fraction", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sIP-Response-Timestamp-Fraction", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sDP-Type", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of List_Of_SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_List_Of_SDP_Media_Components: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of List_Of_SDP_Media_Components
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_List_Of_SDP_Media_Components: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_List_Of_SDP_Media_Components: $.ASN1Decoder<List_Of_SDP_Media_Components> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) List_Of_SDP_Media_Components
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_List_Of_SDP_Media_Components (el: _Element): List_Of_SDP_Media_Components {
    if (!_cached_decoder_for_List_Of_SDP_Media_Components) { _cached_decoder_for_List_Of_SDP_Media_Components = function (el: _Element): List_Of_SDP_Media_Components {
    let sIP_Request_Timestamp: OPTIONAL<OCTET_STRING>;
    let sIP_Response_Timestamp: OPTIONAL<OCTET_STRING>;
    let sDP_Media_Components: OPTIONAL<SDP_Media_Components[]>;
    let mediaInitiatorFlag: OPTIONAL<NULL>;
    let sDP_Session_Description: OPTIONAL<GraphicString[]>;
    let mediaInitiatorParty: OPTIONAL<InvolvedParty>;
    let sIP_Request_Timestamp_Fraction: OPTIONAL<INTEGER>;
    let sIP_Response_Timestamp_Fraction: OPTIONAL<INTEGER>;
    let sDP_Type: OPTIONAL<SDP_Type>;
    const callbacks: $.DecodingMap = {
        "sIP-Request-Timestamp": (_el: _Element): void => { sIP_Request_Timestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sIP-Response-Timestamp": (_el: _Element): void => { sIP_Response_Timestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sDP-Media-Components": (_el: _Element): void => { sDP_Media_Components = $._decode_implicit<SDP_Media_Components[]>(() => $._decodeSequenceOf<SDP_Media_Components>(() => _decode_SDP_Media_Components))(_el); },
        "mediaInitiatorFlag": (_el: _Element): void => { mediaInitiatorFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sDP-Session-Description": (_el: _Element): void => { sDP_Session_Description = $._decode_implicit<GraphicString[]>(() => $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString))(_el); },
        "mediaInitiatorParty": (_el: _Element): void => { mediaInitiatorParty = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "sIP-Request-Timestamp-Fraction": (_el: _Element): void => { sIP_Request_Timestamp_Fraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sIP-Response-Timestamp-Fraction": (_el: _Element): void => { sIP_Response_Timestamp_Fraction = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sDP-Type": (_el: _Element): void => { sDP_Type = $._decode_implicit<SDP_Type>(() => _decode_SDP_Type)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_List_Of_SDP_Media_Components,
        _extension_additions_list_spec_for_List_Of_SDP_Media_Components,
        _root_component_type_list_2_spec_for_List_Of_SDP_Media_Components,
        undefined,
    );
    return new List_Of_SDP_Media_Components(
        sIP_Request_Timestamp,
        sIP_Response_Timestamp,
        sDP_Media_Components,
        mediaInitiatorFlag,
        sDP_Session_Description,
        mediaInitiatorParty,
        sIP_Request_Timestamp_Fraction,
        sIP_Response_Timestamp_Fraction,
        sDP_Type
    );
}; }
    return _cached_decoder_for_List_Of_SDP_Media_Components(el);
}

let _cached_encoder_for_List_Of_SDP_Media_Components: $.ASN1Encoder<List_Of_SDP_Media_Components> | null = null;

/**
 * @summary Encodes a(n) List_Of_SDP_Media_Components into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The List_Of_SDP_Media_Components, encoded as an ASN.1 Element.
 */
export
function _encode_List_Of_SDP_Media_Components (value: List_Of_SDP_Media_Components, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_List_Of_SDP_Media_Components) { _cached_encoder_for_List_Of_SDP_Media_Components = function (value: List_Of_SDP_Media_Components, _elGetter: $.ASN1Encoder<List_Of_SDP_Media_Components>): _Element {
    const _components: _Element[] = [];
    if (value.sIP_Request_Timestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sIP_Request_Timestamp, $.BER));
    }
    if (value.sIP_Response_Timestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sIP_Response_Timestamp, $.BER));
    }
    if (value.sDP_Media_Components !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SDP_Media_Components>(() => _encode_SDP_Media_Components, $.BER), $.BER)(value.sDP_Media_Components, $.BER));
    }
    if (value.mediaInitiatorFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.mediaInitiatorFlag, $.BER));
    }
    if (value.sDP_Session_Description !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER), $.BER)(value.sDP_Session_Description, $.BER));
    }
    if (value.mediaInitiatorParty !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_InvolvedParty, $.BER)(value.mediaInitiatorParty, $.BER));
    }
    if (value.sIP_Request_Timestamp_Fraction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.sIP_Request_Timestamp_Fraction, $.BER));
    }
    if (value.sIP_Response_Timestamp_Fraction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.sIP_Response_Timestamp_Fraction, $.BER));
    }
    if (value.sDP_Type !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_SDP_Type, $.BER)(value.sDP_Type, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_List_Of_SDP_Media_Components(value, elGetter);
}


/* eslint-enable */
