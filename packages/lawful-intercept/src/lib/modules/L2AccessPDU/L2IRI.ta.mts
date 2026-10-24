/* eslint-disable */
import {
    type RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { L2IRIContents, _decode_L2IRIContents, _encode_L2IRIContents } from "../L2AccessPDU/L2IRIContents.ta.mjs";
// export { L2IRIContents, _decode_L2IRIContents, _encode_L2IRIContents } from "../L2AccessPDU/L2IRIContents.ta.mjs";


/**
 * @summary L2IRI
 * @description
 *
 * HI2 intercept-related information for one layer 2 event. The event and its
 * parameters are `l2IRIContents`. The IRI record type (BEGIN, END, CONTINUE,
 * or REPORT) is not a component of this type. Clause 4.2.3 defines those
 * four record types and clause 6.1 assigns one to each `AccessEventType`.
 * Their use is specified in ETSI TS 102 232-1, which carries this PDU as the
 * layer 2 IRI alternative.
 *
 * The events in clause 6.1 apply when the target's traffic passes through
 * the access provider's network. IRI is sent without undue delay. Clause
 * 4.2.4 allows delay only for access-protocol handling and automated
 * forwarding to the delivery function.
 *
 * The sequence is extensible. V3.8.1 names no extension additions on `L2IRI`
 * itself.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 4.2.3, clause 4.2.4, clause 6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * L2IRI ::= SEQUENCE
 * {
 *     l2IRIObjId          [0] RELATIVE-OID,
 *     l2IRIContents       [1] L2IRIContents,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class L2IRI {
    /**
     * @summary `l2IRIObjId`.
     * @description
     *
     * Object identifier of the layer 2 IRI definition in this PDU. For this
     * module that value is `l2IRIObjId`, arc `iRI(1)` under
     * `l2AccessPDUObjId`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly l2IRIObjId: RELATIVE_OID;
    /**
     * @summary `l2IRIContents`.
     * @description
     *
     * The IRI event and the layer 2 parameters that annex A attaches to that
     * event. See `L2IRIContents`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 6.1, clause 6.2.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly l2IRIContents: L2IRIContents;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this decoder did not recognize. V3.8.1 marks the
     * sequence extensible and does not say how a receiver treats unrecognized
     * additions.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        l2IRIObjId: RELATIVE_OID,
        l2IRIContents: L2IRIContents,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.l2IRIObjId = l2IRIObjId;
        this.l2IRIContents = l2IRIContents;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a L2IRI
     * @description
     * 
     * This takes an `object` and converts it to a `L2IRI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `L2IRI`.
     * @returns {L2IRI}
     */
    public static _from_object (_o: { [_K in keyof (L2IRI)]: (L2IRI)[_K] }): L2IRI {
        return new L2IRI(_o.l2IRIObjId, _o.l2IRIContents, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of L2IRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_L2IRI: $.ComponentSpec[] = [
    new $.ComponentSpec("l2IRIObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("l2IRIContents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of L2IRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_L2IRI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of L2IRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_L2IRI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_L2IRI: $.ASN1Decoder<L2IRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) L2IRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_L2IRI (el: _Element): L2IRI {
    if (!_cached_decoder_for_L2IRI) { _cached_decoder_for_L2IRI = function (el: _Element): L2IRI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("L2IRI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "l2IRIObjId";
    sequence[1].name = "l2IRIContents";
    let l2IRIObjId!: RELATIVE_OID;
    let l2IRIContents!: L2IRIContents;
    l2IRIObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    l2IRIContents = $._decode_implicit<L2IRIContents>(() => _decode_L2IRIContents)(sequence[1]);
    return new L2IRI(
        l2IRIObjId,
        l2IRIContents,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_L2IRI(el);
}

let _cached_encoder_for_L2IRI: $.ASN1Encoder<L2IRI> | null = null;

/**
 * @summary Encodes a(n) L2IRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The L2IRI, encoded as an ASN.1 Element.
 */
export
function _encode_L2IRI (value: L2IRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_L2IRI) { _cached_encoder_for_L2IRI = function (value: L2IRI, elGetter: $.ASN1Encoder<L2IRI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.l2IRIObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_L2IRIContents, $.BER)(value.l2IRIContents, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_L2IRI(value, elGetter);
}


/* eslint-enable */
