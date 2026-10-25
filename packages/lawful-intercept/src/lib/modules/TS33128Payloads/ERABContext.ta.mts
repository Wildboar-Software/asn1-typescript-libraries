/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { ERABQoSParameters, _decode_ERABQoSParameters, _encode_ERABQoSParameters } from "../TS33128Payloads/ERABQoSParameters.ta.mjs";
// export { ERABQoSParameters, _decode_ERABQoSParameters, _encode_ERABQoSParameters } from "../TS33128Payloads/ERABQoSParameters.ta.mjs";
import { IPAddr, _decode_IPAddr, _encode_IPAddr } from "../TS33128Payloads/IPAddr.ta.mjs";
// export { IPAddr, _decode_IPAddr, _encode_IPAddr } from "../TS33128Payloads/IPAddr.ta.mjs";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";


/**
 * @summary ERABContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ERABContext ::= SEQUENCE
 * {
 *     eRABID                [1] EPSBearerID,
 *     eRABQoSParameters     [2] ERABQoSParameters OPTIONAL,
 *     transportLayerAddress [3] IPAddr OPTIONAL,
 *     uLGTPTEID             [4] FTEID OPTIONAL,
 *     dLGTPTEID             [5] FTEID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ERABContext {
    /**
     * @summary `eRABID`.
     * @description
     *
     * This element uniquely identifies a radio access bearer for a particular
     * UE, which makes the E-RAB ID unique over one S1 connection. Derived from
     * the E-RAB ID IE, see TS 36.413 [38] clause 9.2.1.2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.4.
     *
     * @public
     * @readonly
     */
    readonly eRABID: EPSBearerID;
    /**
     * @summary `eRABQoSParameters`.
     * @description
     *
     * The QOS parameters to be assigned to an E-RAB. Derived from the E-RAB
     * Level QoS Parameters defined in TS 36.418 [38] clause 9.2.1.15. Shall be
     * present if present in the messages for the procedure that triggered the
     * xIRI or known at the NF context.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.4.
     *
     * @public
     * @readonly
     */
    readonly eRABQoSParameters: OPTIONAL<ERABQoSParameters>;
    /**
     * @summary `transportLayerAddress`.
     * @description
     *
     * The local IP Address assigned to the UE for the E-RAB. See TS 36.418 [38]
     * Clause 9.2.2.1. Shall be present if present in the messages for the
     * procedure that triggered the xIRI or known at the NF context.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.4.
     *
     * @public
     * @readonly
     */
    readonly transportLayerAddress: OPTIONAL<IPAddr>;
    /**
     * @summary `uLGTPTEID`.
     * @description
     *
     * The uplink tunnel information for the E-RAB. See TS 36.418 [38] Clause
     * 9.2.2.2. Shall be present if present in the messages for the procedure
     * that triggered the xIRI or known at the NF context.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.4.
     *
     * @public
     * @readonly
     */
    readonly uLGTPTEID: OPTIONAL<FTEID>;
    /**
     * @summary `dLGTPTEID`.
     * @description
     *
     * The downlink tunnel information for the E-RAB. See TS 36.418 [38] Clause
     * 9.2.2.2. Shall be present if present in the messages for the procedure
     * that triggered the xIRI or known at the NF context.
     *
     * 3GPP TS 33.128, clause 6.3.2.2A.4.
     *
     * @public
     * @readonly
     */
    readonly dLGTPTEID: OPTIONAL<FTEID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eRABID: EPSBearerID,
        eRABQoSParameters?: OPTIONAL<ERABQoSParameters>,
        transportLayerAddress?: OPTIONAL<IPAddr>,
        uLGTPTEID?: OPTIONAL<FTEID>,
        dLGTPTEID?: OPTIONAL<FTEID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eRABID = eRABID;
        this.eRABQoSParameters = eRABQoSParameters;
        this.transportLayerAddress = transportLayerAddress;
        this.uLGTPTEID = uLGTPTEID;
        this.dLGTPTEID = dLGTPTEID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ERABContext
     * @description
     * 
     * This takes an `object` and converts it to a `ERABContext`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ERABContext`.
     * @returns {ERABContext}
     */
    public static _from_object (_o: { [_K in keyof (ERABContext)]: (ERABContext)[_K] }): ERABContext {
        return new ERABContext(_o.eRABID, _o.eRABQoSParameters, _o.transportLayerAddress, _o.uLGTPTEID, _o.dLGTPTEID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ERABContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ERABContext: $.ComponentSpec[] = [
    new $.ComponentSpec("eRABID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eRABQoSParameters", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("transportLayerAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uLGTPTEID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dLGTPTEID", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ERABContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ERABContext: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ERABContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ERABContext: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ERABContext: $.ASN1Decoder<ERABContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ERABContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ERABContext (el: _Element): ERABContext {
    if (!_cached_decoder_for_ERABContext) { _cached_decoder_for_ERABContext = function (el: _Element): ERABContext {
    let eRABID!: EPSBearerID;
    let eRABQoSParameters: OPTIONAL<ERABQoSParameters>;
    let transportLayerAddress: OPTIONAL<IPAddr>;
    let uLGTPTEID: OPTIONAL<FTEID>;
    let dLGTPTEID: OPTIONAL<FTEID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eRABID": (_el: _Element): void => { eRABID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "eRABQoSParameters": (_el: _Element): void => { eRABQoSParameters = $._decode_implicit<ERABQoSParameters>(() => _decode_ERABQoSParameters)(_el); },
        "transportLayerAddress": (_el: _Element): void => { transportLayerAddress = $._decode_implicit<IPAddr>(() => _decode_IPAddr)(_el); },
        "uLGTPTEID": (_el: _Element): void => { uLGTPTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "dLGTPTEID": (_el: _Element): void => { dLGTPTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ERABContext,
        _extension_additions_list_spec_for_ERABContext,
        _root_component_type_list_2_spec_for_ERABContext,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ERABContext(
        eRABID,
        eRABQoSParameters,
        transportLayerAddress,
        uLGTPTEID,
        dLGTPTEID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ERABContext(el);
}

let _cached_encoder_for_ERABContext: $.ASN1Encoder<ERABContext> | null = null;

/**
 * @summary Encodes a(n) ERABContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERABContext, encoded as an ASN.1 Element.
 */
export
function _encode_ERABContext (value: ERABContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ERABContext) { _cached_encoder_for_ERABContext = function (value: ERABContext, elGetter: $.ASN1Encoder<ERABContext>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.eRABID, $.BER);
    if (value.eRABQoSParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ERABQoSParameters, $.BER)(value.eRABQoSParameters, $.BER);
    }
    if (value.transportLayerAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPAddr, $.BER)(value.transportLayerAddress, $.BER);
    }
    if (value.uLGTPTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FTEID, $.BER)(value.uLGTPTEID, $.BER);
    }
    if (value.dLGTPTEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_FTEID, $.BER)(value.dLGTPTEID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ERABContext(value, elGetter);
}


/* eslint-enable */
