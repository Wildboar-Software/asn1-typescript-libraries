/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../MWI-Operations-asn1-97/BasicService.ta.mjs";
// export { BasicService, _enum_for_BasicService, BasicService_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, allServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speech /* IMPORTED_LONG_ENUMERATION_ITEM */, speech /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_unrestrictedDigitalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestrictedDigitalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_audio3100Hz /* IMPORTED_LONG_ENUMERATION_ITEM */, audio3100Hz /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telephony /* IMPORTED_LONG_ENUMERATION_ITEM */, telephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_teletex /* IMPORTED_LONG_ENUMERATION_ITEM */, teletex /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telefaxGroup4Class1 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup4Class1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videotextSyntaxBased /* IMPORTED_LONG_ENUMERATION_ITEM */, videotextSyntaxBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videotelephony /* IMPORTED_LONG_ENUMERATION_ITEM */, videotelephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telefaxGroup2_3 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup2_3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_reservedNotUsed1 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_reservedNotUsed2 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_reservedNotUsed3 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_reservedNotUsed4 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_reservedNotUsed5 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_email /* IMPORTED_LONG_ENUMERATION_ITEM */, email /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_video /* IMPORTED_LONG_ENUMERATION_ITEM */, video /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_fileTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, fileTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_shortMessageService /* IMPORTED_LONG_ENUMERATION_ITEM */, shortMessageService /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speechAndVideo /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndVideo /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speechAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speechAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videoAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, videoAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videoAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, videoAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_faxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, faxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speechVideoAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speechVideoAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speechFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videoFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, videoFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speechVideoFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_multimediaUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, multimediaUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_serviceUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_futureReserve1 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_futureReserve2 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_futureReserve3 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_futureReserve4 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_futureReserve5 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_futureReserve6 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_futureReserve7 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_futureReserve8 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BasicService, _encode_BasicService } from "../MWI-Operations-asn1-97/BasicService.ta.mjs";
import { MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../MWI-Operations-asn1-97/MsgCentreId.ta.mjs";
// export { MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../MWI-Operations-asn1-97/MsgCentreId.ta.mjs";
import { MWIDeactivateArg_argumentExt, _decode_MWIDeactivateArg_argumentExt, _encode_MWIDeactivateArg_argumentExt } from "../MWI-Operations-asn1-97/MWIDeactivateArg-argumentExt.ta.mjs";
// export { MWIDeactivateArg_argumentExt, _decode_MWIDeactivateArg_argumentExt, _encode_MWIDeactivateArg_argumentExt } from "../MWI-Operations-asn1-97/MWIDeactivateArg-argumentExt.ta.mjs";


/**
 * @summary MWIDeactivateArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWIDeactivateArg ::= SEQUENCE {
 *     servedUserNr PartyNumber,
 *     basicService BasicService,
 *     msgCentreId MsgCentreId OPTIONAL,
 *     argumentExt CHOICE {
 *         extension [3] IMPLICIT Extension {{MWIExtSet}},
 *         multipleExtension [4] IMPLICIT SEQUENCE OF Extension {{MWIExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MWIDeactivateArg {
    /**
     * @summary `servedUserNr`.
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
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
    readonly argumentExt: OPTIONAL<MWIDeactivateArg_argumentExt>;

    constructor (
        servedUserNr: PartyNumber,
        basicService: BasicService,
        msgCentreId: OPTIONAL<MsgCentreId>,
        argumentExt: OPTIONAL<MWIDeactivateArg_argumentExt>
    ) {
        this.servedUserNr = servedUserNr;
        this.basicService = basicService;
        this.msgCentreId = msgCentreId;
        this.argumentExt = argumentExt;
    }

    /**
     * @summary Restructures an object into a MWIDeactivateArg
     * @description
     * 
     * This takes an `object` and converts it to a `MWIDeactivateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MWIDeactivateArg`.
     * @returns {MWIDeactivateArg}
     */
    public static _from_object (_o: { [_K in keyof (MWIDeactivateArg)]: (MWIDeactivateArg)[_K] }): MWIDeactivateArg {
        return new MWIDeactivateArg(_o.servedUserNr, _o.basicService, _o.msgCentreId, _o.argumentExt);
    }

        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of MWIDeactivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MWIDeactivateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("msgCentreId", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("argumentExt", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of MWIDeactivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MWIDeactivateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MWIDeactivateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MWIDeactivateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MWIDeactivateArg: $.ASN1Decoder<MWIDeactivateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MWIDeactivateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MWIDeactivateArg (el: _Element): MWIDeactivateArg {
    if (!_cached_decoder_for_MWIDeactivateArg) { _cached_decoder_for_MWIDeactivateArg = function (el: _Element): MWIDeactivateArg {
    let servedUserNr!: PartyNumber;
    let basicService!: BasicService;
    let msgCentreId: OPTIONAL<MsgCentreId>;
    let argumentExt: OPTIONAL<MWIDeactivateArg_argumentExt>;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "msgCentreId": (_el: _Element): void => { msgCentreId = _decode_MsgCentreId(_el); },
        "argumentExt": (_el: _Element): void => { argumentExt = _decode_MWIDeactivateArg_argumentExt(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MWIDeactivateArg,
        _extension_additions_list_spec_for_MWIDeactivateArg,
        _root_component_type_list_2_spec_for_MWIDeactivateArg,
        undefined,
    );
    return new MWIDeactivateArg(
        servedUserNr,
        basicService,
        msgCentreId,
        argumentExt
    );
}; }
    return _cached_decoder_for_MWIDeactivateArg(el);
}

let _cached_encoder_for_MWIDeactivateArg: $.ASN1Encoder<MWIDeactivateArg> | null = null;

/**
 * @summary Encodes a(n) MWIDeactivateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MWIDeactivateArg, encoded as an ASN.1 Element.
 */
export
function _encode_MWIDeactivateArg (value: MWIDeactivateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MWIDeactivateArg) { _cached_encoder_for_MWIDeactivateArg = function (value: MWIDeactivateArg, elGetter: $.ASN1Encoder<MWIDeactivateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    if (value.msgCentreId !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MsgCentreId(value.msgCentreId, $.BER));
    }
    if (value.argumentExt !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MWIDeactivateArg_argumentExt(value.argumentExt, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MWIDeactivateArg(value, elGetter);
}


/* eslint-enable */
