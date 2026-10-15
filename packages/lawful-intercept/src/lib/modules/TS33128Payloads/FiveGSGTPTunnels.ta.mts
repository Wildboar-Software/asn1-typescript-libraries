/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { FTEIDList, _decode_FTEIDList, _encode_FTEIDList } from "../TS33128Payloads/FTEIDList.ta.mjs";
// export { FTEIDList, _decode_FTEIDList, _encode_FTEIDList } from "../TS33128Payloads/FTEIDList.ta.mjs";
import { DLRANTunnelInformation, _decode_DLRANTunnelInformation, _encode_DLRANTunnelInformation } from "../TS33128Payloads/DLRANTunnelInformation.ta.mjs";
// export { DLRANTunnelInformation, _decode_DLRANTunnelInformation, _encode_DLRANTunnelInformation } from "../TS33128Payloads/DLRANTunnelInformation.ta.mjs";


/**
 * @summary FiveGSGTPTunnels
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSGTPTunnels ::= SEQUENCE
 * {
 *     uLNGUUPTunnelInformation           [1] FTEID OPTIONAL,
 *     additionalULNGUUPTunnelInformation [2] FTEIDList OPTIONAL,
 *     dLRANTunnelInformation             [3] DLRANTunnelInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FiveGSGTPTunnels {
    /**
     * @summary `uLNGUUPTunnelInformation`.
     * @description
     *
     * Shall include the F-TEID for the UPF endpoint of the NG-U transport
     * bearer (see TS 38.413 [23] clause 9.3.4.1).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly uLNGUUPTunnelInformation: OPTIONAL<FTEID>;
    /**
     * @summary `additionalULNGUUPTunnelInformation`.
     * @description
     *
     * Shall include the F-TEID for the UPF endpoint of any additional NG-U
     * transport bearers (see TS 38.413 [23] clause 9.3.4.1).
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly additionalULNGUUPTunnelInformation: OPTIONAL<FTEIDList>;
    /**
     * @summary `dLRANTunnelInformation`.
     * @description
     *
     * Shall include the RAN tunnel and QOS Flow information for the PDU Session
     * (see TS 29.502 [16] clause 6.1.6.2.39 and TS 38.413 [23] clause 9.3.4.1).
     * See table 6.2.3.2.2-5.
     *
     * 3GPP TS 33.128, clause 6.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly dLRANTunnelInformation: OPTIONAL<DLRANTunnelInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uLNGUUPTunnelInformation: OPTIONAL<FTEID>,
        additionalULNGUUPTunnelInformation: OPTIONAL<FTEIDList>,
        dLRANTunnelInformation: OPTIONAL<DLRANTunnelInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uLNGUUPTunnelInformation = uLNGUUPTunnelInformation;
        this.additionalULNGUUPTunnelInformation = additionalULNGUUPTunnelInformation;
        this.dLRANTunnelInformation = dLRANTunnelInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGSGTPTunnels
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGSGTPTunnels`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGSGTPTunnels`.
     * @returns {FiveGSGTPTunnels}
     */
    public static _from_object (_o: { [_K in keyof (FiveGSGTPTunnels)]: (FiveGSGTPTunnels)[_K] }): FiveGSGTPTunnels {
        return new FiveGSGTPTunnels(_o.uLNGUUPTunnelInformation, _o.additionalULNGUUPTunnelInformation, _o.dLRANTunnelInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGSGTPTunnels: $.ComponentSpec[] = [
    new $.ComponentSpec("uLNGUUPTunnelInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("additionalULNGUUPTunnelInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dLRANTunnelInformation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGSGTPTunnels: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGSGTPTunnels
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGSGTPTunnels: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGSGTPTunnels: $.ASN1Decoder<FiveGSGTPTunnels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSGTPTunnels
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSGTPTunnels (el: _Element): FiveGSGTPTunnels {
    if (!_cached_decoder_for_FiveGSGTPTunnels) { _cached_decoder_for_FiveGSGTPTunnels = function (el: _Element): FiveGSGTPTunnels {
    let uLNGUUPTunnelInformation: OPTIONAL<FTEID>;
    let additionalULNGUUPTunnelInformation: OPTIONAL<FTEIDList>;
    let dLRANTunnelInformation: OPTIONAL<DLRANTunnelInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uLNGUUPTunnelInformation": (_el: _Element): void => { uLNGUUPTunnelInformation = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "additionalULNGUUPTunnelInformation": (_el: _Element): void => { additionalULNGUUPTunnelInformation = $._decode_implicit<FTEIDList>(() => _decode_FTEIDList)(_el); },
        "dLRANTunnelInformation": (_el: _Element): void => { dLRANTunnelInformation = $._decode_implicit<DLRANTunnelInformation>(() => _decode_DLRANTunnelInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGSGTPTunnels,
        _extension_additions_list_spec_for_FiveGSGTPTunnels,
        _root_component_type_list_2_spec_for_FiveGSGTPTunnels,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FiveGSGTPTunnels(
        uLNGUUPTunnelInformation,
        additionalULNGUUPTunnelInformation,
        dLRANTunnelInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FiveGSGTPTunnels(el);
}

let _cached_encoder_for_FiveGSGTPTunnels: $.ASN1Encoder<FiveGSGTPTunnels> | null = null;

/**
 * @summary Encodes a(n) FiveGSGTPTunnels into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSGTPTunnels, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSGTPTunnels (value: FiveGSGTPTunnels, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSGTPTunnels) { _cached_encoder_for_FiveGSGTPTunnels = function (value: FiveGSGTPTunnels, elGetter: $.ASN1Encoder<FiveGSGTPTunnels>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.uLNGUUPTunnelInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_FTEID, $.BER)(value.uLNGUUPTunnelInformation, $.BER);
    }
    if (value.additionalULNGUUPTunnelInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_FTEIDList, $.BER)(value.additionalULNGUUPTunnelInformation, $.BER);
    }
    if (value.dLRANTunnelInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_DLRANTunnelInformation, $.BER)(value.dLRANTunnelInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGSGTPTunnels(value, elGetter);
}


/* eslint-enable */
