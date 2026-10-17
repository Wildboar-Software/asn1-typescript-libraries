/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary NEF5GVNGroupQuery
 * @description
 * 
 * The IRI-POI in the NEF shall generate an xIRI containing a NEF5GVNGroupQuery
 * record when the IRI-POI present in the NEF detects that an AF has queried a
 * 5G VN group the target UE belongs it.
 *
 * Accordingly, the IRI-POI in the NEF generates the xIRI when any of the
 * following events is detected:
 *
 * - NEF sends a Nnef_ParameterProvision_Get Response to the AF to acknowledge
 *   the reception of Nnef_ParameterProvision_Get Request with GPSIs of the
 *   group members including the GPSI of the target UE (see TS 23.502 [4] clause
 *   5.2.6.4.5 and TS 29.522 [58] clause 5.7.1.2).
 *
 * Table 7.7.7.2-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.7.7.1.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEF5GVNGroupQuery ::= SEQUENCE
 * {
 *     aFID                        [1] AFID,
 *     gPSI                        [2] GPSI,
 *     fiveGLanParametersProvision [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class NEF5GVNGroupQuery {
    /**
     * @summary `aFID`.
     * @description
     *
     * The identity of the AF querying the 5G VN group.
     *
     * 3GPP TS 33.128, clause 7.7.7.1.5.
     *
     * @public
     * @readonly
     */
    readonly aFID: AFID;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI of the target UE as member of the queried 5G VN group.
     *
     * 3GPP TS 33.128, clause 7.7.7.1.5.
     *
     * @public
     * @readonly
     */
    readonly gPSI: GPSI;
    /**
     * @summary `fiveGLanParametersProvision`.
     * @description
     *
     * Shall include an 5GLanParametersProvision resource according to TS 29.522
     * [58] clause A.5. The SBIReference for this parameter shall be populated
     * with
     * ‘TS29522_5GLANParameterProvision.yaml#/components/schemas/5GLanParametersProvision'.
     *
     * 3GPP TS 33.128, clause 7.7.7.1.5.
     *
     * @public
     * @readonly
     */
    readonly fiveGLanParametersProvision: SBIType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aFID: AFID,
        gPSI: GPSI,
        fiveGLanParametersProvision: SBIType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aFID = aFID;
        this.gPSI = gPSI;
        this.fiveGLanParametersProvision = fiveGLanParametersProvision;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NEF5GVNGroupQuery
     * @description
     * 
     * This takes an `object` and converts it to a `NEF5GVNGroupQuery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEF5GVNGroupQuery`.
     * @returns {NEF5GVNGroupQuery}
     */
    public static _from_object (_o: { [_K in keyof (NEF5GVNGroupQuery)]: (NEF5GVNGroupQuery)[_K] }): NEF5GVNGroupQuery {
        return new NEF5GVNGroupQuery(_o.aFID, _o.gPSI, _o.fiveGLanParametersProvision, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NEF5GVNGroupQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEF5GVNGroupQuery: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGLanParametersProvision", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NEF5GVNGroupQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEF5GVNGroupQuery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEF5GVNGroupQuery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEF5GVNGroupQuery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEF5GVNGroupQuery: $.ASN1Decoder<NEF5GVNGroupQuery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEF5GVNGroupQuery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEF5GVNGroupQuery (el: _Element): NEF5GVNGroupQuery {
    if (!_cached_decoder_for_NEF5GVNGroupQuery) { _cached_decoder_for_NEF5GVNGroupQuery = function (el: _Element): NEF5GVNGroupQuery {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("NEF5GVNGroupQuery contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFID";
    sequence[1].name = "gPSI";
    sequence[2].name = "fiveGLanParametersProvision";
    let aFID!: AFID;
    let gPSI!: GPSI;
    let fiveGLanParametersProvision!: SBIType;
    aFID = $._decode_implicit<AFID>(() => _decode_AFID)(sequence[0]);
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[1]);
    fiveGLanParametersProvision = $._decode_implicit<SBIType>(() => _decode_SBIType)(sequence[2]);
    return new NEF5GVNGroupQuery(
        aFID,
        gPSI,
        fiveGLanParametersProvision,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_NEF5GVNGroupQuery(el);
}

let _cached_encoder_for_NEF5GVNGroupQuery: $.ASN1Encoder<NEF5GVNGroupQuery> | null = null;

/**
 * @summary Encodes a(n) NEF5GVNGroupQuery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEF5GVNGroupQuery, encoded as an ASN.1 Element.
 */
export
function _encode_NEF5GVNGroupQuery (value: NEF5GVNGroupQuery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEF5GVNGroupQuery) { _cached_encoder_for_NEF5GVNGroupQuery = function (value: NEF5GVNGroupQuery, elGetter: $.ASN1Encoder<NEF5GVNGroupQuery>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFID, $.BER)(value.aFID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.fiveGLanParametersProvision, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NEF5GVNGroupQuery(value, elGetter);
}


/* eslint-enable */
