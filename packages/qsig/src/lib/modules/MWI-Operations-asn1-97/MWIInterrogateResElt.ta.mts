/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../MWI-Operations-asn1-97/BasicService.ta.mjs";
import { type MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../MWI-Operations-asn1-97/MsgCentreId.ta.mjs";
import { type NbOfMessages, _decode_NbOfMessages, _encode_NbOfMessages } from "../MWI-Operations-asn1-97/NbOfMessages.ta.mjs";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../MWI-Operations-asn1-97/TimeStamp.ta.mjs";
import { type MWIInterrogateResElt_argumentExt, _decode_MWIInterrogateResElt_argumentExt, _encode_MWIInterrogateResElt_argumentExt } from "../MWI-Operations-asn1-97/MWIInterrogateResElt-argumentExt.ta.mjs";

/**
 * @summary MWIInterrogateResElt
 * @description
 *
 * Status of SS-MWI for one service, analogous to the optional information on
 * `mWIActivate` (ECMA-242 §6.5.1.1.2). When the request was for all services,
 * repeat the optional elements for each active service (ECMA-241 §7.2.1.3 notes
 * 3 and 4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWIInterrogateResElt ::= SEQUENCE {
 *     basicService BasicService,
 *     msgCentreId MsgCentreId OPTIONAL,
 *     nbOfMessages [3] IMPLICIT NbOfMessages OPTIONAL,
 *     originatingNr [4] PartyNumber OPTIONAL,
 *     timestamp TimeStamp OPTIONAL,
 *     priority [5] IMPLICIT INTEGER (0..9) OPTIONAL,
 *     -- The value 0 means the highest priority and 9 the lowest
 *     argumentExt CHOICE {
 *         extension [6] IMPLICIT Extension {{MWIExtSet}},
 *         multipleExtension [7] IMPLICIT SEQUENCE OF Extension {{MWIExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MWIInterrogateResElt {
    /**
     * @summary `basicService`.
     * @description
     *
     * A service for which SS-MWI is active (ECMA-241 §7.2.1.3 note 2).
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `msgCentreId`.
     * @description
     *
     * Message Centre that was interrogated (ECMA-241 §7.2.1.3 note 5).
     * Optional.
     * @public
     * @readonly
     */
    readonly msgCentreId: OPTIONAL<MsgCentreId>;
    /**
     * @summary `nbOfMessages`.
     * @description
     *
     * Optional non-zero count of messages waiting for this service. If the
     * request was for all services, repeat it on each active service (ECMA-241
     * §7.2.1.3 note 3). The ASN.1 range includes 0 (ECMA-242 §6.3.1).
     * @public
     * @readonly
     */
    readonly nbOfMessages: OPTIONAL<NbOfMessages>;
    /**
     * @summary `originatingNr`.
     * @description
     *
     * Optional PISN number of the user that left a message (ECMA-241 §7.2.1.3
     * note 6).
     * @public
     * @readonly
     */
    readonly originatingNr: OPTIONAL<PartyNumber>;
    /**
     * @summary `timestamp`.
     * @description
     *
     * Optional time at which a message was left (ECMA-241 §7.2.1.3 note 7).
     * @public
     * @readonly
     */
    readonly timestamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `priority`.
     * @description
     *
     * Optional priority of the highest-priority waiting message, 0 highest
     * through 9 lowest. If the request was for all services, repeat it on each
     * active service (ECMA-242 §6.3.1, ECMA-241 §7.2.1.3 note 4).
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<INTEGER>;
    /**
     * @summary `argumentExt`.
     * @description
     *
     * Optional manufacturer-specific extension on `an interrogate result
     * element`. ECMA-242 §6.3.1 defines `MWIExtSet` as `{...}` and names no
     * member. It does not say when to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly argumentExt: OPTIONAL<MWIInterrogateResElt_argumentExt>;

    constructor (
        basicService: BasicService,
        msgCentreId?: OPTIONAL<MsgCentreId>,
        nbOfMessages?: OPTIONAL<NbOfMessages>,
        originatingNr?: OPTIONAL<PartyNumber>,
        timestamp?: OPTIONAL<TimeStamp>,
        priority?: OPTIONAL<INTEGER>,
        argumentExt?: OPTIONAL<MWIInterrogateResElt_argumentExt>
    ) {
        this.basicService = basicService;
        this.msgCentreId = msgCentreId;
        this.nbOfMessages = nbOfMessages;
        this.originatingNr = originatingNr;
        this.timestamp = timestamp;
        this.priority = priority;
        this.argumentExt = argumentExt;
    
        if (priority !== undefined && (typeof priority === "bigint" ? (priority < 0n || priority > 9n) : (priority < 0 || priority > 9))) {
            throw new ASN1OverflowError("MWIInterrogateResElt.priority violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a MWIInterrogateResElt
     * @description
     * 
     * This takes an `object` and converts it to a `MWIInterrogateResElt`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MWIInterrogateResElt`.
     * @returns {MWIInterrogateResElt}
     */
    public static _from_object (_o: { [_K in keyof (MWIInterrogateResElt)]: (MWIInterrogateResElt)[_K] }): MWIInterrogateResElt {
        return new MWIInterrogateResElt(_o.basicService, _o.msgCentreId, _o.nbOfMessages, _o.originatingNr, _o.timestamp, _o.priority, _o.argumentExt);
    }

        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of MWIInterrogateResElt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MWIInterrogateResElt: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("msgCentreId", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("nbOfMessages", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatingNr", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timestamp", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("argumentExt", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7)))
];

