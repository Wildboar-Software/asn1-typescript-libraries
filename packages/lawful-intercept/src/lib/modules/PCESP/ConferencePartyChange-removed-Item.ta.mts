/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
// export { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
import { CCCId, _decode_CCCId, _encode_CCCId } from "../PCESP/CCCId.ta.mjs";
// export { CCCId, _decode_CCCId, _encode_CCCId } from "../PCESP/CCCId.ta.mjs";


/**
 * @summary ConferencePartyChange_removed_Item
 * @description
 *
 * One entry in `ConferencePartyChange.removed`.
 *
 * The module comment says to include the list to identify parties removed from
 * the communication, for example by a hold service. `partyId` identifies the
 * removed party or parties. `cCCId` is included when the content of the
 * resulting call is delivered, to identify the associated CCC or CCCs.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConferencePartyChange-removed-Item ::= SEQUENCE {
 *     -- include to identify parties removed (e.g., hold
 *     -- service) from the communication.
 *     partyId     [0] SEQUENCE OF PartyId OPTIONAL,
 *     -- identifies removed party identity(ies).
 *     cCCId       [1] EXPLICIT CCCId OPTIONAL,
 *     -- included when the content of the resulting call is
 *     -- delivered to identify the associated CCC(s).
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ConferencePartyChange_removed_Item {
    /**
     * @summary `partyId`.
     * @description
     *
     * Identities of parties removed from the communication. Optional, and a
     * sequence. This edition does not define which `PartyId` components to
     * populate.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly partyId: OPTIONAL<PartyId[]>;
    /**
     * @summary `cCCId`.
     * @description
     *
     * Included when the content of the resulting call is delivered, to identify
     * the associated CCC or CCCs. Optional. See `CCCId`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly cCCId: OPTIONAL<CCCId>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        partyId: OPTIONAL<PartyId[]>,
        cCCId: OPTIONAL<CCCId>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyId = partyId;
        this.cCCId = cCCId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ConferencePartyChange_removed_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ConferencePartyChange_removed_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConferencePartyChange_removed_Item`.
     * @returns {ConferencePartyChange_removed_Item}
     */
    public static _from_object (_o: { [_K in keyof (ConferencePartyChange_removed_Item)]: (ConferencePartyChange_removed_Item)[_K] }): ConferencePartyChange_removed_Item {
        return new ConferencePartyChange_removed_Item(_o.partyId, _o.cCCId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConferencePartyChange_removed_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConferencePartyChange_removed_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("partyId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cCCId", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ConferencePartyChange_removed_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConferencePartyChange_removed_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConferencePartyChange_removed_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConferencePartyChange_removed_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConferencePartyChange_removed_Item: $.ASN1Decoder<ConferencePartyChange_removed_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConferencePartyChange_removed_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConferencePartyChange_removed_Item (el: _Element): ConferencePartyChange_removed_Item {
    if (!_cached_decoder_for_ConferencePartyChange_removed_Item) { _cached_decoder_for_ConferencePartyChange_removed_Item = function (el: _Element): ConferencePartyChange_removed_Item {
    let partyId: OPTIONAL<PartyId[]>;
    let cCCId: OPTIONAL<CCCId>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyId": (_el: _Element): void => { partyId = $._decode_implicit<PartyId[]>(() => $._decodeSequenceOf<PartyId>(() => _decode_PartyId))(_el); },
        "cCCId": (_el: _Element): void => { cCCId = $._decode_explicit<CCCId>(() => _decode_CCCId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConferencePartyChange_removed_Item,
        _extension_additions_list_spec_for_ConferencePartyChange_removed_Item,
        _root_component_type_list_2_spec_for_ConferencePartyChange_removed_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConferencePartyChange_removed_Item(
        partyId,
        cCCId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConferencePartyChange_removed_Item(el);
}

let _cached_encoder_for_ConferencePartyChange_removed_Item: $.ASN1Encoder<ConferencePartyChange_removed_Item> | null = null;

/**
 * @summary Encodes a(n) ConferencePartyChange_removed_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConferencePartyChange_removed_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ConferencePartyChange_removed_Item (value: ConferencePartyChange_removed_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConferencePartyChange_removed_Item) { _cached_encoder_for_ConferencePartyChange_removed_Item = function (value: ConferencePartyChange_removed_Item, elGetter: $.ASN1Encoder<ConferencePartyChange_removed_Item>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.partyId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<PartyId>(() => _encode_PartyId, $.BER), $.BER)(value.partyId, $.BER);
    }
    if (value.cCCId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_CCCId, $.BER)(value.cCCId, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ConferencePartyChange_removed_Item(value, elGetter);
}


/* eslint-enable */
