/* eslint-disable */
import {
    RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPIRIContents, _decode_IPIRIContents, _encode_IPIRIContents } from "../IPAccessPDU/IPIRIContents.ta.mjs";
// export { IPIRIContents, _decode_IPIRIContents, _encode_IPIRIContents } from "../IPAccessPDU/IPIRIContents.ta.mjs";


/**
 * @summary IPIRI
 * @description
 *
 * HI2 intercept-related information for one Internet Access Service
 * event (ETSI TS 102 232-3 V3.9.1, clauses 6 and 8). The IRI message
 * type (BEGIN, END, CONTINUE, or REPORT) follows `accessEventType`
 * (clause 6.1, table 1). Handover of the record is specified in
 * ETSI TS 102 232-1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPIRI ::= SEQUENCE
 * {
 *     iPIRIObjId          [0] RELATIVE-OID,
 *     iPIRIContents       [1] IPIRIContents,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class IPIRI {
    /**
     * @summary `iPIRIObjId`.
     * @description
     *
     * Set to `iPIRIObjId`, arc `iRI(1)` under the module OID (clause 8).
     *
     * @public
     * @readonly
     */
    readonly iPIRIObjId: RELATIVE_OID;
    /**
     * @summary `iPIRIContents`.
     * @description
     *
     * The session attributes for this event (clause 6.2, table 2).
     *
     * @public
     * @readonly
     */
    readonly iPIRIContents: IPIRIContents;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPIRIObjId: RELATIVE_OID,
        iPIRIContents: IPIRIContents,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPIRIObjId = iPIRIObjId;
        this.iPIRIContents = iPIRIContents;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPIRI
     * @description
     * 
     * This takes an `object` and converts it to a `IPIRI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPIRI`.
     * @returns {IPIRI}
     */
    public static _from_object (_o: { [_K in keyof (IPIRI)]: (IPIRI)[_K] }): IPIRI {
        return new IPIRI(_o.iPIRIObjId, _o.iPIRIContents, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("iPIRIObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPIRIContents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IPIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPIRI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPIRI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPIRI: $.ASN1Decoder<IPIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPIRI (el: _Element): IPIRI {
    if (!_cached_decoder_for_IPIRI) { _cached_decoder_for_IPIRI = function (el: _Element): IPIRI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IPIRI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPIRIObjId";
    sequence[1].name = "iPIRIContents";
    let iPIRIObjId!: RELATIVE_OID;
    let iPIRIContents!: IPIRIContents;
    iPIRIObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    iPIRIContents = $._decode_implicit<IPIRIContents>(() => _decode_IPIRIContents)(sequence[1]);
    return new IPIRI(
        iPIRIObjId,
        iPIRIContents,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IPIRI(el);
}

let _cached_encoder_for_IPIRI: $.ASN1Encoder<IPIRI> | null = null;

/**
 * @summary Encodes a(n) IPIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPIRI, encoded as an ASN.1 Element.
 */
export
function _encode_IPIRI (value: IPIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPIRI) { _cached_encoder_for_IPIRI = function (value: IPIRI, elGetter: $.ASN1Encoder<IPIRI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPIRIObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPIRIContents, $.BER)(value.iPIRIContents, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPIRI(value, elGetter);
}


/* eslint-enable */