/**
 * @summary The Trailing Root Component Types of MWIInterrogateResElt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MWIInterrogateResElt: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MWIInterrogateResElt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MWIInterrogateResElt: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MWIInterrogateResElt: $.ASN1Decoder<MWIInterrogateResElt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MWIInterrogateResElt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MWIInterrogateResElt (el: _Element): MWIInterrogateResElt {
    if (!_cached_decoder_for_MWIInterrogateResElt) { _cached_decoder_for_MWIInterrogateResElt = function (el: _Element): MWIInterrogateResElt {
    let basicService!: BasicService;
    let msgCentreId: OPTIONAL<MsgCentreId>;
    let nbOfMessages: OPTIONAL<NbOfMessages>;
    let originatingNr: OPTIONAL<PartyNumber>;
    let timestamp: OPTIONAL<TimeStamp>;
    let priority: OPTIONAL<INTEGER>;
    let argumentExt: OPTIONAL<MWIInterrogateResElt_argumentExt>;
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "msgCentreId": (_el: _Element): void => { msgCentreId = _decode_MsgCentreId(_el); },
        "nbOfMessages": (_el: _Element): void => { nbOfMessages = $._decode_implicit<NbOfMessages>(() => _decode_NbOfMessages)(_el); },
        "originatingNr": (_el: _Element): void => { originatingNr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "timestamp": (_el: _Element): void => { timestamp = _decode_TimeStamp(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "argumentExt": (_el: _Element): void => { argumentExt = _decode_MWIInterrogateResElt_argumentExt(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MWIInterrogateResElt,
        _extension_additions_list_spec_for_MWIInterrogateResElt,
        _root_component_type_list_2_spec_for_MWIInterrogateResElt,
        undefined,
    );
    return new MWIInterrogateResElt(
        basicService,
        msgCentreId,
        nbOfMessages,
        originatingNr,
        timestamp,
        priority,
        argumentExt
    );
}; }
    return _cached_decoder_for_MWIInterrogateResElt(el);
}

let _cached_encoder_for_MWIInterrogateResElt: $.ASN1Encoder<MWIInterrogateResElt> | null = null;

/**
 * @summary Encodes a(n) MWIInterrogateResElt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MWIInterrogateResElt, encoded as an ASN.1 Element.
 */
export
function _encode_MWIInterrogateResElt (value: MWIInterrogateResElt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MWIInterrogateResElt) { _cached_encoder_for_MWIInterrogateResElt = function (value: MWIInterrogateResElt, _elGetter: $.ASN1Encoder<MWIInterrogateResElt>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    if (value.msgCentreId !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MsgCentreId(value.msgCentreId, $.BER));
    }
    if (value.nbOfMessages !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_NbOfMessages, $.BER)(value.nbOfMessages, $.BER));
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
        _components.push(/* IF_ABSENT  */ _encode_MWIInterrogateResElt_argumentExt(value.argumentExt, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MWIInterrogateResElt(value, elGetter);
}

/* eslint-enable */
