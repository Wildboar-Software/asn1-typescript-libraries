/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageType, _decode_MessageType, _encode_MessageType, _enum_for_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
import { type MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../SS-MCM-Operations-asn1-97/MsgCentreId.ta.mjs";
import { type NrOfMessages, _decode_NrOfMessages, _encode_NrOfMessages } from "../SS-MCM-Operations-asn1-97/NrOfMessages.ta.mjs";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../SS-MCM-Operations-asn1-97/TimeStamp.ta.mjs";
import { type MCMUpdateReqResElt_argumentExt, _decode_MCMUpdateReqResElt_argumentExt, _encode_MCMUpdateReqResElt_argumentExt } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqResElt-argumentExt.ta.mjs";

/**
 * @summary MCMUpdateReqResElt
 * @description
 *
 * One element of an `mCMUpdateReq` result (ECMA-347
 * §6.5.1.1.5). What is present depends on the mode
 * configured for New Messages of this Message Type.
 *
 * Compressed mode may include the count, the priority,
 * originator, and time of the highest-priority New Message,
 * and the Message Centre identity. Complete mode may
 * include the Message Centre identity and the count only.
 * The procedure requires none of the optional components.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMUpdateReqResElt ::= SEQUENCE {
 *     specificMessageType MessageType,
 *     msgCentreId MsgCentreId OPTIONAL,
 *     nrOfMessages [3] IMPLICIT NrOfMessages OPTIONAL,
 *     originatingNr [4] PartyNumber OPTIONAL,
 *     timestamp TimeStamp OPTIONAL,
 *     priority [5] IMPLICIT INTEGER (0..9) OPTIONAL,
 *     argumentExt CHOICE {
 *         extension [6] IMPLICIT Extension {{MCMExtSet}},
 *         multipleExtension [7] IMPLICIT SEQUENCE OF Extension {{MCMExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MCMUpdateReqResElt {
    /**
     * @summary `specificMessageType`.
     * @description
     *
     * Message Type the Served User asked about. Present in
     * both modes. ECMA-347 §6.5.1.1.5.
     * @public
     * @readonly
     */
    readonly specificMessageType: MessageType;
    /**
     * @summary `msgCentreId`.
     * @description
     *
     * Message Centre identity. Optional in both modes.
     * ECMA-347 §6.5.1.1.5.
     * @public
     * @readonly
     */
    readonly msgCentreId: OPTIONAL<MsgCentreId>;
    /**
     * @summary `nrOfMessages`.
     * @description
     *
     * How many New Messages of this type are waiting.
     * Optional in both modes. ECMA-347 §6.5.1.1.5.
     * @public
     * @readonly
     */
    readonly nrOfMessages: OPTIONAL<NrOfMessages>;
    /**
     * @summary `originatingNr`.
     * @description
     *
     * Address of the user who left the highest-priority New
     * Message. Listed for compressed mode only.
     * ECMA-347 §6.5.1.1.5.
     * @public
     * @readonly
     */
    readonly originatingNr: OPTIONAL<PartyNumber>;
    /**
     * @summary `timestamp`.
     * @description
     *
     * Time the highest-priority New Message was left.
     * Listed for compressed mode only. ECMA-347 §6.5.1.1.5.
     * @public
     * @readonly
     */
    readonly timestamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `priority`.
     * @description
     *
     * Priority of the highest-priority New Message. 0 is
     * highest and 9 is lowest (§6.3.1). Listed for
     * compressed mode only. ECMA-347 §6.5.1.1.5.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<INTEGER>;
    /**
     * @summary `argumentExt`.
     * @description
     *
     * Manufacturer-specific extension. `MCMExtSet` defines none.
     * The procedures do not mention this component. ECMA-347 §6.3.1.
     * @public
     * @readonly
     */
    readonly argumentExt: OPTIONAL<MCMUpdateReqResElt_argumentExt>;

    constructor (
        specificMessageType: MessageType,
        msgCentreId?: OPTIONAL<MsgCentreId>,
        nrOfMessages?: OPTIONAL<NrOfMessages>,
        originatingNr?: OPTIONAL<PartyNumber>,
        timestamp?: OPTIONAL<TimeStamp>,
        priority?: OPTIONAL<INTEGER>,
        argumentExt?: OPTIONAL<MCMUpdateReqResElt_argumentExt>
    ) {
        this.specificMessageType = specificMessageType;
        this.msgCentreId = msgCentreId;
        this.nrOfMessages = nrOfMessages;
        this.originatingNr = originatingNr;
        this.timestamp = timestamp;
        this.priority = priority;
        this.argumentExt = argumentExt;
    
        if (priority !== undefined && (typeof priority === "bigint" ? (priority < 0n || priority > 9n) : (priority < 0 || priority > 9))) {
            throw new ASN1OverflowError("MCMUpdateReqResElt.priority violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a MCMUpdateReqResElt
     * @description
     * 
     * This takes an `object` and converts it to a `MCMUpdateReqResElt`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMUpdateReqResElt`.
     * @returns {MCMUpdateReqResElt}
     */
    public static _from_object (_o: { [_K in keyof (MCMUpdateReqResElt)]: (MCMUpdateReqResElt)[_K] }): MCMUpdateReqResElt {
        return new MCMUpdateReqResElt(_o.specificMessageType, _o.msgCentreId, _o.nrOfMessages, _o.originatingNr, _o.timestamp, _o.priority, _o.argumentExt);
    }

        /**
         * @summary The enum used as the type of the component `specificMessageType`
         * @public
         * @static
         */

    public static _enum_for_specificMessageType: typeof _enum_for_MessageType = _enum_for_MessageType;
}

/**
 * @summary The Leading Root Component Types of MCMUpdateReqResElt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMUpdateReqResElt: $.ComponentSpec[] = [
    new $.ComponentSpec("specificMessageType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("msgCentreId", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("nrOfMessages", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatingNr", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timestamp", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("argumentExt", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7)))
];

/**
 * @summary The Trailing Root Component Types of MCMUpdateReqResElt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMUpdateReqResElt: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMUpdateReqResElt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMUpdateReqResElt: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMUpdateReqResElt: $.ASN1Decoder<MCMUpdateReqResElt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMUpdateReqResElt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMUpdateReqResElt (el: _Element): MCMUpdateReqResElt {
    if (!_cached_decoder_for_MCMUpdateReqResElt) { _cached_decoder_for_MCMUpdateReqResElt = function (el: _Element): MCMUpdateReqResElt {
    let specificMessageType!: MessageType;
    let msgCentreId: OPTIONAL<MsgCentreId>;
    let nrOfMessages: OPTIONAL<NrOfMessages>;
    let originatingNr: OPTIONAL<PartyNumber>;
    let timestamp: OPTIONAL<TimeStamp>;
    let priority: OPTIONAL<INTEGER>;
    let argumentExt: OPTIONAL<MCMUpdateReqResElt_argumentExt>;
    const callbacks: $.DecodingMap = {
        "specificMessageType": (_el: _Element): void => { specificMessageType = _decode_MessageType(_el); },
        "msgCentreId": (_el: _Element): void => { msgCentreId = _decode_MsgCentreId(_el); },
        "nrOfMessages": (_el: _Element): void => { nrOfMessages = $._decode_implicit<NrOfMessages>(() => _decode_NrOfMessages)(_el); },
        "originatingNr": (_el: _Element): void => { originatingNr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "timestamp": (_el: _Element): void => { timestamp = _decode_TimeStamp(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "argumentExt": (_el: _Element): void => { argumentExt = _decode_MCMUpdateReqResElt_argumentExt(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMUpdateReqResElt,
        _extension_additions_list_spec_for_MCMUpdateReqResElt,
        _root_component_type_list_2_spec_for_MCMUpdateReqResElt,
        undefined,
    );
    return new MCMUpdateReqResElt(
        specificMessageType,
        msgCentreId,
        nrOfMessages,
        originatingNr,
        timestamp,
        priority,
        argumentExt
    );
}; }
    return _cached_decoder_for_MCMUpdateReqResElt(el);
}

let _cached_encoder_for_MCMUpdateReqResElt: $.ASN1Encoder<MCMUpdateReqResElt> | null = null;

/**
 * @summary Encodes a(n) MCMUpdateReqResElt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMUpdateReqResElt, encoded as an ASN.1 Element.
 */
export
function _encode_MCMUpdateReqResElt (value: MCMUpdateReqResElt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMUpdateReqResElt) { _cached_encoder_for_MCMUpdateReqResElt = function (value: MCMUpdateReqResElt, _elGetter: $.ASN1Encoder<MCMUpdateReqResElt>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_MessageType(value.specificMessageType, $.BER));
    if (value.msgCentreId !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MsgCentreId(value.msgCentreId, $.BER));
    }
    if (value.nrOfMessages !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_NrOfMessages, $.BER)(value.nrOfMessages, $.BER));
    }
    if (value.originatingNr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_PartyNumber, $.BER)(value.originatingNr, $.BER));
    }
    if (value.timestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_TimeStamp(value.timestamp, $.BER));
    }
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.priority, $.BER));
    }
    if (value.argumentExt !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MCMUpdateReqResElt_argumentExt(value.argumentExt, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCMUpdateReqResElt(value, elGetter);
}

/* eslint-enable */
