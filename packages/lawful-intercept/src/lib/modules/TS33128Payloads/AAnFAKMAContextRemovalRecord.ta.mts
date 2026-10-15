/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { NFID, _decode_NFID, _encode_NFID } from "../TS33128Payloads/NFID.ta.mjs";
// export { NFID, _decode_NFID, _encode_NFID } from "../TS33128Payloads/NFID.ta.mjs";


/**
 * @summary AAnFAKMAContextRemovalRecord
 * @description
 * 
 * Table 7.9.1.5-1 gives the LI_HI2 IRI message type for this record as END.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAnFAKMAContextRemovalRecord ::= SEQUENCE
 * {
 *     aKID                  [1] NAI,
 *     nFID                  [2] NFID
 * }
 * ```
 * 
 * @class
 */
export
class AAnFAKMAContextRemovalRecord {
    /**
     * @summary `aKID`.
     * @public
     * @readonly
     */
    readonly aKID: NAI;
    /**
     * @summary `nFID`.
     * @public
     * @readonly
     */
    readonly nFID: NFID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aKID: NAI,
        nFID: NFID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aKID = aKID;
        this.nFID = nFID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AAnFAKMAContextRemovalRecord
     * @description
     * 
     * This takes an `object` and converts it to a `AAnFAKMAContextRemovalRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAnFAKMAContextRemovalRecord`.
     * @returns {AAnFAKMAContextRemovalRecord}
     */
    public static _from_object (_o: { [_K in keyof (AAnFAKMAContextRemovalRecord)]: (AAnFAKMAContextRemovalRecord)[_K] }): AAnFAKMAContextRemovalRecord {
        return new AAnFAKMAContextRemovalRecord(_o.aKID, _o.nFID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AAnFAKMAContextRemovalRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AAnFAKMAContextRemovalRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nFID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AAnFAKMAContextRemovalRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AAnFAKMAContextRemovalRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AAnFAKMAContextRemovalRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AAnFAKMAContextRemovalRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AAnFAKMAContextRemovalRecord: $.ASN1Decoder<AAnFAKMAContextRemovalRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAnFAKMAContextRemovalRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAnFAKMAContextRemovalRecord (el: _Element): AAnFAKMAContextRemovalRecord {
    if (!_cached_decoder_for_AAnFAKMAContextRemovalRecord) { _cached_decoder_for_AAnFAKMAContextRemovalRecord = function (el: _Element): AAnFAKMAContextRemovalRecord {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AAnFAKMAContextRemovalRecord contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aKID";
    sequence[1].name = "nFID";
    let aKID!: NAI;
    let nFID!: NFID;
    aKID = $._decode_implicit<NAI>(() => _decode_NAI)(sequence[0]);
    nFID = $._decode_implicit<NFID>(() => _decode_NFID)(sequence[1]);
    return new AAnFAKMAContextRemovalRecord(
        aKID,
        nFID,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_AAnFAKMAContextRemovalRecord(el);
}

let _cached_encoder_for_AAnFAKMAContextRemovalRecord: $.ASN1Encoder<AAnFAKMAContextRemovalRecord> | null = null;

/**
 * @summary Encodes a(n) AAnFAKMAContextRemovalRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAnFAKMAContextRemovalRecord, encoded as an ASN.1 Element.
 */
export
function _encode_AAnFAKMAContextRemovalRecord (value: AAnFAKMAContextRemovalRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAnFAKMAContextRemovalRecord) { _cached_encoder_for_AAnFAKMAContextRemovalRecord = function (value: AAnFAKMAContextRemovalRecord, elGetter: $.ASN1Encoder<AAnFAKMAContextRemovalRecord>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NAI, $.BER)(value.aKID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NFID, $.BER)(value.nFID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AAnFAKMAContextRemovalRecord(value, elGetter);
}


/* eslint-enable */
