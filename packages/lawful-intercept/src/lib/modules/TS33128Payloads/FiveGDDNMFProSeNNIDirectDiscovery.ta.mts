/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary FiveGDDNMFProSeNNIDirectDiscovery
 * @description
 * 
 * The IRI-POI in the 5G DDNMF in the HPLMN/VPLMN/local PLMN shall generate an
 * xIRI containing an FiveGDDNMFProSeNNIDirectDiscovery record when the IRI-POI
 * present in the 5G DDNMF in the HPLMN/VPLMN/local PLMN detect that the 5G
 * DDNMF in the HPLMN interacts with the 5G DDNMF in the VPLMN or local PLMN for
 * direct discovery authorizations for a target UE in the VPLMN or local PLMN.
 * The IRI-POI present in the 5G DDNMF in the HPLMN/VPLMN/local PLMN shall
 * generate the xIRI for the following event:
 *
 * - 5G DDNMF in the HPLMN exchanges any request or response with 5G DDNMF in
 *   VPLMN or local PLMN over the N5g-ddnmf_Discovery API (see TS 29.555 [141]
 *   clauses 5.2.2.2 to 5.2.2.8).
 *
 * NOTE: At least one of the SUPI or GPSI fields shall be present.
 *
 * 3GPP TS 33.128, clause 7.17.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGDDNMFProSeNNIDirectDiscovery ::= SEQUENCE
 * {
 *     sUPI                                  [1] SUPI OPTIONAL,
 *     gPSI                                  [2] GPSI OPTIONAL,
 *     fiveGDDNMFProSeDirectDiscoveryMessage [3] SBIType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGDDNMFProSeNNIDirectDiscovery {
    /**
     * @summary `sUPI`.
     * @description
     *
     * Identifies the SUPI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.17.2.3.
     *
     * @public
     * @readonly
     */
    readonly sUPI: OPTIONAL<SUPI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * Identifies the GPSI of the target UE.
     *
     * 3GPP TS 33.128, clause 7.17.2.3.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `fiveGDDNMFProSeDirectDiscoveryMessage`.
     * @description
     *
     * Contains the request and the response of the announce authorize
     * procedure. Encoded according to TS 29.555 [141] table 6.1.6.2.2-1. The
     * SBIReference for this parameter shall be populated with
     * 'TS29555_N5g-ddnmf_Discovery.yaml' as specified in TS 29.555 [141] clause
     * A2.
     *
     * 3GPP TS 33.128, clause 7.17.2.3.
     *
     * @public
     * @readonly
     */
    readonly fiveGDDNMFProSeDirectDiscoveryMessage: SBIType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: OPTIONAL<SUPI>,
        gPSI: OPTIONAL<GPSI>,
        fiveGDDNMFProSeDirectDiscoveryMessage: SBIType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.gPSI = gPSI;
        this.fiveGDDNMFProSeDirectDiscoveryMessage = fiveGDDNMFProSeDirectDiscoveryMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGDDNMFProSeNNIDirectDiscovery
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGDDNMFProSeNNIDirectDiscovery`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGDDNMFProSeNNIDirectDiscovery`.
     * @returns {FiveGDDNMFProSeNNIDirectDiscovery}
     */
    public static _from_object (_o: { [_K in keyof (FiveGDDNMFProSeNNIDirectDiscovery)]: (FiveGDDNMFProSeNNIDirectDiscovery)[_K] }): FiveGDDNMFProSeNNIDirectDiscovery {
        return new FiveGDDNMFProSeNNIDirectDiscovery(_o.sUPI, _o.gPSI, _o.fiveGDDNMFProSeDirectDiscoveryMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGDDNMFProSeNNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGDDNMFProSeDirectDiscoveryMessage", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGDDNMFProSeNNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGDDNMFProSeNNIDirectDiscovery
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ASN1Decoder<FiveGDDNMFProSeNNIDirectDiscovery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGDDNMFProSeNNIDirectDiscovery
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGDDNMFProSeNNIDirectDiscovery (el: _Element): FiveGDDNMFProSeNNIDirectDiscovery {
    if (!_cached_decoder_for_FiveGDDNMFProSeNNIDirectDiscovery) { _cached_decoder_for_FiveGDDNMFProSeNNIDirectDiscovery = function (el: _Element): FiveGDDNMFProSeNNIDirectDiscovery {
    let sUPI: OPTIONAL<SUPI>;
    let gPSI: OPTIONAL<GPSI>;
    let fiveGDDNMFProSeDirectDiscoveryMessage!: SBIType;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "fiveGDDNMFProSeDirectDiscoveryMessage": (_el: _Element): void => { fiveGDDNMFProSeDirectDiscoveryMessage = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGDDNMFProSeNNIDirectDiscovery,
        _extension_additions_list_spec_for_FiveGDDNMFProSeNNIDirectDiscovery,
        _root_component_type_list_2_spec_for_FiveGDDNMFProSeNNIDirectDiscovery,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FiveGDDNMFProSeNNIDirectDiscovery(
        sUPI,
        gPSI,
        fiveGDDNMFProSeDirectDiscoveryMessage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FiveGDDNMFProSeNNIDirectDiscovery(el);
}

let _cached_encoder_for_FiveGDDNMFProSeNNIDirectDiscovery: $.ASN1Encoder<FiveGDDNMFProSeNNIDirectDiscovery> | null = null;

/**
 * @summary Encodes a(n) FiveGDDNMFProSeNNIDirectDiscovery into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGDDNMFProSeNNIDirectDiscovery, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGDDNMFProSeNNIDirectDiscovery (value: FiveGDDNMFProSeNNIDirectDiscovery, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGDDNMFProSeNNIDirectDiscovery) { _cached_encoder_for_FiveGDDNMFProSeNNIDirectDiscovery = function (value: FiveGDDNMFProSeNNIDirectDiscovery, elGetter: $.ASN1Encoder<FiveGDDNMFProSeNNIDirectDiscovery>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sUPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.fiveGDDNMFProSeDirectDiscoveryMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGDDNMFProSeNNIDirectDiscovery(value, elGetter);
}


/* eslint-enable */
