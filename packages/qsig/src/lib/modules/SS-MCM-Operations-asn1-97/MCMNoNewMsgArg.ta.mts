/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { MessageType, _decode_MessageType, _encode_MessageType, _enum_for_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
import { MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../SS-MCM-Operations-asn1-97/MsgCentreId.ta.mjs";
import { MCMNoNewMsgArg_argumentExt, _decode_MCMNoNewMsgArg_argumentExt, _encode_MCMNoNewMsgArg_argumentExt } from "../SS-MCM-Operations-asn1-97/MCMNoNewMsgArg-argumentExt.ta.mjs";

/**
 * @summary MCMNoNewMsgArg
 * @description
 *
 * Argument of `mCMNoNewMsg` (ECMA-347 §6.5.1.1.3). Identifies
 * the Served User and one Message Type for which no New
 * Messages remain, and may identify the Message Centre.
 * Same structure as `mWIDeactivate` in SS-MWI.
 *
 * §6.5.1.1.3 says "Message Type(s)"; this argument carries
 * a single `specificMessageType`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMNoNewMsgArg ::= SEQUENCE {
 *     servedUserNr PartyNumber,
 *     specificMessageType MessageType,
 *     msgCentreId MsgCentreId OPTIONAL,
 *     argumentExt CHOICE {
 *         extension [3] IMPLICIT Extension {{MCMExtSet}},
 *         multipleExtension [4] IMPLICIT SEQUENCE OF Extension {{MCMExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MCMNoNewMsgArg {
    /**
     * @summary `servedUserNr`.
     * @description
     *
     * Address of the Served User. ECMA-347 §6.5.1.1.3.
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `specificMessageType`.
     * @description
     *
     * Message Type for which New Messages are gone.
     * §6.5.1.1.3 says "Message Type(s)"; this is one value.
     * @public
     * @readonly
     */
    readonly specificMessageType: MessageType;
    /**
     * @summary `msgCentreId`.
     * @description
     *
     * Message Centre identity, when sent. Optional.
     * ECMA-347 §6.5.1.1.3.
     * @public
     * @readonly
     */
    readonly msgCentreId: OPTIONAL<MsgCentreId>;
    /**
     * @summary `argumentExt`.
     * @description
     *
     * Manufacturer-specific extension. `MCMExtSet` defines none.
     * The procedures do not mention this component. ECMA-347 §6.3.1.
     * @public
     * @readonly
     */
    readonly argumentExt: OPTIONAL<MCMNoNewMsgArg_argumentExt>;

    constructor (
        servedUserNr: PartyNumber,
        specificMessageType: MessageType,
        msgCentreId?: OPTIONAL<MsgCentreId>,
        argumentExt?: OPTIONAL<MCMNoNewMsgArg_argumentExt>
    ) {
        this.servedUserNr = servedUserNr;
        this.specificMessageType = specificMessageType;
        this.msgCentreId = msgCentreId;
        this.argumentExt = argumentExt;
    }

    /**
     * @summary Restructures an object into a MCMNoNewMsgArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCMNoNewMsgArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMNoNewMsgArg`.
     * @returns {MCMNoNewMsgArg}
     */
    public static _from_object (_o: { [_K in keyof (MCMNoNewMsgArg)]: (MCMNoNewMsgArg)[_K] }): MCMNoNewMsgArg {
        return new MCMNoNewMsgArg(_o.servedUserNr, _o.specificMessageType, _o.msgCentreId, _o.argumentExt);
    }

        /**
         * @summary The enum used as the type of the component `specificMessageType`
         * @public
         * @static
         */

    public static _enum_for_specificMessageType = _enum_for_MessageType;
}

/**
 * @summary The Leading Root Component Types of MCMNoNewMsgArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMNoNewMsgArg: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("specificMessageType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("msgCentreId", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("argumentExt", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of MCMNoNewMsgArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMNoNewMsgArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMNoNewMsgArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMNoNewMsgArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMNoNewMsgArg: $.ASN1Decoder<MCMNoNewMsgArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMNoNewMsgArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMNoNewMsgArg (el: _Element): MCMNoNewMsgArg {
    if (!_cached_decoder_for_MCMNoNewMsgArg) { _cached_decoder_for_MCMNoNewMsgArg = function (el: _Element): MCMNoNewMsgArg {
    let servedUserNr!: PartyNumber;
    let specificMessageType!: MessageType;
    let msgCentreId: OPTIONAL<MsgCentreId>;
    let argumentExt: OPTIONAL<MCMNoNewMsgArg_argumentExt>;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "specificMessageType": (_el: _Element): void => { specificMessageType = _decode_MessageType(_el); },
        "msgCentreId": (_el: _Element): void => { msgCentreId = _decode_MsgCentreId(_el); },
        "argumentExt": (_el: _Element): void => { argumentExt = _decode_MCMNoNewMsgArg_argumentExt(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMNoNewMsgArg,
        _extension_additions_list_spec_for_MCMNoNewMsgArg,
        _root_component_type_list_2_spec_for_MCMNoNewMsgArg,
        undefined,
    );
    return new MCMNoNewMsgArg(
        servedUserNr,
        specificMessageType,
        msgCentreId,
        argumentExt
    );
}; }
    return _cached_decoder_for_MCMNoNewMsgArg(el);
}

let _cached_encoder_for_MCMNoNewMsgArg: $.ASN1Encoder<MCMNoNewMsgArg> | null = null;

/**
 * @summary Encodes a(n) MCMNoNewMsgArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMNoNewMsgArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCMNoNewMsgArg (value: MCMNoNewMsgArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMNoNewMsgArg) { _cached_encoder_for_MCMNoNewMsgArg = function (value: MCMNoNewMsgArg, _elGetter: $.ASN1Encoder<MCMNoNewMsgArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    _components.push(/* REQUIRED   */ _encode_MessageType(value.specificMessageType, $.BER));
    if (value.msgCentreId !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MsgCentreId(value.msgCentreId, $.BER));
    }
    if (value.argumentExt !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MCMNoNewMsgArg_argumentExt(value.argumentExt, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCMNoNewMsgArg(value, elGetter);
}

/* eslint-enable */
