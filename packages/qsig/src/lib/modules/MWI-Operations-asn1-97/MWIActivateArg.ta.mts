/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../MWI-Operations-asn1-97/BasicService.ta.mjs";
import { type MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../MWI-Operations-asn1-97/MsgCentreId.ta.mjs";
import { type NbOfMessages, _decode_NbOfMessages, _encode_NbOfMessages } from "../MWI-Operations-asn1-97/NbOfMessages.ta.mjs";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../MWI-Operations-asn1-97/TimeStamp.ta.mjs";
import { type MWIActivateArg_argumentExt, _decode_MWIActivateArg_argumentExt, _encode_MWIActivateArg_argumentExt } from "../MWI-Operations-asn1-97/MWIActivateArg-argumentExt.ta.mjs";

/**
 * @summary MWIActivateArg
 * @description
 *
 * Argument of `mWIActivate`. The PISN number and the service are required. The
 * other elements are an implementation option (ECMA-242 §6.5.1.1.1, ECMA-241
 * §6.2.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWIActivateArg ::= SEQUENCE {
 *     servedUserNr PartyNumber,
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
class MWIActivateArg {
    /**
     * @summary `servedUserNr`.
     * @description
     *
     * PISN number of the Served User, the user to whom the indication is sent
     * (ECMA-242 §6.5.1.1.1, ECMA-241 §4.2.1).
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `basicService`.
     * @description
     *
     * Service for which there is a message waiting (ECMA-242 §6.5.1.1.1). A
     * separate indication may exist for each service (ECMA-241 §6.1.1).
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `msgCentreId`.
     * @description
     *
     * Optional identity of the Message Centre that holds the messages (ECMA-242
     * §6.5.1.1.1).
     * @public
     * @readonly
     */
    readonly msgCentreId: OPTIONAL<MsgCentreId>;
    /**
     * @summary `nbOfMessages`.
     * @description
     *
     * Optional count of messages waiting for this service. ECMA-241 §7.2.1.1
     * note 3: a present value is non-zero, and absence means one or more
     * messages are waiting. The ASN.1 range still includes 0 (ECMA-242 §6.3.1).
     * @public
     * @readonly
     */
    readonly nbOfMessages: OPTIONAL<NbOfMessages>;
    /**
     * @summary `originatingNr`.
     * @description
     *
     * Optional PISN number of the user that left a message (ECMA-242
     * §6.5.1.1.1). The standard does not say which message this is when more
     * than one is waiting.
     * @public
     * @readonly
     */
    readonly originatingNr: OPTIONAL<PartyNumber>;
    /**
     * @summary `timestamp`.
     * @description
     *
     * Optional local time at which a message was left (ECMA-242 §6.5.1.1.1).
     * The character layout is on `TimeStamp`.
     * @public
     * @readonly
     */
    readonly timestamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `priority`.
     * @description
     *
     * Optional priority of the highest-priority waiting message, 0 through 9. 0
     * is the highest and 9 the lowest (ECMA-242 §6.3.1, ECMA-241 §7.2.1.1 note
     * 4).
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<INTEGER>;
    /**
     * @summary `argumentExt`.
     * @description
     *
     * Optional manufacturer-specific extension on `mWIActivate`. ECMA-242
     * §6.3.1 defines `MWIExtSet` as `{...}` and names no member. It does not
     * say when to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly argumentExt: OPTIONAL<MWIActivateArg_argumentExt>;

    constructor (
        servedUserNr: PartyNumber,
        basicService: BasicService,
        msgCentreId?: OPTIONAL<MsgCentreId>,
        nbOfMessages?: OPTIONAL<NbOfMessages>,
        originatingNr?: OPTIONAL<PartyNumber>,
        timestamp?: OPTIONAL<TimeStamp>,
        priority?: OPTIONAL<INTEGER>,
        argumentExt?: OPTIONAL<MWIActivateArg_argumentExt>
    ) {
        this.servedUserNr = servedUserNr;
        this.basicService = basicService;
        this.msgCentreId = msgCentreId;
        this.nbOfMessages = nbOfMessages;
        this.originatingNr = originatingNr;
        this.timestamp = timestamp;
        this.priority = priority;
        this.argumentExt = argumentExt;
    
        if (priority !== undefined && (typeof priority === "bigint" ? (priority < 0n || priority > 9n) : (priority < 0 || priority > 9))) {
            throw new ASN1OverflowError("MWIActivateArg.priority violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a MWIActivateArg
     * @description
     * 
     * This takes an `object` and converts it to a `MWIActivateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MWIActivateArg`.
     * @returns {MWIActivateArg}
     */
    public static _from_object (_o: { [_K in keyof (MWIActivateArg)]: (MWIActivateArg)[_K] }): MWIActivateArg {
        return new MWIActivateArg(_o.servedUserNr, _o.basicService, _o.msgCentreId, _o.nbOfMessages, _o.originatingNr, _o.timestamp, _o.priority, _o.argumentExt);
    }

        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService: typeof _enum_for_BasicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of MWIActivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MWIActivateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("msgCentreId", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("nbOfMessages", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatingNr", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timestamp", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("argumentExt", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7)))
];

/**
 * @summary The Trailing Root Component Types of MWIActivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MWIActivateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MWIActivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MWIActivateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MWIActivateArg: $.ASN1Decoder<MWIActivateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MWIActivateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MWIActivateArg (el: _Element): MWIActivateArg {
    if (!_cached_decoder_for_MWIActivateArg) { _cached_decoder_for_MWIActivateArg = function (el: _Element): MWIActivateArg {
    let servedUserNr!: PartyNumber;
    let basicService!: BasicService;
    let msgCentreId: OPTIONAL<MsgCentreId>;
    let nbOfMessages: OPTIONAL<NbOfMessages>;
    let originatingNr: OPTIONAL<PartyNumber>;
    let timestamp: OPTIONAL<TimeStamp>;
    let priority: OPTIONAL<INTEGER>;
    let argumentExt: OPTIONAL<MWIActivateArg_argumentExt>;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "msgCentreId": (_el: _Element): void => { msgCentreId = _decode_MsgCentreId(_el); },
        "nbOfMessages": (_el: _Element): void => { nbOfMessages = $._decode_implicit<NbOfMessages>(() => _decode_NbOfMessages)(_el); },
        "originatingNr": (_el: _Element): void => { originatingNr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "timestamp": (_el: _Element): void => { timestamp = _decode_TimeStamp(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "argumentExt": (_el: _Element): void => { argumentExt = _decode_MWIActivateArg_argumentExt(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MWIActivateArg,
        _extension_additions_list_spec_for_MWIActivateArg,
        _root_component_type_list_2_spec_for_MWIActivateArg,
        undefined,
    );
    return new MWIActivateArg(
        servedUserNr,
        basicService,
        msgCentreId,
        nbOfMessages,
        originatingNr,
        timestamp,
        priority,
        argumentExt
    );
}; }
    return _cached_decoder_for_MWIActivateArg(el);
}

let _cached_encoder_for_MWIActivateArg: $.ASN1Encoder<MWIActivateArg> | null = null;

/**
 * @summary Encodes a(n) MWIActivateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MWIActivateArg, encoded as an ASN.1 Element.
 */
export
function _encode_MWIActivateArg (value: MWIActivateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MWIActivateArg) { _cached_encoder_for_MWIActivateArg = function (value: MWIActivateArg, _elGetter: $.ASN1Encoder<MWIActivateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
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
        _components.push(/* IF_ABSENT  */ _encode_MWIActivateArg_argumentExt(value.argumentExt, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MWIActivateArg(value, elGetter);
}

/* eslint-enable */
