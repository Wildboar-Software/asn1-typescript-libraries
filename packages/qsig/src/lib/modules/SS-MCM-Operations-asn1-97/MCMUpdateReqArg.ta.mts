/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { MessageType, _decode_MessageType, _encode_MessageType, _enum_for_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
// export { MessageType, _enum_for_MessageType, MessageType_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, allServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speech /* IMPORTED_LONG_ENUMERATION_ITEM */, speech /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_unrestrictedDigitalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestrictedDigitalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_audio3100Hz /* IMPORTED_LONG_ENUMERATION_ITEM */, audio3100Hz /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telephony /* IMPORTED_LONG_ENUMERATION_ITEM */, telephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_teletex /* IMPORTED_LONG_ENUMERATION_ITEM */, teletex /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telefaxGroup4Class1 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup4Class1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videotextSyntaxBased /* IMPORTED_LONG_ENUMERATION_ITEM */, videotextSyntaxBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videotelephony /* IMPORTED_LONG_ENUMERATION_ITEM */, videotelephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telefaxGroup2_3 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup2_3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed1 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed2 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed3 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed4 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed5 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_email /* IMPORTED_LONG_ENUMERATION_ITEM */, email /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_video /* IMPORTED_LONG_ENUMERATION_ITEM */, video /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_fileTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, fileTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_shortMessageService /* IMPORTED_LONG_ENUMERATION_ITEM */, shortMessageService /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndVideo /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndVideo /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, videoAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, videoAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_faxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, faxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, videoFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_multimediaUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, multimediaUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_serviceUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve1 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve2 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve3 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve4 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve5 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve6 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve7 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve8 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MessageType, _encode_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
import { MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../SS-MCM-Operations-asn1-97/MsgCentreId.ta.mjs";
// export { MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../SS-MCM-Operations-asn1-97/MsgCentreId.ta.mjs";
import { MCMUpdateReqArg_argumentExt, _decode_MCMUpdateReqArg_argumentExt, _encode_MCMUpdateReqArg_argumentExt } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqArg-argumentExt.ta.mjs";
// export { MCMUpdateReqArg_argumentExt, _decode_MCMUpdateReqArg_argumentExt, _encode_MCMUpdateReqArg_argumentExt } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqArg-argumentExt.ta.mjs";


/**
 * @summary MCMUpdateReqArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMUpdateReqArg ::= SEQUENCE {
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
class MCMUpdateReqArg {
    /**
     * @summary `servedUserNr`.
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `specificMessageType`.
     * @public
     * @readonly
     */
    readonly specificMessageType: MessageType;
    /**
     * @summary `msgCentreId`.
     * @public
     * @readonly
     */
    readonly msgCentreId: OPTIONAL<MsgCentreId>;
    /**
     * @summary `argumentExt`.
     * @public
     * @readonly
     */
    readonly argumentExt: OPTIONAL<MCMUpdateReqArg_argumentExt>;

    constructor (
        servedUserNr: PartyNumber,
        specificMessageType: MessageType,
        msgCentreId: OPTIONAL<MsgCentreId>,
        argumentExt: OPTIONAL<MCMUpdateReqArg_argumentExt>
    ) {
        this.servedUserNr = servedUserNr;
        this.specificMessageType = specificMessageType;
        this.msgCentreId = msgCentreId;
        this.argumentExt = argumentExt;
    }

    /**
     * @summary Restructures an object into a MCMUpdateReqArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCMUpdateReqArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMUpdateReqArg`.
     * @returns {MCMUpdateReqArg}
     */
    public static _from_object (_o: { [_K in keyof (MCMUpdateReqArg)]: (MCMUpdateReqArg)[_K] }): MCMUpdateReqArg {
        return new MCMUpdateReqArg(_o.servedUserNr, _o.specificMessageType, _o.msgCentreId, _o.argumentExt);
    }

        /**
         * @summary The enum used as the type of the component `specificMessageType`
         * @public
         * @static
         */

    public static _enum_for_specificMessageType = _enum_for_MessageType;
}

/**
 * @summary The Leading Root Component Types of MCMUpdateReqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMUpdateReqArg: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("specificMessageType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("msgCentreId", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("argumentExt", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of MCMUpdateReqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMUpdateReqArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMUpdateReqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMUpdateReqArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMUpdateReqArg: $.ASN1Decoder<MCMUpdateReqArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMUpdateReqArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMUpdateReqArg (el: _Element): MCMUpdateReqArg {
    if (!_cached_decoder_for_MCMUpdateReqArg) { _cached_decoder_for_MCMUpdateReqArg = function (el: _Element): MCMUpdateReqArg {
    let servedUserNr!: PartyNumber;
    let specificMessageType!: MessageType;
    let msgCentreId: OPTIONAL<MsgCentreId>;
    let argumentExt: OPTIONAL<MCMUpdateReqArg_argumentExt>;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "specificMessageType": (_el: _Element): void => { specificMessageType = _decode_MessageType(_el); },
        "msgCentreId": (_el: _Element): void => { msgCentreId = _decode_MsgCentreId(_el); },
        "argumentExt": (_el: _Element): void => { argumentExt = _decode_MCMUpdateReqArg_argumentExt(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMUpdateReqArg,
        _extension_additions_list_spec_for_MCMUpdateReqArg,
        _root_component_type_list_2_spec_for_MCMUpdateReqArg,
        undefined,
    );
    return new MCMUpdateReqArg(
        servedUserNr,
        specificMessageType,
        msgCentreId,
        argumentExt
    );
}; }
    return _cached_decoder_for_MCMUpdateReqArg(el);
}

let _cached_encoder_for_MCMUpdateReqArg: $.ASN1Encoder<MCMUpdateReqArg> | null = null;

/**
 * @summary Encodes a(n) MCMUpdateReqArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMUpdateReqArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCMUpdateReqArg (value: MCMUpdateReqArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMUpdateReqArg) { _cached_encoder_for_MCMUpdateReqArg = function (value: MCMUpdateReqArg, elGetter: $.ASN1Encoder<MCMUpdateReqArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    _components.push(/* REQUIRED   */ _encode_MessageType(value.specificMessageType, $.BER));
    if (value.msgCentreId !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MsgCentreId(value.msgCentreId, $.BER));
    }
    if (value.argumentExt !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MCMUpdateReqArg_argumentExt(value.argumentExt, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCMUpdateReqArg(value, elGetter);
}


/* eslint-enable */
