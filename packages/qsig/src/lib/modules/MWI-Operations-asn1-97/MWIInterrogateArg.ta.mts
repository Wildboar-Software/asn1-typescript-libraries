/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../MWI-Operations-asn1-97/BasicService.ta.mjs";
import { MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../MWI-Operations-asn1-97/MsgCentreId.ta.mjs";
import { MWIInterrogateArg_argumentExt, _decode_MWIInterrogateArg_argumentExt, _encode_MWIInterrogateArg_argumentExt } from "../MWI-Operations-asn1-97/MWIInterrogateArg-argumentExt.ta.mjs";

/**
 * @summary MWIInterrogateArg
 * @description
 *
 * Argument of `mWIInterrogate`. Names the Served User and either one service or
 * all services (ECMA-242 §6.5.2.1.2, ECMA-241 §7.2.1.3 note 2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWIInterrogateArg ::= SEQUENCE {
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
class MWIInterrogateArg {
    /**
     * @summary `servedUserNr`.
     * @description PISN number of the Served User (ECMA-242 §6.5.2.1.2).
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `basicService`.
     * @description
     *
     * One service, or all services (ECMA-241 §7.2.1.3 note 2). ECMA-242 §6.3.1
     * does not state which enumerated value means all services.
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `msgCentreId`.
     * @description
     *
     * Optional identity of the Message Centre to interrogate (ECMA-242
     * §6.5.2.1.2). An incorrect value causes a return error (§6.5.1.2.2).
     * @public
     * @readonly
     */
    readonly msgCentreId: OPTIONAL<MsgCentreId>;
    /**
     * @summary `argumentExt`.
     * @description
     *
     * Optional manufacturer-specific extension on `mWIInterrogate`. ECMA-242
     * §6.3.1 defines `MWIExtSet` as `{...}` and names no member. It does not
     * say when to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly argumentExt: OPTIONAL<MWIInterrogateArg_argumentExt>;

    constructor (
        servedUserNr: PartyNumber,
        basicService: BasicService,
        msgCentreId?: OPTIONAL<MsgCentreId>,
        argumentExt?: OPTIONAL<MWIInterrogateArg_argumentExt>
    ) {
        this.servedUserNr = servedUserNr;
        this.basicService = basicService;
        this.msgCentreId = msgCentreId;
        this.argumentExt = argumentExt;
    }

    /**
     * @summary Restructures an object into a MWIInterrogateArg
     * @description
     * 
     * This takes an `object` and converts it to a `MWIInterrogateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MWIInterrogateArg`.
     * @returns {MWIInterrogateArg}
     */
    public static _from_object (_o: { [_K in keyof (MWIInterrogateArg)]: (MWIInterrogateArg)[_K] }): MWIInterrogateArg {
        return new MWIInterrogateArg(_o.servedUserNr, _o.basicService, _o.msgCentreId, _o.argumentExt);
    }

        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of MWIInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MWIInterrogateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("msgCentreId", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("argumentExt", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of MWIInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MWIInterrogateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MWIInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MWIInterrogateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MWIInterrogateArg: $.ASN1Decoder<MWIInterrogateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MWIInterrogateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MWIInterrogateArg (el: _Element): MWIInterrogateArg {
    if (!_cached_decoder_for_MWIInterrogateArg) { _cached_decoder_for_MWIInterrogateArg = function (el: _Element): MWIInterrogateArg {
    let servedUserNr!: PartyNumber;
    let basicService!: BasicService;
    let msgCentreId: OPTIONAL<MsgCentreId>;
    let argumentExt: OPTIONAL<MWIInterrogateArg_argumentExt>;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "msgCentreId": (_el: _Element): void => { msgCentreId = _decode_MsgCentreId(_el); },
        "argumentExt": (_el: _Element): void => { argumentExt = _decode_MWIInterrogateArg_argumentExt(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MWIInterrogateArg,
        _extension_additions_list_spec_for_MWIInterrogateArg,
        _root_component_type_list_2_spec_for_MWIInterrogateArg,
        undefined,
    );
    return new MWIInterrogateArg(
        servedUserNr,
        basicService,
        msgCentreId,
        argumentExt
    );
}; }
    return _cached_decoder_for_MWIInterrogateArg(el);
}

let _cached_encoder_for_MWIInterrogateArg: $.ASN1Encoder<MWIInterrogateArg> | null = null;

/**
 * @summary Encodes a(n) MWIInterrogateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MWIInterrogateArg, encoded as an ASN.1 Element.
 */
export
function _encode_MWIInterrogateArg (value: MWIInterrogateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MWIInterrogateArg) { _cached_encoder_for_MWIInterrogateArg = function (value: MWIInterrogateArg, _elGetter: $.ASN1Encoder<MWIInterrogateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    if (value.msgCentreId !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MsgCentreId(value.msgCentreId, $.BER));
    }
    if (value.argumentExt !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MWIInterrogateArg_argumentExt(value.argumentExt, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MWIInterrogateArg(value, elGetter);
}

/* eslint-enable */
