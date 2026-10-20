/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../SS-MCM-Operations-asn1-97/MsgCentreId.ta.mjs";

/**
 * @summary PartyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInfo ::= SEQUENCE {
 *     servedUserNr PartyNumber,
 *     messageCentreID MsgCentreId
 * }
 * ```
 * 
 * @class
 */
export
class PartyInfo {
    /**
     * @summary `servedUserNr`.
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `messageCentreID`.
     * @public
     * @readonly
     */
    readonly messageCentreID: MsgCentreId;

    constructor (
        servedUserNr: PartyNumber,
        messageCentreID: MsgCentreId
    ) {
        this.servedUserNr = servedUserNr;
        this.messageCentreID = messageCentreID;
    }

    /**
     * @summary Restructures an object into a PartyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PartyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartyInfo`.
     * @returns {PartyInfo}
     */
    public static _from_object (_o: { [_K in keyof (PartyInfo)]: (PartyInfo)[_K] }): PartyInfo {
        return new PartyInfo(_o.servedUserNr, _o.messageCentreID);
    }

}

/**
 * @summary The Leading Root Component Types of PartyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("messageCentreID", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of PartyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PartyInfo: $.ASN1Decoder<PartyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyInfo (el: _Element): PartyInfo {
    if (!_cached_decoder_for_PartyInfo) { _cached_decoder_for_PartyInfo = function (el: _Element): PartyInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PartyInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "servedUserNr";
    sequence[1].name = "messageCentreID";
    let servedUserNr!: PartyNumber;
    let messageCentreID!: MsgCentreId;
    servedUserNr = _decode_PartyNumber(sequence[0]);
    messageCentreID = _decode_MsgCentreId(sequence[1]);
    return new PartyInfo(
        servedUserNr,
        messageCentreID,

    );
}; }
    return _cached_decoder_for_PartyInfo(el);
}

let _cached_encoder_for_PartyInfo: $.ASN1Encoder<PartyInfo> | null = null;

/**
 * @summary Encodes a(n) PartyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PartyInfo (value: PartyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyInfo) { _cached_encoder_for_PartyInfo = function (value: PartyInfo, elGetter: $.ASN1Encoder<PartyInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER),
        /* REQUIRED   */ _encode_MsgCentreId(value.messageCentreID, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PartyInfo(value, elGetter);
}

/* eslint-enable */
