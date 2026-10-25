/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";


/**
 * @summary EPSGTPTunnels
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSGTPTunnels ::= SEQUENCE
 * {
 *     controlPlaneSenderFTEID  [1] FTEID OPTIONAL,
 *     controlPlanePGWS5S8FTEID [2] FTEID OPTIONAL,
 *     s1UeNodeBFTEID           [3] FTEID OPTIONAL,
 *     s5S8SGWFTEID             [4] FTEID OPTIONAL,
 *     s5S8PGWFTEID             [5] FTEID OPTIONAL,
 *     s2bUePDGFTEID            [6] FTEID OPTIONAL,
 *     s2aUePDGFTEID            [7] FTEID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSGTPTunnels {
    /**
     * @summary `controlPlaneSenderFTEID`.
     * @description
     *
     * Shall include the Sender F-TEID for the control plane if present in the
     * Request or response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3,
     * 7.2.4, 7.2.7, 7.2.8, 7.2.15, 7.2.16) or known in the context at the SGW
     * or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly controlPlaneSenderFTEID: OPTIONAL<FTEID>;
    /**
     * @summary `controlPlanePGWS5S8FTEID`.
     * @description
     *
     * Shall include the PGW F-TEID for the control plane if present in the
     * Request or response (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3,
     * 7.2.4, 7.2.7, 7.2.8, 7.2.15, 7.2.16) or known in the context at the SGW
     * or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly controlPlanePGWS5S8FTEID: OPTIONAL<FTEID>;
    /**
     * @summary `s1UeNodeBFTEID`.
     * @description
     *
     * Shall include the F-TEID for the eNodeB S1-U interface for the bearer if
     * present in the Request or response (see TS 29.274 [87] clauses 7.2.1,
     * 7.2.2, 7.2.3, 7.2.4, 7.2.7, 7.2.8, 7.2.15, 7.2.16) or known in the
     * context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly s1UeNodeBFTEID: OPTIONAL<FTEID>;
    /**
     * @summary `s5S8SGWFTEID`.
     * @description
     *
     * Shall include the F-TEID for the SGW S5 or S8 interface for the bearer if
     * present in the Request or response (see TS 29.274 [87] clauses 7.2.1,
     * 7.2.2, 7.2.3, 7.2.4, 7.2.7, 7.2.8, 7.2.15, 7.2.16) or known in the
     * context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly s5S8SGWFTEID: OPTIONAL<FTEID>;
    /**
     * @summary `s5S8PGWFTEID`.
     * @description
     *
     * Shall include the F-TEID for the PGW S5 or S8 interface for the bearer if
     * present in the Request or response (see TS 29.274 [87] clauses 7.2.1,
     * 7.2.2, 7.2.3, 7.2.4, 7.2.7, 7.2.8, 7.2.15, 7.2.16) or known in the
     * context at the SGW or PGW.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly s5S8PGWFTEID: OPTIONAL<FTEID>;
    /**
     * @summary `s2bUePDGFTEID`.
     * @description
     *
     * Shall include the F-TEID for the ePDG on the S2b-U interface for the
     * bearer if present in the Request or response (see TS 29.274 [87] clauses
     * 7.2.1, 7.2.2, 7.2.3, 7.2.4, 7.2.7, 7.2.8, 7.2.15, 7.2.16) or known in the
     * context at the PGW or ePDG.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly s2bUePDGFTEID: OPTIONAL<FTEID>;
    /**
     * @summary `s2aUePDGFTEID`.
     * @description
     *
     * Shall include the F-TEID for the ePDG on the S2a-U interface for the
     * bearer if present in the Request or response (see TS 29.274 [87] clauses
     * 7.2.1, 7.2.2, 7.2.3, 7.2.4, 7.2.7, 7.2.8, 7.2.15, 7.2.16) or known in the
     * context at the PGW or ePDG.
     *
     * 3GPP TS 33.128, clause 6.3.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly s2aUePDGFTEID: OPTIONAL<FTEID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        controlPlaneSenderFTEID?: OPTIONAL<FTEID>,
        controlPlanePGWS5S8FTEID?: OPTIONAL<FTEID>,
        s1UeNodeBFTEID?: OPTIONAL<FTEID>,
        s5S8SGWFTEID?: OPTIONAL<FTEID>,
        s5S8PGWFTEID?: OPTIONAL<FTEID>,
        s2bUePDGFTEID?: OPTIONAL<FTEID>,
        s2aUePDGFTEID?: OPTIONAL<FTEID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.controlPlaneSenderFTEID = controlPlaneSenderFTEID;
        this.controlPlanePGWS5S8FTEID = controlPlanePGWS5S8FTEID;
        this.s1UeNodeBFTEID = s1UeNodeBFTEID;
        this.s5S8SGWFTEID = s5S8SGWFTEID;
        this.s5S8PGWFTEID = s5S8PGWFTEID;
        this.s2bUePDGFTEID = s2bUePDGFTEID;
        this.s2aUePDGFTEID = s2aUePDGFTEID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSGTPTunnels
     * @description
     * 
     * This takes an `object` and converts it to a `EPSGTPTunnels`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSGTPTunnels`.
     * @returns {EPSGTPTunnels}
     */
    public static _from_object (_o: { [_K in keyof (EPSGTPTunnels)]: (EPSGTPTunnels)[_K] }): EPSGTPTunnels {
        return new EPSGTPTunnels(_o.controlPlaneSenderFTEID, _o.controlPlanePGWS5S8FTEID, _o.s1UeNodeBFTEID, _o.s5S8SGWFTEID, _o.s5S8PGWFTEID, _o.s2bUePDGFTEID, _o.s2aUePDGFTEID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSGTPTunnels: $.ComponentSpec[] = [
    new $.ComponentSpec("controlPlaneSenderFTEID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("controlPlanePGWS5S8FTEID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("s1UeNodeBFTEID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("s5S8SGWFTEID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("s5S8PGWFTEID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("s2bUePDGFTEID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("s2aUePDGFTEID", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of EPSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSGTPTunnels: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSGTPTunnels: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSGTPTunnels: $.ASN1Decoder<EPSGTPTunnels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSGTPTunnels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSGTPTunnels (el: _Element): EPSGTPTunnels {
    if (!_cached_decoder_for_EPSGTPTunnels) { _cached_decoder_for_EPSGTPTunnels = function (el: _Element): EPSGTPTunnels {
    let controlPlaneSenderFTEID: OPTIONAL<FTEID>;
    let controlPlanePGWS5S8FTEID: OPTIONAL<FTEID>;
    let s1UeNodeBFTEID: OPTIONAL<FTEID>;
    let s5S8SGWFTEID: OPTIONAL<FTEID>;
    let s5S8PGWFTEID: OPTIONAL<FTEID>;
    let s2bUePDGFTEID: OPTIONAL<FTEID>;
    let s2aUePDGFTEID: OPTIONAL<FTEID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "controlPlaneSenderFTEID": (_el: _Element): void => { controlPlaneSenderFTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "controlPlanePGWS5S8FTEID": (_el: _Element): void => { controlPlanePGWS5S8FTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "s1UeNodeBFTEID": (_el: _Element): void => { s1UeNodeBFTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "s5S8SGWFTEID": (_el: _Element): void => { s5S8SGWFTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "s5S8PGWFTEID": (_el: _Element): void => { s5S8PGWFTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "s2bUePDGFTEID": (_el: _Element): void => { s2bUePDGFTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "s2aUePDGFTEID": (_el: _Element): void => { s2aUePDGFTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSGTPTunnels,
        _extension_additions_list_spec_for_EPSGTPTunnels,
        _root_component_type_list_2_spec_for_EPSGTPTunnels,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSGTPTunnels(
        controlPlaneSenderFTEID,
        controlPlanePGWS5S8FTEID,
        s1UeNodeBFTEID,
        s5S8SGWFTEID,
        s5S8PGWFTEID,
        s2bUePDGFTEID,
        s2aUePDGFTEID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSGTPTunnels(el);
}

let _cached_encoder_for_EPSGTPTunnels: $.ASN1Encoder<EPSGTPTunnels> | null = null;

/**
 * @summary Encodes a(n) EPSGTPTunnels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSGTPTunnels, encoded as an ASN.1 Element.
 */
export
function _encode_EPSGTPTunnels (value: EPSGTPTunnels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSGTPTunnels) { _cached_encoder_for_EPSGTPTunnels = function (value: EPSGTPTunnels, elGetter: $.ASN1Encoder<EPSGTPTunnels>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.controlPlaneSenderFTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_FTEID, $.BER)(value.controlPlaneSenderFTEID, $.BER);
    }
    if (value.controlPlanePGWS5S8FTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_FTEID, $.BER)(value.controlPlanePGWS5S8FTEID, $.BER);
    }
    if (value.s1UeNodeBFTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_FTEID, $.BER)(value.s1UeNodeBFTEID, $.BER);
    }
    if (value.s5S8SGWFTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FTEID, $.BER)(value.s5S8SGWFTEID, $.BER);
    }
    if (value.s5S8PGWFTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_FTEID, $.BER)(value.s5S8PGWFTEID, $.BER);
    }
    if (value.s2bUePDGFTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_FTEID, $.BER)(value.s2bUePDGFTEID, $.BER);
    }
    if (value.s2aUePDGFTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_FTEID, $.BER)(value.s2aUePDGFTEID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSGTPTunnels(value, elGetter);
}


/* eslint-enable */
