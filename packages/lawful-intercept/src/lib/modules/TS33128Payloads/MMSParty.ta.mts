/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MMSPartyID, _decode_MMSPartyID, _encode_MMSPartyID } from "../TS33128Payloads/MMSPartyID.ta.mjs";
// export { MMSPartyID, _decode_MMSPartyID, _encode_MMSPartyID } from "../TS33128Payloads/MMSPartyID.ta.mjs";
import { NonLocalID, _decode_NonLocalID, _encode_NonLocalID, _enum_for_NonLocalID } from "../TS33128Payloads/NonLocalID.ta.mjs";
// export { NonLocalID, _enum_for_NonLocalID, NonLocalID_local /* IMPORTED_LONG_ENUMERATION_ITEM */, local /* IMPORTED_SHORT_ENUMERATION_ITEM */, NonLocalID_nonLocal /* IMPORTED_LONG_ENUMERATION_ITEM */, nonLocal /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NonLocalID, _encode_NonLocalID } from "../TS33128Payloads/NonLocalID.ta.mjs";


/**
 * @summary MMSParty
 * @description
 * 
 * ID(s) of the originating party in one or more of the formats described in
 * clause 7.4.2.1. When address translation occurs (such as the case of a token
 * sent by the client and replaced with a proper address by the MMS
 * Proxy-Relay), both the pre and post translated addresses (with appropriate
 * correlation) are included. If the originating MMS client requested address
 * hiding, but the MMS Proxy-Relay has access to the "From" field, this shall be
 * reported, regardless of the fact that it may be hidden from the recipient.
 *
 * 3GPP TS 33.128, clause 7.4.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSParty ::= SEQUENCE
 * {
 *     mMSPartyIDs [1] SEQUENCE OF MMSPartyID,
 *     nonLocalID  [2] NonLocalID
 * }
 * ```
 * 
 * @class
 */
export
class MMSParty {
    /**
     * @summary `mMSPartyIDs`.
     * @public
     * @readonly
     */
    readonly mMSPartyIDs: MMSPartyID[];
    /**
     * @summary `nonLocalID`.
     * @public
     * @readonly
     */
    readonly nonLocalID: NonLocalID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mMSPartyIDs: MMSPartyID[],
        nonLocalID: NonLocalID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mMSPartyIDs = mMSPartyIDs;
        this.nonLocalID = nonLocalID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSParty
     * @description
     * 
     * This takes an `object` and converts it to a `MMSParty`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSParty`.
     * @returns {MMSParty}
     */
    public static _from_object (_o: { [_K in keyof (MMSParty)]: (MMSParty)[_K] }): MMSParty {
        return new MMSParty(_o.mMSPartyIDs, _o.nonLocalID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `nonLocalID`
         * @public
         * @static
         */

    public static _enum_for_nonLocalID = _enum_for_NonLocalID;
}

/**
 * @summary The Leading Root Component Types of MMSParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSParty: $.ComponentSpec[] = [
    new $.ComponentSpec("mMSPartyIDs", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nonLocalID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMSParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSParty: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSParty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSParty: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSParty: $.ASN1Decoder<MMSParty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSParty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSParty (el: _Element): MMSParty {
    if (!_cached_decoder_for_MMSParty) { _cached_decoder_for_MMSParty = function (el: _Element): MMSParty {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMSParty contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mMSPartyIDs";
    sequence[1].name = "nonLocalID";
    let mMSPartyIDs!: MMSPartyID[];
    let nonLocalID!: NonLocalID;
    mMSPartyIDs = $._decode_implicit<MMSPartyID[]>(() => $._decodeSequenceOf<MMSPartyID>(() => _decode_MMSPartyID))(sequence[0]);
    nonLocalID = $._decode_implicit<NonLocalID>(() => _decode_NonLocalID)(sequence[1]);
    return new MMSParty(
        mMSPartyIDs,
        nonLocalID,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_MMSParty(el);
}

let _cached_encoder_for_MMSParty: $.ASN1Encoder<MMSParty> | null = null;

/**
 * @summary Encodes a(n) MMSParty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSParty, encoded as an ASN.1 Element.
 */
export
function _encode_MMSParty (value: MMSParty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSParty) { _cached_encoder_for_MMSParty = function (value: MMSParty, elGetter: $.ASN1Encoder<MMSParty>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSPartyID>(() => _encode_MMSPartyID, $.BER), $.BER)(value.mMSPartyIDs, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NonLocalID, $.BER)(value.nonLocalID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSParty(value, elGetter);
}


/* eslint-enable */
