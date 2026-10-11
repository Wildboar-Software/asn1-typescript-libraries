/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
// export { MMSParty, _decode_MMSParty, _encode_MMSParty } from "../TS33128Payloads/MMSParty.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";


/**
 * @summary MMSPreviouslySent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPreviouslySent ::= SEQUENCE
 * {
 *     previouslySentByParty [1] MMSParty,
 *     sequenceNumber        [2] INTEGER,
 *     previousSendDateTime  [3] Timestamp
 * }
 * ```
 * 
 * @class
 */
export
class MMSPreviouslySent {
    /**
     * @summary `previouslySentByParty`.
     * @public
     * @readonly
     */
    readonly previouslySentByParty: MMSParty;
    /**
     * @summary `sequenceNumber`.
     * @public
     * @readonly
     */
    readonly sequenceNumber: INTEGER;
    /**
     * @summary `previousSendDateTime`.
     * @public
     * @readonly
     */
    readonly previousSendDateTime: Timestamp;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        previouslySentByParty: MMSParty,
        sequenceNumber: INTEGER,
        previousSendDateTime: Timestamp,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.previouslySentByParty = previouslySentByParty;
        this.sequenceNumber = sequenceNumber;
        this.previousSendDateTime = previousSendDateTime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSPreviouslySent
     * @description
     * 
     * This takes an `object` and converts it to a `MMSPreviouslySent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSPreviouslySent`.
     * @returns {MMSPreviouslySent}
     */
    public static _from_object (_o: { [_K in keyof (MMSPreviouslySent)]: (MMSPreviouslySent)[_K] }): MMSPreviouslySent {
        return new MMSPreviouslySent(_o.previouslySentByParty, _o.sequenceNumber, _o.previousSendDateTime, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MMSPreviouslySent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSPreviouslySent: $.ComponentSpec[] = [
    new $.ComponentSpec("previouslySentByParty", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sequenceNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("previousSendDateTime", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MMSPreviouslySent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSPreviouslySent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSPreviouslySent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSPreviouslySent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSPreviouslySent: $.ASN1Decoder<MMSPreviouslySent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSPreviouslySent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSPreviouslySent (el: _Element): MMSPreviouslySent {
    if (!_cached_decoder_for_MMSPreviouslySent) { _cached_decoder_for_MMSPreviouslySent = function (el: _Element): MMSPreviouslySent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MMSPreviouslySent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "previouslySentByParty";
    sequence[1].name = "sequenceNumber";
    sequence[2].name = "previousSendDateTime";
    let previouslySentByParty!: MMSParty;
    let sequenceNumber!: INTEGER;
    let previousSendDateTime!: Timestamp;
    previouslySentByParty = $._decode_implicit<MMSParty>(() => _decode_MMSParty)(sequence[0]);
    sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    previousSendDateTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(sequence[2]);
    return new MMSPreviouslySent(
        previouslySentByParty,
        sequenceNumber,
        previousSendDateTime,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_MMSPreviouslySent(el);
}

let _cached_encoder_for_MMSPreviouslySent: $.ASN1Encoder<MMSPreviouslySent> | null = null;

/**
 * @summary Encodes a(n) MMSPreviouslySent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSPreviouslySent, encoded as an ASN.1 Element.
 */
export
function _encode_MMSPreviouslySent (value: MMSPreviouslySent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSPreviouslySent) { _cached_encoder_for_MMSPreviouslySent = function (value: MMSPreviouslySent, _elGetter: $.ASN1Encoder<MMSPreviouslySent>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSParty, $.BER)(value.previouslySentByParty, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.previousSendDateTime, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSPreviouslySent(value, elGetter);
}


/* eslint-enable */
